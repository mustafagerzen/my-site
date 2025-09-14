// Menüde aktif olan linki vurgula
const links = document.querySelectorAll('.nav a');
const secs = [...document.querySelectorAll('section')];

function setActive() {
  const y = window.scrollY + 120; // header payı
  const current = secs.findLast(s => s.offsetTop <= y) || secs[0];
  links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current.id));
}
setActive();
document.addEventListener('scroll', setActive);

// Dış link güvenliği (Projects düğmeleri vs.)
document.querySelectorAll('a[target="_blank"]').forEach(a => {
  a.rel = 'noopener noreferrer';
});
