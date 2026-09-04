(function(){
  var track = document.querySelector('.hero-wave-track');
  if(!track) return;
  var bands = Array.prototype.slice.call(track.querySelectorAll('.wave-band'));
  if(!bands.length) return;

  // The stack is drawn as shared boundary curves (top edge of band 0 down
  // through the bottom edge of the last band) rather than independent
  // centered strokes -- each band is the filled area between two adjacent
  // boundaries, so when a band's thickness grows it visibly pushes its
  // neighbor's shared edge rather than sliding invisibly behind it.
  var TOP_OFFSET = 131;
  var BASE_WIDTH = 34;
  var WIDTH_AMP = 5;
  var WIDTH_SPEED = (2 * Math.PI) / 13;

  // A dominant gentle wave, plus a much smaller, slower second component so
  // the shape drifts and softly reshapes over time instead of repeating a
  // fixed hump — without reading as busy or jagged.
  var wave1 = { amp: 52, wavelength: 720, speed: (2 * Math.PI) / 10 };
  var wave2 = { amp: 10, wavelength: 500, speed: (2 * Math.PI) / 16 };

  var xs = [];
  for (var x = -20; x <= 1220; x += 14) xs.push(x);

  function waveY(px, t){
    return wave1.amp * Math.sin((px / wave1.wavelength) * 2 * Math.PI - t * wave1.speed)
         + wave2.amp * Math.sin((px / wave2.wavelength) * 2 * Math.PI - t * wave2.speed);
  }

  // Per-band phase offset so the four thicknesses breathe out of sync with
  // each other instead of swelling and shrinking all at once.
  function thickness(i, t){
    var phase = i * (Math.PI / 2);
    return BASE_WIDTH + WIDTH_AMP * Math.sin(t * WIDTH_SPEED - phase);
  }

  function buildBandD(topOffset, bottomOffset, t){
    var top = new Array(xs.length);
    var bottom = new Array(xs.length);
    for (var i = 0; i < xs.length; i++){
      var px = xs[i];
      var w = waveY(px, t);
      top[i] = px.toFixed(1) + ',' + (topOffset + w).toFixed(1);
      bottom[i] = px.toFixed(1) + ',' + (bottomOffset + w).toFixed(1);
    }
    return 'M' + top.join(' L') + ' L' + bottom.reverse().join(' L') + ' Z';
  }

  function paintAt(t){
    var boundaries = [TOP_OFFSET];
    for (var i = 0; i < bands.length; i++){
      boundaries.push(boundaries[i] + thickness(i, t));
    }
    for (var i = 0; i < bands.length; i++){
      bands[i].setAttribute('d', buildBandD(boundaries[i], boundaries[i + 1], t));
    }
  }

  // Runs forever by design (it's a decorative background), so respect
  // prefers-reduced-motion the same way the lava blobs and contact panels
  // do elsewhere on the site: paint one still frame instead of animating.
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    paintAt(0);
    return;
  }

  var startTime = null;
  function frame(ts){
    if (startTime === null) startTime = ts;
    paintAt((ts - startTime) / 1000);
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
