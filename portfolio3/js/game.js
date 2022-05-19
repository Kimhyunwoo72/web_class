gsap.registerPlugin(ScrollTrigger);
// gsap.defaults({ ease: "power1", duration: 6 });

// gsap.to(".gmae_info1", {
//   scrollTrigger: {
//     trigger: ".gmae_wrap",
//     markers: true,
//     start: "center 35%",
//     scrub: true,
//     pin: true,
//   },
//   x: -100 + "%",
//   duration: 5,
//   // anticipatePin: 1,
// });

// gsap.to(".gmae_info2", {
//   scrollTrigger: {
//     trigger: ".gmae_wrap",
//     markers: true,
//     start: "center 35%",
//     scrub: true,
//     pin: true,
//   },
//   x: -200 + "%",
//   duration: 10,
//   // anticipatePin: 3,
// });

let SECTIONS = gsap.utils.toArray(".gmae_info");

gsap.to(SECTIONS, {
  xPercent: -100 * (SECTIONS.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".gmae_wrap",
    markers: true,
    start: "center 35%",
    end: () => "+=" + document.querySelector(".game_row").offsetWidth,
    pin: true,
    scrub: 1,
    snap: 1 / (SECTIONS.length - 1),
  },
});
