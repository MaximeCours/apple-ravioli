// CSS
import './src/css/fonts.css'
import './src/css/base.css'
import './src/css/nav.scss'
import './src/css/header.scss'
import './src/css/animateVideo.scss'
import './src/css/inspiration.scss'
import './src/css/application.scss'
import './src/css/story.scss'
import './src/css/ravioli.scss'
import './src/css/footer.scss'
import './src/css/leaf.scss'
// JS
import { leaf } from './src/sections/leaf.js'
import { nav } from './src/sections/nav.js'
import { header } from './src/sections/header.js'
import { application } from './src/sections/application.js'
import { story } from './src/sections/story.js'
import { inspiration } from './src/sections/inspiration.js'
import { animateVideo } from './src/sections/animateVideo.js'
import { ravioli } from './src/sections/ravioli.js'
import { footer } from './src/sections/footer.js'

document.querySelector('#app').innerHTML = `
    <nav></nav>
    <section id="leaf"></section>
    <section id="header"></section>
    <section id="animateVideo"></section>
    <section id="application"></section>
    <section id="story"></section>
    <section id="ravioli"></section>
    <section id="inspiration"></section>
    <footer></footer>
`

nav(document.querySelector('nav'))
leaf(document.querySelector('#leaf'))
header(document.querySelector('#header'))
animateVideo(document.querySelector('#animateVideo'))
application(document.querySelector('#application'))
story(document.querySelector('#story'))
ravioli(document.querySelector('#ravioli'))
inspiration(document.querySelector('#inspiration'))
footer(document.querySelector('footer'))
