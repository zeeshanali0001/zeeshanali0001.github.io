document.documentElement.classList.add('js');
const yearEl = document.getElementById('year');
if(yearEl){ yearEl.textContent = new Date().getFullYear(); }

// Theme toggle
const root = document.documentElement;
const themeBtn = document.getElementById('themeToggle');
const iconSun = document.getElementById('iconSun');
const iconMoon = document.getElementById('iconMoon');
function applyTheme(t){
  if(t){ root.setAttribute('data-theme', t); } else { root.removeAttribute('data-theme'); }
  const isDark = t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches);
  if(iconSun) iconSun.style.display = isDark ? 'none' : 'block';
  if(iconMoon) iconMoon.style.display = isDark ? 'block' : 'none';
}
let saved = null;
try{ saved = localStorage.getItem('theme'); }catch(e){}
applyTheme(saved);
if(themeBtn){
  themeBtn.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try{ localStorage.setItem('theme', next); }catch(e){}
  });
}

// Mobile nav
const navLinks = document.getElementById('navLinks');
const menuToggle = document.getElementById('menuToggle');
if(menuToggle && navLinks){
  menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
}

// Reveal on scroll (falls back to instantly visible if IO isn't supported)
const revealEls = document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){
  const rio = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); rio.unobserve(e.target); } });
  }, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(el => rio.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('in'));
}

// Publications filter (no-op on pages without it)
const filterBtns = document.querySelectorAll('.filter-btn');
const pubCards = document.querySelectorAll('.pub-card');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    pubCards.forEach(c => {
      c.style.display = (f === 'all' || c.dataset.type === f) ? 'flex' : 'none';
    });
  });
});

// Back to top
const backTop = document.getElementById('backTop');
if(backTop){
  window.addEventListener('scroll', () => {
    backTop.classList.toggle('show', window.scrollY > 500);
  });
  backTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
}
