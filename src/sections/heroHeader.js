import { gsap } from 'gsap'
import MotionPathPlugin from 'gsap/MotionPathPlugin'

export function heroHeader(element) {
  element.innerHTML = `
    <svg width="501" height="136" viewBox="0 0 501 136" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path id="path" d="M1 135C180.735 -126.676 415.651 63.0391 500 135"/>
    </svg>
    <img id="conserve" src="/img/conserve.png" alt="conserve">
    `

  gsap.registerPlugin(MotionPathPlugin)
  const pathTL = gsap.timeline()

  pathTL.to('#conserve', {
    duration: 4,
    motionPath: {
      path: '#path',
      align: '#path',
      end: 1,
      alignOrigin: [0.5, 0.5],
    },
  })
}
