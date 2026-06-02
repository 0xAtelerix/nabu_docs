/* Mobile: flat nav — all sections visible, no Material slide panels. */
(function () {
  var MQ = '(max-width: 76.234375em)';

  function flattenMobileNav() {
    if (!window.matchMedia(MQ).matches) return;

    var root = document.querySelector('.md-sidebar--primary .md-nav--primary');
    if (!root) return;

    root.querySelectorAll('.md-nav__item--section > .md-nav__toggle').forEach(function (t) {
      t.checked = true;
    });

    root.querySelectorAll('.md-nav__list').forEach(function (list) {
      list.style.setProperty('transform', 'none', 'important');
      list.style.setProperty('flex', 'none', 'important');
      list.style.setProperty('height', 'auto', 'important');
    });

    root.querySelectorAll('.md-nav').forEach(function (nav) {
      nav.style.setProperty('position', 'static', 'important');
      nav.style.setProperty('height', 'auto', 'important');
      nav.style.setProperty('top', 'auto', 'important');
      nav.style.setProperty('left', 'auto', 'important');
      nav.style.setProperty('right', 'auto', 'important');
      nav.style.setProperty('display', 'block', 'important');
    });
  }

  function onDrawerOpen() {
    requestAnimationFrame(function () {
      requestAnimationFrame(flattenMobileNav);
    });
  }

  document.addEventListener('DOMContentLoaded', flattenMobileNav);

  var drawer = document.getElementById('__drawer');
  if (drawer) {
    drawer.addEventListener('change', function () {
      if (drawer.checked) onDrawerOpen();
    });
  }

  window.addEventListener('resize', flattenMobileNav);
})();
