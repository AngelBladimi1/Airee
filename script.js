// ===== MENÚ RESPONSIVO =====
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// ===== ANIMAR TARJETAS =====
const cards = document.querySelectorAll(".card");

function animarCards() {
  const scrollTop = window.scrollY + window.innerHeight - 100;
  cards.forEach((card) => {
    if (scrollTop > card.offsetTop && !card.classList.contains("aparecer")) {
      card.classList.add("aparecer");
    }
  });
}

window.addEventListener("scroll", animarCards);
window.addEventListener("load", animarCards);

// ===== FRASES DINÁMICAS =====
const frases = [
  "Tu confort, nuestra especialidad",
  "Instalación rápida y profesional",
  "Mantenimiento que garantiza frescura",
  "Reparaciones con garantía y confianza",
  "Soluciones en climatización a tu medida"
];

const fraseElemento = document.getElementById("frase-dinamica");
let indice = 0;

function cambiarFrase() {
  fraseElemento.style.opacity = 0;
  setTimeout(() => {
    indice = (indice + 1) % frases.length;
    fraseElemento.textContent = frases[indice];
    fraseElemento.style.opacity = 1;
  }, 600);
}
setInterval(cambiarFrase, 4000);

// ===== FORMULARIO =====
const form = document.getElementById("contactForm");
const mensajeExito = document.getElementById("mensajeExito");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  if (!nombre || !email || !mensaje) {
    mostrarMensaje("Por favor completa todos los campos.", "red");
    return;
  }

  if (!validarEmail(email)) {
    mostrarMensaje("Por favor ingresa un correo válido.", "red");
    return;
  }

  mostrarMensaje(`¡Gracias ${nombre}! Te contactaremos pronto.`, "green");
  form.reset();
});

function mostrarMensaje(texto, color) {
  mensajeExito.style.color = color;
  mensajeExito.textContent = texto;
  mensajeExito.style.display = "block";
  setTimeout(() => (mensajeExito.style.display = "none"), 4000);
}

function validarEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
