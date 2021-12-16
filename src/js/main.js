const menu = document.getElementById('menu')

const openMenu = () => {
    menu.classList.add('show-menu')
    menu.classList.remove('hide-menu')
}
const hideMenu = () => {
    menu.classList.add('hide-menu')
    menu.classList.remove('show-menu')
}