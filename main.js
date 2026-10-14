// Menú móvil
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
const backdrop = document.getElementById('navBackdrop');
const setMenu = open => {
  navLinks.classList.toggle('is-open', open);
  backdrop.classList.toggle('is-open', open);
  document.body.classList.toggle('menu-open', open);
  burger.setAttribute('aria-expanded', open);
  burger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
};
burger.addEventListener('click', () => setMenu(!navLinks.classList.contains('is-open')));
backdrop.addEventListener('click', () => setMenu(false));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
matchMedia('(min-width: 961px)').addEventListener('change', e => { if (e.matches) setMenu(false); });

// Dropdown "Programas" (click en móvil / teclado)
const dropdown = document.querySelector('.dropdown');
const toggle = dropdown.querySelector('.dropdown__toggle');
toggle.addEventListener('click', () => {
  const open = dropdown.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', open);
});
document.addEventListener('click', e => {
  if (!dropdown.contains(e.target)) dropdown.classList.remove('is-open');
});

// Contadores animados
const counters = document.querySelectorAll('[data-count]');
const animateCount = el => {
  const target = +el.dataset.count;
  const start = performance.now();
  const step = now => {
    const t = Math.min((now - start) / 1400, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - t, 3))).toLocaleString('es-MX');
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

// Aparición al hacer scroll
document.querySelectorAll('.feature__text, .feature__media, .t-card, .p-card, .stat, .statline h2, .cta, .section-title, .faq__list')
  .forEach(el => el.classList.add('reveal'));

const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    entry.target.querySelectorAll('[data-count]').forEach(animateCount);
    io.unobserve(entry.target);
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// FAQ: solo una respuesta abierta a la vez (respaldo para navegadores sin <details name>)
const faqItems = document.querySelectorAll('.faq__list details');
faqItems.forEach(item => item.addEventListener('toggle', () => {
  if (item.open) faqItems.forEach(other => { if (other !== item) other.open = false; });
}));

// Formularios (sin backend todavía)
document.getElementById('waitlist').addEventListener('submit', e => {
  e.preventDefault();
  const note = document.getElementById('wl-note');
  note.textContent = '¡Listo! Te avisaremos en cuanto la plataforma esté disponible.';
  note.classList.add('is-success');
  e.target.reset();
});
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const note = document.getElementById('contact-note');
  note.textContent = '¡Gracias! Un asesor de CAI se pondrá en contacto contigo muy pronto.';
  note.classList.add('is-success');
  e.target.reset();
});

document.getElementById('year').textContent = new Date().getFullYear();

// Sombra en la barra al hacer scroll
const nav = document.querySelector('.nav');
const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 10);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();
