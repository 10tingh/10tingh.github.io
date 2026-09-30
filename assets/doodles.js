(function(){
  // Hand-drawn Chicago doodles that sketch themselves into #experience's
  // background, a few at a time. Same split as contact-panels.js: JS
  // picks what/where/when, CSS (style.css, .doodle) does the drawing and
  // fading. Each path uses pathLength="1" so the stroke-dash "draw on"
  // animation works regardless of the path's real length.
  var layer = document.querySelector('.doodle-bg-inner');
  if (!layer) return;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Marina City tower: rounded top plus rows of scalloped balconies.
  function cob(x){
    var rows = '';
    for (var y = 46; y <= 92; y += 10) rows += 'M' + x + ' ' + y + ' q5.5 5 11 0 q5.5 5 11 0 ';
    return ['M' + x + ' 108 V38 C' + x + ' 28 ' + (x + 22) + ' 28 ' + (x + 22) + ' 38 V108', rows];
  }

  // All drawn in a 120x120 box. Geometry is kept simple on purpose -- the
  // #doodle-wobble SVG filter roughens the lines into a hand-drawn feel.
  var DOODLES = {
    hancock: [ // John Hancock Center
      'M26 108 H96',
      'M38 108 L46 24 H74 L82 108',
      'M42 66 H78',
      'M46 24 L78 66 M74 24 L42 66 M42 66 L82 108 M78 66 L38 108',
      'M54 24 V6 M66 24 V10'
    ],
    marina: [].concat(cob(28), cob(70), ['M18 108 H102']), // Marina City
    wrigleybldg: [ // Wrigley Building clock tower
      'M20 108 H100',
      'M26 108 V64 H94 V108',
      'M32 76 H88 M32 90 H88',
      'M48 64 V30 H72 V64',
      'M53 44 a7 7 0 1 0 14 0 a7 7 0 1 0 -14 0',
      'M60 44 V39 M60 44 H64',
      'M50 30 L52 22 H68 L70 30 M60 22 V10'
    ],
    fountain: [ // Buckingham Fountain
      'M10 100 C10 108 110 108 110 100 Z',
      'M28 86 H92 L86 96 H34 Z',
      'M40 70 H80 L76 78 H44 Z',
      'M50 56 H70 L67 62 H53 Z',
      'M58 62 V70 M62 62 V70 M56 78 V86 M64 78 V86',
      'M60 56 V16',
      'M60 22 C50 26 46 40 44 54 M60 22 C70 26 74 40 76 54',
      'M28 86 C20 88 16 94 14 100 M92 86 C100 88 104 94 106 100'
    ],
    drawbridge: [ // raised bascule bridge over the river
      'M6 100 q8 -4 16 0 t16 0 t16 0 t16 0 t16 0 t16 0 t16 0',
      'M6 84 H30 V100 M114 84 H90 V100',
      'M30 84 L50 34 L56 36 L38 84',
      'M90 84 L70 34 L64 36 L82 84',
      'M14 84 V70 H26 V84 M12 70 L20 62 L28 70 M94 84 V70 H106 V84 M92 70 L100 62 L108 70'
    ],
    twoflat: [ // Chicago two-flat
      'M24 108 H96',
      'M32 108 V36 H88 V108',
      'M28 36 H92 M30 30 H90 V36 M30 30 V36',
      'M32 68 H88',
      'M38 46 H50 V62 H38 Z M54 46 H66 V62 H54 Z M70 46 H82 V62 H70 Z',
      'M38 76 H50 V92 H38 Z M54 76 H66 V92 H54 Z',
      'M70 104 V78 H82 V104',
      'M66 108 V104 H86 V108'
    ],
    beef: [ // Italian beef, dipped
      'M14 58 C14 32 106 32 106 58',
      'M6 62 q5 -5 10 0 t10 0 t10 0 t10 0 t10 0 t10 0 t10 0 t10 0 t10 0 t10 0 t10 0',
      'M14 68 C14 86 106 86 106 68',
      'M48 84 c-1 5 3 7 2 12 M76 82 c-1 4 2 5 1 9',
      'M36 44 q2 -4 4 0 M58 40 q2 -4 4 0 M80 44 q2 -4 4 0'
    ],
    malort: [ // Malört shot, with fumes
      'M42 44 L48 104 H72 L78 44 Z',
      'M44 60 H76',
      'M52 36 q-4 -6 0 -12 t0 -12 M68 36 q-4 -6 0 -12 t0 -12'
    ],
    baseball: [
      'M24 60 a36 36 0 1 0 72 0 a36 36 0 1 0 -72 0',
      'M40 32 C52 48 52 72 40 88 M80 32 C68 48 68 72 80 88',
      'M42 40 l6 -3 M46 50 l6 -2 M47 60 h6 M46 70 l6 2 M42 80 l6 3',
      'M78 40 l-6 -3 M74 50 l-6 -2 M73 60 h-6 M74 70 l-6 2 M78 80 l-6 3'
    ],
    guitar: [ // blues guitar
      'M60 62 C46 58 42 70 48 76 C34 78 32 104 60 106 C88 104 86 78 72 76 C78 70 74 58 60 62 Z',
      'M57 62 V14 M63 62 V14',
      'M55 14 V4 H65 V14 Z',
      'M54 84 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0',
      'M52 96 H68 M60 14 V96',
      'M57 24 H63 M57 34 H63 M57 44 H63'
    ],
    shovel: [ // snow shovel
      'M30 10 H46 M38 10 V18',
      'M36 18 L64 74 M40 16 L68 72',
      'M60 74 L78 70 L92 100 C86 110 72 112 64 106 Z',
      'M40 112 C50 100 66 104 74 112 M90 112 C98 102 106 104 114 112',
      'M16 54 l6 6 M22 54 l-6 6 M14 57 h10 M96 30 l6 6 M102 30 l-6 6 M94 33 h10'
    ],
    umbrella: [ // flipped umbrella in the wind
      'M14 26 C24 48 44 58 60 58 C76 58 96 48 106 26',
      'M14 26 q12 8 23 2 q12 8 23 0 q12 8 23 2 q12 8 23 -4',
      'M60 58 L37 28 M60 58 L60 28 M60 58 L83 30',
      'M60 58 V100 C60 108 50 108 50 100',
      'M4 74 C20 70 30 78 44 72 M70 84 C84 78 96 86 114 80'
    ],
    sailboat: [ // Lake Michigan
      'M6 92 q7 -6 14 0 t14 0 t14 0 t14 0 t14 0 t14 0 t14 0 t14 0',
      'M30 80 H94 L84 92 H40 Z',
      'M62 80 V16',
      'M60 20 V74 H30 Z',
      'M64 26 V74 H90 Z',
      'M62 16 l8 3 l-8 3',
      'M20 104 q7 -5 14 0 t14 0 M70 106 q7 -5 14 0 t14 0'
    ],
    willis: [ // Willis Tower
      'M24 108 H96',
      'M36 108 V58 H46 V40 H54 V30 H66 V40 H74 V52 H84 V108',
      'M55 30 V10 M65 30 V14',
      'M46 70 H74 M46 84 H74 M46 96 H74'
    ],
    bean: [ // Cloud Gate
      'M14 94 H106',
      'M22 78 C18 58 34 44 50 50 C56 53 64 53 70 50 C86 44 102 58 98 78 C96 88 84 90 76 84 C68 78 52 78 44 84 C36 90 24 88 22 78 Z',
      'M34 62 C44 58 52 62 58 60'
    ],
    star: [ // Chicago flag star
      'M60 20 L69 44.4 L94.6 40 L78 60 L94.6 80 L69 75.6 L60 100 L51 75.6 L25.4 80 L42 60 L25.4 40 L51 44.4 Z'
    ],
    ltrain: [ // 'L' car on the elevated track
      'M18 44 H102 V74 H18 Z',
      'M26 50 H40 V62 H26 Z M48 50 H62 V62 H48 Z M70 50 H84 V62 H70 Z',
      'M92 48 V72',
      'M27 80 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0 M83 80 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0',
      'M8 86 H112',
      'M20 86 L28 108 M44 86 L36 108 M76 86 L84 108 M100 86 L92 108 M24 98 H40 M80 98 H96'
    ],
    pizza: [ // deep dish slice
      'M60 104 L24 32 C44 22 76 22 96 32 Z',
      'M22 38 C44 28 76 28 98 38',
      'M46 50 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0 M65 58 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0 M55 78 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0',
      'M40 64 C38 72 44 72 42 80'
    ],
    hotdog: [ // Chicago-style, no ketchup
      'M20 58 C20 40 100 40 100 58',
      'M6 62 C6 52 114 52 114 62 C114 72 6 72 6 62 Z',
      'M16 68 C16 90 104 90 104 68',
      'M26 62 l6 -4 l6 4 l6 -4 l6 4 l6 -4 l6 4 l6 -4 l6 4 l6 -4 l6 4 l6 -4',
      'M40 53 q4 -10 8 0 M70 53 q4 -10 8 0'
    ],
    ferris: [ // Navy Pier wheel
      'M24 52 a36 36 0 1 0 72 0 a36 36 0 1 0 -72 0',
      'M60 16 V88 M24 52 H96 M34.5 26.5 L85.5 77.5 M85.5 26.5 L34.5 77.5',
      'M55 52 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0',
      'M60 52 L40 108 M60 52 L80 108 M28 108 H92'
    ],
    watertower: [ // Water Tower
      'M26 108 H94',
      'M40 108 V60 H80 V108',
      'M36 108 V66 H40 M84 108 V66 H80',
      'M52 60 V30 H68 V60',
      'M50 30 L60 8 L70 30',
      'M54 108 V94 C54 86 66 86 66 94 V108',
      'M46 72 V80 M74 72 V80'
    ]
  };
  var NAMES = Object.keys(DOODLES);
  var SVG_NS = 'http://www.w3.org/2000/svg';

  var DRAW_MS = 2200;   // ~ stroke stagger (55% of this) + the 1s per-stroke draw in style.css
  var HOLD_MS = 2600;
  var FADE_MS = 900;    // matches .doodle.is-leaving transition
  var MIN_GAP = 900, MAX_GAP = 2000;
  var MAX_LIVE = 4;
  var BIG_CHANCE = .2;  // share of doodles drawn large (and fainter) for depth

  var live = [];        // {el, x, y, size}
  var lastName = null;
  var timer = null;

  function isActive(){
    return document.body.getAttribute('data-active-section') === 'experience' && !document.hidden;
  }

  function pickName(){
    var n;
    do { n = NAMES[Math.floor(Math.random() * NAMES.length)]; } while (n === lastName && NAMES.length > 1);
    lastName = n;
    return n;
  }

  // Prefer the side gutters beside the 920px content column when they're
  // wide enough; otherwise anywhere (doodles are faint enough to sit under
  // text). Retries a few times to avoid landing on a doodle already showing.
  function pickSpot(size){
    var w = layer.clientWidth, h = layer.clientHeight;
    var gutter = (w - 920) / 2;
    var top = 80, bottom = h - size - 24;
    var best = null;
    for (var tries = 0; tries < 12; tries++){
      var x;
      if (gutter >= size + 32){
        var left = Math.random() < .5;
        x = left ? 16 + Math.random() * (gutter - size - 32)
                 : w - gutter + 16 + Math.random() * (gutter - size - 32);
      } else {
        x = 16 + Math.random() * Math.max(0, w - size - 32);
      }
      var y = top + Math.random() * Math.max(0, bottom - top);
      var clear = live.every(function(d){
        return Math.hypot(d.x - x, d.y - y) > (d.size + size) * .75;
      });
      best = {x:x, y:y};
      if (clear) break;
    }
    return best;
  }

  function spawn(){
    var name = pickName();
    var big = Math.random() < BIG_CHANCE;
    var size = big ? 170 + Math.round(Math.random() * 50) : 70 + Math.round(Math.random() * 45);
    var spot = pickSpot(size);
    var tilt = (Math.random() * 16 - 8).toFixed(1);

    var svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttribute('viewBox', '0 0 120 120');
    svg.setAttribute('class', big ? 'doodle doodle--big' : 'doodle');
    // Stroke width is in viewBox units, so scale it inversely with size to
    // keep the on-screen pen line about the same weight on every doodle.
    svg.style.cssText = 'left:' + spot.x + 'px; top:' + spot.y + 'px; width:' + size +
      'px; height:' + size + 'px; transform:rotate(' + tilt + 'deg);' +
      '--doodle-stroke:' + (2.4 * 120 / size).toFixed(2) + ';';

    var paths = DOODLES[name];
    var g = document.createElementNS(SVG_NS, 'g');
    g.setAttribute('filter', 'url(#doodle-wobble)');
    paths.forEach(function(d, i){
      var p = document.createElementNS(SVG_NS, 'path');
      p.setAttribute('d', d);
      p.setAttribute('pathLength', '1');
      // Stroke-by-stroke, like a pen: later strokes start before earlier
      // ones finish so it reads as one continuous sketch.
      p.style.animationDelay = (i * (DRAW_MS * .55 / paths.length)) + 'ms';
      g.appendChild(p);
    });
    svg.appendChild(g);
    layer.appendChild(svg);

    var entry = {el:svg, x:spot.x, y:spot.y, size:size};
    live.push(entry);

    setTimeout(function(){
      svg.classList.add('is-leaving');
      setTimeout(function(){
        svg.remove();
        live = live.filter(function(d){ return d !== entry; });
      }, FADE_MS);
    }, DRAW_MS + HOLD_MS);
  }

  function tick(){
    if (isActive() && live.length < MAX_LIVE) spawn();
    timer = setTimeout(tick, MIN_GAP + Math.random() * (MAX_GAP - MIN_GAP));
  }

  // Start one right away when the section is arrived at, instead of making
  // the visitor wait out a full gap on an empty background.
  new MutationObserver(function(){
    if (isActive() && !live.length){
      clearTimeout(timer);
      spawn();
      tick();
    }
  }).observe(document.body, {attributes:true, attributeFilter:['data-active-section']});

  tick();
})();
