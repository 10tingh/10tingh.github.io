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
  var navLinks = document.querySelectorAll('.navbar-nav a');
  var pages = document.querySelectorAll('.page[id]');
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
        if (link) link.classList.add('active');
      });
    }, { root: scrollport, threshold: [0, 0.5, 1] });

    pages.forEach(function(p){ navObserver.observe(p); });
  }
})();
