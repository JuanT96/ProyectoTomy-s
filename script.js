// Slider automático
let current = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, 3000);

// Menú responsive
const navbar = document.getElementById("navbar");
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

// Ocultar navbar al hacer scroll hacia abajo
let lastScrollTop = 0;
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  navbar.style.top = currentScroll > lastScrollTop ? "-80px" : "0";
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// Mostrar/ocultar menú móvil
menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

// Cierra el menú al hacer clic en un enlace
mobileMenu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
  });
});