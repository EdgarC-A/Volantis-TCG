// Seleccionar las tarjetas y el botón contactar
const cards = document.querySelectorAll(".clickable-card");
const contactarBtn = document.getElementById("contactar-btn");

// Agregar el evento de clic a cada tarjeta
cards.forEach((card) => {
  card.addEventListener("click", () => {
    // Agregar la clase de parpadeo al botón
    contactarBtn.classList.add("highlight-btn");

    // Remover la clase de parpadeo después de 2 segundos
    setTimeout(() => {
      contactarBtn.classList.remove("highlight-btn");
    }, 2000);
  });
});
