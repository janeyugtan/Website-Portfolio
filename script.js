// Simple mobile sidebar toggle and smooth scroll
const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.menu-toggle');

toggleBtn?.addEventListener('click', () => {
  sidebar.classList.toggle('open');
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if (href?.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        sidebar.classList.remove('open');
      }
    }
  });
});
