
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

// Advanced dropdown functionality with keyboard navigation
function initDropdowns() {
  const dropdowns = document.querySelectorAll('.dropdown');
  
  dropdowns.forEach((dropdown, index) => {
    const dropbtn = dropdown.querySelector('.dropbtn');
    const dropdownContent = dropdown.querySelector('.dropdown-content');
    const dropdownLinks = dropdownContent.querySelectorAll('a');
    
    // Mouse events
    dropdown.addEventListener('mouseenter', () => {
      closeAllDropdowns();
      dropdown.classList.add('active');
    });
    
    dropdown.addEventListener('mouseleave', () => {
      dropdown.classList.remove('active');
    });
    
    // Click events for mobile
    dropbtn.addEventListener('click', function(e) {
      e.preventDefault();
      const isActive = dropdown.classList.contains('active');
      
      closeAllDropdowns();
      
      if (!isActive) {
        dropdown.classList.add('active');
      }
    });
    
    // Keyboard navigation
    dropbtn.addEventListener('keydown', function(e) {
      switch(e.key) {
        case 'Enter':
        case ' ':
          e.preventDefault();
          dropdown.classList.toggle('active');
          if (dropdown.classList.contains('active')) {
            dropdownLinks[0]?.focus();
          }
          break;
        case 'Escape':
          dropdown.classList.remove('active');
          dropbtn.focus();
          break;
        case 'ArrowDown':
          e.preventDefault();
          dropdown.classList.add('active');
          dropdownLinks[0]?.focus();
          break;
      }
    });
    
    // Navigate through dropdown links
    dropdownLinks.forEach((link, linkIndex) => {
      link.addEventListener('keydown', function(e) {
        switch(e.key) {
          case 'ArrowDown':
            e.preventDefault();
            const nextLink = dropdownLinks[linkIndex + 1] || dropdownLinks[0];
            nextLink.focus();
            break;
          case 'ArrowUp':
            e.preventDefault();
            const prevLink = dropdownLinks[linkIndex - 1] || dropdownLinks[dropdownLinks.length - 1];
            prevLink.focus();
            break;
          case 'Escape':
            dropdown.classList.remove('active');
            dropbtn.focus();
            break;
        }
      });
    });
  });
  
  // Close dropdowns when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown')) {
      closeAllDropdowns();
    }
  });
  
  // Close dropdowns on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeAllDropdowns();
    }
  });
}

function closeAllDropdowns() {
  document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.classList.remove('active');
  });
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
  
  // Animate hero section
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.style.opacity = '0';
    hero.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
      hero.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
      hero.style.opacity = '1';
      hero.style.transform = 'scale(1)';
    }, 200);
  }
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
  initDropdowns();
  initSmoothScroll();
  initPageTransitions();
  initScrollAnimations();
  initMobileOptimizations();
  
  // Sidebar functionality removed
  
  // Add subtle parallax effect to hero
  const hero = document.querySelector('.hero');
  if (hero) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const parallax = scrolled * 0.5;
      hero.style.transform = `translateY(${parallax}px)`;
    });
  }
  
  console.log('✅ Portfolio System Initialized Successfully');
});
