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
  var BACKWARD_THRESHOLD = 165;
  // scrollTop is integer-rounded by the browser but scrollHeight-clientHeight
  // can be fractional, so "still has room to absorb" must tolerate a
  // sub-pixel gap -- otherwise scrollTop can permanently sit just below a
  // fractional innerRange and never register as exhausted.
  var OVERFLOW_EPSILON = 2;

  var currentIndex = 0;
  var accum = 0;

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

  function updateProgressBar(){
    if (!progressBar) return;
    var pageEl = pages[currentIndex];
    var innerRange = Math.max(0, pageEl.scrollHeight - pageEl.clientHeight);
    var innerScrolled = Math.min(pageEl.scrollTop, innerRange);
    var forwardAccum = Math.max(0, accum);
    var total = innerRange + FORWARD_THRESHOLD;
    var fraction = total > 0 ? Math.max(0, Math.min(1, (innerScrolled + forwardAccum) / total)) : 0;
    progressBar.style.transform = 'scaleX(' + fraction + ')';
  }

  function goTo(index){
    index = Math.max(0, Math.min(pages.length - 1, index));
    accum = 0;
    if (index === currentIndex) { updateProgressBar(); return; }
    currentIndex = index;
    track.style.transform = 'translateY(calc(-1 * var(--page-h) * ' + currentIndex + '))';
    updateNavActive();
    updateReveal();
    updateProgressBar();
    if (window.history && history.replaceState) {
      history.replaceState(null, '', '#' + pages[currentIndex].id);
    }
  }

  function applyDelta(deltaY){
    var pageEl = pages[currentIndex];
    var innerRange = pageEl.scrollHeight - pageEl.clientHeight;

    // Let the active page's own overflow (if any -- e.g. Experience's long
    // timeline) absorb the scroll first, before it counts toward paging.
    // Beyond the epsilon tolerance, also check that scrollTop actually moved:
    // browsers clamp scrollTop to their own internal (sometimes fractional)
    // max, which can sit fractionally below the integer scrollHeight-
    // clientHeight we compute here, so scrollTop can otherwise permanently
    // read as "still short of max" and never fall through to paging.
    if (innerRange > 1) {
      if (deltaY > 0 && pageEl.scrollTop < innerRange - OVERFLOW_EPSILON) {
        var beforeDown = pageEl.scrollTop;
        pageEl.scrollTop = Math.min(innerRange, pageEl.scrollTop + deltaY);
        if (pageEl.scrollTop > beforeDown) { updateProgressBar(); return; }
      } else if (deltaY < 0 && pageEl.scrollTop > OVERFLOW_EPSILON) {
        var beforeUp = pageEl.scrollTop;
        pageEl.scrollTop = Math.max(0, pageEl.scrollTop + deltaY);
        if (pageEl.scrollTop < beforeUp) { updateProgressBar(); return; }
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

  scrollport.addEventListener('wheel', function(e){
    e.preventDefault();
    applyDelta(e.deltaY);
  }, { passive: false });

  document.addEventListener('keydown', function(e){
    if (e.key === 'ArrowDown' || e.key === 'PageDown') { e.preventDefault(); goTo(currentIndex + 1); }
    else if (e.key === 'ArrowUp' || e.key === 'PageUp') { e.preventDefault(); goTo(currentIndex - 1); }
    else if (e.key === 'Home') { e.preventDefault(); goTo(0); }
    else if (e.key === 'End') { e.preventDefault(); goTo(pages.length - 1); }
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
    applyDelta(deltaY * 1.6);
  }, { passive: false });
  scrollport.addEventListener('touchend', function(){ touchY = null; });

  navLinks.forEach(function(a){
    a.addEventListener('click', function(e){
      var href = a.getAttribute('href') || '';
      if (href.charAt(0) !== '#') return;
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
