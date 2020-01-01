import Swiper from 'swiper'
const [red, green, blue] = [146, 154, 233]
const section1 = document.body
window.addEventListener('scroll', () => {
  let y = 1 + (window.scrollY || window.pageYOffset) / 125
  y = y < 1 ? 1 : y // ensure y is always >= 1 (due to Safari's elastic scroll)
  const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
//   section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})
//ONLOAD
$(function(){
    //DECLARE GLOBAL VARIABLE FOR USE IN HANDLERS
    var orig, sib;
    var runs = 0;
    var charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890+>?-$#@%&*';
    
    //RUN JS WHEN 'DISTORT' IS HOVERED
    $('.distort').hover(function(){
        var curr = $(this);
        orig = $(this).text();
        sib = setInterval(function(){
          distortText(curr);
        }, 100);
    }, function(){
      //RESET THE ORIGINAL TEXT
      clearInterval(sib);
      $(this).text(orig);
    });
   
    function distortText(i){
      //MAINTAINS SOME READABILITY IN THE TEXT BY ONLY ALLOWING 3 CHARACTERS TO BE DISTORTED
      if (runs >= 2){
        runs = 0;
        i.text(orig);
        return;
      }
      //GET EACH INDIVIDUAL CHARACTER
      var chars = i.text().split('');
      //GET A RANDOM CHARACTER FROM THE TEXT
      var rand = Math.floor(Math.random() * (chars.length));
      //GET A RANDOM REPLACEMENT CHARACTER
      var randRep = Math.floor(Math.random() * (charSet.length));
      //CHECK TO MAKE SURE THAT THE NEW CHARACTER IS DIFFERENT FROM THE OLD
      if(chars[rand] != charSet[randRep] && chars[rand] != ' '){
        chars[rand] = charSet[randRep];
      } else {
        distortText(i);
      }
      //UPDATE TEXT
      i.text(chars.join(''));
      runs += 1;
    }
  });


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
    lazy: true,
    // freeMode: true,
    watchSlidesVisibility: true
});

