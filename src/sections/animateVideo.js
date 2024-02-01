import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function animateVideo(element) {
  element.innerHTML = `
  <div class="animateVideoContainer">
    <video src="/video/ravioli-can-960.mp4" playsinline="true" webkit-playsinline="true" preload="auto" muted="muted" class="video-background"></video>
    <div id="container"></div>
  <div>
  `

  console.clear()
  /* The encoding is super important here to enable frame-by-frame scrubbing. */

  // ffmpeg -i ~/Downloads/Toshiba\ video/original.mov -movflags faststart -vcodec libx264 -crf 23 -g 1 -pix_fmt yuv420p output.mp4
  // ffmpeg -i ~/Downloads/Toshiba\ video/original.mov -vf scale=960:-1 -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p output_960.mp4

  const video = document.querySelector('.video-background')
  let src = video.currentSrc || video.src
  console.log(video, src)

  /* Make sure the video is 'activated' on iOS */
  function once(el, event, fn, opts) {
    var onceFn = function (e) {
      el.removeEventListener(event, onceFn)
      fn.apply(this, arguments)
    }
    el.addEventListener(event, onceFn, opts)
    return onceFn
  }

  once(document.documentElement, 'touchstart', function (e) {
    video.play()
    video.pause()
  })

  /* ---------------------------------- */
  /* Scroll Control! */

  gsap.registerPlugin(ScrollTrigger)

  let tl = gsap.timeline({
    defaults: { duration: 1 },
    scrollTrigger: {
      markers: true,
      trigger: '#container',
      start: 'top center',
      end: 'bottom center',
      scrub: true,
      onEnter: () => {
        gsap.to(document.body, { backgroundColor: "#000000", duration: 1, ease: "power1.inOut" });

      },
      onEnterBack: () => {
        gsap.to(document.body, { backgroundColor: "#1e1e1e", duration: 1, ease: "power1.inOut" });
      },
      onLeave: () => {
        gsap.to(document.body, { backgroundColor: "#ffffff", duration: 1, ease: "power1.inOut" });
      },
      onLeaveBack: () => {
        gsap.to(document.body, { backgroundColor: "#ffffff", duration: 1, ease: "power1.inOut" });
      },
    },
  })

  once(video, 'loadedmetadata', () => {
    tl.fromTo(
      video,
      {
        currentTime: video.duration || 1,
      },
      {
        currentTime: 0,
      }
    )
  })

  /* When first coded, the Blobbing was important to ensure the browser wasn't dropping previously played segments, but it doesn't seem to be a problem now. Possibly based on memory availability? */
  setTimeout(function () {
    if (window['fetch']) {
      fetch(src)
        .then((response) => response.blob())
        .then((response) => {
          var blobURL = URL.createObjectURL(response)

          var t = video.currentTime
          once(document.documentElement, 'touchstart', function (e) {
            video.play()
            video.pause()
          })

          video.setAttribute('src', blobURL)
          video.currentTime = t + 0.01
        })
    }
  }, 1000)
}
