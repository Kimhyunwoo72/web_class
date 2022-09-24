// parallax-effext
gsap.to('.ony-shop', {
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

gsap.to('.ony-shop__text-sub-title > span', {
  y: 0,
  duration: 1,
  ease: 'power2.out',
  delay: 0.5
});

gsap.to('.ony-shop__text-title > h2', {
  y: 0,
  duration: 1,
  ease: 'power2.out',
  delay: 0.7
});

gsap.to('.ony-shop__box1', {
  y: 0,
  duration: 1,
  ease: 'power2.out',
  delay: 0.9,
  opacity: 1
});

gsap.to('.ony-shop__box2', {
  scrollTrigger: {
    trigger: '.ony-shop__box2',
    start: '-50% center'
  },
  opacity: 1,
  y: 0,
  duration: 1
});

gsap.to('.ony-shop__bundle-title > h3', {
  scrollTrigger: {
    trigger: '.ony-shop__bundle',
    start: '-40% center'
  },
  y: 0,
  duration: 1
});

gsap.to('.ony-shop__bundle-desc > p', {
  scrollTrigger: {
    trigger: '.ony-shop__bundle',
    start: '-40% center'
  },
  y: 0,
  duration: 1,
  delay: 0.4
});

gsap.to('.ony-shop__shop__bundle-wrap', {
  scrollTrigger: {
    trigger: '.ony-shop__bundle',
    start: '-40% center'
  },
  y: 0,
  duration: 1,
  delay: 0.6,
  opacity: 1
});
