(function(){
  var navbar = document.querySelector('.navbar');
  var scrollport = document.getElementById('scrollport');
  var track = document.getElementById('pagesTrack');
  if (!navbar || !scrollport || !track) return;

  var pages = Array.prototype.slice.call(track.querySelectorAll('.page'));
  if (!pages.length) return;

  var navMark = document.querySelector('.navbar-mark');
  var navLinks = document.querySelectorAll('.navbar-nav a');
  var progressBar = document.querySelector('.scroll-progress-bar');

  // Forward advance takes a deliberate, sustained scroll; going back takes
  // much less -- reaching 100% on the bar is the one and only trigger for
  // advancing forward, since we (not the browser) decide exactly when that is.
  var FORWARD_THRESHOLD = 650;
  var BACKWARD_THRESHOLD = 206;
  // scrollTop is integer-rounded by the browser but scrollHeight-clientHeight
  // can be fractional, so "still has room to absorb" must tolerate a
  // sub-pixel gap -- otherwise scrollTop can permanently sit just below a
  // fractional innerRange and never register as exhausted.
  var OVERFLOW_EPSILON = 2;

  var currentIndex = 0;
  var accum = 0;

  // A trackpad swipe keeps emitting wheel events for a few hundred ms after
  // the physical gesture ends (momentum scrolling). Without a lock, those
  // trailing events land right after goTo() has already switched
  // currentIndex, and get fed straight into the new page's own scrollTop --
  // so the user arrives at a section and immediately gets scrolled past its
  // first content before they've seen it. Swallow input for the duration of
  // the slide transition so leftover momentum from the old gesture has
  // nothing left to act on by the time input is accepted again.
  var scrollLocked = false;
  var scrollLockTimer = null;
  function lockScroll(){
    scrollLocked = true;
    clearTimeout(scrollLockTimer);
    track.addEventListener('transitionend', onTrackTransitionEnd);
    // Fallback in case transitionend doesn't fire (e.g. transition
    // interrupted by another goTo, or reduced-motion edge cases).
    scrollLockTimer = setTimeout(unlockScroll, 750);
  }
  function onTrackTransitionEnd(e){
    if (e.target !== track || e.propertyName !== 'transform') return;
    unlockScroll();
  }
  function unlockScroll(){
    scrollLocked = false;
    clearTimeout(scrollLockTimer);
    track.removeEventListener('transitionend', onTrackTransitionEnd);
  }

  function setMetrics(){
    document.documentElement.style.setProperty('--nav-h', navbar.getBoundingClientRect().height + 'px');
    document.documentElement.style.setProperty('--page-h', scrollport.clientHeight + 'px');
  }
  setMetrics();
  window.addEventListener('resize', setMetrics);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(setMetrics);
  }

  var navMap = {};
  navLinks.forEach(function(a){
    var href = a.getAttribute('href') || '';
    if (href.charAt(0) === '#') navMap[href.slice(1)] = a;
  });

  function updateNavActive(){
    var id = pages[currentIndex].id;
    document.body.setAttribute('data-active-section', id);
    navLinks.forEach(function(a){ a.classList.remove('active'); });
    var link = navMap[id];
    if (link) {
      link.classList.add('active');
      if (navMark) navMark.classList.remove('active');
    } else if (navMark) {
      navMark.classList.add('active');
    }
  }

  function updateReveal(){
    pages.forEach(function(p, i){
      var inner = p.querySelector('.page-inner');
      if (inner) inner.classList.toggle('is-visible', i === currentIndex);
    });
  }

  // Setting scrollTop directly, once per wheel event, moves it in a single
  // discrete jump with nothing to interpolate the frames in between -- that
  // reads as choppy even though each individual jump is small. Instead, wheel
  // input only updates a *target* scrollTop, and a rAF loop eases the page's
  // actual scrollTop toward that target a little each frame, so the motion
  // is smooth regardless of how sparse or bursty the incoming wheel events are.
  var innerScrollTarget = null;
  var smoothRafId = null;
  var SMOOTH_EASE = 0.22;

  function ensureInnerTarget(pageEl){
    if (innerScrollTarget === null) innerScrollTarget = pageEl.scrollTop;
    return innerScrollTarget;
  }

  function cancelSmoothLoop(){
    if (smoothRafId !== null) { cancelAnimationFrame(smoothRafId); smoothRafId = null; }
  }

  function stepSmoothScroll(){
    var pageEl = pages[currentIndex];
    var target = innerScrollTarget === null ? pageEl.scrollTop : innerScrollTarget;
    var diff = target - pageEl.scrollTop;
    if (Math.abs(diff) < 0.5) {
      pageEl.scrollTop = target;
      smoothRafId = null;
      updateProgressBar();
      return;
    }
    pageEl.scrollTop += diff * SMOOTH_EASE;
    updateProgressBar();
    smoothRafId = requestAnimationFrame(stepSmoothScroll);
  }

  function setInnerTarget(v){
    innerScrollTarget = v;
    if (smoothRafId === null) smoothRafId = requestAnimationFrame(stepSmoothScroll);
  }

  function updateProgressBar(){
    if (!progressBar) return;
    var pageEl = pages[currentIndex];
    var innerRange = Math.max(0, pageEl.scrollHeight - pageEl.clientHeight);
    var innerPos = innerScrollTarget === null ? pageEl.scrollTop : innerScrollTarget;
    var innerScrolled = Math.min(innerPos, innerRange);
    var forwardAccum = Math.max(0, accum);
    var total = innerRange + FORWARD_THRESHOLD;
    var fraction = total > 0 ? Math.max(0, Math.min(1, (innerScrolled + forwardAccum) / total)) : 0;
    progressBar.style.transform = 'scaleX(' + fraction + ')';
  }

  function goTo(index){
    index = Math.max(0, Math.min(pages.length - 1, index));
    accum = 0;
    if (index === currentIndex) { updateProgressBar(); return; }
    cancelSmoothLoop();
    innerScrollTarget = null;
    currentIndex = index;
    track.style.transform = 'translateY(calc(-1 * var(--page-h) * ' + currentIndex + '))';
    updateNavActive();
    updateReveal();
    updateProgressBar();
    lockScroll();
    if (window.history && history.replaceState) {
      history.replaceState(null, '', '#' + pages[currentIndex].id);
    }
  }

  function applyDelta(deltaY){
    var pageEl = pages[currentIndex];
    var innerRange = pageEl.scrollHeight - pageEl.clientHeight;

    // Let the active page's own overflow (if any -- e.g. Experience's long
    // timeline) absorb the scroll first, before it counts toward paging.
    // Only ever consume up to whatever room is actually left and carry the
    // *leftover* delta through to the paging logic below in this same call
    // -- a single large gesture (a fast trackpad swipe, or several wheel
    // ticks coalesced into one event) that both finishes the content AND
    // has scroll left over must still count that remainder toward paging,
    // or a big scroll can get silently swallowed right at the boundary and
    // every subsequent small gesture has to rebuild paging progress from
    // zero, which reads as being stuck.
    // Room/consumption is measured against the target, not the (eased,
    // lagging) actual scrollTop -- otherwise a burst of wheel events would
    // think there's still room left that a prior event already claimed.
    if (innerRange > 1) {
      var target = ensureInnerTarget(pageEl);
      if (deltaY > 0 && target < innerRange - OVERFLOW_EPSILON) {
        var room = innerRange - target;
        var consumed = Math.min(deltaY, room);
        setInnerTarget(target + consumed);
        deltaY -= consumed;
        if (deltaY <= 0) { updateProgressBar(); return; }
      } else if (deltaY < 0 && target > OVERFLOW_EPSILON) {
        var roomUp = target;
        var consumedUp = Math.min(-deltaY, roomUp);
        setInnerTarget(target - consumedUp);
        deltaY += consumedUp;
        if (deltaY >= 0) { updateProgressBar(); return; }
      }
    }

    // Reversing direction discards any progress built up the other way --
    // scrolling back up is never held hostage by prior forward progress.
    if (deltaY > 0 && accum < 0) accum = 0;
    if (deltaY < 0 && accum > 0) accum = 0;
    accum += deltaY;

    if (accum >= FORWARD_THRESHOLD && currentIndex < pages.length - 1) {
      goTo(currentIndex + 1);
      return;
    }
    if (accum <= -BACKWARD_THRESHOLD && currentIndex > 0) {
      goTo(currentIndex - 1);
      return;
    }
    accum = Math.max(-BACKWARD_THRESHOLD, Math.min(FORWARD_THRESHOLD, accum));
    updateProgressBar();
  }

  // Raw wheel/trackpad deltas map almost 1:1 onto both inner-page scrollTop
  // and paging progress, which is far more sensitive than it feels like it
  // should be -- a single native scroll tick is easily 100+ px, enough to
  // carry a whole section header off screen before the user can react.
  // Scale every input down so it takes a noticeably bigger physical gesture
  // to move the same visual distance.
  var SCROLL_SCALE = 0.3;

  function normalizedWheelDelta(e){
    // A plain mouse wheel (as opposed to a trackpad) commonly reports
    // deltaMode 1 (DOM_DELTA_LINE), where deltaY is a tiny number like 3
    // rather than a pixel count -- our thresholds assume pixels, so treating
    // a line-mode delta literally would make forward/backward progress
    // accumulate at a small fraction of the intended rate.
    var px;
    if (e.deltaMode === 1) px = e.deltaY * 34;
    else if (e.deltaMode === 2) px = e.deltaY * scrollport.clientHeight;
    else px = e.deltaY;
    return px * SCROLL_SCALE;
  }

  scrollport.addEventListener('wheel', function(e){
    e.preventDefault();
    if (scrollLocked) return;
    applyDelta(normalizedWheelDelta(e));
  }, { passive: false });

  document.addEventListener('keydown', function(e){
    // Don't hijack Home/End/PageUp/PageDown/Arrow keys from form fields --
    // someone editing the contact message textarea needs those for normal
    // text-cursor movement, not to page the whole site out from under them.
    var tag = e.target && e.target.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || (e.target && e.target.isContentEditable)) return;
    if (e.key === 'ArrowDown' || e.key === 'PageDown') { e.preventDefault(); if (!scrollLocked) goTo(currentIndex + 1); }
    else if (e.key === 'ArrowUp' || e.key === 'PageUp') { e.preventDefault(); if (!scrollLocked) goTo(currentIndex - 1); }
    else if (e.key === 'Home') { e.preventDefault(); if (!scrollLocked) goTo(0); }
    else if (e.key === 'End') { e.preventDefault(); if (!scrollLocked) goTo(pages.length - 1); }
  });

  var touchY = null;
  scrollport.addEventListener('touchstart', function(e){
    touchY = e.touches[0].clientY;
  }, { passive: true });
  scrollport.addEventListener('touchmove', function(e){
    if (touchY === null) return;
    var y = e.touches[0].clientY;
    var deltaY = touchY - y;
    touchY = y;
    e.preventDefault();
    if (scrollLocked) return;
    applyDelta(deltaY * 1.6);
  }, { passive: false });
  scrollport.addEventListener('touchend', function(){ touchY = null; });

  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      var href = a.getAttribute('href') || '';
      var idx = pages.findIndex(function(p){ return p.id === href.slice(1); });
      if (idx >= 0) { e.preventDefault(); goTo(idx); }
    });
  });
  if (navMark) {
    navMark.addEventListener('click', function(e){ e.preventDefault(); goTo(0); });
  }

  var initialId = location.hash.replace('#', '');
  var initialIdx = pages.findIndex(function(p){ return p.id === initialId; });
  currentIndex = initialIdx >= 0 ? initialIdx : 0;
  track.style.transition = 'none';
  track.style.transform = 'translateY(calc(-1 * var(--page-h) * ' + currentIndex + '))';
  requestAnimationFrame(function(){ track.style.transition = ''; });

  updateNavActive();
  updateReveal();
  updateProgressBar();
})();
