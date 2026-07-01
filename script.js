const tabs = document.querySelectorAll('[data-menu]');
tabs.forEach(tab => tab.addEventListener('click', () => {
  tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
  document.querySelectorAll('.menu-panel').forEach(p => p.classList.remove('active'));
  tab.classList.add('active'); tab.setAttribute('aria-selected', 'true');
  document.getElementById(tab.dataset.menu).classList.add('active');
}));
const toggle = document.querySelector('.menu-toggle');
toggle.addEventListener('click', () => { const open = document.querySelector('.nav-wrap').classList.toggle('open'); toggle.setAttribute('aria-expanded', open); });
document.querySelectorAll('.nav-wrap nav a').forEach(a => a.addEventListener('click', () => document.querySelector('.nav-wrap').classList.remove('open')));
const observer = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
