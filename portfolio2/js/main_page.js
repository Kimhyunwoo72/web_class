getSite = () => {
  setTimeout(() => {
    // .main__inner > div:nth-child(1)
    gsap.to("#header", {
      duration: 0.5,
      top: 0,
      ease: "expo.out",
      delay: 2.2,
    });
    gsap.to(".sub_text", {
      left: 0,
      opacity: 1,
      duration: 2,
      delay: 2,
    });
    gsap.to(".main_page h1 i", {
      bottom: 0,
      opacity: 1,
      duration: 2,
      delay: 1,
    });
    gsap.to(".main_page h1 span", {
      bottom: 0,
      opacity: 1,
      duration: 2,
      delay: 1.2,
    });
    gsap.to(".main_inpo p", {
      top: 0,
      opacity: 1,
      duration: 1,
      delay: 2.5,
    });
    // gsap.to(".main_banner", {
    //     opacity: 0,
    //     duration: 0,
    //     delay: 0
    // })
  }, 1000);
};
getSite();
