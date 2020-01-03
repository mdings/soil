import Swiper from 'swiper'
import './distort'

const [red, green, blue] = [146, 154, 233]
const section1 = document.body
window.addEventListener('scroll', () => {
  let y = 1 + (window.scrollY || window.pageYOffset) / 125
  y = y < 1 ? 1 : y // ensure y is always >= 1 (due to Safari's elastic scroll)
  const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
//   section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})
//ONLOAD

  const services = document.querySelectorAll('[data-id]')
  services.forEach(service => {
    service.addEventListener('click', e => {
      const target = e.path.find(elm => elm.localName == 'li')
      target.nextElementSibling.classList.toggle('is-visible')
    })
  })

  const images = document.querySelectorAll('[data-src]')
  images.forEach(img => {
    img.setAttribute('data-background', img.getAttribute('data-src'))
  })

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    preloadImages: false,
    freeMode: true,
    lazy: true,
    loop: true,
    watchSlidesVisibility: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

