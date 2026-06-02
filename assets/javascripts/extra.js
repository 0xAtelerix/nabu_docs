(function () {
  var MOBILE_QUERY = '(max-width: 76.234375em)';

  function isMobile() {
    return window.matchMedia(MOBILE_QUERY).matches;
  }

  /** Stop Material from sliding the nav stack on small screens. */
  function flattenMobileNav() {
    if (!isMobile()) return;

    var primary = document.querySelector('.md-nav--primary');
    if (!primary) return;

    primary.querySelectorAll('.md-nav__list').forEach(function (list) {
      list.style.setProperty('transform', 'none', 'important');
    });
  }

  function onDrawerOpen() {
    requestAnimationFrame(function () {
      requestAnimationFrame(flattenMobileNav);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    flattenMobileNav();

    var drawer = document.getElementById('__drawer');
    if (drawer) {
      drawer.addEventListener('change', function () {
        if (drawer.checked) onDrawerOpen();
      });
    }

    var primary = document.querySelector('.md-nav--primary');
    if (primary) {
      primary.addEventListener('change', function (event) {
        if (event.target.classList.contains('md-nav__toggle')) {
          flattenMobileNav();
        }
      });
    }

    window.addEventListener('resize', flattenMobileNav);
  });
})();
