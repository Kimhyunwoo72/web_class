gsap.registerPlugin(ScrollTrigger);

let SECTIONS = gsap.utils.toArray(".gmae_info");

gsap.to(SECTIONS, {
  xPercent: -100 * (SECTIONS.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".gmae_wrap",
    markers: true,
    start: "center 60%",
    end: () => "+=" + document.querySelector(".game_row").offsetWidth,
    pin: true,
    scrub: 1,
    snap: 1 / (SECTIONS.length - 1),
  },
});


gsap.to(".section2Title_desc", {
  scrollTrigger: {
    trigger: ".gmae_wrap",
    markers: true,
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
    markers: true,
    start: "5% center",
  },
  backgroundColor: "#fff",
  duration: 3,
  ease: "power2.out",
});

gsap.to(".gmae_wrap", {
  scrollTrigger: {
    trigger: ".gmae_wrap",
    markers: true,
    start: "5% center",
  },
  backgroundColor: "#fff",
  duration: 3,
  ease: "power2.out",
});