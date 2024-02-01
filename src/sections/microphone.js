import { webVoiceHub } from 'webvoicehub/src/main'

export function microphone(element) {
  element.innerHTML = `
  <div class="microphone-output" id="output"></div>
<div class="microphone-button" id="startListening">
  <img id="siri" src="/img/siri.png"/>
</div>
`
  webVoiceHub()

  var startListeningButton = document.getElementById('startListening')
  startListeningButton.addEventListener('click', changerImage)

  function changerImage() {
    var image = document.getElementById('siri')
    image.src = '/img/siri-anime-2.gif'
    image.classList.add('fade-out')

    setTimeout(function () {
      image.src = '/img/siri.png'
      image.classList.remove('fade-out')
    }, 5000)
  }
}
