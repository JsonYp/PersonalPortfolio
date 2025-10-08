
/* Enhanced JS for menu toggle, dropdown functionality, and interactions */
function toggleSidebar() {
  const s = document.getElementById('sidebar');
  if (!s) return;
  s.style.display = s.style.display === 'none' ? 'block' : 'none';
}

// Dropdown menu functionality
function initDropdowns() {
  const dropdowns = document.querySelectorAll('.dropdown');
  
  dropdowns.forEach(dropdown => {
    const dropbtn = dropdown.querySelector('.dropbtn');
    const dropdownContent = dropdown.querySelector('.dropdown-content');
    
    // Click event for mobile/touch devices
    dropbtn.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Close other dropdowns
      dropdowns.forEach(otherDropdown => {
        if (otherDropdown !== dropdown) {
          otherDropdown.classList.remove('active');
        }
      });
      
      // Toggle current dropdown
      dropdown.classList.toggle('active');
    });
  });
  
  // Close dropdowns when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.matches('.dropbtn')) {
      dropdowns.forEach(dropdown => {
        dropdown.classList.remove('active');
      });
    }
  });
  
  // Handle keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      dropdowns.forEach(dropdown => {
        dropdown.classList.remove('active');
      });
    }
  });
}

// Enhanced sidebar toggle with animation
function enhancedToggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;
  
  if (sidebar.style.display === 'none') {
    sidebar.style.display = 'block';
    sidebar.style.opacity = '0';
    setTimeout(() => {
      sidebar.style.opacity = '1';
    }, 10);
  } else {
    sidebar.style.opacity = '0';
    setTimeout(() => {
      sidebar.style.display = 'none';
    }, 200);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Initialize sidebar toggle
  const btn = document.getElementById('sidebarToggle');
  if (btn) btn.addEventListener('click', enhancedToggleSidebar);
  
  // Initialize dropdown menus
  initDropdowns();
  
  console.log('Navigation system initialized with dropdown functionality');
});
