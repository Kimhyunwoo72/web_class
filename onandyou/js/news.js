// parallax-effext
gsap.to('.ony-news', {
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

gsap.to('.ony-news__text-sub-title > span', {
  y: 0,
  duration: 1,
  ease: 'power2.out',
  delay: 0.5
});

gsap.to('.ony-news__text-title > h2', {
  y: 0,
  duration: 1,
  ease: 'power2.out',
  delay: 0.7
});

gsap.to('.ony-news__list', {
  y: 0,
  duration: 1,
  ease: 'power2.out',
  delay: 1.2,
  opacity: 1
});
