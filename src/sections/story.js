import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Enregistrez le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

export function story(element) {
  element.innerHTML = `
    <div class="grid">
        <h2 class="title" id="story-title">Notre Histoire</h2>
        <div class=""right">
        <p id="story-description">Nous croyons que la technologie peut transformer même les plats les plus classiques. <br>
        Découvrez comment notre équipe passionnée a repensé les raviolis pour apporter une expérience culinaire exceptionnelle.
        </p>
        <button class="btn" id="story-btn"><span>+</span> En apprendre plus</button>
        </div>
      </div>
        `

  const storyTitle = document.getElementById('story-title')

  gsap.from(storyTitle, {
    opacity: 0,
    x: '-100%',
    scrollTrigger: {
      trigger: storyTitle,
      start: 'top 80%',
      toggleActions: 'play reverse play reverse',
      onEnterBack: () => {
        gsap.to(storyTitle, { opacity: 0 })
      },
    },
    ease: 'power1.inOut',
  })

  const storyDescription = document.getElementById('story-description')

  gsap.from(storyDescription, {
    opacity: 0,
    x: '100%',
    scrollTrigger: {
      trigger: storyDescription,
      start: 'top 70%',
      toggleActions: 'play reverse play reverse',
      onEnterBack: () => {
        gsap.to(storyDescription, { opacity: 0 })
      },
    },
    ease: 'power1.inOut',
  })

  const storyBtn = document.getElementById('story-btn')

  gsap.from(storyBtn, {
    opacity: 0,
    x: '100%',
    scrollTrigger: {
      trigger: storyBtn,
      start: 'top 70%',
      toggleActions: 'play reverse play reverse',
      onEnterBack: () => {
        gsap.to(storyBtn, { opacity: 0 })
      },
    },
    ease: 'power1.inOut',
  })
}
