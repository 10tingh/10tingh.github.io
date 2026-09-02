(function(){
  var track = document.querySelector('.hero-wave-track');
  if(!track) return;
  var bands = Array.prototype.slice.call(track.querySelectorAll('.wave-band'));
  if(!bands.length) return;

  var baselines = [150, 195, 240, 285];
  var amplitude = 75;
  var wavelength = 620;
  var speed = (2 * Math.PI) / 7; // one full cycle every 7s, travels left to right

  var xs = [];
  for (var x = -20; x <= 1220; x += 16) xs.push(x);

  function buildD(baseline, phaseOffset, t){
    var parts = new Array(xs.length);
    for (var i = 0; i < xs.length; i++){
      var px = xs[i];
      var y = baseline + amplitude * Math.sin((px / wavelength) * 2 * Math.PI - t + phaseOffset);
      parts[i] = (i === 0 ? 'M' : 'L') + px.toFixed(1) + ',' + y.toFixed(1);
    }
    return parts.join(' ');
  }

  var startTime = null;
  function frame(ts){
    if (startTime === null) startTime = ts;
    var t = ((ts - startTime) / 1000) * speed;
    for (var i = 0; i < bands.length; i++){
      bands[i].setAttribute('d', buildD(baselines[i], i * 0.38, t));
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
