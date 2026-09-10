// ===================================
// Hamburger Menu Toggle
// ===================================
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('hamburger-btn');
  const nav = document.getElementById('nav-links');
  if (!btn || !nav) return;

  btn.addEventListener('click', function () {
    const isOpen = nav.classList.toggle('open');
    btn.classList.toggle('open', isOpen);
    btn.setAttribute('aria-expanded', isOpen);
  });

  // Close menu when a nav link is clicked
  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      nav.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
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
const typeText = "Abdullah Iqbal";
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
    }, 3000);
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
if (skillsSection) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) animateSkillBars();
    });
  });
  observer.observe(skillsSection);
}

// ===================================
// GSAP & ScrollTrigger Animations
// ===================================
document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;

  gsap.registerPlugin(ScrollTrigger);

  // HERO — skip the 4.8s delay on revisits (boot screen already shown)
  const heroDelay = sessionStorage.getItem('bootScreenShown') ? 0 : 4.8;
  gsap.from("#hero .hero-content h1", { y: 50, opacity: 0, duration: 1, delay: heroDelay, ease: "power3.out" });
  gsap.from("#hero .hero-content p",  { y: 30, opacity: 0, duration: 1, delay: heroDelay + 0.2, ease: "power3.out" });
  gsap.from("#hero .hero-content .btn", { scale: 0.8, opacity: 0, duration: 0.8, delay: heroDelay + 0.4, stagger: 0.15, ease: "back.out(1.7)" });

  // ABOUT
  gsap.from("#about .profile-ring", {
    scrollTrigger: { trigger: "#about", start: "top 80%" },
    x: -50, opacity: 0, duration: 1, ease: "power3.out"
  });
  gsap.from("#about .about-text", {
    scrollTrigger: { trigger: "#about", start: "top 80%" },
    x: 50, opacity: 0, duration: 1, ease: "power3.out"
  });

  // TIMELINE ITEMS (Active section only)
  gsap.from(".timeline-section.active .timeline-item", {
    scrollTrigger: { trigger: ".timeline-section.active", start: "top 85%" },
    y: 40, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power2.out"
  });

  // SKILLS
  gsap.from("#skills .section-title", {
    scrollTrigger: { trigger: "#skills", start: "top 85%" },
    y: 30, opacity: 0, duration: 0.8, ease: "power3.out"
  });
  gsap.from("#skills .skill-category", {
    scrollTrigger: { trigger: "#skills", start: "top 80%" },
    y: 50, opacity: 0, duration: 0.8, stagger: 0.12, ease: "power3.out"
  });

  // PROJECTS
  gsap.from("#projects .section-title", {
    scrollTrigger: { trigger: "#projects", start: "top 85%" },
    y: 30, opacity: 0, duration: 0.8, ease: "power3.out"
  });
  gsap.from("#projects .project-card:not(.hidden-project)", {
    scrollTrigger: { trigger: "#projects", start: "top 80%" },
    y: 50, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out"
  });

  // CONTACT
  gsap.from("#contact h2", {
    scrollTrigger: { trigger: "#contact", start: "top 85%" },
    y: 30, opacity: 0, duration: 0.8, ease: "power3.out"
  });
  gsap.from("#contact p", {
    scrollTrigger: { trigger: "#contact", start: "top 80%" },
    y: 30, opacity: 0, duration: 0.8, ease: "power3.out"
  });
  gsap.from("#contact .contact-icons li", {
    scrollTrigger: { trigger: "#contact", start: "top 85%" },
    y: 20, opacity: 0, duration: 0.6, stagger: 0.1, ease: "back.out(1.5)"
  });
  gsap.from("#contact .btn", {
    scrollTrigger: { trigger: "#contact", start: "top 85%" },
    scale: 0.8, opacity: 0, duration: 0.8, ease: "back.out(1.5)"
  });
});


// ===================================
// Boot Screen & Session Storage
// ===================================
window.addEventListener('load', function() {
    const bootScreen = document.querySelector('.boot-screen');
    if (sessionStorage.getItem('bootScreenShown')) {
        // Already shown this session — skip animation instantly
        document.body.classList.remove('loading');
        if (bootScreen) bootScreen.style.display = 'none';
    } else {
        // First visit — show boot animation, then mark as shown
        sessionStorage.setItem('bootScreenShown', 'true');
        setTimeout(function() {
            document.body.classList.remove('loading');
        }, 4500);
    }
});


// ===================================
// Show More Projects Functionality
// ===================================
document.addEventListener('DOMContentLoaded', function() {
  const showMoreBtn = document.getElementById('show-more-btn');
  const hiddenProjects = document.querySelectorAll('.hidden-project');
  let isExpanded = false;

  if (showMoreBtn && hiddenProjects.length > 0) {
    showMoreBtn.addEventListener('click', function() {
      isExpanded = !isExpanded;

      if (isExpanded) {
        hiddenProjects.forEach((project, index) => {
          setTimeout(() => {
            project.classList.add('show');
          }, index * 150);
        });
        showMoreBtn.innerHTML = '<i class="fas fa-chevron-up"></i> Show Less Projects';
        showMoreBtn.classList.add('rotated');
        setTimeout(() => {
          if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
        }, hiddenProjects.length * 150 + 500);
      } else {
        hiddenProjects.forEach(project => project.classList.remove('show'));
        showMoreBtn.innerHTML = '<i class="fas fa-chevron-down"></i> Show More Projects';
        showMoreBtn.classList.remove('rotated');
        if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
        document.getElementById('projects').scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
});

// ===================================
// Tab Switching Logic (Experience / Education)
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const timelineSections = document.querySelectorAll('.timeline-section');

    if (tabBtns.length > 0) {
      tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          tabBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');

          timelineSections.forEach(section => {
            section.classList.remove('active');
            section.style.display = 'none';
          });

          const targetId = btn.getAttribute('data-target');
          const targetSection = document.getElementById(targetId);
          if (targetSection) {
            targetSection.style.display = 'block';
            requestAnimationFrame(() => targetSection.classList.add('active'));

            const items = targetSection.querySelectorAll('.timeline-item');
            items.forEach((item, index) => {
                item.removeAttribute('style');
                item.style.visibility = 'visible';
                item.style.opacity = '0';
                void item.offsetWidth;
                item.style.animation = `fadeInUp 0.5s ease-out forwards ${index * 0.15}s`;
            });
          }
        });
      });
    }
});

// ===================================
// Spotlight Effect for Skill Cards
// ===================================
document.querySelectorAll(".skill-category").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  });
});


// ===================================
// 3D Tilt Effect (VanillaTilt)
// ===================================
document.addEventListener("DOMContentLoaded", () => {
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll(".project-card"), {
            max: 10,
            speed: 400,
            glare: true,
            "max-glare": 0.2,
        });
        VanillaTilt.init(document.querySelectorAll(".skill-category"), {
            max: 10,
            speed: 400,
            glare: true,
            "max-glare": 0.1,
        });
    }
});


// ===================================
// Custom Interactive Cursor
// ===================================
document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.getElementById('custom-cursor');
    const follower = document.getElementById('custom-cursor-follower');

    if (cursor && follower && window.matchMedia("(pointer: fine)").matches) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            follower.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        });

        const interactives = document.querySelectorAll('a, button, .project-card, .skill-category');
        interactives.forEach((el) => {
            el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
            el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
        });
    }
});
