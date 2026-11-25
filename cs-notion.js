/* Shared behaviour for the live case-study mockups: reveal-on-view, counters, charts,
   clickable view tabs, and small looping "live" animations (board moves, feed, flow, search). */
(function(){
  'use strict';
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var CS = window.CS = {};

  function inView(el, cb, once, threshold){
    if(!('IntersectionObserver' in window)){ cb(true); return; }
    var io = new IntersectionObserver(function(es){
      es.forEach(function(en){ cb(en.isIntersecting); if(en.isIntersecting && once) io.disconnect(); });
    }, {threshold: threshold == null ? 0.2 : threshold});
    io.observe(el);
  }
  CS.inView = inView;

  function countUp(el){
    var end = parseFloat(el.dataset.count), pre = el.dataset.prefix || '', suf = el.dataset.suffix || '';
    var dec = (el.dataset.count.split('.')[1] || '').length;
    if(reduce){ el.textContent = pre + end.toLocaleString(undefined,{minimumFractionDigits:dec,maximumFractionDigits:dec}) + suf; return; }
    var t0 = performance.now(), dur = 1200;
    (function step(t){
      var p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3);
      el.textContent = pre + (end * e).toLocaleString(undefined,{minimumFractionDigits:dec,maximumFractionDigits:dec}) + suf;
      if(p < 1) requestAnimationFrame(step);
    })(t0);
  }

  function fire(scope){
    scope.classList.add('go');
    scope.querySelectorAll('[data-count]').forEach(countUp);
    scope.querySelectorAll('.bar i[data-h]').forEach(function(i){ i.style.height = i.dataset.h + '%'; });
    scope.querySelectorAll('.hbar .tr i[data-w]').forEach(function(i){ i.style.width = i.dataset.w + '%'; });
    scope.querySelectorAll('.donut').forEach(drawDonut);
  }

  function drawDonut(d){
    var segs = d.querySelectorAll('.seg'), total = 0, r = 52, C = 2 * Math.PI * r, off = 0;
    segs.forEach(function(s){ total += +s.dataset.v; });
    segs.forEach(function(s){
      var len = (+s.dataset.v / total) * C;
      s.setAttribute('stroke-dasharray', len.toFixed(1) + ' ' + (C - len).toFixed(1));
      s.setAttribute('stroke-dashoffset', (-off).toFixed(1));
      off += len;
    });
  }

  document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.donut .seg').forEach(function(s){ s.setAttribute('stroke-dasharray','0 999'); });
    document.querySelectorAll('.reveal,[data-go]').forEach(function(el){
      inView(el, function(v){ if(v) fire(el); }, true, 0.15);
    });

    // clickable view tabs, optional autoplay until the visitor clicks
    document.querySelectorAll('[data-views]').forEach(function(box){
      var tabs = [].slice.call(box.querySelectorAll('.tab[data-view]'));
      var views = tabs.map(function(t){ return box.querySelector('#' + t.dataset.view); });
      var cur = Math.max(0, tabs.findIndex(function(t){ return t.classList.contains('on'); })), timer = null, visible = false;
      function show(i){
        cur = i;
        tabs.forEach(function(t, k){ t.classList.toggle('on', k === i); t.setAttribute('aria-selected', k === i ? 'true' : 'false'); });
        views.forEach(function(v, k){ if(v){ v.classList.toggle('on', k === i); if(k === i) fire(v); } });
      }
      tabs.forEach(function(t, i){ t.addEventListener('click', function(){ clearInterval(timer); timer = null; box.dataset.auto = ''; show(i); }); });
      show(cur);
      var ms = +box.dataset.auto;
      if(ms && !reduce){
        inView(box, function(v){
          visible = v;
          if(v && !timer && box.dataset.auto) timer = setInterval(function(){ if(visible && !document.hidden) show((cur + 1) % tabs.length); }, ms);
          if(!v && timer){ clearInterval(timer); timer = null; }
        }, false, 0.3);
      }
    });
  });

  // loop helper: runs fn every ms while el is on screen
  CS.loop = function(el, ms, fn){
    if(reduce) return;
    var timer = null;
    inView(el, function(v){
      if(v && !timer){ fn(); timer = setInterval(function(){ if(!document.hidden) fn(); }, ms); }
      if(!v && timer){ clearInterval(timer); timer = null; }
    }, false, 0.25);
  };

  // move a board card to another column with a FLIP animation
  CS.moveCard = function(card, col, opts){
    opts = opts || {};
    var first = card.getBoundingClientRect();
    var list = col.querySelector('.cards') || col;
    if(opts.top) list.insertBefore(card, list.firstChild); else list.appendChild(card);
    var last = card.getBoundingClientRect();
    card.classList.add('moving');
    card.style.transition = 'none';
    card.style.transform = 'translate(' + (first.left - last.left) + 'px,' + (first.top - last.top) + 'px)';
    card.getBoundingClientRect();
    card.style.transition = '';
    card.style.transform = '';
    setTimeout(function(){ card.classList.remove('moving'); }, 650);
    var counts = document.querySelectorAll('[data-count-of]');
    counts.forEach(function(c){ var t = document.getElementById(c.dataset.countOf); if(t) c.textContent = t.querySelectorAll('.card').length; });
  };

  // Slack-like feed: append messages in turn, keep the last few
  CS.feed = function(box, msgs, ms, keep){
    var body = box.querySelector('.feed-b'), i = 0; keep = keep || 4;
    function add(){
      var m = msgs[i % msgs.length]; i++;
      var d = document.createElement('div'); d.className = 'msg' + (m.warn ? ' warn' : '');
      d.innerHTML = '<div class="av">' + m.av + '</div><div><b>' + m.who + '</b><time>' + m.t + '</time><p>' + m.text + '</p></div>';
      body.appendChild(d);
      while(body.children.length > keep) body.removeChild(body.firstChild);
      if(m.onShow) m.onShow();
    }
    if(reduce){ for(var k = 0; k < Math.min(keep, msgs.length); k++) add(); return; }
    CS.loop(box, ms, add);
  };

  // integration flow: light up nodes and run a dot along each wire in sequence
  CS.flow = function(box, runs, ms){
    var log = box.querySelector('.flow-log'), r = 0;
    function run(){
      var steps = runs[r % runs.length]; r++;
      if(log) log.innerHTML = steps.log;
      steps.path.forEach(function(id, k){
        setTimeout(function(){
          var el = document.getElementById(id); if(!el) return;
          if(el.classList.contains('wire')){ el.classList.remove('run'); void el.offsetWidth; el.classList.add('run'); }
          else { el.classList.add('ping'); setTimeout(function(){ el.classList.remove('ping'); }, 1200); }
        }, k * 700);
      });
    }
    if(reduce){ if(log) log.innerHTML = runs[0].log; return; }
    CS.loop(box, ms, run);
  };

  // typing search with a timer and results
  CS.search = function(box, queries, ms){
    var q = box.querySelector('.q'), timer = box.querySelector('.timer'), res = box.querySelector('.results'), n = 0;
    function run(){
      var item = queries[n % queries.length]; n++;
      q.textContent = ''; res.innerHTML = ''; var i = 0, t0 = Date.now();
      var typing = setInterval(function(){
        q.textContent = item.q.slice(0, ++i);
        if(timer) timer.textContent = ((Date.now() - t0) / 1000 * 4).toFixed(0) + 's';
        if(i >= item.q.length){
          clearInterval(typing);
          if(timer) timer.textContent = 'Found in ' + item.secs + 's';
          item.results.forEach(function(rw, k){
            setTimeout(function(){
              var d = document.createElement('div'); if(k === 0) d.className = 'top';
              d.innerHTML = rw[0] + ' <span>' + rw[1] + '</span><small>' + rw[2] + '</small>';
              res.appendChild(d);
            }, 180 * k);
          });
        }
      }, 70);
    }
    if(reduce){ var it = queries[0]; q.textContent = it.q; if(timer) timer.textContent = 'Found in ' + it.secs + 's';
      it.results.forEach(function(rw, k){ var d = document.createElement('div'); if(k === 0) d.className = 'top'; d.innerHTML = rw[0] + ' <span>' + rw[1] + '</span><small>' + rw[2] + '</small>'; res.appendChild(d); }); return; }
    CS.loop(box, ms, run);
  };
})();
