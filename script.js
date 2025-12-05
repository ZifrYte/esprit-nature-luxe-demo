// Menu mobile minimal
const toggle = document.querySelector('.nav__toggle');
const links = document.querySelector('.nav__links');

if (toggle && links) {
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
    links.style.display = links.classList.contains('open') ? 'flex' : 'none';
    links.style.flexDirection = 'column';
    links.style.gap = '12px';
    links.style.position = 'absolute';
    links.style.top = '58px';
    links.style.right = '20px';
    links.style.padding = '14px';
    links.style.background = 'rgba(5,5,5,.97)';
    links.style.border = '1px solid rgba(255,255,255,.06)';
    links.style.borderRadius = '14px';
  });

  // Fermer quand on clique un lien
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      links.style.display = 'none';
    });
  });
}

// Reveal au scroll (ultra léger)
const els = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

els.forEach(el => io.observe(el));