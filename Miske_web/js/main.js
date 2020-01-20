let graphics_on = false

function expandGraphics(elm) {
  graphics_on = !graphics_on
  let grfc = document.getElementById("scaleable-wrapper");
  if (graphics_on) {
    _showCanvas = true
    grfc.scrollIntoView();
    $(grfc).css({
      'height': '100vh',
    });
  } else {
    _showCanvas = false
    _resetCanvas = true
    $(grfc).css({
      'height': '0vh',
    });
  }
}

function socialMedia(elm) {
  if ($(elm).hasClass('insta')) {
    window.open(' https://www.instagram.com/miske_openforest/')
  } else if ($(elm).hasClass('facebook')) {
    window.open('https://www.facebook.com/MIŠKE-906926106018046/')
  } else if ($(elm).hasClass('twitter')) {
    window.open('https://twitter.com/MISKE09262495')
  }
}

// DOCUMENT READY
let mobile;
let mobileWidth = 800;
let heightPercent

$(document).ready(function () {
  // define if it is mobile or not
  if (window.innerWidth > mobileWidth) mobile = false;
  else {
    mobile = true
  }
});