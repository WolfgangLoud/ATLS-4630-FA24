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

// const mixImgAnimate= document.querySelector("#mixImageBox")

anime({
  targets: '#Scroll',
  translateY: [-200, 0],
  opacity: [0, 1],
  delay: anime.stagger(200),
  duration: 2000,
});

const textAnimation = function(subtitle, paragraph){
  new Waypoint({
    element: document.getElementById(subtitle),
    handler: function(direction) {
      if (direction === 'down') {
        anime({
          targets: `#${subtitle}`,
          translateY: [-200, 0],
          rotate: '1turn',
          opacity: [0, 1],
          delay: anime.stagger(200),
          duration: 3000,
        });
      }
    },
    offset: '80%' 
  });
  new Waypoint({
    element: document.getElementById(subtitle),
    handler: function(direction) {
      if (direction === 'down') {
        anime({
          targets: `#${paragraph}`,
          translateY: [-200, 0], 
            // rotate: '1turn',
          opacity: [0, 1],
          duration: 2000,
        });
      }
    },
    offset: '80%'
  });
  

}

textAnimation("Mix","add");

// MIX IMAGE ANIMATION
new Waypoint({
  element: document.getElementById('mixImageBox'),
  handler: function(direction) {
    if (direction === 'down') {
      anime({
        targets: '#p-mix, #milk, #butter',
        translateX: [1000, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutQuad'
      });
    }
  },
  offset: '75%'
});

textAnimation("Stir","Keep");


// Stir Image Animation!
let finishedAnimation1=false;
let finishedAnimation2=false;

new Waypoint({
  element: document.getElementById('stirImageBox'),
  handler: function(direction) {
    if (direction === 'down') {
      anime({
        targets: '#p-mix2,#bowl,#milk2',
        translateX: [1000, 150], 
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutQuad',
        complete: function(){
          finishedAnimation1 = true;
          fadeFinished();
        }
      });
    }
    
  },
  offset: '75%'
});


function fadeFinished(){

  if (finishedAnimation1===true&&finishedAnimation2===false)
  {
    anime({
      targets: '#bowl',
      translateY: 250, 
      duration: 1000,
      easing: 'linear'
    });
    anime({
      targets: '#p-mix2',
      translateX: -325,
      rotate: 100,
      duration: 1000,
      easing: 'linear'
    });
    anime({
      targets: '#milk2',
      translateX: 700, 
      rotate: -90,
      duration: 1000, 
      easing: 'linear',
      complete: function(){
        // finishedAnimation2=true;
        pourAndStir();
      }
    });

  }
}

function pourAndStir(){
  const flour_pour = document.getElementById("flour-pour");
  const milk_pour = document.getElementById("milk-pour");
  // const bowl = document.getElementById("bowl");
  milk_pour.style.opacity=1;
  // milk_pour.translateX=-3000;
  flour_pour.style.opacity=1;
}

const fork2 = document.getElementById("fork2");
const bowl2 = document.getElementById("bowl2");
let skilletDisplayed= false;
new Waypoint({
  element: document.getElementById('forkItUp'),
  handler: function(direction) {
    if (direction === 'down') {
      fork2.style.opacity=1;
      bowl2.style.opacity=1;
      anime({
        targets: '#fork2,#bowl2',
        translateX: [1000, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutQuad',
        complete: function(){
          skilletDisplayed=true;
          forkTime();
        }
      });
    }
  },
  offset: '75%'
});
function forkTime(){
      
  if (skilletDisplayed===true)
  {
    console.log("Fork Time!")
    anime({
      targets: '#fork2',
      translateY: -400,
      translateX: 200,
      duration: 1000,
      // easing: 'Linear',
      complete: function(){
        skilletDisplayed=true;
        
        forkStir();
      }
    });  
    anime({
        targets: '#bowl2',
        translateX: -150,
        duration: 1000,
        // easing: 'Linear',
      });
      
      
  } 
}

function forkStir(){
  console.log("fork-stir")
  anime({
    targets: '#fork2',
    translateY: -200,
    // translateX: -200,
    duration: 1000,
    // easing: 'Linear',
  });
}


textAnimation("Heat","Place");


const butter2 = document.getElementById("butter2");
const skillet = document.getElementById("skillet");
new Waypoint({
  element: document.getElementById('heatImageBox'),
  handler: function(direction) {
    if (direction === 'down') {
      butter2.style.opacity=1;
      skillet.style.opacity=1;
      anime({
        targets: '#skillet',
        translateX: [1000, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'linear'
      });
      anime({
        targets: '#butter2',
        translateX: [-1000, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'linear',
        complete: function(){
          butterSlice();
        }
      });
    }
  },
  offset: '75%'
});

function butterSlice() {
  const sliceButter = document.getElementById("butterSlice");

  sliceButter.style.opacity =1;
  anime({
    targets: '#butterSlice',
    translateY: 2000,
    duration: 1000,
    easing: 'linear',
    complete: function(){
      butterMelt();
    }
  });
}

function butterMelt(){
  const meltButter = document.getElementById("butterMelt");

  meltButter.style.opacity =1;
}


textAnimation("Pour","oneCup");

const bowl3 = document.getElementById("bowl3");
const skillet2 = document.getElementById("skillet2");
const butter_melt2 = document.getElementById("butter_melt2");
// const milk_pour2 = document.getElementById("milk_pour2");
// const pancake = document.getElementById("ellipsePancake");
new Waypoint({
  element: document.getElementById('pourImageBox'),
  handler: function(direction) {
    if (direction === 'down') {
      bowl3.style.opacity=1;
      skillet2.style.opacity=1;
      butter_melt2.style.opacity=1;
      anime({
        targets: '#bowl3',
        translateX: [1000, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'linear'
      });
      anime({
        targets: '#skillet2,#butter_melt2',
        translateX: [-1000, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'linear',
        complete: function(){
          bowlPour();
        }
      });
    }
  },
  offset: '75%'
});

function bowlPour(){
  // milk_pour2.style.opacity=1;
  anime({
    targets: '#butter_melt2',
    translateY: 300,
    translateX: 100,
    opacity:[1,0],

    duration: 1000,
    easing: 'linear',
    // complete: function(){
    //   bowlPour();
    // }
  });
  
  anime({
    targets: '#skillet2',
    translateY: 100,
    translateX: 50,
    duration: 1000,
    easing: 'linear',
    // complete: function(){
    //   bowlPour();
    // }
  });
  anime({
    targets: '#bowl3',
    translateX: -50,
    translateY: -100,
    duration: 1000,
    easing: 'linear',
    rotate: -50,
    complete: function(){
      batterPour();
    }
  });
}

function batterPour(){
  // milk_pour2.style.opacity=1;
  anime({
    targets: '#milk_pour2',
    opacity:[0,1],
    duration: 1000,
    easing: 'linear',
  })
  anime({
    targets: '#ellipsePancake',
    opacity:[0,1],
    duration: 2000,
    easing: 'linear',
  })
}

textAnimation("Cook","golden");


const skillet3 = document.getElementById("skillet3");
// const heatWave = document.getElementById("heat");
const pancake2 = document.getElementById("ellipsePancake2");

new Waypoint({
  element: document.getElementById('cookImageBox'),
  handler: function(direction) {
    if (direction === 'down') {
      skillet3.style.opacity=1;
      pancake2.style.opacity=1;
      anime({
        targets: '#skillet3,#ellipsePancake2',
        translateX: [-1000, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'linear',
        complete: function(){
          cook();
        }
      });
    }
  },
  offset: '75%'
});

function cook(){
  anime({
    targets: '#heatWave',
    opacity:[0,1],
    translateY: -100,
    duration: 500,
    easing: 'linear',
    complete: function(){
      anime({
        targets: '#heatWave',
        opacity: [1,0],
        translateY: -200,
        duration: 500,
        easing: 'linear',
        complete: function(){
          anime({
            targets: '#heatWave',
            opacity:[0,1],
            translateY: [0,-100],
            duration: 500,
            easing: 'linear',
            complete: function(){
              anime({
                targets: '#heatWave',
                opacity: [1,0],
                translateY: -200,
                duration: 500,
                easing: 'linear'
              })
            }
          }) 
        }
      })
      anime({
        targets: '#ellipsePancake2',
        backgroundColor: "#f5dd42",
        duration: 2000,
        easing: 'linear'
      })
    }
  }) 
}
textAnimation("Flip","other");


const skillet4 = document.getElementById("skillet4");
const pancake3 = document.getElementById("ellipsePancake3");

new Waypoint({
  element: document.getElementById('flipImageBox'),
  handler: function(direction) {
    if (direction === 'down') {
      skillet3.style.opacity=1;
      pancake2.style.opacity=1;
      anime({
        targets: '#skillet4,#ellipsePancake3',
        translateX: [-1000, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'linear',
        complete: function(){
          flip();
        }
      });
    }
  },
  offset: '75%'
});

function flip(){
  anime({
    targets: '#ellipsePancake3',
    translateY:  [0,-300],
    rotate: [0,180],
    duration: 1000,
    easing: 'linear',
    complete: function(){
      flip2();
    }
  });
  anime({
    targets: '#skillet4',
    rotate: [0,30],
    duration: 1000,
    easing: 'linear',
  });
}

function flip2(){
  anime({
    targets: '#ellipsePancake3',
    translateY:  [-300,0],
    rotate: [180,360],
    duration: 1000,
    easing: 'linear',
    complete: function(){
      pColor();
    }
  });
  anime({
    targets: '#skillet4',
    rotate: [30,0],
    duration: 1000,
    easing: 'linear',
  });
}

function pColor(){

  anime({
    targets: '#ellipsePancake3',
    backgroundColor: "#dba50f",
    duration: 2000,
    easing: 'linear'
  })
  anime({
    targets: '#butter_melt3',
    opacity: [0,1],
    duration: 2000,
    easing: 'linear'
  })
}


textAnimation("Enjoy","");
