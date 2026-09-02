(function(){
  var toggle = document.querySelector('.navbar-toggle');
  var nav = document.querySelector('.navbar-nav');
  if (!toggle || !nav) return;

  function setOpen(open){
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    nav.classList.toggle('is-open', open);
  }

  toggle.addEventListener('click', function(){
    setOpen(toggle.getAttribute('aria-expanded') !== 'true');
  });

  nav.querySelectorAll('a').forEach(function(link){
    link.addEventListener('click', function(){ setOpen(false); });
  });

  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape') setOpen(false);
  });
})();
