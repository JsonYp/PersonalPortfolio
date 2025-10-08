
/* Modern Interactive JavaScript for Professional Portfolio */

// Smooth scroll behavior for internal links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Sidebar functionality removed

// Navigation functionality (dropdowns removed)
function initNavigation() {
  // Add active state to current page
  const currentPage = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('.main-nav a');
  
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
      link.style.background = 'rgba(16, 185, 129, 0.3)';
      link.style.color = 'var(--text-accent)';
    }
  });
}

// Dynamic header functionality
function initDynamicHeader() {
  const header = document.querySelector('header');
  if (!header) return;
  
  let hideTimeout;
  
  // Function to show header
  function showHeader() {
    clearTimeout(hideTimeout);
    header.classList.remove('header-hidden');
  }
  
  // Function to hide header with delay
  function hideHeader() {
    hideTimeout = setTimeout(() => {
      header.classList.add('header-hidden');
    }, 500); // 500ms delay before hiding
  }
  
  // Mouse enter header area - show header
  header.addEventListener('mouseenter', showHeader);
  
  // Mouse leave header area - hide header with delay
  header.addEventListener('mouseleave', hideHeader);
  
  // Also show header when mouse moves to top of screen
  document.addEventListener('mousemove', (e) => {
    // If mouse is in the top 100px of the screen, show header
    if (e.clientY <= 100) {
      showHeader();
    } else if (e.clientY > 150 && !header.matches(':hover')) {
      // If mouse is below header area and not hovering header, hide it
      clearTimeout(hideTimeout);
      hideTimeout = setTimeout(() => {
        header.classList.add('header-hidden');
      }, 1000); // Longer delay when moving away from top
    }
  });
  
  // Show header on page load, then hide after 3 seconds
  setTimeout(() => {
    if (!header.matches(':hover')) {
      header.classList.add('header-hidden');
    }
  }, 3000);
  
  // Show header when pressing Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      showHeader();
    }
  });
  
  console.log('Dynamic header initialized');
}

// Add loading animation and page transitions
function initPageTransitions() {
  // Add fade-in animation to main content
  const main = document.querySelector('main');
  if (main) {
    main.style.opacity = '0';
    main.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      main.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
      main.style.opacity = '1';
      main.style.transform = 'translateY(0)';
    }, 100);
  }
  
  // Hero animation removed - section is now static
}

// Intersection Observer for scroll animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe elements for scroll animation
  document.querySelectorAll('article').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    observer.observe(el);
  });
}

// Theme switcher functionality (for future enhancement)
function initThemeToggle() {
  // This can be expanded later for dark/light mode
  console.log('Theme system ready for enhancement');
}

// Performance optimization for mobile
function initMobileOptimizations() {
  if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
    
    // Optimize hover effects for touch devices
    document.querySelectorAll('.dropbtn').forEach(btn => {
      btn.addEventListener('touchstart', function() {
        this.classList.add('touch-active');
      });
      
      btn.addEventListener('touchend', function() {
        setTimeout(() => {
          this.classList.remove('touch-active');
        }, 150);
      });
    });
  }
}

// Initialize all functionality when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Modern Portfolio System Initializing...');
  
  // Core functionality
  initNavigation();
  initDynamicHeader();
  initSmoothScroll();
  initPageTransitions();
  initScrollAnimations();
  initMobileOptimizations();
  
  // Sidebar functionality removed
  
  // Hero parallax effect removed - section is now static
  
  console.log('✅ Portfolio System Initialized Successfully');
});
