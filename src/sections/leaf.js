import gsap from 'gsap'

export function leaf(element) {
  element.innerHTML = `
    <div id="leaf">
      <img src="/img/falling-leaf.gif" alt="Feuille">
    </div>
  `
  const leaf = document.getElementById('leaf')
  const distanceFromBottom = 700 // Distance en pixels depuis le bas de la page

  // Fonction pour mettre à jour la position, la rotation et le déplacement de la feuille en fonction du défilement
  function updateLeafPositionRotationAndMovement() {
    const scrollProgress =
      window.scrollY / (document.body.scrollHeight - window.innerHeight)
    const maxHeight = document.body.scrollHeight - 200 - leaf.clientHeight

    // Calculer la position de la feuille en fonction du défilement avec une limite inférieure et supérieure
    const newY = Math.min(
      Math.max(scrollProgress * maxHeight, -10),
      document.body.scrollHeight - distanceFromBottom - leaf.clientHeight
    )

    // Animer la rotation, le déplacement de gauche à droite, et la position de la feuille en fonction du défilement
    const rotation = Math.sin(scrollProgress * Math.PI * 2) * 80 // Ajustez l'amplitude selon vos préférences
    const movementX = Math.sin(scrollProgress * Math.PI * 2) * 500 // Ajustez l'amplitude selon vos préférences

    gsap.to(leaf, {
      y: newY,
      rotate: rotation,
      x: movementX,
      duration: 3, // Durée de l'animation
      ease: 'power3.out', // Courbe d'accélération pour une animation plus smooth
    })
  }

  // Écouter l'événement de défilement et déclencher la fonction
  window.addEventListener('scroll', updateLeafPositionRotationAndMovement)
}
