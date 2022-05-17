gsap.to(".about_page", {
  scrollTrigger: {
    trigger: ".about_page",
    toggleActions: "resume pause reset pause",
    markers: true,
    start: "5% center",
  },
  opacity: 1,
  duration: 1,
});

// about_title
gsap.from(".about_title h2", {
  scrollTrigger: {
    trigger: ".about_page",
    markers: true,
    start: "5% center",
  },
  opacity: 0,
  y: 100,
  duration: 1,
});
gsap.to(".about_title h2", {
  scrollTrigger: {
    trigger: ".about_page",
    markers: true,
    start: "5% center",
  },
  opacity: 1,
  y: 0,
  duration: 1,
});
// about_title

// about_cont
gsap.from(".about_cont", {
  scrollTrigger: {
    trigger: ".about_page",
    markers: true,
    start: "5% center",
  },
  opacity: 0,
  width: 0,
});
gsap.to(".about_cont", {
  scrollTrigger: {
    trigger: ".about_page",
    markers: true,
    start: "5% center",
  },
  opacity: 1,
  width: 100 + "%",
  duration: 1.5,
});
// about_cont

//about_cont line
gsap.from(".about_cont ul li:nth-child(1)", {
  scrollTrigger: {
    trigger: ".about_page",
    markers: true,
    start: "5% center",
  },
  opacity: 0,
  height: 0,
});
gsap.to(".about_cont ul li:nth-child(1)", {
  scrollTrigger: {
    trigger: ".about_page",
    markers: true,
    start: "5% center",
  },
  opacity: 1,
  height: 100 + "%",
  duration: 0.7,
  ease: "none",
  delay: 1.4,
});

gsap.from(".about_cont ul li:nth-child(2)", {
  scrollTrigger: {
    trigger: ".about_page",
    markers: true,
    start: "5% center",
  },
  opacity: 0,
  height: 0,
});
gsap.to(".about_cont ul li:nth-child(2)", {
  scrollTrigger: {
    trigger: ".about_page",
    markers: true,
    start: "5% center",
  },
  opacity: 1,
  height: 100 + "%",
  duration: 0.7,
  ease: "none",
  delay: 1.3,
});

gsap.from(".about_cont ul li:nth-child(3)", {
  scrollTrigger: {
    trigger: ".about_page",
    markers: true,
    start: "5% center",
  },
  opacity: 0,
  height: 0,
});
gsap.to(".about_cont ul li:nth-child(3)", {
  scrollTrigger: {
    trigger: ".about_page",
    markers: true,
    start: "5% center",
  },
  opacity: 1,
  height: 100 + "%",
  duration: 0.7,
  ease: "none",
  delay: 1.5,
  paddingTop: 9 + "%",
});

gsap.from(".about_cont ul li:nth-child(4)", {
  scrollTrigger: {
    trigger: ".about_page",
    markers: true,
    start: "5% center",
  },
  opacity: 0,
  height: 0,
});
gsap.to(".about_cont ul li:nth-child(4)", {
  scrollTrigger: {
    trigger: ".about_page",
    markers: true,
    start: "5% center",
  },
  opacity: 1,
  height: 100 + "%",
  duration: 0.7,
  ease: "none",
  delay: 1.9,
  paddingTop: 15 + "%",
});
//about_cont line

// about_num
gsap.from(".about_cont ul li .about_num1", {
  scrollTrigger: {
    trigger: ".about_page",
    markers: true,
    start: "5% center",
  },
  x: -100,
  opacity: 0,
});
gsap.to(".about_cont ul li .about_num1", {
  scrollTrigger: {
    trigger: ".about_page",
    markers: true,
    start: "5% center",
  },
  opacity: 1,
  x: 0,
  duration: 0.7,
  ease: "sine.out",
  delay: 1.8,
});

gsap.from(".about_cont ul li .about_num2", {
  scrollTrigger: {
    trigger: ".about_page",
    markers: true,
    start: "5% center",
  },
  x: -100,
  opacity: 0,
});
gsap.to(".about_cont ul li .about_num2", {
  scrollTrigger: {
    trigger: ".about_page",
    markers: true,
    start: "5% center",
  },
  opacity: 1,
  x: 0,
  duration: 0.7,
  ease: "sine.out",
  delay: 2.2,
});

gsap.from(".about_cont ul li .about_num3", {
  scrollTrigger: {
    trigger: ".about_page",
    markers: true,
    start: "5% center",
  },
  x: -100,
  opacity: 0,
});
gsap.to(".about_cont ul li .about_num3", {
  scrollTrigger: {
    trigger: ".about_page",
    markers: true,
    start: "5% center",
  },
  opacity: 1,
  x: 0,
  duration: 0.7,
  ease: "sine.out",
  delay: 2.5,
});
// about_num

//about_desc
gsap.from(".about_cont ul li .about_desc1", {
  scrollTrigger: {
    trigger: ".about_page",
    markers: true,
    start: "5% center",
  },
  y: 20,
  opacity: 0,
});
gsap.to(".about_cont ul li .about_desc1", {
  scrollTrigger: {
    trigger: ".about_page",
    markers: true,
    start: "5% center",
  },
  opacity: 1,
  y: 0,
  duration: 1.5,
  ease: "power1.out",
  delay: 2.4,
});

gsap.from(".about_cont ul li .about_desc2", {
  scrollTrigger: {
    trigger: ".about_page",
    markers: true,
    start: "5% center",
  },
  y: 20,
  opacity: 0,
});
gsap.to(".about_cont ul li .about_desc2", {
  scrollTrigger: {
    trigger: ".about_page",
    markers: true,
    start: "5% center",
  },
  opacity: 1,
  y: 0,
  duration: 1.5,
  ease: "power1.out",
  delay: 2.6,
});

gsap.from(".about_cont ul li .about_desc3", {
  scrollTrigger: {
    trigger: ".about_page",
    markers: true,
    start: "5% center",
  },
  y: 20,
  opacity: 0,
});
gsap.to(".about_cont ul li .about_desc3", {
  scrollTrigger: {
    trigger: ".about_page",
    markers: true,
    start: "5% center",
  },
  opacity: 1,
  y: 0,
  duration: 1.5,
  ease: "power1.out",
  delay: 2.8,
});
//about_desc

/////////////////////////////////////////////////////////////////

//about_page 2 title-->
gsap.from(".aboutImg_box > .about_text", {
  scrollTrigger: {
    trigger: ".aboutImg_box",
    markers: true,
    start: "10% center",
  },
  opacity: 0,
  y: 100,
  duration: 1,
});
gsap.to(".aboutImg_box > .about_text", {
  scrollTrigger: {
    trigger: ".aboutImg_box",
    markers: true,
    start: "10% center",
  },
  opacity: 1,
  y: 0,
  duration: 1,
});
//about_page 2 title-->

//about_page 2 img-->
gsap.from(".slider__img", {
  scrollTrigger: {
    trigger: ".aboutImg_box",
    markers: true,
    start: "10% center",
  },
  opacity: 0,
  duration: 1,
});
gsap.to(".slider__img", {
  scrollTrigger: {
    trigger: ".aboutImg_box",
    markers: true,
    start: "10% center",
  },
  opacity: 1,
  ease: "power2.out",
  duration: 2,
});
//about_page 2 img-->
