(function(){
  var navbar = document.querySelector('.navbar');
  var scrollport = document.getElementById('scrollport');
  if (!navbar || !scrollport) return;

  function setNavHeight(){
    document.documentElement.style.setProperty('--nav-h', navbar.getBoundingClientRect().height + 'px');
  }
  setNavHeight();
  window.addEventListener('resize', setNavHeight);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(setNavHeight);
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

  // Highlight the nav link for whichever section is currently in view.
  // The mark ("Hi, I'm Tyler Entingh") lights up instead when that section
  // is the hero, which has no nav link of its own.
  var navMark = document.querySelector('.navbar-mark');
  var navLinks = document.querySelectorAll('.navbar-nav a');
  var pages = document.querySelectorAll('.page[id]');
  var progressBar = document.querySelector('.scroll-progress-bar');
  var activePage = null;

  function updateProgressBar(){
    if (!progressBar || !activePage) return;
    // Two phases, combined into one continuous 0-1 sweep:
    // 1) scrolling through the page's own overflow, if it has any (scroll
    //    chaining means the outer scrollport won't move at all yet), then
    // 2) the outer scroll distance still needed to actually carry the snap
    //    container to the next/previous page, once that content is
    //    exhausted. Reaching "all the content" is only the halfway point if
    //    there's a full page-height of outer scroll still to go.
    var innerRange = Math.max(0, activePage.scrollHeight - activePage.clientHeight);
    var innerScrolled = Math.min(activePage.scrollTop, innerRange);
    var pageHeight = scrollport.clientHeight || 1;
    var outerProgress = scrollport.scrollTop % pageHeight;
    var total = innerRange + pageHeight;
    var fraction = Math.max(0, Math.min(1, (innerScrolled + outerProgress) / total));
    progressBar.style.transform = 'scaleX(' + fraction + ')';
  }

  if (progressBar) {
    document.addEventListener('scroll', function(e){
      if (e.target === activePage || e.target === scrollport) updateProgressBar();
    }, true);
    window.addEventListener('resize', updateProgressBar);
  }

  if (navLinks.length && pages.length) {
    var navMap = {};
    navLinks.forEach(function(a){
      var href = a.getAttribute('href') || '';
      if (href.charAt(0) === '#') navMap[href.slice(1)] = a;
    });

    var navObserver = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.intersectionRatio < 0.5) return;
        navLinks.forEach(function(a){ a.classList.remove('active'); });
        var link = navMap[entry.target.id];
        if (link) {
          link.classList.add('active');
          if (navMark) navMark.classList.remove('active');
        } else if (navMark) {
          navMark.classList.add('active');
        }
        activePage = entry.target;
        updateProgressBar();
      });
    }, { root: scrollport, threshold: [0, 0.5, 1] });

    pages.forEach(function(p){ navObserver.observe(p); });
  }
})();
