(function(){
  var triggers = document.querySelectorAll('.role-trigger');
  if (!triggers.length) return;

  triggers.forEach(function(btn){
    btn.addEventListener('click', function(){
      var wasOpen = btn.getAttribute('aria-expanded') === 'true';
      triggers.forEach(function(other){ other.setAttribute('aria-expanded', 'false'); });
      btn.setAttribute('aria-expanded', String(!wasOpen));
    });
  });
})();
