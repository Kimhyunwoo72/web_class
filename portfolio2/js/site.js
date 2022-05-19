var windowWidth = window.innerWidth;
gsap.from(".site_wrap", {
  scrollTrigger: {
    trigger: ".site_info",
    markers: true,
    start: "center center",
  },
  y: 100,
});
gsap.to(".site_wrap", {
  scrollTrigger: {
    trigger: ".site_info",
    markers: true,
    start: "center center",
  },
  opacity: 1,
  y: 0,
  duration: 1.5,
});
