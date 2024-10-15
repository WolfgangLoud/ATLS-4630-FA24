import anime from 'animejs/lib/anime.es.js';


//Will probably use this code to improve functionality of offsetTop
// const getOffsetTop = element => {
//   let offsetTop = 0;
//   while(element) {
//     offsetTop += element.offsetTop;
//     element = element.offsetParent;
//   }
//   return offsetTop;
// }

// const X = getOffsetTop(someElement);

const section2= document.querySelector("#section-two");


const animation = anime({targets:".img"
, translateX: 3000, duration: 4000, autoplay: false}
)

const speed1 = 800;
const offset1 = 300;




const animateScroll = function(div, speed=100, offset=0){
  const scrollPercent = window.scrollY-div.offsetTop
  return((scrollPercent+offset)/speed);
}

window.onscroll = function() {
  animation.seek(animateScroll(section2,speed1,offset1) * animation.duration);
} 

