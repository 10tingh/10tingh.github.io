(function(){
  var navbar = document.querySelector('.navbar');
  var scrollport = document.getElementById('scrollport');
  if (!navbar || !scrollport) return;

  function setMetrics(){
    document.documentElement.style.setProperty('--nav-h', navbar.getBoundingClientRect().height + 'px');
    document.documentElement.style.setProperty('--page-h', scrollport.clientHeight + 'px');
  }
  setMetrics();
  window.addEventListener('resize', setMetrics);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(setMetrics);
  }

  var items = document.querySelectorAll('.page-inner');
  if (items.length) {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        entry.target.classList.toggle('is-visible', entry.isIntersecting);
      });
    }, { root: scrollport, threshold: 0.35 });

    items.forEach(function(el){ io.observe(el); });
  }

  // Highlight the nav link for whichever section's sticky stage is
  // currently in view. The mark ("Hi, I'm Tyler Entingh") lights up
  // instead when that section is the hero, which has no nav link of its own.
  var navMark = document.querySelector('.navbar-mark');
  var navLinks = document.querySelectorAll('.navbar-nav a');
  var stages = document.querySelectorAll('.page-stage');
  var progressBar = document.querySelector('.scroll-progress-bar');
  var activeStage = null;

  function updateProgressBar(){
    if (!progressBar || !activeStage) return;
    // Two phases, combined into one continuous 0-1 sweep:
    // 1) scrolling through the stage's own overflow, if it has any (scroll
    //    chaining means the outer scrollport won't move at all yet), then
    // 2) the outer scroll distance still needed to actually carry the snap
    //    container through the rest of this page's (stretched) height and
    //    into the next/previous one. Reaching "all the content" is only
    //    partway if there's a stretch of outer scroll still to go.
    var innerRange = Math.max(0, activeStage.scrollHeight - activeStage.clientHeight);
    var innerScrolled = Math.min(activeStage.scrollTop, innerRange);
    var pageEl = activeStage.closest('.page');
    var pageHeight = (pageEl ? pageEl.offsetHeight : scrollport.clientHeight) || 1;
    // Measured from this page's own offset rather than scrollTop % pageHeight:
    // at exact boundaries, subpixel rounding can make the modulo read as
    // ~100% of the *previous* page instead of ~0% of this one.
    var outerProgress = pageEl ? Math.max(0, Math.min(pageHeight, scrollport.scrollTop - pageEl.offsetTop)) : 0;
    var total = innerRange + pageHeight;
    var fraction = Math.max(0, Math.min(1, (innerScrolled + outerProgress) / total));
    progressBar.style.transform = 'scaleX(' + fraction + ')';
  }

  if (progressBar) {
    document.addEventListener('scroll', function(e){
      if (e.target === activeStage || e.target === scrollport) updateProgressBar();
    }, true);
    window.addEventListener('resize', updateProgressBar);
  }

  if (navLinks.length && stages.length) {
    var navMap = {};
    navLinks.forEach(function(a){
      var href = a.getAttribute('href') || '';
      if (href.charAt(0) === '#') navMap[href.slice(1)] = a;
    });

    var navObserver = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.intersectionRatio < 0.5) return;
        navLinks.forEach(function(a){ a.classList.remove('active'); });
        var pageEl = entry.target.closest('.page');
        var link = pageEl ? navMap[pageEl.id] : null;
        if (link) {
          link.classList.add('active');
          if (navMark) navMark.classList.remove('active');
        } else if (navMark) {
          navMark.classList.add('active');
        }
        activeStage = entry.target;
        updateProgressBar();
      });
    }, { root: scrollport, threshold: [0, 0.5, 1] });

    stages.forEach(function(s){ navObserver.observe(s); });
  }
})();
