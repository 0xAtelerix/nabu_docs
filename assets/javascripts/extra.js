document.addEventListener('DOMContentLoaded', function() {
  
  function fixMobileNav() {
    if (window.innerWidth >= 1220) return;
    
    var primaryNav = document.querySelector('.md-nav--primary');
    if (!primaryNav) return;
    
    // Hide the expanded active section
    var activeNav = primaryNav.querySelector('.md-nav__item--active > .md-nav');
    if (activeNav) {
      activeNav.style.display = 'none';
    }
    
    // Reset list transform to show root menu
    var list = primaryNav.querySelector('.md-nav__list');
    if (list) {
      list.style.transform = 'none';
    }
    
    // Remove active class from first item to prevent auto-expand
    var firstSection = primaryNav.querySelector('.md-nav__item--active');
    if (firstSection) {
      firstSection.classList.remove('md-nav__item--active');
    }
  }
  
  // Run on load
  fixMobileNav();
  
  // Also run when drawer opens (for hamburger menu)
  var drawer = document.querySelector('.md-drawer');
  if (drawer) {
    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.attributeName === 'class') {
          if (drawer.classList.contains('md-drawer--active')) {
            setTimeout(fixMobileNav, 10);
          }
        }
      });
    });
    observer.observe(drawer, { attributes: true });
  }
  
});