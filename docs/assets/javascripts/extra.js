(function () {
  /* "Internal" here means "leave this link alone" — anchors, and any scheme
     the browser handles itself (mailto:, tel:, javascript:) which must not be
     forced into a new tab. */
  function isInternalLink(link) {
    var href = link.getAttribute("href");
    if (!href || href.charAt(0) === "#") {
      return true;
    }
    try {
      var url = new URL(link.href, window.location.href);
      if (url.protocol !== "http:" && url.protocol !== "https:") {
        return true;
      }
      return url.hostname === window.location.hostname;
    } catch (e) {
      return true;
    }
  }

  function openExternalLinksInNewTab() {
    document.querySelectorAll("a[href]").forEach(function (link) {
      if (isInternalLink(link)) {
        return;
      }
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    });
  }

  if (typeof document$ !== "undefined" && document$.subscribe) {
    document$.subscribe(openExternalLinksInNewTab);
  } else {
    document.addEventListener("DOMContentLoaded", openExternalLinksInNewTab);
  }
})();

/* Mobile: first menu open after each page load shows all categories. */
(function () {
  var MQ = '(max-width: 76.234375em)';
  var INTRO_CLASS = 'nabu-nav-root-intro';
  var PICK_CLASS = 'nabu-nav-picking';
  var PICK_TARGET_CLASS = 'nabu-nav-pick';
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

  function clearPickState() {
    document.documentElement.classList.remove(PICK_CLASS);
    var primary = getPrimaryNav();
    if (!primary) return;
    primary.querySelectorAll('.' + PICK_TARGET_CLASS).forEach(function (el) {
      el.classList.remove(PICK_TARGET_CLASS);
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

  function goToRootMenu() {
    if (!isMobile()) return;

    var primary = getPrimaryNav();
    if (!primary) return;

    clearPickState();

    primary.querySelectorAll('.md-nav__item--section > .md-nav__toggle').forEach(function (t) {
      t.checked = false;
      delete t.dataset.nabuWasChecked;
    });

    document.documentElement.classList.add(INTRO_CLASS);
    resetNavTransforms();
  }

  function scheduleIntroReset() {
    [0, 50, 150, 300].forEach(function (delay) {
      setTimeout(resetNavTransforms, delay);
    });
  }

  /** Prepare UI before the browser handles the label click (one tap). */
  function prepareSectionOpen(label) {
    var primary = getPrimaryNav();
    var toggle = label && document.getElementById(label.htmlFor);
    var section = toggle && toggle.closest('.md-nav__item--section');
    if (!primary || !toggle || !section) return;

    clearPickState();
    section.classList.add(PICK_TARGET_CLASS);

    primary.querySelectorAll('.md-nav__item--section > .md-nav__toggle').forEach(function (t) {
      t.checked = false;
      delete t.dataset.nabuWasChecked;
    });

    document.documentElement.classList.remove(INTRO_CLASS);
    document.documentElement.classList.add(PICK_CLASS);
    resetNavTransforms();

    setTimeout(function () {
      clearPickState();
      resetNavTransforms();
    }, 320);
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
        clearPickState();
        disableIntroView(true);
      }
    });
  }

  var primary = getPrimaryNav();
  if (primary) {
    primary.addEventListener(
      'click',
      function (e) {
        if (!isMobile()) return;

        var back = e.target.closest('.md-nav--primary .md-nav .md-nav__title');
        if (back) {
          if (document.documentElement.classList.contains(INTRO_CLASS)) return;

          e.preventDefault();
          e.stopImmediatePropagation();
          goToRootMenu();
          return;
        }

        if (!document.documentElement.classList.contains(INTRO_CLASS)) return;

        var label = e.target.closest(
          '.md-nav__item--section > label.md-nav__link[for^="__nav"]'
        );
        if (!label) return;

        /* Do not block the click — only prepare, then the browser opens the section */
        prepareSectionOpen(label);
      },
      true
    );
  }
})();

/* Support request form (support/request.md): preselect the topic from
   ?topic=, and send the form in the background to
   FormSubmit's AJAX endpoint so visitors never leave the page. Without JS the
   form still posts normally and FormSubmit redirects back with ?sent=1. */
(function () {
  function setUpRequestForm() {
    var form = document.getElementById('nabu-request');
    if (!form || form.dataset.nabuReady) return;
    form.dataset.nabuReady = '1';

    var sent = document.getElementById('nabu-request-sent');
    var failed = document.getElementById('nabu-request-failed');
    var button = form.querySelector('button[type="submit"]');
    var params = new URLSearchParams(window.location.search);

    /* Success view: retitle the page and keep only the confirmation. */
    function showSent() {
      var heading = document.querySelector('.md-content h1');
      if (heading) heading.firstChild.textContent = 'Request sent';
      document.title = document.title.replace('Submit a request', 'Request sent');
      form.hidden = true;
      document.querySelectorAll('.nabu-request-extra').forEach(function (el) {
        el.hidden = true;
      });
      sent.hidden = false;
    }

    if (params.get('sent') === '1') {
      showSent();
    }

    var topic = form.elements.topic;
    var preset = params.get('topic');
    if (preset) {
      var option = topic.querySelector('option[data-topic="' + preset + '"]');
      if (option) option.selected = true;
    }

    var next = new URL(window.location.href);
    next.search = '?sent=1';
    next.hash = '';
    form.elements._next.value = next.href;

    function setBusy(busy) {
      button.disabled = busy;
      button.classList.toggle('is-loading', busy);
      button.setAttribute('aria-busy', busy ? 'true' : 'false');
    }

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (button.disabled) return;

      form.elements._subject.value =
        'Nabu support: ' + topic.value + ' - ' + form.elements.subject.value;

      sent.hidden = true;
      failed.hidden = true;
      setBusy(true);

      /* https://formsubmit.co/<target> -> https://formsubmit.co/ajax/<target> */
      var endpoint = form.action.replace('formsubmit.co/', 'formsubmit.co/ajax/');

      fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form)
      })
        .then(function (response) {
          return response.json().then(function (data) {
            if (!response.ok || String(data.success) !== 'true') {
              throw new Error(data.message || 'HTTP ' + response.status);
            }
          });
        })
        .then(function () {
          form.reset();
          showSent();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        })
        .catch(function () {
          failed.hidden = false;
          failed.scrollIntoView({ behavior: 'smooth', block: 'center' });
        })
        .then(function () {
          setBusy(false);
        });
    });
  }

  if (typeof document$ !== 'undefined' && document$.subscribe) {
    document$.subscribe(setUpRequestForm);
  } else {
    document.addEventListener('DOMContentLoaded', setUpRequestForm);
  }
})();
