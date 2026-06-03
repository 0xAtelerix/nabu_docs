/* Mobile: first drawer open per session → all categories; later → default Material. */
(function () {
  var MQ = '(max-width: 76.234375em)';
  var STORAGE_KEY = 'nabu_mobile_nav_root_v2';
  var INTRO_CLASS = 'nabu-nav-root-intro';

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
    resetNavTransforms();
  }

  function scheduleIntroReset() {
    requestAnimationFrame(function () {
      requestAnimationFrame(resetNavTransforms);
    });
    setTimeout(resetNavTransforms, 50);
    setTimeout(resetNavTransforms, 150);
    setTimeout(resetNavTransforms, 300);
  }

  function onFirstDrawerOpen() {
    if (!isMobile()) return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    sessionStorage.setItem(STORAGE_KEY, '1');
    enableIntroView();
    scheduleIntroReset();
  }

  var drawer = document.getElementById('__drawer');
  if (drawer) {
    drawer.addEventListener('change', function (e) {
      if (e.target.checked) {
        onFirstDrawerOpen();
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
