import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function application(element) {
  element.innerHTML = `
    <h2 class="application-title">You navigate simply by using your eyes, hands, and voice.</h2>
    <div class="application-grid">
      <img id="image-left" src="/img/iphone-left.png" alt="header">
      <img id="image-right" src="/img/iphone-right.png" alt="header">
    </div>
  `

  gsap.to('#image-left', {
    x: -100,
    ease: 'none',
    scrollTrigger: {
      trigger: '.application-grid',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  })

  gsap.to('#image-right', {
    x: 100,
    ease: 'none',
    scrollTrigger: {
      trigger: '.application-grid',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  })
}
