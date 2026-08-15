<<<<<<< HEAD
const root=document.documentElement;const themeBtn=document.querySelector('[data-theme-toggle]');const savedTheme=localStorage.getItem('portfolio-theme');if(savedTheme)root.dataset.theme=savedTheme;function setThemeIcon(){if(!themeBtn)return;themeBtn.textContent=root.dataset.theme==='dark'?'☀':'☾';themeBtn.setAttribute('aria-label',root.dataset.theme==='dark'?'Use light theme':'Use dark theme')}setThemeIcon();themeBtn?.addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';localStorage.setItem('portfolio-theme',root.dataset.theme);setThemeIcon()});const menuBtn=document.querySelector('[data-menu-toggle]');const navLinks=document.querySelector('.nav-links');menuBtn?.addEventListener('click',()=>navLinks?.classList.toggle('open'));const current=document.body.dataset.page;document.querySelector(`[data-nav="${current}"]`)?.setAttribute('aria-current','page');const filterButtons=document.querySelectorAll('[data-filter]');const searchInput=document.querySelector('[data-project-search]');const cards=[...document.querySelectorAll('[data-project-card]')];const noResults=document.querySelector('.no-results');let activeFilter='all';function applyProjectFilters(){const query=(searchInput?.value||'').trim().toLowerCase();let visible=0;cards.forEach(card=>{const groups=(card.dataset.groups||'').split(' ');const haystack=(card.dataset.search||card.textContent).toLowerCase();const matchesFilter=activeFilter==='all'||groups.includes(activeFilter);const matchesSearch=!query||haystack.includes(query);const show=matchesFilter&&matchesSearch;card.style.display=show?'':'none';if(show)visible++});if(noResults)noResults.style.display=visible?'none':'block'}filterButtons.forEach(btn=>btn.addEventListener('click',()=>{filterButtons.forEach(b=>b.classList.remove('active'));btn.classList.add('active');activeFilter=btn.dataset.filter;applyProjectFilters()}));searchInput?.addEventListener('input',applyProjectFilters);const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')})},{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
=======
const root = document.documentElement;
const themeBtn = document.querySelector('[data-theme-toggle]');
const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme) root.dataset.theme = savedTheme;

function setThemeIcon() {
  if (!themeBtn) return;
  themeBtn.textContent = root.dataset.theme === 'dark' ? '☀' : '☾';
  themeBtn.setAttribute('aria-label', root.dataset.theme === 'dark' ? 'Use light theme' : 'Use dark theme');
}
setThemeIcon();

themeBtn?.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('portfolio-theme', root.dataset.theme);
  setThemeIcon();
});

const menuBtn = document.querySelector('[data-menu-toggle]');
const navLinks = document.querySelector('.nav-links');
menuBtn?.addEventListener('click', () => navLinks?.classList.toggle('open'));

const filterButtons = document.querySelectorAll('[data-filter]');
const searchInput = document.querySelector('[data-project-search]');
const cards = [...document.querySelectorAll('[data-project-card]')];
const noResults = document.querySelector('.no-results');
let activeFilter = 'all';

function applyProjectFilters() {
  const query = (searchInput?.value || '').trim().toLowerCase();
  let visible = 0;
  cards.forEach(card => {
    const groups = (card.dataset.groups || '').split(' ');
    const haystack = (card.dataset.search || card.textContent).toLowerCase();
    const matchesFilter = activeFilter === 'all' || groups.includes(activeFilter);
    const matchesSearch = !query || haystack.includes(query);
    const show = matchesFilter && matchesSearch;
    card.style.display = show ? '' : 'none';
    if (show) visible++;
  });
  if (noResults) noResults.style.display = visible ? 'none' : 'block';
}
filterButtons.forEach(btn => btn.addEventListener('click', () => {
  filterButtons.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  activeFilter = btn.dataset.filter;
  applyProjectFilters();
}));
searchInput?.addEventListener('input', applyProjectFilters);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: .08 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
>>>>>>> 4be2e601d331afdf1a1e823eac572bf31d848cc9
