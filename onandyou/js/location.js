var tl = gsap.timeline();

// parallax-effext
gsap.to('.ony-location', {
  scrollTrigger: {
    trigger: '.body',
    start: 'top center',
    scrub: 1
  },
  // y: -30 + '%',
  y: -15 + '%',
  ease: 'none'
});
// parallax-effext

tl.to('.ony-location-title > h2', {
  y: 0,
  duration: 1,
  ease: 'power2.out'
});

tl.to('.ony-location-map-background', {
  height: 0,
  duration: 1,
  ease: 'power2.out'
});

gsap.to('.ony-location-item', {
  scrollTrigger: {
    trigger: '.ony-location-list',
    start: '-100% center'
  },
  stagger: 0.3,
  opacity: 1,
  y: 0,
  duration: 1
});
