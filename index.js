const menuBar = document.querySelector('.menuBar')
const menuBaricon = document.querySelector('.menuBar i')
const dropdownMenu = document.querySelector('.dropdownMenu')

menuBar.onclick = function () {
  dropdownMenu.classList.toggle('open')
  const isOpen = dropdownMenu.classList.contains('open')

  menuBaricon.classList = isOpen
  ? 'fa-solid fa-xmark'
  : 'fa-solid fa-bars'
}

