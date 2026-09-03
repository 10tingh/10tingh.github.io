(function(){
  var bg = document.querySelector('.contact-bg');
  if (!bg) return;

  var reels = Array.prototype.slice.call(bg.querySelectorAll('.contact-panel-reel'));
  var paletteSize = 6; // must match the number of .contact-panel-block per reel
  if (!reels.length) return;

  // Initial state: panel i shows color i -- already pairwise adjacent-distinct
  // since it's a strictly increasing sequence.
  var current = reels.map(function(_, i){ return i % paletteSize; });

  function applyIndex(i){
    reels[i].style.transform = 'translateY(-' + (current[i] * (100 / paletteSize)) + '%)';
  }
  current.forEach(function(_, i){ applyIndex(i); });

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  // Gap between turns varies (some quick and back-to-back, some lingering) --
  // MIN stays comfortably above the .9s slide duration in style.css so two
  // turns can never overlap and break the "one panel at a time" guarantee.
  var MIN_DELAY = 1000;
  var MAX_DELAY = 6500;

  var lastPanel = -1;
  function pickPanel(){
    if (reels.length === 1) return 0;
    var i;
    do { i = Math.floor(Math.random() * reels.length); } while (i === lastPanel);
    return i;
  }

  function takeTurn(){
    var i = pickPanel();
    lastPanel = i;

    var left = i > 0 ? current[i - 1] : null;
    var right = i < reels.length - 1 ? current[i + 1] : null;
    var forbidden = [current[i], left, right];

    var choices = [];
    for (var c = 0; c < paletteSize; c++){
      if (forbidden.indexOf(c) === -1) choices.push(c);
    }
    var next = choices.length
      ? choices[Math.floor(Math.random() * choices.length)]
      : current[i]; // shouldn't happen (palette 6 vs at most 3 exclusions), but stay put rather than clash

    current[i] = next;
    applyIndex(i);

    scheduleNext();
  }

  function scheduleNext(){
    var delay = MIN_DELAY + Math.random() * (MAX_DELAY - MIN_DELAY);
    setTimeout(takeTurn, delay);
  }

  scheduleNext();
})();
