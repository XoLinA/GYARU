const elements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

elements.forEach((element) => observer.observe(element));
const prints = document.querySelectorAll('.hero-print, .banner-pattern');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function movePrints() {
  if (reduceMotion.matches) return;

  prints.forEach((print) => {
    const section = print.parentElement;
    const distance = section.getBoundingClientRect().top;
    print.style.setProperty('--move', `${-distance * 0.2}px`);
  });
}

window.addEventListener('scroll', movePrints, { passive: true });

movePrints();
