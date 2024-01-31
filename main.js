// CSS
import './src/css/fonts.css'
import './src/css/base.css'
import './src/css/nav.scss'
import './src/css/header.scss'
//import './src/css/heroHeader.scss'
import './src/css/animateVideo.scss'
import './src/css/inspiration.scss'
import './src/css/application.scss'
import './src/css/story.scss'
// JS
import { nav } from './src/sections/nav.js'
import { header } from './src/sections/header.js'
import { heroHeader } from './src/sections/heroHeader.js'
import { application } from './src/sections/application.js'
import { story } from './src/sections/story.js'
import { inspiration } from './src/sections/inspiration.js'
import { animateVideo } from './src/sections/animateVideo.js'

document.querySelector('#app').innerHTML = `
    <nav></nav>
    <section id="header"></section>
    <section id="heroHeader"></section>
    <section id="animateVideo"></section>
    <section id="application"></section>
    <section id="story"></section>
    <section id="inspiration"></section>
`

nav(document.querySelector('nav'))
header(document.querySelector('#header'))
heroHeader(document.querySelector('#heroHeader'))
animateVideo(document.querySelector('#animateVideo'))
application(document.querySelector('#application'))
story(document.querySelector('#story'))
inspiration(document.querySelector('#inspiration'))
