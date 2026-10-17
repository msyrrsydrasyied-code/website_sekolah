/**
 * SMA NUSANTARA UNGGUL — MAIN JAVASCRIPT
 * Stand-alone Vanilla JS for global interactions and navigation.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mark HTML as JS-ready to enable CSS animations smoothly
  document.documentElement.classList.add('js-ready');

  // 2. Sticky Navbar Scroll Effect
  const navbar = document.getElementById('main-navbar');
  if (navbar) {
    let isScrolled = false;
    const handleScroll = () => {
      const shouldBeScrolled = window.scrollY > 20;
      if (shouldBeScrolled !== isScrolled) {
        isScrolled = shouldBeScrolled;
        if (isScrolled) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial evaluation on page load
  }

  // 3. Mobile Navigation Drawer Toggle
  const menuButton = document.getElementById('mobile-menu-button');
  const menuDrawer = document.getElementById('mobile-menu');

  if (menuButton && menuDrawer) {
    menuButton.addEventListener('click', (e) => {
      e.stopPropagation();
      const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
      const newExpanded = !isExpanded;
      menuButton.setAttribute('aria-expanded', newExpanded.toString());
      menuDrawer.classList.toggle('open', newExpanded);
    });

    // Close mobile menu if clicked outside
    document.addEventListener('click', (e) => {
      if (menuDrawer.classList.contains('open') && !menuDrawer.contains(e.target) && !menuButton.contains(e.target)) {
        menuButton.setAttribute('aria-expanded', 'false');
        menuDrawer.classList.remove('open');
      }
    });

    // Close mobile menu when a mobile nav link is clicked
    const drawerLinks = menuDrawer.querySelectorAll('a');
    drawerLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuButton.setAttribute('aria-expanded', 'false');
        menuDrawer.classList.remove('open');
      });
    });
  }

  // 4. Scroll Reveal Animations (IntersectionObserver)
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    // If user prefers reduced motion or browser is legacy, show everything immediately
    revealElements.forEach(el => el.classList.add('reveal-active'));
  } else {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
          obs.unobserve(entry.target); // Animate once
        }
      });
    }, observerOptions);

    revealElements.forEach(el => observer.observe(el));
  }
});

