// script.js
function mostrar(seccion) {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => card.classList.remove('active'));
  document.getElementById(seccion).classList.add('active');
}
