
function locomotive(){
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });
  
  
 
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  


}



let tl = gsap.timeline();
let tl2 = gsap.timeline();


function loader(){
    let heads=document.querySelectorAll(".line h1");
let loader=document.querySelector(".loader");
let tl=gsap.timeline();
let runner1=document.getElementById("runner1");
let lines=document.querySelectorAll(".lines");
let counter=document.querySelectorAll(".runner");
console.log(counter);

let cnt=0;
gsap.from(".runner",{
   y:20,
   duration:1,
   opacity:0,
   ease:"power2.out",
   delay:.7,
//    stagger:.2
})


tl.from(heads,{
    y:150,
    // opacity:0,
    duration:.6,
    stagger:.2,
    delay:.7,
    // ease:"power2.out"

})

tl.to(lines,{
    opacity:0,
    delay:1.3,
    duration:.5,
    ease:"power4.out",
    y:-10,
})

setInterval(()=>{
    if(cnt<=100){
        
        runner1.innerHTML="<i>"+cnt+"</i>";
        cnt++;
    }
    else {
        
        runner1.innerHTML="<i>"+100+"</i>";
        // clearInterval(interval);
    }
},20)

tl.to(".loader",{
        y:-1000,
        
        ease:"power2.out",
        duration:1,
        
        onStart:()=>{
            
        }
    })
    
    tl.to(loader,{
        display:"none",

        delay:4.5
    })




}
loader();

function cursor(){
    document.addEventListener("mousemove",function(ele){
        
        gsap.to("#cursor",{
            
            x:ele.x,
            y:ele.y
        })
    })
    
    Shery.makeMagnet(".navp2 span");
    
}
cursor();

function page1(){
tl2.from(".nav-p1 span",{
    y:-100,
    duration:.6,
    stagger:.2,
    delay:4.3,
    opacity:0,
    ease:"power2.out"
})

tl2.from(".navp2 span",{
    y:-100,
    duration:.6,
    stagger:.2,
    // delay:4.3,
    opacity:0,
    ease:"power2.out"
})


tl2.from(".texts h1 ",{
    y:150,
    // opacity:0,
    duration:.6,
    stagger:.2,
    delay:.3,
    
    
    ease:"power2.out"

})

gsap.from(".content-one h4",{
        y:150,
        duration:.6,
        delay:6.5,
    ease:"power2.out"
})
}
page1();


function sheryanimation(){
    Shery.imageEffect(".image-div",{ 
        style:5,
        gooey:true ,
        // debug:true,
        // config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7241195453907675},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.23,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.5,"range":[0,10]},"metaball":{"value":0.33,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.01,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
  

  });


  var videoContainer = document.querySelector("#video-container");
  var video = document.querySelector("#video-container video");
videoContainer.addEventListener("mouseenter", function () {
    videoContainer.addEventListener("mousemove", function (dets) {
      gsap.to("#cursor", {
        opacity: 0
      });
      gsap.to("#video-cursor", {
        x: dets.x -1224,
        y: dets.y -200,
      });
    });
  });

  videoContainer.addEventListener("mouseleave", function () {
    gsap.to("#cursor", {
      opacity: 1

    });
    gsap.to("#video-cursor", {
      left: "70%",
      top: "-15%",
    });
  });

  var flag = 0
  videoContainer.addEventListener("click", function () {
    if (flag == 0) {
      video.play()
      video.style.opacity = 1
      document.querySelector("#video-cursor").innerHTML = `<i class="ri-pause-mini-fill"></i>`
      gsap.to("#video-cursor", {
        scale: 0.5
      })
      flag = 1
    } else {
      video.pause()
      video.style.opacity = 0
      document.querySelector("#video-cursor").innerHTML = `<i class="ri-play-mini-fill"></i>`
      gsap.to("#video-cursor", {
        scale: 1
      })
      flag = 0
    }
  })

}



sheryanimation();

function flagAnimation() {

  document.addEventListener("mousemove", function (dets) {
    gsap.to("#flag", {
      x: dets.x,
      y: dets.y
    })
  })
  document.querySelector("#hero3").addEventListener("mouseenter", function () {
    gsap.to("#flag", {
      opacity: 1
    })
  })
  document.querySelector("#hero3").addEventListener("mouseleave", function () {
    gsap.to("#flag", {
      opacity: 0
    })
  })

}

flagAnimation();