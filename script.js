// Mobile drawer
const sidebar = document.getElementById('sidebar');
const openNav = document.getElementById('openNav');
const closeNav = document.getElementById('closeNav');

openNav?.addEventListener('click', () => sidebar.classList.add('open'));
closeNav?.addEventListener('click', () => sidebar.classList.remove('open'));

// Active link highlighter on scroll
const links = document.querySelectorAll('.menu a');
const sections = [...document.querySelectorAll('main .section')];

function setActive(){
  const y = window.scrollY + 140;
  const current = sections.findLast(s => s.offsetTop <= y) || sections[0];
  links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current.id));
}
setActive();
document.addEventListener('scroll', setActive);

// Safety for external links
document.querySelectorAll('a[target="_blank"]').forEach(a => {
  if(!a.rel.includes('noopener')) a.rel = (a.rel + ' noopener noreferrer').trim();
});
