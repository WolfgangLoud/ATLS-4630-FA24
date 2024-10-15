import anime from 'animejs/lib/anime.es.js';

const animation = anime({targets:".img"
, translateY: 800, duration: 4000, autoplay: false}
)

const section2= document.querySelector(".section-two");

window.onscroll = function() {
  const scrollPercent = window.scrollY-section2.offsetTop
 
  animation.seek((scrollPercent / 100) * animation.duration);
}

