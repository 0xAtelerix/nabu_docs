(function () {
  var MOBILE_QUERY = '(max-width: 76.234375em)';

  function isMobile() {
    return window.matchMedia(MOBILE_QUERY).matches;
  }

  function getPrimaryNav() {
    return document.querySelector('.md-nav--primary');
  }

  /** Undo Material's sliding sub-panels on small screens. */
  function flattenMobileNav() {
    if (!isMobile()) return;

    var primary = getPrimaryNav();
    if (!primary) return;

    primary.querySelectorAll('.md-nav__list').forEach(function (list) {
      list.style.setProperty('transform', 'none', 'important');
    });

    primary.querySelectorAll('.md-nav').forEach(function (nav) {
      nav.style.setProperty('position', 'static', 'important');
      nav.style.setProperty('display', 'block', 'important');
      nav.style.setProperty('height', 'auto', 'important');
      nav.style.setProperty('inset', 'auto', 'important');
      nav.style.setProperty('z-index', 'auto', 'important');
    });

  }

  function openActiveSections() {
    var primary = getPrimaryNav();
    if (!primary) return;

    primary.querySelectorAll('.md-nav__item--section').forEach(function (item) {
      var toggle = item.querySelector(':scope > .md-nav__toggle');
      if (!toggle) return;
      toggle.checked = !!item.querySelector('.md-nav__link--active');
    });
  }

  function onDrawerOpen() {
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        openActiveSections();
        flattenMobileNav();
      });
    });
  }

  function bindMobileNav() {
    var primary = getPrimaryNav();
    if (!primary) return;

    // Section headers must toggle in-place, not open Material's drill-down panel.
    primary.addEventListener(
      'click',
      function (event) {
        if (!isMobile()) return;

        var label = event.target.closest(
          '.md-nav__item--section > label.md-nav__link[for^="__nav"]'
        );
        if (!label) return;

        event.preventDefault();
        event.stopImmediatePropagation();

        var toggle = document.getElementById(label.htmlFor);
        if (!toggle) return;

        toggle.checked = !toggle.checked;
        flattenMobileNav();
      },
      true
    );

    primary.addEventListener('change', function (event) {
      if (!isMobile()) return;
      if (event.target.classList.contains('md-nav__toggle')) {
        flattenMobileNav();
      }
    });

    var observer = new MutationObserver(function () {
      if (isMobile()) flattenMobileNav();
    });
    observer.observe(primary, {
      attributes: true,
      attributeFilter: ['style', 'class'],
      subtree: true,
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    flattenMobileNav();
    bindMobileNav();

    var drawer = document.getElementById('__drawer');
    if (drawer) {
      drawer.addEventListener('change', function () {
        if (drawer.checked) onDrawerOpen();
      });
    }

    window.addEventListener('resize', flattenMobileNav);
  });
})();
