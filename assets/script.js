const root=document.documentElement;
const themeBtn=document.querySelector('[data-theme-toggle]');
const themeMeta=document.querySelector('meta[name="theme-color"]');
function currentTheme(){return root.dataset.theme==='dark'?'dark':'light'}
function updateThemeUI(){
  if(themeBtn){const dark=currentTheme()==='dark';themeBtn.textContent=dark?'☀':'☾';themeBtn.setAttribute('aria-label',dark?'Use light theme':'Use dark theme');themeBtn.setAttribute('title',dark?'Use light theme':'Use dark theme')}
  if(themeMeta)themeMeta.setAttribute('content',currentTheme()==='dark'?'#0f1713':'#f6f7f3');
}
updateThemeUI();
themeBtn?.addEventListener('click',()=>{const next=currentTheme()==='dark'?'light':'dark';root.dataset.theme=next;localStorage.setItem('portfolio-theme',next);updateThemeUI()});

const menuBtn=document.querySelector('[data-menu-toggle]');
const navLinks=document.querySelector('.nav-links');
function setMenu(open){if(!menuBtn||!navLinks)return;navLinks.classList.toggle('open',open);menuBtn.setAttribute('aria-expanded',String(open));menuBtn.textContent=open?'×':'☰'}
menuBtn?.setAttribute('aria-expanded','false');
menuBtn?.addEventListener('click',()=>setMenu(!navLinks?.classList.contains('open')));
navLinks?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
document.addEventListener('keydown',e=>{if(e.key==='Escape')setMenu(false)});

const current=document.body.dataset.page;
document.querySelector(`[data-nav="${current}"]`)?.setAttribute('aria-current','page');

const filterButtons=document.querySelectorAll('[data-filter]');
const searchInput=document.querySelector('[data-project-search]');
const cards=[...document.querySelectorAll('[data-project-card]')];
const noResults=document.querySelector('.no-results');
let activeFilter='all';
function applyProjectFilters(){
  const query=(searchInput?.value||'').trim().toLowerCase();let visible=0;
  cards.forEach(card=>{const groups=(card.dataset.groups||'').split(' ');const haystack=(card.dataset.search||card.textContent).toLowerCase();const show=(activeFilter==='all'||groups.includes(activeFilter))&&(!query||haystack.includes(query));card.style.display=show?'':'none';if(show)visible++});
  if(noResults)noResults.style.display=visible?'none':'block';
}
filterButtons.forEach(btn=>{btn.setAttribute('aria-pressed',btn.classList.contains('active')?'true':'false');btn.addEventListener('click',()=>{filterButtons.forEach(b=>{b.classList.remove('active');b.setAttribute('aria-pressed','false')});btn.classList.add('active');btn.setAttribute('aria-pressed','true');activeFilter=btn.dataset.filter;applyProjectFilters()})});
searchInput?.addEventListener('input',applyProjectFilters);

// Keep the project table of contents synchronized with the section in view.
const tocLinks=[...document.querySelectorAll('.project-toc a[href^="#"]')];
if(tocLinks.length){
  const sectionMap=new Map(tocLinks.map(a=>[a.getAttribute('href').slice(1),a]));
  const sections=[...sectionMap.keys()].map(id=>document.getElementById(id)).filter(Boolean);
  const setActive=id=>tocLinks.forEach(a=>a.classList.toggle('active',a===sectionMap.get(id)));
  const tocObserver=new IntersectionObserver(entries=>{const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top);if(visible[0])setActive(visible[0].target.id)},{rootMargin:'-18% 0px -68% 0px',threshold:0});
  sections.forEach(s=>tocObserver.observe(s));
  if(sections[0])setActive(sections[0].id);
}

document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
