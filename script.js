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
    stagger:.4,
    delay:.3,
    // ease:"power2.out"

})

tl.to(lines,{
    opacity:0,
    delay:1.3,
    duration:.9,
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



