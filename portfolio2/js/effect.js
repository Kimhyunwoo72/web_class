var windowWidth = window.innerWidth;
gsap.from(".effect_text1 .effect_desc", {
  scrollTrigger: {
    trigger: ".effect_text",
    markers: true,
    start: "5% center",
  },
  y: 100,
});
gsap.to(".effect_text1 .effect_desc", {
  scrollTrigger: {
    trigger: ".effect_text",
    markers: true,
    start: "5% center",
  },
  opacity: 1,
  y: 0,
  duration: 1.5,
});

gsap.from(" .effect_text1 .effect_line1", {
  scrollTrigger: {
    trigger: ".effect_text",
    markers: true,
    start: "5% center",
  },
  scaleX: 0,
});
gsap.to(".effect_text1 .effect_line1", {
  scrollTrigger: {
    trigger: ".effect_text",
    markers: true,
    start: "5% center",
  },
  scaleX: 1,
  duration: 2,
  opacity: 1,
});

gsap.from(".effect_text1 .effect_line2", {
  scrollTrigger: {
    trigger: ".effect_text",
    markers: true,
    start: "5% center",
  },
  scaleX: 0,
});
gsap.to(".effect_text1 .effect_line2", {
  scrollTrigger: {
    trigger: ".effect_text",
    markers: true,
    start: "5% center",
  },
  opacity: 1,
  scaleX: 1,
  duration: 2,
  delay: 0.5,
});

gsap.from(".effect_info1 .effectInfo_line1", {
  scrollTrigger: {
    trigger: ".effect_text",
    markers: true,
    start: "5% center",
  },
  scaleX: 0,
});
gsap.to(".effect_info1 .effectInfo_line1", {
  scrollTrigger: {
    trigger: ".effect_text",
    markers: true,
    start: "5% center",
  },
  opacity: 1,
  scaleX: 1,
  duration: 3,
  delay: 0.5,
});

gsap.from(".effect_info1 .effectInfo_line2", {
  scrollTrigger: {
    trigger: ".effect_text",
    markers: true,
    start: "5% center",
  },
});
gsap.to(".effect_info1 .effectInfo_line2", {
  scrollTrigger: {
    trigger: ".effect_text",
    markers: true,
    start: "5% center",
  },
  opacity: 1,
  scaleX: 1,
  duration: 3,
  delay: 1,
});

// slider_effect
gsap.to(".effect_info1 .iframe_bg", {
  scrollTrigger: {
    trigger: ".effect_text",
    markers: true,
    start: "5% center",
  },
  opacity: 1,
  height: 0 + "%",
  duration: 1.2,
  ease: "power1.out",
  delay: 0.7,
});

gsap.from(".effect_info1 .slider_effect", {
  scrollTrigger: {
    trigger: ".effect_text",
    markers: true,
    start: "5% center",
  },
  duration: 3,
  ease: "power1.out",
  delay: 0.5,
  scaleX: 1.3,
  scaleY: 1.3,
});

gsap.to(".effect_info1 .slider_effect", {
  scrollTrigger: {
    trigger: ".effect_text",
    markers: true,
    start: "5% center",
  },
  opacity: 1,
  duration: 1.2,
  ease: "power1.out",
  delay: 1.2,
  scleX: 1,
  scleY: 1,
});
