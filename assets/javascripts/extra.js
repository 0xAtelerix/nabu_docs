/* Mobile: first menu open after each page load shows all categories. */
(function () {
  var MQ = '(max-width: 76.234375em)';
  var INTRO_CLASS = 'nabu-nav-root-intro';
  var firstMenuOpen = true;

  function isMobile() {
    return window.matchMedia(MQ).matches;
  }

  function getPrimaryNav() {
    return document.querySelector('.md-nav--primary');
  }

  function resetNavTransforms() {
    var primary = getPrimaryNav();
    if (!primary) return;

    primary.querySelectorAll('.md-nav__list').forEach(function (list) {
      list.style.setProperty('transform', 'none', 'important');
    });
  }

  function saveToggleState() {
    var primary = getPrimaryNav();
    if (!primary) return;

    primary.querySelectorAll('.md-nav__item--section > .md-nav__toggle').forEach(function (toggle) {
      toggle.dataset.nabuWasChecked = toggle.checked ? '1' : '0';
      toggle.checked = false;
    });
  }

  function restoreToggleState() {
    var primary = getPrimaryNav();
    if (!primary) return;

    primary.querySelectorAll('.md-nav__item--section > .md-nav__toggle').forEach(function (toggle) {
      if (toggle.dataset.nabuWasChecked !== undefined) {
        toggle.checked = toggle.dataset.nabuWasChecked === '1';
        delete toggle.dataset.nabuWasChecked;
      }
    });
  }

  function enableIntroView() {
    document.documentElement.classList.add(INTRO_CLASS);
    saveToggleState();
    resetNavTransforms();
  }

  function disableIntroView(restoreToggles) {
    document.documentElement.classList.remove(INTRO_CLASS);
    if (restoreToggles) {
      restoreToggleState();
    }
    resetNavTransforms();
  }

  function scheduleIntroReset() {
    [0, 50, 150, 300, 500].forEach(function (delay) {
      setTimeout(resetNavTransforms, delay);
    });

    var primary = getPrimaryNav();
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

  function openClickedSection(label) {
    var primary = getPrimaryNav();
    var toggle = label && document.getElementById(label.htmlFor);
    if (!primary || !toggle) return;

    primary.querySelectorAll('.md-nav__item--section > .md-nav__toggle').forEach(function (t) {
      t.checked = false;
      delete t.dataset.nabuWasChecked;
    });
    toggle.checked = true;

    disableIntroView(false);

    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        resetNavTransforms();
        label.dispatchEvent(
          new MouseEvent('click', { bubbles: true, cancelable: true, view: window })
        );
      });
    });
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
        disableIntroView(true);
      }
    });
  }

  var primary = getPrimaryNav();
  if (primary) {
    primary.addEventListener(
      'click',
      function (e) {
        if (!document.documentElement.classList.contains(INTRO_CLASS)) return;

        var label = e.target.closest(
          '.md-nav__item--section > label.md-nav__link[for^="__nav"]'
        );
        if (!label) return;

        e.preventDefault();
        e.stopImmediatePropagation();
        openClickedSection(label);
      },
      true
    );
  }
})();
