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

const mixImgAnimate= document.querySelector("#mixImageBox")


const milkAnimation = anime({targets:"#milk"
, translateX: -500, duration: 4000, autoplay: false}
)
//scrollHeight-clientHeight-scrollTop

// const butterAnimation = anime({targets:"#butter"
//   , translateX: -600, duration: 4000, autoplay: false}
// )

const speed1 = 800;






const animateScroll = function(div, speed=100, offset=-500)
{
  
  // const scrollPercent = window.scrollY-div.offsetTop
  const itemAtTop=div.getBoundingClientRect();
  console.log(itemAtTop.y);
  return((itemAtTop.y+offset)/speed);
}

window.onscroll = function() {
  milkAnimation.seek(animateScroll(mixImgAnimate,speed1) * milkAnimation.duration);
} 

