// BURGER --------------

document.querySelector('.icon-menu').addEventListener('click', function() {
  document.querySelector('.burger__menu').classList.add('burger__menu-is-active')
})

document.querySelector('.icon-close-menu').addEventListener('click', function() {
  document.querySelector('.burger__menu').classList.remove('burger__menu-is-active')
})
