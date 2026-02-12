/**
 * LANDON CUNY - Main JavaScript
 * Handles scroll animations, navigation, and interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all functionality
  initScrollAnimations();
  initSmoothScroll();
  initParallax();
  initMobileNav();
});

/**
 * Intersection Observer for scroll-triggered animations
 */
function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Select all elements that should animate on scroll
  const animatedElements = document.querySelectorAll(`
    .section-label,
    .about-text,
    .experience-title,
    .experience-subtitle,
    .section-title,
    .bento-card,
    .cert-card,
    .contact-label,
    .contact-title,
    .contact-desc,
    .contact-buttons,
    .contact-links,
    .feature-card,
    .stat-card,
    .gallery-item,
    .partner-card,
    .experience-item,
    .process-step
  `);

  animatedElements.forEach(el => {
    observer.observe(el);
  });
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');

      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/**
 * Parallax effect on hero image
 */
function initParallax() {
  const heroImage = document.querySelector('.hero-image img');

  if (heroImage) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      if (scrolled < window.innerHeight) {
        heroImage.style.transform = `scale(1) translateY(${scrolled * 0.15}px)`;
      }
    });
  }
}

/**
 * Mobile navigation toggle
 */
function initMobileNav() {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      navToggle.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
        document.body.classList.remove('menu-open');
      });
    });

    // Close menu when clicking overlay
    document.addEventListener('click', (e) => {
      if (document.body.classList.contains('menu-open') &&
          !navLinks.contains(e.target) &&
          !navToggle.contains(e.target)) {
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
        document.body.classList.remove('menu-open');
      }
    });
  }
}

/**
 * Add staggered animation delays to elements
 */
function addStaggeredDelays(selector, baseDelay = 0, increment = 0.1) {
  document.querySelectorAll(selector).forEach((el, index) => {
    el.style.transitionDelay = `${baseDelay + (index * increment)}s`;
  });
}

// Call for specific element groups
addStaggeredDelays('.feature-card', 0, 0.1);
addStaggeredDelays('.stat-card', 0, 0.1);
addStaggeredDelays('.gallery-item', 0, 0.1);
addStaggeredDelays('.partner-card', 0, 0.05);
addStaggeredDelays('.process-step', 0, 0.15);
