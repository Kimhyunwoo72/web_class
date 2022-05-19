gsap.from(".site_desc", {
  y: 100,
});
gsap.to(".site_desc", {
  scrollTrigger: {
    trigger: ".site_wrap",
    markers: true,
    start: "top center",
  },
  y: 0,
  ease: "sine.out",
  opacity: 1,
  duration: 1.5,
});

///////////////////////
// line1
gsap.from(".site_line1", {
  scaleX: 0,
});
gsap.to(".site_line1", {
  scrollTrigger: {
    trigger: ".site_wrap",
    markers: true,
    start: "top center",
  },
  ease: "power2.out",
  opacity: 1,
  scaleX: 1,
  duration: 2,
});

// 2
// line2
gsap.from(".site_line2", {
  scaleX: 0,
});
gsap.to(".site_line2", {
  scrollTrigger: {
    trigger: ".site_wrap",
    markers: true,
    start: "top center",
  },
  ease: "power2.out",
  opacity: 1,
  scaleX: 1,
  duration: 2,
  delay: 0.2,
});

// line3
gsap.from(".site_line3", {
  scaleX: 0,
});
gsap.to(".site_line3", {
  scrollTrigger: {
    trigger: ".site_wrap",
    markers: true,
    start: "top center",
  },
  ease: "power2.out",
  opacity: 1,
  scaleX: 1,
  duration: 2,
  delay: 0.4,
});

// line4
gsap.from(".site_line4", {
  scaleX: 0,
});
gsap.to(".site_line4", {
  scrollTrigger: {
    trigger: ".site_wrap",
    markers: true,
    start: "top center",
  },
  ease: "power2.out",
  opacity: 1,
  scaleX: 1,
  duration: 2,
  delay: 0.9,
});

// Height line
gsap.to(".site_info1 .siteH_line", {
  scrollTrigger: {
    trigger: ".site_wrap",
    markers: true,
    start: "top center",
  },
  ease: "power2.out",
  opacity: 1,
  duration: 2,
  delay: 0.3,
  height: 100 + "%",
});
// 1

// 2
// line2
gsap.from(".site_line2", {
  scaleX: 0,
});
gsap.to(".site_line2", {
  scrollTrigger: {
    trigger: ".site_info2",
    markers: true,
    start: "top center",
  },
  ease: "power2.out",
  opacity: 1,
  scaleX: 1,
  duration: 2,
  delay: 0.2,
});

// line3
gsap.from(".site_line3", {
  scaleX: 0,
});
gsap.to(".site_line3", {
  scrollTrigger: {
    trigger: ".site_info2",
    markers: true,
    start: "top center",
  },
  ease: "power2.out",
  opacity: 1,
  scaleX: 1,
  duration: 2,
  delay: 0.4,
});

// line4
gsap.from(".site_line4", {
  scaleX: 0,
});
gsap.to(".site_line4", {
  scrollTrigger: {
    trigger: ".site_info2",
    markers: true,
    start: "top center",
  },
  ease: "power2.out",
  opacity: 1,
  scaleX: 1,
  duration: 2,
  delay: 0.9,
});

// Height line
gsap.to(".site_info2 .siteH_line", {
  scrollTrigger: {
    trigger: ".site_info2",
    markers: true,
    start: "top center",
  },
  ease: "power2.out",
  opacity: 1,
  duration: 2,
  delay: 0.3,
  height: 100 + "%",
});
// 2
