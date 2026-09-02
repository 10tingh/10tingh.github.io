(function(){
  var track = document.querySelector('.hero-wave-track');
  if(!track) return;
  var bands = Array.prototype.slice.call(track.querySelectorAll('.wave-band'));
  if(!bands.length) return;

  var baselines = [150, 190, 230, 270];

  // A dominant gentle wave, plus a much smaller, slower second component so
  // the shape drifts and softly reshapes over time instead of repeating a
  // fixed hump — without reading as busy or jagged.
  var wave1 = { amp: 52, wavelength: 720, speed: (2 * Math.PI) / 10 };
  var wave2 = { amp: 10, wavelength: 500, speed: (2 * Math.PI) / 16 };

  var xs = [];
  for (var x = -20; x <= 1220; x += 14) xs.push(x);

  function buildD(baseline, t){
    var parts = new Array(xs.length);
    for (var i = 0; i < xs.length; i++){
      var px = xs[i];
      var y = baseline
        + wave1.amp * Math.sin((px / wave1.wavelength) * 2 * Math.PI - t * wave1.speed)
        + wave2.amp * Math.sin((px / wave2.wavelength) * 2 * Math.PI - t * wave2.speed);
      parts[i] = (i === 0 ? 'M' : 'L') + px.toFixed(1) + ',' + y.toFixed(1);
    }
    return parts.join(' ');
  }

  var startTime = null;
  function frame(ts){
    if (startTime === null) startTime = ts;
    var t = (ts - startTime) / 1000;
    for (var i = 0; i < bands.length; i++){
      bands[i].setAttribute('d', buildD(baselines[i], t));
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
