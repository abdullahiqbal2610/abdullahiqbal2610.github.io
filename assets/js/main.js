/* Replace entire main.js content */
const toggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-menu");
const navLinkItems = document.querySelectorAll(".nav-link");

if (toggle && navLinks) {
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("hidden");
  });
}

navLinkItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.add("hidden");
  });
});

// Typewriter Effect
const typeText = "Hello, I’m Abdullah Iqbal";
let idx = 0;
function typeWriter() {
  if (idx < typeText.length) {
    document.getElementById("typewriter").textContent += typeText.charAt(idx++);
    setTimeout(typeWriter, 100);
  } else {
    setTimeout(() => {
      document.getElementById("typewriter").textContent = "";
      idx = 0;
      typeWriter();
    }, 1500); // 1.5s pause before restart
  }
}
document.addEventListener("DOMContentLoaded", typeWriter);

// ScrollReveal setup
const sr = ScrollReveal({
  distance: "40px",
  duration: 800,
  easing: "ease-out",
  reset: true,
  mobile: true,
});

// HERO
sr.reveal("#hero .hero-content h1", { origin: "bottom", delay: 500 });
sr.reveal("#hero .hero-content p", { origin: "bottom", delay: 700 });
sr.reveal("#hero .hero-content .btn", { scale: 0.8, delay: 900 });

// ABOUT
sr.reveal("#about .profile-ring", { origin: "left", delay: 500 });
sr.reveal("#about .about-text", { origin: "right", delay: 700 });

// TIMELINE ITEMS
document.querySelectorAll(".sr-timeline").forEach((el, i) => {
  sr.reveal(el, {
    origin: i % 2 === 0 ? "left" : "right",
    delay: 800 + i * 200,
  });
});

// PROJECTS
sr.reveal("#projects .section-title", { origin: "top", delay: 500 });
sr.reveal("#projects .project-card", { interval: 200, origin: "bottom" });

// CONTACT
sr.reveal("#contact h2", { origin: "left", delay: 500 });
sr.reveal("#contact .contact-list li", { interval: 150, origin: "left" });
sr.reveal("#contact .btn", { scale: 0.8, delay: 900 });
