// line 1
gsap.to(".effect_text .effect_line1", { scrollTrigger: {trigger: ".effect_text",start: "5% center",},scaleX: 1,opacity: 1,duration: 2,ease: "power2.out"});
gsap.to(".effect_text .effect_line2", { scrollTrigger: {trigger: ".effect_text",start: "5% center",},scaleX: 1,opacity: 1,duration: 2.9,ease: "power2.out"});

// 칼라
gsap.to(".effect_text .effect_line1", { scrollTrigger: {trigger: ".effect_text",start: "5% center",},scaleX: 1,opacity: .2,duration: 2,ease: "power2.out"});
gsap.to(".effect_text .effect_line2", { scrollTrigger: {trigger: ".effect_text",start: "5% center",},opacity: .2,duration: 3,ease: "power2.out"});

// line 2
gsap.to(".effect_info1 .effectInfo_line1", {scrollTrigger: {trigger: ".effect_text",start: "5% center",},opacity: 1,height: 100 + "%", duration: 1,delay: 0.5});
gsap.to(".effect_info1 .effectInfo_line2", {scrollTrigger: {trigger: ".effect_text",start: "5% center",},scaleX: 1, duration: 1,delay: 0.5});
// 칼라
gsap.to(".effect_info1 .effectInfo_line1", {scrollTrigger: {trigger: ".effect_text",start: "5% center",},opacity: 1, opacity: .2, height: 100 + "%", duration: 1,delay: 0.5});
gsap.to(".effect_info1 .effectInfo_line2", {scrollTrigger: {trigger: ".effect_text",start: "5% center",}, opacity: .2,  duration: 1.5,delay: 1});

// line 3
gsap.to(".effect_info2 .effectInfo_line1", {scrollTrigger: {trigger: ".effect_info2",start: "5% center",},opacity: 1,height: 100 + "%", duration: 1});
gsap.to(".effect_info2 .effectInfo_line2", {scrollTrigger: {trigger: ".effect_info2",start: "5% center",},scaleX: 1, duration: 1,delay: 0.5});
// 칼라
gsap.to(".effect_info2 .effectInfo_line1", {scrollTrigger: {trigger: ".effect_info2",start: "5% center",},opacity: 1, opacity: .2, duration: 1,delay: 0.5});
gsap.to(".effect_info2 .effectInfo_line2", {scrollTrigger: {trigger: ".effect_info2",start: "5% center",}, opacity: .2,  duration: 1.5,delay: 1});

// line 4
gsap.to(".effect_info3 .effectInfo_line1", {scrollTrigger: {trigger: ".effect_info3",start: "5% center",},opacity: 1,height: 100 + "%", duration: 1});
gsap.to(".effect_info3 .effectInfo_line2", {scrollTrigger: {trigger: ".effect_info3",start: "5% center",},scaleX: 1, duration: 1,delay: 0.5});
// 칼라
gsap.to(".effect_info3 .effectInfo_line1", {scrollTrigger: {trigger: ".effect_info3",start: "5% center",},opacity: 1, opacity: .2, duration: 1,delay: 0.5});
gsap.to(".effect_info3 .effectInfo_line2", {scrollTrigger: {trigger: ".effect_info3",start: "5% center",}, opacity: .2,  duration: 1.5,delay: 1});

// line 5
gsap.to(".effect_info4 .effectInfo_line1", {scrollTrigger: {trigger: ".effect_info4",start: "5% center",},opacity: 1,height: 100 + "%", duration: 1});
gsap.to(".effect_info4 .effectInfo_line2", {scrollTrigger: {trigger: ".effect_info4",start: "5% center",},scaleX: 1, duration: 1,delay: 0.5});
// 칼라
gsap.to(".effect_info4 .effectInfo_line1", {scrollTrigger: {trigger: ".effect_info4",start: "5% center",},opacity: 1, opacity: .2, duration: 1,delay: 0.5});
gsap.to(".effect_info4 .effectInfo_line2", {scrollTrigger: {trigger: ".effect_info4",start: "5% center",}, opacity: .2,  duration: 1.5,delay: 1});



  gsap.to(".effectText_desc", {
    scrollTrigger: {
      trigger: ".effect_text",
      
      start: "5% center",
    },
    stagger: 0.3,
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: "power2.out",
  });

  // 1


  // slider_effect
  gsap.to(".effect_info1 .iframe_bg", {
    scrollTrigger: {
      trigger: ".effect_text",
      
      start: "5% center",
    },
    opacity: 1,
    height: 0 + "%",
    duration: 1.2,
    ease: "power1.out",
    delay: 0.3,
  });

  gsap.to(".effect_info1 .slider_effect", {
    scrollTrigger: {
      trigger: ".effect_text",
      
      start: "5% center",
    },
    opacity: 1,
    duration: 3,
    ease: "power1.out",
    scaleX: 1,
    scaleY: 1,
  });
  // 1

//2
  // slider_effect
  gsap.to(".effect_info2 .iframe_bg", {
    scrollTrigger: {
      trigger: ".effect_info2",
      
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
      
      start: "5% center",
    },
    opacity: 1,
    duration: 3,
    ease: "power1.out",
    scaleX: 1,
    scaleY: 1,
  });
  // 2

  // 3

  // slider_effect
  gsap.to(".effect_info3 .iframe_bg", {
    scrollTrigger: {
      trigger: ".effect_info3",
      
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
      
      start: "5% center",
    },
    opacity: 1,
    duration: 3,
    ease: "power1.out",
    scaleX: 1,
    scaleY: 1,
  });
  // 3

  // 4

  // slider_effect
  gsap.to(".effect_info4 .iframe_bg", {
    scrollTrigger: {
      trigger: ".effect_info4",
      
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
      
      start: "5% center",
    },
    opacity: 1,
    duration: 3,
    ease: "power1.out",
    scaleX: 1,
    scaleY: 1,
  });
  // 4
