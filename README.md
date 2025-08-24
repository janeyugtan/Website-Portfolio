# Build a self-contained visual guide (single HTML file with inline SVG diagrams)
from pathlib import Path

html = r"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Visual Guide — Update Your Portfolio (vCard style)</title>
<style>
  :root{
    --primary:#1a1a2e;
    --accent:#0f4c75;
    --ink:#1f2937;
    --muted:#6b7280;
    --bg:#f7fbff;
  }
  *{box-sizing:border-box}
  html,body{height:100%}
  body{
    margin:0; background:var(--bg);
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Inter, Roboto, Arial, sans-serif;
    color:var(--ink); line-height:1.55;
  }
  header{
    background:linear-gradient(135deg,var(--primary), #0b1b2c);
    color:#fff; padding:32px 20px; text-align:center;
  }
  header h1{ margin:0 0 6px; font-size:1.8rem }
  header p{ margin:0; opacity:.9 }
  main{ max-width:1000px; margin:24px auto 60px; padding:0 18px }
  .card{
    background:#fff; border:1px solid #e6eef7; border-radius:14px; padding:20px; margin:14px 0;
    box-shadow:0 6px 22px rgba(2,18,30,.06);
  }
  .step{ display:grid; grid-template-columns: 1.1fr .9fr; gap:16px; align-items:center }
  .step h2{ margin:0 0 8px; color:var(--primary); border-bottom:2px solid var(--accent); padding-bottom:6px; }
  .caption{ font-size:.92rem; color:var(--muted); margin-top:6px }
  .note{ background:#f0f7fb; border:1px solid #d9ecf7; padding:10px 12px; border-radius:10px; font-size:.95rem }
  code, pre{ background:#0b1220; color:#e2e8f0; border-radius:10px; padding:10px 12px; display:block; overflow:auto }
  .two{ display:grid; grid-template-columns:1fr 1fr; gap:12px }
  .checklist li{ margin:6px 0 }
  .ok{ color:#1b7c2b; font-weight:600 }
  .warn{ color:#b45309; font-weight:600 }
  .svgwrap{ border:1px solid #e5edf6; border-radius:12px; padding:10px; background:#fbfeff }
  .footer{
    text-align:center; color:var(--muted); margin:28px 0 40px;
  }
  @media (max-width: 920px){
    .step{ grid-template-columns: 1fr; }
  }
  @media print{
    header{ -webkit-print-color-adjust:exact; print-color-adjust:exact }
    body{ background:#fff }
    .card{ box-shadow:none }
  }
</style>
</head>
<body>
<header>
  <h1>Visual Guide: Update Your Portfolio to vCard Style</h1>
  <p>Applies your brand colors and integrates your LinkedIn & resume.</p>
</header>
<main>

  <section class="card step">
    <div>
      <h2>1) Download the package</h2>
      <ol class="checklist">
        <li>Download <strong>jane-vcard-portfolio.zip</strong> from ChatGPT.</li>
        <li>Unzip it — you’ll see a folder <code>vcard-jane/</code> with:
          <ul>
            <li><code>index.html</code></li>
            <li><code>assets/style.css</code> &amp; <code>assets/script.js</code></li>
            <li><code>README.txt</code></li>
          </ul>
        </li>
      </ol>
      <p class="note">Keep the structure intact — the HTML expects the <code>assets/</code> folder to sit next to <code>index.html</code>.</p>
    </div>
    <div class="svgwrap">
      <!-- Simple “Downloads” UI sketch -->
      <svg viewBox="0 0 600 320" width="100%" height="auto" role="img" aria-label="Download and unzip">
        <rect x="0" y="0" width="600" height="320" fill="#f5f9ff" stroke="#cfe1f3"/>
        <rect x="24" y="24" width="552" height="60" rx="8" fill="#ffffff" stroke="#dde9f7"/>
        <text x="40" y="62" font-family="Inter, Arial" font-size="18" fill="#334155">Downloads</text>
        <rect x="24" y="100" width="552" height="170" rx="8" fill="#ffffff" stroke="#dde9f7"/>
        <text x="40" y="130" font-family="Inter, Arial" font-size="16" fill="#0f172a">jane-vcard-portfolio.zip</text>
        <rect x="470" y="112" width="90" height="28" rx="6" fill="#0f4c75"/>
        <text x="485" y="131" font-family="Inter, Arial" font-size="14" fill="#fff">Unzip</text>
        <rect x="40" y="168" width="220" height="24" rx="4" fill="#e6f0f8"/>
        <text x="50" y="185" font-family="Inter, Arial" font-size="13" fill="#334155">vcard-jane/index.html</text>
        <rect x="40" y="200" width="220" height="24" rx="4" fill="#e6f0f8"/>
        <text x="50" y="217" font-family="Inter, Arial" font-size="13" fill="#334155">vcard-jane/assets/style.css</text>
        <rect x="40" y="232" width="220" height="24" rx="4" fill="#e6f0f8"/>
        <text x="50" y="249" font-family="Inter, Arial" font-size="13" fill="#334155">vcard-jane/assets/script.js</text>
      </svg>
    </div>
  </section>

  <section class="card step">
    <div>
      <h2>2) Add files in GitHub (Web UI)</h2>
      <ol class="checklist">
        <li>Open <code>github.com/janeyugtan/portfolio</code> → click <strong>Add file ▾</strong> → <strong>Upload files</strong>.</li>
        <li>Drag in <code>index.html</code> and the whole <code>assets/</code> folder.</li>
        <li>Click <strong>Commit changes</strong>.</li>
      </ol>
      <p class="note">If an older <code>index.html</code> exists, the new one will replace it in this commit.</p>
    </div>
    <div class="svgwrap">
      <!-- Simplified GitHub repo UI -->
      <svg viewBox="0 0 600 360" width="100%" height="auto" role="img" aria-label="GitHub upload">
        <rect x="0" y="0" width="600" height="360" fill="#ffffff" stroke="#dbe7f5"/>
        <rect x="0" y="0" width="600" height="52" fill="#0b1b2c"/>
        <text x="16" y="32" font-family="Inter, Arial" font-size="16" fill="#fff">janeyugtan / portfolio</text>
        <rect x="16" y="72" width="120" height="30" rx="6" fill="#e2e8f0"/>
        <text x="28" y="92" font-family="Inter, Arial" font-size="13" fill="#0f172a">Add file ▾</text>
        <rect x="146" y="72" width="140" height="30" rx="6" fill="#0f4c75"/>
        <text x="160" y="92" font-family="Inter, Arial" font-size="13" fill="#fff">Upload files</text>
        <rect x="16" y="120" width="568" height="180" rx="8" fill="#f8fbff" stroke="#dce9f7" stroke-dasharray="6 6"/>
        <text x="180" y="210" font-family="Inter, Arial" font-size="14" fill="#64748b">Drag & drop index.html and assets/ here</text>
        <rect x="16" y="312" width="140" height="30" rx="6" fill="#10b981"/>
        <text x="38" y="332" font-family="Inter, Arial" font-size="13" fill="#fff">Commit changes</text>
      </svg>
    </div>
  </section>

  <section class="card step">
    <div>
      <h2>3) Verify required assets</h2>
      <ul class="checklist">
        <li><code>profile.jpg</code> (avatar)</li>
        <li><code>Jane Yugtan-2025 (1).pdf</code> (resume)</li>
        <li>Video testimonials: <code>Sean Elias-TestimonialVideo.mp4</code>, <code>Joe-Remington-TestimonialVideo.mp4</code></li>
        <li>Logos used in Clients section (PNG/WEBP files mentioned in the HTML)</li>
      </ul>
      <p class="note">If any filename differs in your repo, either rename the file or update the reference in <code>index.html</code>.</p>
    </div>
    <div class="svgwrap">
      <!-- Files list sketch -->
      <svg viewBox="0 0 600 320" width="100%" height="auto" role="img" aria-label="Repo file checklist">
        <rect x="0" y="0" width="600" height="320" fill="#fbfeff" stroke="#cfe1f3"/>
        <text x="20" y="32" font-family="Inter, Arial" font-size="16" fill="#0f172a">Root files</text>
        <rect x="20" y="46" width="560" height="1" fill="#e3edf7"/>
        <text x="28" y="75" font-family="Inter, Arial" font-size="14" fill="#0f172a">index.html</text>
        <text x="28" y="105" font-family="Inter, Arial" font-size="14" fill="#0f172a">profile.jpg</text>
        <text x="28" y="135" font-family="Inter, Arial" font-size="14" fill="#0f172a">Jane Yugtan-2025 (1).pdf</text>
        <text x="28" y="165" font-family="Inter, Arial" font-size="14" fill="#0f172a">Sean Elias-TestimonialVideo.mp4</text>
        <text x="28" y="195" font-family="Inter, Arial" font-size="14" fill="#0f172a">Joe-Remington-TestimonialVideo.mp4</text>
        <text x="28" y="225" font-family="Inter, Arial" font-size="14" fill="#0f172a">assets/</text>
        <text x="60" y="255" font-family="Inter, Arial" font-size="14" fill="#334155">style.css, script.js</text>
      </svg>
    </div>
  </section>

  <section class="card step">
    <div>
      <h2>4) Turn on GitHub Pages (optional live URL)</h2>
      <ol class="checklist">
        <li>Repo → <strong>Settings</strong> → <strong>Pages</strong>.</li>
        <li>Source: <strong>Deploy from branch</strong>.</li>
        <li>Branch: <strong>main</strong>; Folder: <strong>/ (root)</strong>.</li>
        <li>Click <strong>Save</strong>. Wait for the green check — your site will build.</li>
      </ol>
      <p class="note">Your site URL will appear at the top of the Pages screen once deployed.</p>
    </div>
    <div class="svgwrap">
      <!-- GitHub Pages settings sketch -->
      <svg viewBox="0 0 600 360" width="100%" height="auto" role="img" aria-label="GitHub Pages settings">
        <rect x="0" y="0" width="600" height="360" fill="#ffffff" stroke="#dbe7f5"/>
        <text x="16" y="32" font-family="Inter, Arial" font-size="16" fill="#0f172a">Settings → Pages</text>
        <rect x="16" y="42" width="568" height="1" fill="#e3edf7"/>
        <text x="24" y="80" font-family="Inter, Arial" font-size="14" fill="#0f172a">Source: Deploy from branch</text>
        <rect x="24" y="90" width="250" height="28" rx="6" fill="#e2e8f0"/>
        <text x="32" y="109" font-family="Inter, Arial" font-size="13" fill="#0f172a">Deploy from branch ▾</text>
        <text x="24" y="140" font-family="Inter, Arial" font-size="14" fill="#0f172a">Branch: main / (root)</text>
        <rect x="24" y="150" width="100" height="28" rx="6" fill="#e2e8f0"/>
        <text x="32" y="169" font-family="Inter, Arial" font-size="13" fill="#0f172a">main ▾</text>
        <rect x="132" y="150" width="100" height="28" rx="6" fill="#e2e8f0"/>
        <text x="140" y="169" font-family="Inter, Arial" font-size="13" fill="#0f172a">/ (root) ▾</text>
        <rect x="24" y="200" width="88" height="30" rx="6" fill="#0f4c75"/>
        <text x="49" y="220" font-family="Inter, Arial" font-size="13" fill="#fff">Save</text>
        <rect x="24" y="260" width="320" height="24" rx="4" fill="#ecfdf5" stroke="#bbf7d0"/>
        <text x="32" y="277" font-family="Inter, Arial" font-size="13" fill="#166534">✓ Deployed — URL ready</text>
      </svg>
    </div>
  </section>

  <section class="card two">
    <div>
      <h2>5) Confirm LinkedIn & CTAs</h2>
      <p>Open <code>index.html</code> and verify these anchors point to your profiles/files:</p>
      <pre>&lt;a href="https://www.linkedin.com/in/jyugtan/" ...&gt;LinkedIn&lt;/a&gt;
&lt;a href="Jane Yugtan-2025 (1).pdf" ...&gt;Download Resume&lt;/a&gt;
&lt;a href="mailto:yugtanlynette@gmail.com"&gt;Email&lt;/a&gt;</pre>
      <p class="caption">Update if your resume filename or contact changes.</p>
    </div>
    <div class="svgwrap">
      <!-- Link highlights -->
      <svg viewBox="0 0 600 280" width="100%" height="auto" role="img" aria-label="Verify links">
        <rect x="0" y="0" width="600" height="280" fill="#fbfeff" stroke="#cfe1f3"/>
        <rect x="22" y="30" width="556" height="48" rx="8" fill="#ffffff" stroke="#dbe9f7"/>
        <text x="36" y="58" font-family="Inter, Arial" font-size="14" fill="#0f172a">LinkedIn → https://www.linkedin.com/in/jyugtan/</text>
        <rect x="22" y="94" width="556" height="48" rx="8" fill="#ffffff" stroke="#dbe9f7"/>
        <text x="36" y="122" font-family="Inter, Arial" font-size="14" fill="#0f172a">Resume → Jane Yugtan-2025 (1).pdf</text>
        <rect x="22" y="158" width="556" height="48" rx="8" fill="#ffffff" stroke="#dbe9f7"/>
        <text x="36" y="186" font-family="Inter, Arial" font-size="14" fill="#0f172a">Email → yugtanlynette@gmail.com</text>
      </svg>
    </div>
  </section>

  <section class="card two">
    <div>
      <h2>6) Tweak brand colors (optional)</h2>
      <p>Edit <code>assets/style.css</code> → update the <code>:root</code> variables:</p>
      <pre>:root{
  --primary:#1a1a2e;
  --accent:#0f4c75;
  --bg:#E8F4F8;
  --ink:#1f2937;
}</pre>
      <p class="note">Changing these values updates the entire theme (sidebar, headings, accents).</p>
    </div>
    <div class="svgwrap">
      <!-- Color swatches -->
      <svg viewBox="0 0 600 220" width="100%" height="auto" role="img" aria-label="Color swatches">
        <rect x="0" y="0" width="600" height="220" fill="#ffffff" stroke="#dbe7f5"/>
        <rect x="30" y="40" width="110" height="110" rx="10" fill="#1a1a2e"/>
        <text x="35" y="170" font-family="Inter, Arial" font-size="12" fill="#0f172a">--primary #1a1a2e</text>
        <rect x="170" y="40" width="110" height="110" rx="10" fill="#0f4c75"/>
        <text x="175" y="170" font-family="Inter, Arial" font-size="12" fill="#0f172a">--accent #0f4c75</text>
        <rect x="310" y="40" width="110" height="110" rx="10" fill="#E8F4F8" stroke="#cfe1f3"/>
        <text x="315" y="170" font-family="Inter, Arial" font-size="12" fill="#0f172a">--bg #E8F4F8</text>
        <rect x="450" y="40" width="110" height="110" rx="10" fill="#1f2937"/>
        <text x="455" y="170" font-family="Inter, Arial" font-size="12" fill="#0f172a">--ink #1f2937</text>
      </svg>
    </div>
  </section>

  <section class="card two">
    <div>
      <h2>7) (Alt) Do it via local Git</h2>
      <p>If you prefer the CLI route:</p>
      <pre>git clone https://github.com/janeyugtan/portfolio.git
cd portfolio
# copy index.html and assets/ into this folder
git add index.html assets/style.css assets/script.js
git commit -m "vCard portfolio: PM/EA focus + brand colors"
git push origin main</pre>
      <p class="caption">Then enable GitHub Pages as in Step 4 to get a live URL.</p>
    </div>
    <div class="svgwrap">
      <!-- Terminal block -->
      <svg viewBox="0 0 600 240" width="100%" height="auto" role="img" aria-label="Terminal">
        <rect x="0" y="0" width="600" height="240" rx="10" fill="#0b1220"/>
        <rect x="10" y="10" width="580" height="220" rx="8" fill="#0f172a" stroke="#1f2a44"/>
        <text x="24" y="48" font-family="Menlo, monospace" font-size="13" fill="#e2e8f0">$ git clone ...</text>
        <text x="24" y="72" font-family="Menlo, monospace" font-size="13" fill="#e2e8f0">$ cd portfolio</text>
        <text x="24" y="96" font-family="Menlo, monospace" font-size="13" fill="#e2e8f0">$ git add index.html assets/...</text>
        <text x="24" y="120" font-family="Menlo, monospace" font-size="13" fill="#e2e8f0">$ git commit -m "vCard portfolio..."</text>
        <text x="24" y="144" font-family="Menlo, monospace" font-size="13" fill="#e2e8f0">$ git push origin main</text>
      </svg>
    </div>
  </section>

  <section class="card">
    <h2>Final QA (60-second check)</h2>
    <ul class="checklist">
      <li class="ok">Open the repo root — confirm <code>index.html</code> and <code>assets/</code> exist.</li>
      <li class="ok">Click <em>index.html</em> in GitHub — verify sidebar, KPIs, Experience, Clients, Testimonials render.</li>
      <li class="ok">Click the LinkedIn and Resume buttons — both should open correctly.</li>
      <li class="warn">Any broken logos or videos? Fix by renaming files or adjusting the paths in <code>index.html</code>.</li>
    </ul>
  </section>

  <div class="footer">© 2025 Visual Guide for Jane — PM/EA Portfolio</div>
</main>
</body>
</html>
"""

path = Path("/mnt/data/Portfolio_Update_Visual_Guide.html")
path.write_text(html, encoding="utf-8")
str(path)
