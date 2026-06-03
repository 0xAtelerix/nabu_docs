/* Mobile: first menu open after each page load shows all categories. */
(function () {
  var MQ = '(max-width: 76.234375em)';
  var INTRO_CLASS = 'nabu-nav-root-intro';
  var firstMenuOpen = true;

  function isMobile() {
    return window.matchMedia(MQ).matches;
  }

  function resetNavTransforms() {
    var primary = document.querySelector('.md-nav--primary');
    if (!primary) return;

    primary.querySelectorAll('.md-nav__list').forEach(function (list) {
      list.style.setProperty('transform', 'none', 'important');
    });
  }

  function enableIntroView() {
    document.documentElement.classList.add(INTRO_CLASS);
    resetNavTransforms();
  }

  function disableIntroView() {
    document.documentElement.classList.remove(INTRO_CLASS);
  }

  function scheduleIntroReset() {
    [0, 50, 150, 300, 500].forEach(function (delay) {
      setTimeout(resetNavTransforms, delay);
    });

    var primary = document.querySelector('.md-nav--primary');
    if (!primary) return;

    var observer = new MutationObserver(resetNavTransforms);
    observer.observe(primary, {
      attributes: true,
      attributeFilter: ['style', 'class'],
      subtree: true,
    });
    setTimeout(function () {
      observer.disconnect();
    }, 600);
  }

  var drawer = document.getElementById('__drawer');
  if (drawer) {
    drawer.addEventListener('change', function (e) {
      if (e.target.checked) {
        if (firstMenuOpen && isMobile()) {
          firstMenuOpen = false;
          enableIntroView();
          scheduleIntroReset();
        }
      } else {
        disableIntroView();
      }
    });
  }

  var primary = document.querySelector('.md-nav--primary');
  if (primary) {
    primary.addEventListener(
      'click',
      function (e) {
        if (!document.documentElement.classList.contains(INTRO_CLASS)) return;
        if (e.target.closest('.md-nav__item--section > label.md-nav__link')) {
          disableIntroView();
        }
      },
      true
    );
  }
})();
