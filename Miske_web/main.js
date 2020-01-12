let graphics_on = false

function expandGraphics(elm) {
  graphics_on = !graphics_on
  let grfc = document.getElementById("before");
  if (graphics_on) {
    grfc.scrollIntoView();
    $(grfc).css({
      'height': '100vh',
    }); //The specific CSS changes after the first one, are, of course, just examples.
  } else {
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