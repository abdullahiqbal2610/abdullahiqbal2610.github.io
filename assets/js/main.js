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

  nav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      nav.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
});

// ===================================
// Navbar scroll effect
// ===================================
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ===================================
// Typewriter Effect
// ===================================
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

// ===================================
// Skill Bars Animation
// ===================================
function animateSkillBars() {
  document.querySelectorAll(".skill-progress").forEach((bar) => {
    bar.style.width = bar.getAttribute("data-width") + "%";
  });
}

const skillsSection = document.getElementById("skills");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) animateSkillBars();
  });
});
observer.observe(skillsSection);

// ===================================
// ScrollReveal Animations
// ===================================
const sr = ScrollReveal({
  distance: "40px",
  duration: 800,
  easing: "ease-out",
  reset: false,
  mobile: true,
});

sr.reveal("#hero .hero-content h1", { origin: "bottom", delay: 500 });
sr.reveal("#hero .hero-content p",  { origin: "bottom", delay: 700 });
sr.reveal("#hero .hero-content .btn", { scale: 0.8, delay: 900 });

sr.reveal("#about .profile-ring", { origin: "left", delay: 500 });
sr.reveal("#about .about-text",   { origin: "right", delay: 700 });

document.querySelectorAll(".timeline-section.active .sr-timeline").forEach((el, i) => {
  sr.reveal(el, { origin: i % 2 === 0 ? "left" : "right", delay: 800 + i * 200 });
});
document.querySelectorAll(".timeline-section:not(.active) .sr-timeline").forEach(el => {
  el.classList.remove('sr-timeline');
});

sr.reveal("#skills .section-title",   { origin: "top",    delay: 500 });
sr.reveal("#skills .skill-category",  { interval: 200,    origin: "bottom" });

sr.reveal("#projects .section-title", { origin: "top",    delay: 500 });
sr.reveal("#projects .project-card",  { interval: 200,    origin: "bottom" });

sr.reveal("#contact h2",              { origin: "bottom", delay: 300,  reset: false });
sr.reveal("#contact p",               { origin: "bottom", delay: 450,  reset: false });
sr.reveal("#contact .contact-icons li", { interval: 150, origin: "bottom", reset: false });
sr.reveal("#contact .btn",            { scale: 0.8,       delay: 600,  reset: false });

// ===================================
// Boot Screen & Session Storage
// ===================================
document.addEventListener('DOMContentLoaded', function() {
  const bootScreen = document.querySelector('.boot-screen');
  
  function removeLoading() {
    document.body.classList.remove('loading');
    if (bootScreen) bootScreen.style.display = 'none';
  }

  if (sessionStorage.getItem('bootScreenShown')) {
    removeLoading();
  } else {
    sessionStorage.setItem('bootScreenShown', 'true');
    setTimeout(removeLoading, 4500);
  }
  
  // Safety fallback in case JS hangs
  setTimeout(removeLoading, 5000);
});

// ===================================
// Show More Projects Functionality
// ===================================
document.addEventListener('DOMContentLoaded', function() {
  const showMoreBtn   = document.getElementById('show-more-btn');
  const hiddenProjects = document.querySelectorAll('.hidden-project');
  let isExpanded = false;

  if (showMoreBtn && hiddenProjects.length > 0) {
    showMoreBtn.addEventListener('click', function() {
      isExpanded = !isExpanded;

      if (isExpanded) {
        hiddenProjects.forEach((project, index) => {
          setTimeout(() => project.classList.add('show'), index * 150);
        });
        showMoreBtn.innerHTML = '<i class="fas fa-chevron-up"></i> Show Less Projects';
        showMoreBtn.classList.add('rotated');
        setTimeout(() => { if (typeof sr !== 'undefined') sr.sync(); }, hiddenProjects.length * 150 + 500);
      } else {
        hiddenProjects.forEach(project => project.classList.remove('show'));
        showMoreBtn.innerHTML = '<i class="fas fa-chevron-down"></i> Show More Projects';
        showMoreBtn.classList.remove('rotated');
        if (typeof sr !== 'undefined') sr.sync();
        document.getElementById('projects').scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
});

// ===================================
// Tab Switching Logic (Experience / Education)
// ===================================
document.addEventListener('DOMContentLoaded', function() {
  const tabBtns         = document.querySelectorAll('.tab-btn');
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

        const targetSection = document.getElementById(btn.getAttribute('data-target'));
        if (targetSection) {
          targetSection.style.display = 'block';
          requestAnimationFrame(() => targetSection.classList.add('active'));

          targetSection.querySelectorAll('.timeline-item').forEach((item, index) => {
            item.removeAttribute('style');
            item.style.visibility = 'visible';
            item.style.opacity    = '0';
            void item.offsetWidth;
            item.style.animation  = `fadeInUp 0.5s ease-out forwards ${index * 0.15}s`;
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
// Aceternity Text Hover Effect (Vanilla Port)
// ===================================
document.addEventListener("DOMContentLoaded", () => {
  const heroSection  = document.getElementById("hero");
  const revealMask   = document.getElementById("revealMask");
  const gradientText = document.querySelector(".gradient-text");

  if (heroSection && revealMask && gradientText) {
    heroSection.addEventListener("mousemove", (e) => {
      const rect = heroSection.getBoundingClientRect();
      revealMask.setAttribute("cx", `${((e.clientX - rect.left) / rect.width)  * 100}%`);
      revealMask.setAttribute("cy", `${((e.clientY - rect.top)  / rect.height) * 100}%`);
    });
    heroSection.addEventListener("mouseenter", () => { gradientText.style.opacity = "1"; });
    heroSection.addEventListener("mouseleave", () => { gradientText.style.opacity = "0"; });
  }
});

// ===================================
// Stats Strip — Count-Up Animation (loops every 5s)
// ===================================
document.addEventListener("DOMContentLoaded", () => {
  const statItems = document.querySelectorAll(".stat-item");
  if (!statItems.length) return;

  function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

  function animateStat(el) {
    const target   = parseFloat(el.dataset.target);
    const decimals = parseInt(el.dataset.decimals ?? "0", 10);
    const suffix   = el.dataset.suffix ?? "";
    const numberEl = el.querySelector(".stat-number");
    if (!numberEl) return;

    // Reset to 0 before counting up
    numberEl.textContent = (0).toFixed(decimals) + suffix;

    const duration  = 1600;
    const startTime = performance.now();

    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const current  = easeOutCubic(progress) * target;
      numberEl.textContent = current.toFixed(decimals) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
      else numberEl.textContent = target.toFixed(decimals) + suffix;
    }
    requestAnimationFrame(tick);
  }

  function runAllStats() {
    statItems.forEach((item, i) => {
      setTimeout(() => {
        item.classList.add("visible");
        animateStat(item);
      }, i * 100);
    });
  }

  // Trigger once on scroll into view, then loop every 5s
  let loopInterval = null;
  const stripObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !loopInterval) {
        runAllStats();
        loopInterval = setInterval(runAllStats, 5000);
      }
      // Pause when off-screen to save resources
      if (!entry.isIntersecting && loopInterval) {
        clearInterval(loopInterval);
        loopInterval = null;
      }
    });
  }, { threshold: 0.3 });

  const strip = document.getElementById("stats-strip");
  if (strip) stripObserver.observe(strip);
});
