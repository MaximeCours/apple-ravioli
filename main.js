// CSS
import './src/css/fonts.css'
import './src/css/base.css'
import './src/css/nav.scss'
// JS
import { nav } from './src/sections/nav.js'
import { heroHeader } from './src/sections/heroHeader.js'

document.querySelector('#app').innerHTML = `
    <nav></nav>
    <h1>Hello world</h1>
    <section id="heroHeader"></section>
`

nav(document.querySelector('nav'))
heroHeader(document.querySelector('#heroHeader'))
