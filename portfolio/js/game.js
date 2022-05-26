gsap.registerPlugin(ScrollTrigger);

// line
gsap.to(".rowMode_line1", { scrollTrigger: {trigger: ".gmae_info",start: "5% center",},scaleX: 1,opacity: 1,duration: 1,ease: "power2.out"});
gsap.to(".rowMode_line2", { scrollTrigger: {trigger: ".gmae_info",start: "5% center",},scaleX: 1,opacity: 1,duration: 2,ease: "power2.out"});

gsap.to(".rowMode_line1", { scrollTrigger: {trigger: ".gmae_info",start: "5% center",},scaleX: 1,opacity: .2,duration: 2,ease: "power2.out"});
gsap.to(".rowMode_line2", { scrollTrigger: {trigger: ".gmae_info",start: "5% center",},scaleX: 1,opacity: .2,duration: 2.1,ease: "power2.out"});

// header
gsap.to("#header ul li a", { scrollTrigger: {trigger: ".gmae_info",start: "5% center",},color: "#000"});
gsap.to(".line", { scrollTrigger: {trigger: ".gmae_info",start: "5% center",},backgroundColor: "#000"});


// let SECTIONS = gsap.utils.toArray(".gmae_info");

// gsap.to(SECTIONS, {
//   xPercent: -100 * (SECTIONS.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".gmae_wrap",
    
//     start: "center 60%",
//     end: () => "+=" + document.querySelector(".game_row").offsetWidth,
//     pin: true,
//     scrub: 1,
//     snap: 1 / (SECTIONS.length - 1),
//   },
// });
let main_wrap2 = window.innerWidth
alert(main_wrap2)

if(main_wrap2 >=750){

  let SECTIONS = gsap.utils.toArray(".gmae_info");

   gsap.to(SECTIONS, {
     xPercent: -100 * (SECTIONS.length - 1),
     ease: "none",
     scrollTrigger: {
       trigger: ".gmae_wrap",
  
       start: "center 60%",
       end: () => "+=" + document.querySelector(".game_row").offsetWidth,
       pin: true,
       scrub: 1,
       snap: 1 / (SECTIONS.length - 1),
     },
   });
  }


gsap.to(".section2Title_desc", {
  scrollTrigger: {
    trigger: ".gmae_wrap",
    
    start: "5% center",
  },
  stagger: 0.3,
  opacity: 1,
  y: 0,
  duration: 1,
  ease: "power2.out",
});


gsap.to("body", {
  scrollTrigger: {
    trigger: ".gmae_wrap",
    
    start: "5% center",
  },
  backgroundColor: "#fff",
  duration: 3,
  ease: "power2.out",
});

gsap.to(".gmae_wrap", {
  scrollTrigger: {
    trigger: ".gmae_wrap",
    
    start: "5% center",
  },
  backgroundColor: "#fff",
  duration: 3,
  ease: "power2.out",
});