document.addEventListener("DOMContentLoaded", function () {
  let lastScrollTop = 0;
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Scroll hacia abajo - Esconder navbar
      navbar.classList.add("navbar-hidden");
    } else {
      // Scroll hacia arriba - Mostrar navbar
      navbar.classList.remove("navbar-hidden");
    }
    lastScrollTop = scrollTop;
  });
});
