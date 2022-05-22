gsap.from(".rowMode_line1", {
  scaleX: 0,
});
gsap.to(".rowMode_line1", {
  scrollTrigger: {
    trigger: ".gmae_wrap",
    markers: true,
    start: "top center",
  },
  ease: "power1.out",
  opacity: 1,
  scaleX: 1,
  duration: 2,
});
gsap.from(".rowMode_line2", {
  scaleX: 0,
});
gsap.to(".rowMode_line2", {
  scrollTrigger: {
    trigger: ".gmae_wrap",
    markers: true,
    start: "top center",
  },
  ease: "power1.out",
  opacity: 1,
  scaleX: 1,
  duration: 2,
  delay: 0.5,
});

gsap.from(".row_mode > .desc", {
  y: 100,
});
gsap.to(".row_mode > .desc", {
  scrollTrigger: {
    trigger: ".gmae_wrap",
    markers: true,
    start: "top center",
  },
  ease: "power1.out",
  opacity: 1,
  y: 0,
  duration: 1.5,
  delay: 0.5,
});
//  rkfh

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

gsap.from(" .effect_text .effect_line1", {
  scrollTrigger: {
    trigger: ".effect_text",
    markers: true,
    start: "5% center",
  },
  scaleX: 0,
});
gsap.to(".effect_text .effect_line1", {
  scrollTrigger: {
    trigger: ".effect_text",
    markers: true,
    start: "5% center",
  },
  scaleX: 1,
  duration: 2,
  opacity: 1,
});

// 1
gsap.from(" .effect_info2 .effect_line1", {
  scrollTrigger: {
    trigger: ".effect_text",
    markers: true,
    start: "5% center",
  },
  scaleX: 0,
});
gsap.to(".effect_info2 .effect_line1", {
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
// 1

// 2
gsap.from(" .effect_info2 .effect_line1", {
  scrollTrigger: {
    trigger: ".effect_info2",
    markers: true,
    start: "5% center",
  },
  scaleX: 0,
});
gsap.to(".effect_info2 .effect_line1", {
  scrollTrigger: {
    trigger: ".effect_info2",
    markers: true,
    start: "5% center",
  },
  scaleX: 1,
  duration: 2,
  opacity: 1,
});

gsap.from(".effect_info2 .effectInfo_line1", {
  scrollTrigger: {
    trigger: ".effect_info2",
    markers: true,
    start: "5% center",
  },
  scaleX: 0,
});
gsap.to(".effect_info2 .effectInfo_line1", {
  scrollTrigger: {
    trigger: ".effect_info2",
    markers: true,
    start: "5% center",
  },
  opacity: 1,
  scaleX: 1,
  duration: 2,
});

gsap.from(".effect_info2 .effectInfo_line2", {
  scrollTrigger: {
    trigger: ".effect_info2",
    markers: true,
    start: "5% center",
  },
});
gsap.to(".effect_info2 .effectInfo_line2", {
  scrollTrigger: {
    trigger: ".effect_info2",
    markers: true,
    start: "5% center",
  },
  opacity: 1,
  scaleX: 1,
  duration: 2,
});

// slider_effect
gsap.to(".effect_info2 .iframe_bg", {
  scrollTrigger: {
    trigger: ".effect_info2",
    markers: true,
    start: "5% center",
  },
  opacity: 1,
  height: 0 + "%",
  duration: 1.2,
  ease: "power1.out",
});

gsap.from(".effect_info2 .slider_effect", {
  scrollTrigger: {
    trigger: ".effect_info2",
    markers: true,
    start: "5% center",
  },
  duration: 3,
  ease: "power1.out",
  scaleX: 1.3,
  scaleY: 1.3,
});

gsap.to(".effect_info2 .slider_effect", {
  scrollTrigger: {
    trigger: ".effect_info2",
    markers: true,
    start: "5% center",
  },
  opacity: 1,
  duration: 1.2,
  ease: "power1.out",
  delay: 0.5,
  scleX: 1,
  scleY: 1,
});
// 2

// 3
gsap.from(" .effect_info3 .effect_line1", {
  scrollTrigger: {
    trigger: ".effect_info3",
    markers: true,
    start: "5% center",
  },
  scaleX: 0,
});
gsap.to(".effect_info3 .effect_line1", {
  scrollTrigger: {
    trigger: ".effect_info3",
    markers: true,
    start: "5% center",
  },
  scaleX: 1,
  duration: 2,
  opacity: 1,
});

gsap.from(".effect_info3 .effectInfo_line1", {
  scrollTrigger: {
    trigger: ".effect_info3",
    markers: true,
    start: "5% center",
  },
  scaleX: 0,
});
gsap.to(".effect_info3 .effectInfo_line1", {
  scrollTrigger: {
    trigger: ".effect_info3",
    markers: true,
    start: "5% center",
  },
  opacity: 1,
  scaleX: 1,
  duration: 2,
});

gsap.from(".effect_info3 .effectInfo_line2", {
  scrollTrigger: {
    trigger: ".effect_info3",
    markers: true,
    start: "5% center",
  },
});
gsap.to(".effect_info3 .effectInfo_line2", {
  scrollTrigger: {
    trigger: ".effect_info3",
    markers: true,
    start: "5% center",
  },
  opacity: 1,
  scaleX: 1,
  duration: 2,
});

// slider_effect
gsap.to(".effect_info3 .iframe_bg", {
  scrollTrigger: {
    trigger: ".effect_info3",
    markers: true,
    start: "5% center",
  },
  opacity: 1,
  height: 0 + "%",
  duration: 1.2,
  ease: "power1.out",
});

gsap.from(".effect_info3 .slider_effect", {
  scrollTrigger: {
    trigger: ".effect_info3",
    markers: true,
    start: "5% center",
  },
  duration: 3,
  ease: "power1.out",
  scaleX: 1.3,
  scaleY: 1.3,
});

gsap.to(".effect_info3 .slider_effect", {
  scrollTrigger: {
    trigger: ".effect_info3",
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
// 3

// 4
gsap.from(" .effect_info4 .effect_line1", {
  scrollTrigger: {
    trigger: ".effect_info4",
    markers: true,
    start: "5% center",
  },
  scaleX: 0,
});
gsap.to(".effect_info4 .effect_line1", {
  scrollTrigger: {
    trigger: ".effect_info4",
    markers: true,
    start: "5% center",
  },
  scaleX: 1,
  duration: 2,
  opacity: 1,
});

gsap.from(".effect_info4 .effectInfo_line1", {
  scrollTrigger: {
    trigger: ".effect_info4",
    markers: true,
    start: "5% center",
  },
  scaleX: 0,
});
gsap.to(".effect_info4 .effectInfo_line1", {
  scrollTrigger: {
    trigger: ".effect_info4",
    markers: true,
    start: "5% center",
  },
  opacity: 1,
  scaleX: 1,
  duration: 2,
});

gsap.from(".effect_info4 .effectInfo_line2", {
  scrollTrigger: {
    trigger: ".effect_info4",
    markers: true,
    start: "5% center",
  },
});
gsap.to(".effect_info4 .effectInfo_line2", {
  scrollTrigger: {
    trigger: ".effect_info4",
    markers: true,
    start: "5% center",
  },
  opacity: 1,
  scaleX: 1,
  duration: 2,
});

// slider_effect
gsap.to(".effect_info4 .iframe_bg", {
  scrollTrigger: {
    trigger: ".effect_info4",
    markers: true,
    start: "5% center",
  },
  opacity: 1,
  height: 0 + "%",
  duration: 1.2,
  ease: "power1.out",
});

gsap.from(".effect_info4 .slider_effect", {
  scrollTrigger: {
    trigger: ".effect_info4",
    markers: true,
    start: "5% center",
  },
  duration: 3,
  ease: "power1.out",
  scaleX: 1.3,
  scaleY: 1.3,
});

gsap.to(".effect_info4 .slider_effect", {
  scrollTrigger: {
    trigger: ".effect_info4",
    markers: true,
    start: "5% center",
  },
  opacity: 1,
  duration: 1.2,
  ease: "power1.out",
  scleX: 1,
  scleY: 1,
});
// 4
