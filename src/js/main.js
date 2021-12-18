const menu = document.getElementById('menu')

const openMenu = () => {
    menu.classList.add('show-menu')
    menu.classList.remove('hide-menu')
}
const hideMenu = () => {
    menu.classList.add('hide-menu')
    menu.classList.remove('show-menu')
}

/* Show and hide tech */
const html = document.getElementById('html')
const css = document.getElementById('css')
const js = document.getElementById('js')
const sass = document.getElementById('sass')
const git = document.getElementById('git')
const github = document.getElementById('github')

/* html */
const showHtmlDescription = () => {
    html.classList.remove('icon-description--hide')
}
const closeHtmlDescription = () => {
    html.classList.add('icon-description--hide')
}
/* css */
const showCssDescription = () => {
    css.classList.remove('icon-description--hide')
}
const closeCssDescription = () => {
    css.classList.add('icon-description--hide')
}
/* js */
const showJsDescription = () => {
    js.classList.remove('icon-description--hide')
}
const closeJsDescription = () => {
    js.classList.add('icon-description--hide')
}
/* Sass */
const showSassDescription = () => {
    sass.classList.remove('icon-description--hide')
}
const closeSassDescription = () => {
    sass.classList.add('icon-description--hide')
}
/* Git */
const showGitDescription = () => {
    git.classList.remove('icon-description--hide')
}
const closeGitDescription = () => {
    git.classList.add('icon-description--hide')
}
/* Github */
const showGithubDescription = () => {
    github.classList.remove('icon-description--hide')
}
const closeGithubDescription = () => {
    github.classList.add('icon-description--hide')
}
