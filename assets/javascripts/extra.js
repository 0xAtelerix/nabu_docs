(function () {
  var MOBILE_QUERY = '(max-width: 76.1875em)';

  function isMobile() {
    return window.matchMedia(MOBILE_QUERY).matches;
  }

  function resetPrimaryNav() {
    if (!isMobile()) return;

    var primary = document.querySelector('.md-nav--primary');
    if (!primary) return;

    primary.querySelectorAll('.md-nav__list').forEach(function (list) {
      list.style.setProperty('transform', 'none', 'important');
    });

    primary.querySelectorAll('.md-nav__title').forEach(function (title) {
      title.style.setProperty('display', 'none', 'important');
    });
  }

  function onDrawerOpen() {
    // Material applies the drill-down state after the drawer opens.
    requestAnimationFrame(function () {
      requestAnimationFrame(resetPrimaryNav);
    });
  }

  function bindDrawer() {
    var drawer = document.getElementById('__drawer');
    if (!drawer) return;

    drawer.addEventListener('change', function () {
      if (drawer.checked) onDrawerOpen();
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    resetPrimaryNav();
    bindDrawer();
    window.addEventListener('resize', resetPrimaryNav);
  });
})();
