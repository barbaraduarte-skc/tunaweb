(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var elementos = document.querySelectorAll('.card, .paso, .chev, .t.h, .l-marcas .logo, .tarjeta, .pasos5 > div');
  var indicePorPadre = new Map();
  elementos.forEach(function (el) {
    var i = indicePorPadre.get(el.parentElement) || 0;
    el.style.setProperty('--i', i);
    indicePorPadre.set(el.parentElement, i + 1);
    el.classList.add('pre-reveal');
  });

  var observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('en-vista');
        observador.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.15 });

  elementos.forEach(function (el) { observador.observe(el); });
})();
