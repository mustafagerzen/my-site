// Mobile drawer
const sidebar = document.getElementById('sidebar');
const openNav = document.getElementById('openNav');
const closeNav = document.getElementById('closeNav');

openNav?.addEventListener('click', () => sidebar.classList.add('open'));
closeNav?.addEventListener('click', () => sidebar.classList.remove('open'));

// Active link highlight
const links = document.querySelectorAll('.menu a');
const sections = [...document.querySelectorAll('main .section')];

function setActive(){
  const y = window.scrollY + 140;
  const current = sections.findLast(s => s.offsetTop <= y) || sections[0];
  links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current.id));
}
setActive();
document.addEventListener('scroll', setActive);
