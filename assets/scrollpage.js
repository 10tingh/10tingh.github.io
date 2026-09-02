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
  if (!items.length) return;

  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      entry.target.classList.toggle('is-visible', entry.isIntersecting);
    });
  }, { root: scrollport, threshold: 0.35 });

  items.forEach(function(el){ io.observe(el); });
})();
