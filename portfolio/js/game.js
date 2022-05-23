// window.addEventListener("load", function () {
//   gsap.registerPlugin(ScrollTrigger);

//   let SECTIONS = gsap.utils.toArray(".gmae_info");

//   gsap.to(SECTIONS, {
//     xPercent: -100 * (SECTIONS.length - 1),
//     ease: "none",
//     scrollTrigger: {
//       scroller: pageContents,
//       trigger: ".gmae_wrap",
//       markers: true,
//       start: "center 35%",
//       end: () => "+=" + document.querySelector(".game_row").offsetWidth,
//       pin: true,
//       scrub: 1,
//       snap: 1 / (SECTIONS.length - 1),
//     },
//   });
// });
window.addEventListener("load", function () {
  gsap.to(".section2Title_desc", {
    scrollTrigger: {
      scroller: pageContents,
      trigger: "#section2",
      markers: true,
      start: "5% center",
    },
    stagger: 0.3,
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: "power2.out",
  });
});
