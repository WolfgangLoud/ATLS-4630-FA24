import anime from 'animejs/lib/anime.es.js';

const animation = anime({targets:".img"
, translateY: 800, duration: 4000}
)

window.onscroll = function() {
  console.log(window.scrollY)
  // animation.seek((scrollPercent / 100) * animation.duration);
}

