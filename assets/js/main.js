// Mobile Navigation
const toggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-menu");
const navLinkItems = document.querySelectorAll(".nav-link");

if (toggle && navLinks) {
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("hidden");
  });
}

// Close mobile menu when clicking nav links
navLinkItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.add("hidden");
  });
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !toggle.contains(e.target)) {
    navLinks.classList.add("hidden");
  }
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Typewriter Effect
const typeText = "Hello, I'm Abdullah Iqbal";
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
    }, 1500);
  }
}
document.addEventListener("DOMContentLoaded", typeWriter);

// Skill bars animation
function animateSkillBars() {
  const skillBars = document.querySelectorAll(".skill-progress");
  skillBars.forEach((bar) => {
    const width = bar.getAttribute("data-width");
    bar.style.width = width + "%";
  });
}

// Trigger skill bars animation when skills section is visible
const skillsSection = document.getElementById("skills");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateSkillBars();
    }
  });
});
observer.observe(skillsSection);

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

// SKILLS
sr.reveal("#skills .section-title", { origin: "top", delay: 500 });
sr.reveal("#skills .skill-category", { interval: 200, origin: "bottom" });

// PROJECTS
sr.reveal("#projects .section-title", { origin: "top", delay: 500 });
sr.reveal("#projects .project-card", { interval: 200, origin: "bottom" });

// CONTACT
sr.reveal("#contact h2", { origin: "left", delay: 500 });
sr.reveal("#contact .contact-icons li", { interval: 150, origin: "left" });
sr.reveal("#contact .btn", { scale: 0.8, delay: 900 });
