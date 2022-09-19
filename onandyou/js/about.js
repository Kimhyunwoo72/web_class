var tl = gsap.timeline();

gsap.to('.ony-about__introduce-profile-background', {
  height: 0,
  duration: 1.5,
  ease: 'power2.in-out'
});

gsap.to('.ony-about__introduce-img', {
  scale: 1.2,
  duration: 4,
  ease: 'power2.in-out'
});

gsap.to('.ony-about__introduce-img', {
  scrollTrigger: {
    trigger: '.ony-about__introduce',
    markers: true,
    start: 'top center',
    scrub: 1
  },
  y: -15 + '%',
  duration: 0.1
});

gsap.to('.ony-about__introduce-name > h2', {
  y: 0,
  duration: 1,
  delay: 1,
  ease: 'power2.out'
});

gsap.to('.ony-about__introduce-sub-title > p ', {
  y: 0,
  duration: 1,
  delay: 1.3,
  ease: 'power2.out'
});
gsap.to('.ony-about__introduce-desc', {
  opacity: 1,
  duration: 2,
  delay: 1.9,
  ease: 'power2.out'
});
