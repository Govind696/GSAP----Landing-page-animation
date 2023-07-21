// gsap.from('#nav',{
//     y:800,
//     // x:100,
//     width:"100px",
//     duration:3,
//     delay:0.2,
//     repeat:-1,
//     yoyo:true,
//     rotate: 360,
//     ease:"power2.inout",
//     borderRadius:'330px',
//     // stagger:1
// })
// gsap.to('#nav', {
//     from: { opacity: 0, x: -100 },
//     to: { opacity: 1, x: 0 },
//     duration: 1
//   });
let tl = gsap.timeline({
//     repeat:-1,
    ease:"power2.inout",
})
tl.from( ".blogs-h1",{
        y:800,
        duration:1,
        yoyo:true,
        rotate: 360,
        ease:"power2.inout",
})

tl.from( "#nav0",{
        y:800,
        // x:100,
        // width:"100px",
        duration:1,
        // delay:0.1,
        // repeat:-1,
        yoyo:true,
        rotate: 360,
        ease:"power2.inout",
        borderRadius:'330px',
        // stagger:1
})
tl.from( "#nav2",{
        y:800,
        duration:1,
        yoyo:true,
        rotate: 360,
        ease:"power2.inout",
        borderRadius:'330px',
})
tl.from( "#nav3",{
        y:800,
        duration:1,
        yoyo:true,
        rotate: 360,
        ease:"power2.inout",
        borderRadius:'330px',
})
tl.from( "#nav4",{
        y:800,
        duration:1,
        yoyo:true,
        rotate: 360,
        ease:"power2.inout",
        borderRadius:'330px',
})
tl.from( "#nav5",{
        y:800,
        duration:1,
        yoyo:true,
        rotate: 360,
        ease:"power2.inout",
        borderRadius:'330px',
})
tl.from( "#nav6",{
        y:800,
        duration:1,
        yoyo:true,
        rotate: 360,
        ease:"power2.inout",
        borderRadius:'330px',
})
tl.from( "#nav7",{
        y:800,
        duration:1,
        yoyo:true,
        rotate: 360,
        ease:"power2.inout",
        borderRadius:'330px',
})
tl.from( "#nav8",{
        y:800,
        duration:1,
        yoyo:true,
        rotate: 360,
        ease:"power2.inout",
        borderRadius:'330px',
})


let tl2 = gsap.timeline({
        repeat:-1
});

tl2.to(".imagecontainer",{
    ease:Expo.easeInOut,
    width:"100%",
    stagger:2
}, 'Govind')
tl2.to(".imagecontainer img",{
    ease:Expo.easeInOut,
    width:"100%",
    stagger:2
}, 'Govind')
.to(".text1 h1",{
    ease:Expo.easeInOut,
    left:0,
    stagger:2
}, 'Govind')
.to(".text1 h1",{
    delay:2,
    ease:Expo.easeInOut,
    top:"-100px",
    stagger:2
}, 'Govind')
.to(".text1 p",{
    ease:Expo.easeInOut,
    left:0,
    bottom:"15px",
    stagger:2
}, 'Govind')
.to(".text1 p",{
    delay:2,
    ease:Expo.easeInOut,
    top:"-100px",
    stagger:2
}, 'Govind')





let maindiv = document.querySelector('.main');
let appmodelight = document.querySelector('.img1');
let appmodedark = document.querySelector('.img2');
appmodelight.addEventListener('click',()=>{
        if(appmodelight.style.display = "none" ){
                appmodedark.style.display = "block";
                appmodelight.style.display = "none"
                maindiv.style.backgroundColor = '#dadada';
                toggleMode()
        }
});
appmodedark.addEventListener('click',()=>{
        if(appmodedark.style.display = "none" ){
                appmodelight.style.display = "block";
                appmodedark.style.display = "none";
                maindiv.style.backgroundColor = '#222';
                toggleMode()
        }
});
function toggleMode() {
        const elements = document.querySelectorAll('.mode');
        elements.forEach((element) => {
          element.classList.toggle('light-mode');
          element.classList.toggle('dark-mode');
        });
      }
  




        document.addEventListener("DOMContentLoaded", function() {
          const cursor = document.querySelector(".custom-cursor");
    
          document.addEventListener("mousemove", (e) => {
            const { clientX, clientY } = e;
            cursor.style.left = clientX + "px";
            cursor.style.top = clientY + "px";
          });
        });