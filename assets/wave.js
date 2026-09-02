(function(){
  var track = document.querySelector('.hero-wave-track');
  if(!track) return;
  var bands = Array.prototype.slice.call(track.querySelectorAll('.wave-band'));
  if(!bands.length) return;

  var baselines = [145, 190, 235, 280];

  // Two sine components per band, different wavelengths and speeds so their
  // interference pattern keeps evolving instead of just sliding sideways.
  var wave1 = { amp: 48, wavelength: 640, speed: (2 * Math.PI) / 9 };
  var wave2 = { amp: 24, wavelength: 260, speed: (2 * Math.PI) / 5.5 };

  var xs = [];
  for (var x = -20; x <= 1220; x += 14) xs.push(x);

  function buildD(baseline, phaseOffset, t){
    var parts = new Array(xs.length);
    for (var i = 0; i < xs.length; i++){
      var px = xs[i];
      var y = baseline
        + wave1.amp * Math.sin((px / wave1.wavelength) * 2 * Math.PI - t * wave1.speed + phaseOffset)
        + wave2.amp * Math.sin((px / wave2.wavelength) * 2 * Math.PI - t * wave2.speed + phaseOffset * 1.7);
      parts[i] = (i === 0 ? 'M' : 'L') + px.toFixed(1) + ',' + y.toFixed(1);
    }
    return parts.join(' ');
  }

  var startTime = null;
  function frame(ts){
    if (startTime === null) startTime = ts;
    var t = (ts - startTime) / 1000;
    for (var i = 0; i < bands.length; i++){
      bands[i].setAttribute('d', buildD(baselines[i], i * 0.38, t));
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
