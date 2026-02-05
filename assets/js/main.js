// Keep only these parts:

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
// Only reveal items that are visible initially (Experience section)
document.querySelectorAll(".timeline-section.active .sr-timeline").forEach((el, i) => {
  sr.reveal(el, {
    origin: i % 2 === 0 ? "left" : "right",
    delay: 800 + i * 200,
  });
});

// Remove ScrollReveal attributes from hidden items to prevent conflicts
document.querySelectorAll(".timeline-section:not(.active) .sr-timeline").forEach(el => {
  el.classList.remove('sr-timeline'); // Temporarily remove class or just don't init
  // Ideally, we just don't call sr.reveal on them.
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

// Remove loading class after animation completes
window.addEventListener('load', function() {
    setTimeout(function() {
        document.body.classList.remove('loading');
    }, 4500);
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
        // Show hidden projects with staggered animation
        hiddenProjects.forEach((project, index) => {
          setTimeout(() => {
            project.classList.add('show');
          }, index * 150); // 150ms delay between each project
        });

        // Update button text and icon
        showMoreBtn.innerHTML = '<i class="fas fa-chevron-down"></i> Show Less Projects';
        showMoreBtn.classList.add('rotated');
      } else {
        // Hide projects
        hiddenProjects.forEach(project => {
          project.classList.remove('show');
        });

        // Update button text and icon
        showMoreBtn.innerHTML = '<i class="fas fa-chevron-down"></i> Show More Projects';
        showMoreBtn.classList.remove('rotated');

        // Smooth scroll back to projects section
        document.getElementById('projects').scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
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
          // 1. Remove active class from all buttons
          tabBtns.forEach(b => b.classList.remove('active'));
          // 2. Add active class to clicked button
          btn.classList.add('active');
  
          // 3. Hide all sections
          timelineSections.forEach(section => {
            section.classList.remove('active');
            section.style.display = 'none'; 
          });
  
          // 4. Show target section
          const targetId = btn.getAttribute('data-target');
          const targetSection = document.getElementById(targetId);
          if (targetSection) {
            targetSection.style.display = 'block'; 
            
            // Trigger section animation
            requestAnimationFrame(() => {
                targetSection.classList.add('active');
            });

            // Animate internal items
            const items = targetSection.querySelectorAll('.timeline-item');
            items.forEach((item, index) => {
                // CRITICAL: Nuke all ScrollReveal inline styles
                item.removeAttribute('style');
                item.style.visibility = 'visible'; // Force visibility
                item.style.opacity = '0'; // Start hidden for animation
                
                // Force reflow
                void item.offsetWidth;
                
                // Add our custom CSS animation
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
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  });
});
