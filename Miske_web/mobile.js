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


// modalBurgerClose.addEventListener('click', () => {
//   modalBurgerOpen.style.display = "block"
//   modalBurgerClose.style.display = "none"
//   $('.mobile-menu')
//     .removeClass('mobile-menu-show').addClass('mobile-menu-hidden')
//   if (stage < 3) {
//     document.getElementById('intro').style.display = 'block';
//     mainGrfc.style.filter = 'blur(var(--blur-amount))';
//     mainGrfc.style.transform = 'scale(1.2, 1.2)';
//     $('.menu-outer-top')
//       .removeClass('mobile-menu-show').addClass('mobile-menu-hidden')
//       .toggleClass('opc-global-active')
//       .toggleClass('opc-global-disable')
//   } else {
//     $('.menu-outer-top')
//       .toggleClass('opc-global-active')
//       .toggleClass('opc-global-disable')
//     setTimeout(() => {
//       $('.menu-outer-top')
//         .removeClass('mobile-menu-show').addClass('mobile-menu-hidden')
//     }, 300)
//   }
//   setTimeout(() => {
//     document.querySelector('.menu-outer-top').style.top = '-100vh';
//   }, 100)
// })