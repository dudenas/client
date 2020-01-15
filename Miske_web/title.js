// https://codepen.io/rachsmith/pen/YXyEVY
var _width, _scrollHeight;
var _movingElements = [];
var _scrollPercent = 0;
var pre = prefix();
var _jsPrefix = pre.lowercase;
if (_jsPrefix == 'moz') _jsPrefix = 'Moz'
var _cssPrefix = pre.css;

// make title go a bit earlier
let _startEarly = 0

// calculate the percentange at which it should change
let footer = document.getElementById('footer').offsetHeight;
let _containerHeight = document.body.offsetHeight - footer;
let _aboutHeight = (document.getElementById('about').offsetTop / _containerHeight)
let _teamHeight = (document.getElementById('team').offsetTop / _containerHeight)
let _artistsHeight = (document.getElementById('artists').offsetTop / _containerHeight)
let _donateHeight = (document.getElementById('donations').offsetTop / _containerHeight)
let _getInvolvedHeight = (document.getElementById('get-involved').offsetTop / _containerHeight)
let _contactHeight = (document.getElementById('contact').offsetTop / _containerHeight)

let _positions = [{
    name: 'about-title',
    start: {
      percent: _aboutHeight,
      x: -1,
      y: 0
    },
    end: {
      percent: _teamHeight,
      x: 1,
      y: 0
    }
  },
  {
    name: 'about-team',
    start: {
      percent: _teamHeight,
      x: -1,
      y: 0
    },
    end: {
      percent: _artistsHeight,
      x: 1,
      y: 0
    }
  },
  {
    name: 'about-artists',
    start: {
      percent: _artistsHeight,
      x: -1,
      y: 0
    },
    end: {
      percent: _donateHeight,
      x: 1,
      y: 0
    }
  },
  {
    name: 'about-donate',
    start: {
      percent: _donateHeight,
      x: -1,
      y: 0
    },
    end: {
      percent: _getInvolvedHeight,
      x: 1,
      y: 0
    }
  },
  {
    name: 'about-get-involved',
    start: {
      percent: _getInvolvedHeight,
      x: -1,
      y: 0
    },
    end: {
      percent: _contactHeight,
      x: 1,
      y: 0
    }
  },
  {
    name: 'about-contact',
    start: {
      percent: _contactHeight,
      x: -1,
      y: 0
    },
    end: {
      percent: 1,
      x: 1,
      y: 0
    }
  }
]

function updateData() {
  footer = document.getElementById('footer').offsetHeight;
  _containerHeight = document.body.offsetHeight - footer;
  _aboutHeight = (document.getElementById('about').offsetTop / _containerHeight)
  _teamHeight = (document.getElementById('team').offsetTop / _containerHeight)
  _artistsHeight = (document.getElementById('artists').offsetTop / _containerHeight)
  _donateHeight = (document.getElementById('donations').offsetTop / _containerHeight)
  _getInvolvedHeight = (document.getElementById('get-involved').offsetTop / _containerHeight)
  _contactHeight = (document.getElementById('contact').offsetTop / _containerHeight)
  let _footer = (document.getElementById('footer').offsetTop / _containerHeight);

  _positions[0].start.percent = _aboutHeight - _startEarly
  _positions[0].end.percent = _teamHeight + _startEarly
  _positions[1].start.percent = _teamHeight - _startEarly
  _positions[1].end.percent = _artistsHeight + _startEarly
  _positions[2].start.percent = _artistsHeight - _startEarly
  _positions[2].end.percent = _donateHeight + _startEarly
  _positions[3].start.percent = _donateHeight - _startEarly
  _positions[3].end.percent = _getInvolvedHeight + _startEarly
  _positions[4].start.percent = _getInvolvedHeight - _startEarly
  _positions[4].end.percent = _contactHeight + _startEarly
  _positions[5].start.percent = _contactHeight - _startEarly
  _positions[5].end.percent = _footer + _startEarly

  _scrollHeight = _containerHeight

  if (mobile) {
    heightPercent = window.innerHeight / _containerHeight
    for (let i = 0; i < _positions.length; i++) {
      _positions[i].start.y = heightPercent / 3
      _positions[i].end.y = heightPercent / 3
    }
  }
}

setTimeout(() => updateData(), 1000);
// update constantly as the images loads really slow
setInterval(() => updateData(), 10000);

resize();
initMovingElements();

function initMovingElements() {
  for (var i = 0; i < _positions.length; i++) {
    _positions[i].diff = {
      percent: _positions[i].end.percent - _positions[i].start.percent,
      x: _positions[i].end.x - _positions[i].start.x,
      y: _positions[i].end.y - _positions[i].start.y,
    }
    _positions[i].target = {};
    _positions[i].current = {};
    var el = document.getElementsByClassName('moving-title ' + _positions[i].name)[0];
    _movingElements.push(el);
  }
}

function resize() {
  _width = window.innerWidth;
  _scrollHeight = _containerHeight;
}

function updateElements() {
  for (var i = 0; i < _movingElements.length; i++) {
    var p = _positions[i];
    if (_scrollPercent <= p.start.percent) {
      p.target.x = p.start.x * _width;
      p.target.y = p.start.y * _containerHeight;
    } else if (_scrollPercent >= p.end.percent) {
      p.target.x = p.end.x * _width;
      p.target.y = p.end.y * _containerHeight;
    } else {
      p.target.x = p.start.x * _width + (p.diff.x * (_scrollPercent - p.start.percent) / p.diff.percent * _width);
      p.target.y = p.start.y * _containerHeight + (p.diff.y * (_scrollPercent - p.start.percent) / p.diff.percent * _containerHeight);
    }

    // lerp
    if (!p.current.x) {
      p.current.x = p.target.x;
      p.current.y = p.target.y;
    } else {
      p.current.x = p.current.x + (p.target.x - p.current.x) * 0.1;
      p.current.y = p.current.y + (p.target.y - p.current.y) * 0.1;
    }
    _movingElements[i].style[_jsPrefix + 'Transform'] = 'translate3d(' + p.current.x + 'px, ' +
      p.current.y + 'px, 0px)';
  }

  // UPDATE MENU
  updateMenu()
}

function updateMenu() {
  for (var i = 0; i < _movingElements.length; i++) {
    if (_positions[i].start.percent + _startEarly < _scrollPercent && _positions[i].end.percent - _startEarly > _scrollPercent) {
      if (!menuIsHovered) {
        mouseenterFuncManual(links[i])
        $('#title-mobile').html(links[i].innerHTML)
        break
      }
    }
  }
}



function loopTitle() {
  _scrollOffset = window.scrollY
  _scrollPercent = _scrollOffset / _scrollHeight || 0;
  updateElements();
  requestAnimationFrame(loopTitle);
}

loopTitle();

window.addEventListener('resize', resize);

/* prefix detection http://davidwalsh.name/vendor-prefix */

function prefix() {
  var styles = window.getComputedStyle(document.documentElement, ''),
    pre = (Array.prototype.slice
      .call(styles)
      .join('')
      .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
    )[1],
    dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
  return {
    dom: dom,
    lowercase: pre,
    css: '-' + pre + '-',
    js: pre[0].toUpperCase() + pre.substr(1)
  };
}