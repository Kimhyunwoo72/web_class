gsap.registerPlugin(ScrollTrigger);

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
