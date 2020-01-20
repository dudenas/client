// navigation
document.querySelector('#hamburger').addEventListener('click', () => {
  $('nav').css({
    'left': '0',
    'box-shadow': '0px 0px 50px 0px rgba(75, 75, 75, 1)'
  })

  $('#hamburger').css({
    'right': '-15vw',
  })
})

function closeMenu() {
  $('nav').css({
    'left': '-80vw',
    'box-shadow': '0px 0px 0px 0px rgba(75, 75, 75, 1)'
  })

  $('#hamburger').css({
    'right': '5vw',
  })
}