import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function inspiration(element) {
  if (!element) return

  element.innerHTML = `
    <h2>Inspiration Culinaire</h2>
    <img class="steve" src="/img/inspiration/steve-ravioli.png" alt="Steve jobs making ravioli">
    <div class="cols">
      <div class="col">
        <p>Laissez-vous inspirer par nos recettes uniques mettant en vedette nos raviolis en conserve.</p>
        <img src="/img/inspiration/inspiration-1.png" alt="Inspiration 1" class="inspiration1">
      </div>
      <div class="col">
        <img src="/img/inspiration/inspiration-2.png" alt="Inspiration 2" class="inspiration2">
        <p>Des plats simples aux créations gastronomiques, <span class="light">découvrez comment transformer votre repas en une expérience exceptionnelle.</span></p>
      </div>
    </div>
    <div>
    <div class="col-large">
      <p class="col-large-p">Explorez notre gamme diversifiée de raviolis en conserve, <span class="light">créée avec soin pour satisfaire tous les palais. De la tradition à l'innovation, découvrez la magie des saveurs.</span></p>
      <img class="ravioli" src="/img/inspiration/ravioli.png" alt="Ravioli">
    </div>
  `

  document.querySelectorAll('.col').forEach((col) => {
    gsap.fromTo(
      col,
      { autoAlpha: 0, y: 100 },
      {
        duration: 2,
        autoAlpha: 1,
        y: 0,
        stagger: 0.2,
        scrollTrigger: {
          trigger: col,
          start: 'top bottom-=50',
          end: 'bottom top',
          toggleActions: 'play none none reverse',
        },
      }
    )
  })

  gsap.fromTo(
    '.steve',
    { autoAlpha: 0, y: 200 },
    {
      duration: 2,
      autoAlpha: 1,
      y: 0,
      scrollTrigger: {
        trigger: '.steve',
        start: 'top bottom-=150',
        end: 'bottom top',
        toggleActions: 'play none none reverse',
      },
    }
  )

  gsap.fromTo(
    'h2',
    { autoAlpha: 0, y: 100 },
    {
      duration: 2,
      autoAlpha: 1,
      y: 0,
      scrollTrigger: {
        trigger: '.steve',
        start: 'top bottom-=50',
        end: 'bottom top',
        toggleActions: 'play none none reverse',
      },
    }
  )

  gsap.fromTo(
    '.ravioli',
    { autoAlpha: 0, y: 200 },
    {
      duration: 2,
      autoAlpha: 1,
      y: 0,
      scrollTrigger: {
        trigger: '.ravioli',
        start: 'top bottom-=150',
        end: 'bottom top',
        toggleActions: 'play none none reverse',
      },
    }
  )

  gsap.fromTo(
    '.col-large-p',
    { autoAlpha: 0, y: 100 },
    {
      duration: 2,
      autoAlpha: 1,
      y: 0,
      scrollTrigger: {
        trigger: '.ravioli',
        start: 'top bottom-=150',
        end: 'bottom top',
        toggleActions: 'play none none reverse',
      },
    }
  )
}
