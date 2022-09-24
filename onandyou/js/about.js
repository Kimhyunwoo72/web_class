var tl = gsap.timeline();

// parallax-effext
gsap.to('.ony-about', {
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

gsap.to('.ony-about__history-title > h2', {
  scrollTrigger: {
    trigger: '.ony-about__history',
    start: '-15% center'
  },
  y: 0,
  duration: 1,
  ease: 'power2.out'
});

gsap.to('.ony-about__history-item1', {
  scrollTrigger: {
    trigger: '.ony-about__history',
    start: '-15% center',
    scrub: 2,
    end: '-25%'
  },
  y: 0,
  opacity: 1,
  duration: 1,
  ease: 'power2.out'
});

gsap.to('.ony-about__history-item2', {
  scrollTrigger: {
    trigger: '.ony-about__history',
    start: '15% center',
    scrub: 2,
    end: '-15%'
  },
  y: 0,
  opacity: 1,
  duration: 1,
  ease: 'power2.out'
});
gsap.to('.ony-about__history-item3', {
  scrollTrigger: {
    trigger: '.ony-about__history',
    start: '50% center',
    scrub: 2,
    end: 'top'
  },
  y: 0,
  opacity: 1,
  duration: 1,
  ease: 'power2.out'
});
