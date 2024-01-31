// CSS
import './src/css/fonts.css'
import './src/css/base.css'
import './src/css/nav.scss'
import './src/css/header.scss'
import './src/css/application.scss'
// JS
import { nav } from './src/sections/nav.js'
import { heroHeader } from './src/sections/heroHeader.js'
import { header } from './src/sections/header.js'
import { application } from './src/sections/application.js'

document.querySelector('#app').innerHTML = `
    <nav></nav>
    <section id="header"></section>
    <section id="heroHeader"></section>
    <section id="application"></section>
`

nav(document.querySelector('nav'))
header(document.querySelector('#header'))
heroHeader(document.querySelector('#heroHeader'))
application(document.querySelector('#application'))
