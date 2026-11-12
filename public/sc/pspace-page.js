/* PSpace page script. Bespoke behaviour that lives on this site only.
   The scroll engine is untouched: this reads the progress it publishes as
   --sc-p on each act and drives three things from it.

     1. the hero's pointer depth (the planes lean a little as the pointer moves)
     2. the tour (which real screenshot the phone shows)
     3. the lock (the page's signature move)

   The lock is real logic on a real pad. Scroll fills the four dots, or the
   visitor taps or types digits. Any four digits open it. Nothing is stored. */
(function (w) {
  'use strict';

  var doc = document;
  var root = doc.documentElement;

  function q(sel, ctx) { return (ctx || doc).querySelector(sel); }
  function qa(sel, ctx) { return Array.prototype.slice.call((ctx || doc).querySelectorAll(sel)); }
  function prog(el) { return parseFloat(el.style.getPropertyValue('--sc-p')) || 0; }
  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }

  function init() {
    var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    var fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
    var raf = 0;
    var timers = [];
    var cleanups = [];

    function listen(target, type, fn, opts) {
      target.addEventListener(type, fn, opts);
      cleanups.push(function () { target.removeEventListener(type, fn, opts); });
    }

    // ------------------------------------------------------------ hero depth
    var hero = q('[data-hero]');
    var depthEls = hero ? qa('.depth', hero) : [];
    var hx = 0, hy = 0, tx = 0, ty = 0, heroLive = true;
    if (hero && fine && !reduce) {
      var stageEl = q('.hero-stage', hero);
      listen(stageEl, 'pointermove', function (e) {
        var r = stageEl.getBoundingClientRect();
        tx = (e.clientX - r.left) / r.width - 0.5;
        ty = (e.clientY - r.top) / r.height - 0.5;
      });
      listen(stageEl, 'pointerleave', function () { tx = 0; ty = 0; });
      if ('IntersectionObserver' in w) {
        var io = new IntersectionObserver(function (en) { heroLive = en[0].isIntersecting; }, { threshold: 0 });
        io.observe(hero);
        cleanups.push(function () { io.disconnect(); });
      }
    }

    // ------------------------------------------------------------------ tour
    var tour = q('[data-tour]');
    var tourStage = tour ? q('[data-step]', tour) : null;
    var lastStep = -1;

    // ------------------------------------------------------------------ lock
    var act = q('[data-vault-act]');
    var stage = act ? q('[data-vault-stage]', act) : null;
    var room = stage ? q('[data-vault-room]', stage) : null;
    var pad = stage ? q('.pad', stage) : null;
    var hint = stage ? q('[data-pad-hint]', stage) : null;
    var dots = stage ? qa('.pad-dots i', stage) : [];
    var manual = false;
    var mDigits = 0;
    var open = false;
    var openTimer = 0;
    var shownN = -1;

    function setStatus(state) { root.setAttribute('data-vault', state); }

    function setOpen(next) {
      if (next === open) return;
      open = next;
      stage.classList.toggle('is-open', open);
      room.setAttribute('aria-hidden', open ? 'false' : 'true');
      if (open) { room.removeAttribute('inert'); } else { room.setAttribute('inert', ''); }
      setStatus(open ? 'open' : 'locked');
    }

    function place() {
      if (!stage || !pad) return;
      var s = stage.getBoundingClientRect();
      var p = pad.getBoundingClientRect();
      stage.style.setProperty('--ox', (p.left + p.width / 2 - s.left).toFixed(0) + 'px');
      stage.style.setProperty('--oy', (p.top + p.height * 0.42 - s.top).toFixed(0) + 'px');
    }

    function scrollDigits(p) {
      return p < 0.14 ? 0 : p < 0.22 ? 1 : p < 0.3 ? 2 : p < 0.38 ? 3 : 4;
    }

    function renderDigits(n) {
      if (n === shownN) return;
      shownN = n;
      for (var i = 0; i < dots.length; i++) dots[i].classList.toggle('on', i < n);
      hint.textContent = n >= 4 ? 'Unlocked' : n > 0 ? n + ' of 4' : 'Enter your PIN';
      clearTimeout(openTimer);
      if (n >= 4) {
        openTimer = setTimeout(function () { place(); setOpen(true); }, 260);
      } else {
        setOpen(false);
      }
    }

    function currentN(p) { return manual ? mDigits : scrollDigits(p); }

    function press(key) {
      if (!act) return;
      var p = prog(act);
      var n = currentN(p);
      if (key === 'finger') {
        manual = true; mDigits = 4; renderDigits(4);
        return;
      }
      if (key === 'back') {
        manual = true; mDigits = clamp(n - 1, 0, 3); renderDigits(mDigits);
        return;
      }
      if (n >= 4) return;
      manual = true;
      mDigits = n + 1;
      renderDigits(mDigits);
    }

    if (act && stage && room && pad) {
      if (reduce) {
        // Motion off: the page simply arrives unlocked.
        place();
        setOpen(true);
        renderDigits(4);
        shownN = 4;
        stage.classList.add('is-open');
      } else {
        setStatus('locked');
        room.setAttribute('inert', '');
        qa('[data-key]', pad).forEach(function (b) {
          listen(b, 'click', function () { press(b.getAttribute('data-key')); });
        });
        listen(doc, 'keydown', function (e) {
          if (e.metaKey || e.ctrlKey || e.altKey) return;
          var t = e.target;
          if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
          var r = stage.getBoundingClientRect();
          var visible = r.top < innerHeight * 0.4 && r.bottom > innerHeight * 0.6;
          if (!visible) return;
          if (/^[0-9]$/.test(e.key)) press(e.key);
          else if (e.key === 'Backspace') press('back');
        });
        listen(w, 'resize', place);
        place();
      }
    }

    // ------------------------------------------------------------- the loop
    function frame() {
      raf = requestAnimationFrame(frame);

      if (hero && fine && !reduce && heroLive) {
        hx += (tx - hx) * 0.08;
        hy += (ty - hy) * 0.08;
        for (var i = 0; i < depthEls.length; i++) {
          var d = parseFloat(depthEls[i].getAttribute('data-depth')) || 1;
          depthEls[i].style.transform =
            'translate3d(' + (hx * d * -26).toFixed(2) + 'px,' + (hy * d * -16).toFixed(2) + 'px,0)';
        }
      }

      if (tourStage) {
        var tp = prog(tour);
        var step = tp < 0.25 ? 0 : tp < 0.5 ? 1 : tp < 0.75 ? 2 : 3;
        if (step !== lastStep) { lastStep = step; tourStage.setAttribute('data-step', String(step)); }
      }

      if (act && stage && !reduce) {
        var p = prog(act);
        // Leaving the scene (fully off screen) hands control back to scroll.
        if (manual) {
          var sr = stage.getBoundingClientRect();
          if (sr.bottom < 0 || sr.top > innerHeight) manual = false;
        }
        renderDigits(currentN(p));
      }
    }
    raf = requestAnimationFrame(frame);

    return function stop() {
      cancelAnimationFrame(raf);
      clearTimeout(openTimer);
      timers.forEach(clearTimeout);
      cleanups.forEach(function (fn) { fn(); });
      root.removeAttribute('data-vault');
    };
  }

  w.PSpaceLock = { init: init };
})(window);
