// Initialize Swiper
var swiper = new Swiper('.ony__swiper', {
  centeredSlides: true,
  spaceBetween: 40,
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction'
  }
});

// kv
gsap.to('.ony__kv', {
  scrollTrigger: {
    trigger: '.ony__kv',
    markers: true,
    start: 'center center',
    end: '+3000',
    scrub: 0.5,
    pin: true
  },
  backgroundPositionY: 90 + '%'
});
// kv

// main-about
gsap.to('.ony__about-text-show > span', {
  scrollTrigger: {
    trigger: '.ony__about',
    start: '-10% center'
  },
  stagger: 0.3,
  y: 0,
  duration: 1,
  ease: 'power2.out'
});
// main-about

// main-link
gsap.to('.ony__link-sub-title > div', {
  scrollTrigger: {
    trigger: '.ony__link',
    start: '-10% center'
  },
  stagger: 0.3,
  y: 0,
  duration: 1,
  ease: 'power2.out'
});

gsap.to('.ony__link-view', {
  scrollTrigger: {
    trigger: '.ony__link',
    start: '-10% center'
  },
  stagger: 0.3,
  y: 0,
  duration: 1.5,
  ease: 'power2.out'
});

gsap.to('.ony__link-arrow', {
  scrollTrigger: {
    trigger: '.ony__link',
    start: '-10% center'
  },
  stagger: 0.3,
  opacity: 1,
  duration: 3,
  ease: 'power2.out'
});

// main-link

// ony__shop
gsap.to('.ony__shop-prev', {
  scrollTrigger: {
    trigger: '.ony__shop',
    markers: true,
    start: 'top center',
    scrub: 1
  },
  backgroundPositionY: 70 + '%',
  duration: 0.1
});

gsap.to('.ony__shop-main', {
  scrollTrigger: {
    trigger: '.ony__shop',
    markers: true,
    start: 'top center',
    scrub: 1
  },
  backgroundPositionY: 70 + '%',
  duration: 0.1
});

gsap.to('.ony__shop-next > span', {
  scrollTrigger: {
    trigger: '.ony__shop',
    markers: true,
    start: 'top center',
    scrub: 1
  },
  backgroundPositionY: 70 + '%',
  duration: 0.1
});
// ony__shop

// ony__shop-next
gsap.to('.ony__collection-slider--up > .ony__collection-slider-box', {
  scrollTrigger: {
    trigger: '.ony__collection',
    markers: true,
    start: '-30% center',
    scrub: 1
  },
  y: -30 + '%',
  duration: 0.1
});

gsap.to('.ony__collection-slider--down > .ony__collection-slider-box', {
  scrollTrigger: {
    trigger: '.ony__collection',
    markers: true,
    start: '-30% center',
    scrub: 1
  },
  y: -32 + '%',
  duration: 0.1
});
// ony__shop-next
