const texts = document.querySelectorAll(".text-item");
let currentIndex = 0;

function showNextText() {
  texts[currentIndex].classList.remove("active"); // Oculta el texto actual
  currentIndex = (currentIndex + 1) % texts.length; // Mueve al siguiente texto, bucleando al inicio si es necesario
  texts[currentIndex].classList.add("active"); // Muestra el siguiente texto
}

// Muestra el primer texto inmediatamente
texts[currentIndex].classList.add("active");

// Cambia el texto cada 3 segundos
setInterval(showNextText, 3000);
