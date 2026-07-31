// Portafolio Angela Soplín — interacciones base
document.addEventListener('DOMContentLoaded', function () {
  // asegura que los enlaces internos del menú se desplacen suavemente (respaldo para navegadores sin scroll-behavior CSS)
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var id = link.getAttribute('href').slice(1);
      var target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
