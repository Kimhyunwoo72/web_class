
  gsap.to(".effectText_desc", {
    scrollTrigger: {
      trigger: ".effect_text",
      markers: true,
      start: "5% center",
    },
    stagger: 0.3,
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: "power2.out",
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

  gsap.to(".effect_info1 .slider_effect", {
    scrollTrigger: {
      trigger: ".effect_text",
      markers: true,
      start: "5% center",
    },
    opacity: 1,
    duration: 4,
    ease: "power1.out",
    scaleX: 1,
    scaleY: 1,
  });
  // 1

  // 2

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

  gsap.to(".effect_info2 .slider_effect", {
    scrollTrigger: {
      trigger: ".effect_info2",
      markers: true,
      start: "5% center",
    },
    opacity: 1,
    duration: 4,
    ease: "power1.out",
    scaleX: 1,
    scaleY: 1,
  });
  // 2

  // 3

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
    scaleX: 0,
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

  gsap.to(".effect_info3 .slider_effect", {
    scrollTrigger: {
      trigger: ".effect_info3",
      markers: true,
      start: "5% center",
    },
    opacity: 1,
    duration: 4,
    ease: "power1.out",
    scaleX: 1,
    scaleY: 1,
  });
  // 3

  // 4

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
  gsap.to(".effect_info4 .slider_effect", {
    scrollTrigger: {
      trigger: ".effect_info4",
      markers: true,
      start: "5% center",
    },
    opacity: 1,
    duration: 4,
    ease: "power1.out",
    scaleX: 1,
    scaleY: 1,
  });
  // 4
