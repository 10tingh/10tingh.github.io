(function(){
  var carousel = document.getElementById('pillarsCarousel');
  if (!carousel) return;

  var track = document.getElementById('pillarsTrack');
  var slides = Array.prototype.slice.call(track.querySelectorAll('.pillar'));
  var dotsWrap = carousel.querySelector('.pillars-dots');
  var prevBtn = carousel.querySelector('.pillars-prev');
  var nextBtn = carousel.querySelector('.pillars-next');
  if (!slides.length) return;

  var dots = slides.map(function(_, i){
    var dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'pillars-dot';
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-label', 'Pillar ' + (i + 1) + ' of ' + slides.length);
    dot.addEventListener('click', function(){ goTo(i); });
    dotsWrap.appendChild(dot);
    return dot;
  });

  var index = 0;

  function goTo(i){
    index = (i + slides.length) % slides.length;
    track.style.transform = 'translateX(-' + (index * 100) + '%)';
    dots.forEach(function(dot, i2){
      dot.classList.toggle('is-active', i2 === index);
      dot.setAttribute('aria-selected', i2 === index ? 'true' : 'false');
    });
  }

  prevBtn.addEventListener('click', function(){ goTo(index - 1); });
  nextBtn.addEventListener('click', function(){ goTo(index + 1); });

  carousel.addEventListener('keydown', function(e){
    if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(index - 1); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); goTo(index + 1); }
  });

  goTo(0);
})();
