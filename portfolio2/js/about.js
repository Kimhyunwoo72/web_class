var windowWidth = window.innerWidth;
if (windowWidth <= 750) {
  gsap.to(".about_page", {
    scrollTrigger: {
      trigger: ".about_page",
      toggleActions: "resume pause reset pause",
      markers: true,
      start: "5% center",
    },
    opacity: 1,
    duration: 1,
  });

  // about_title
  gsap.from(".about_title h2", {
    scrollTrigger: {
      trigger: ".about_page",
      markers: true,
      start: "5% center",
    },
    opacity: 0,
    y: 100,
    duration: 1,
  });
  gsap.to(".about_title h2", {
    scrollTrigger: {
      trigger: ".about_page",
      markers: true,
      start: "5% center",
    },
    opacity: 1,
    y: 0,
    duration: 1,
  });
  // about_title

  // about_num
  gsap.from(".about_cont ul li .about_num1", {
    scrollTrigger: {
      trigger: ".about_page",
      markers: true,
      start: "5% center",
    },
    x: -100,
    opacity: 0,
  });
  gsap.to(".about_cont ul li .about_num1", {
    scrollTrigger: {
      trigger: ".about_page",
      markers: true,
      start: "5% center",
    },
    opacity: 1,
    x: 0,
    duration: 0.7,
    ease: "sine.out",
    delay: 0.8,
  });

  gsap.from(".about_cont ul li .about_num2", {
    scrollTrigger: {
      trigger: ".about_page",
      markers: true,
      start: "5% center",
    },
    x: -100,
    opacity: 0,
  });
  gsap.to(".about_cont ul li .about_num2", {
    scrollTrigger: {
      trigger: ".about_page",
      markers: true,
      start: "5% center",
    },
    opacity: 1,
    x: 0,
    duration: 0.7,
    ease: "sine.out",
    delay: 1.2,
  });

  gsap.from(".about_cont ul li .about_num3", {
    scrollTrigger: {
      trigger: ".about_page",
      markers: true,
      start: "5% center",
    },
    x: -100,
    opacity: 0,
  });
  gsap.to(".about_cont ul li .about_num3", {
    scrollTrigger: {
      trigger: ".about_page",
      markers: true,
      start: "5% center",
    },
    opacity: 1,
    x: 0,
    duration: 0.7,
    ease: "sine.out",
    delay: 1.5,
  });
  // about_num

  //about_desc
  gsap.from(".about_cont ul li .about_desc1", {
    scrollTrigger: {
      trigger: ".about_page",
      markers: true,
      start: "5% center",
    },
    y: 20,
    opacity: 0,
  });
  gsap.to(".about_cont ul li .about_desc1", {
    scrollTrigger: {
      trigger: ".about_page",
      markers: true,
      start: "5% center",
    },
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: "power1.out",
    delay: 1.4,
  });

  gsap.from(".about_cont ul li .about_desc2", {
    scrollTrigger: {
      trigger: ".about_page",
      markers: true,
      start: "5% center",
    },
    y: 20,
    opacity: 0,
  });
  gsap.to(".about_cont ul li .about_desc2", {
    scrollTrigger: {
      trigger: ".about_page",
      markers: true,
      start: "5% center",
    },
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: "power1.out",
    delay: 1.6,
  });

  gsap.from(".about_cont ul li .about_desc3", {
    scrollTrigger: {
      trigger: ".about_page",
      markers: true,
      start: "5% center",
    },
    y: 20,
    opacity: 0,
  });
  gsap.to(".about_cont ul li .about_desc3", {
    scrollTrigger: {
      trigger: ".about_page",
      markers: true,
      start: "5% center",
    },
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: "power1.out",
    delay: 1.8,
  });
  //about_desc
} else {
  gsap.to(".about_page", {
    scrollTrigger: {
      trigger: ".about_page",
      toggleActions: "resume pause reset pause",
      markers: true,
      start: "5% center",
    },
    opacity: 1,
    duration: 1,
  });

  // about_title
  gsap.from(".about_title h2", {
    scrollTrigger: {
      trigger: ".about_page",
      markers: true,
      start: "5% center",
    },
    opacity: 0,
    y: 100,
    duration: 1,
  });
  gsap.to(".about_title h2", {
    scrollTrigger: {
      trigger: ".about_page",
      markers: true,
      start: "5% center",
    },
    opacity: 1,
    y: 0,
    duration: 1,
  });
  // about_title

  // about_cont
  gsap.from(".about_cont", {
    scrollTrigger: {
      trigger: ".about_page",
      markers: true,
      start: "5% center",
    },
    opacity: 0,
    width: 0,
  });
  gsap.to(".about_cont", {
    scrollTrigger: {
      trigger: ".about_page",
      markers: true,
      start: "5% center",
    },
    opacity: 1,
    width: 100 + "%",
    duration: 1,
  });
  // about_cont

  //about_cont line
  gsap.from(".about_cont ul li:nth-child(1)", {
    scrollTrigger: {
      trigger: ".about_page",
      markers: true,
      start: "5% center",
    },
    opacity: 0,
    height: 0,
  });
  gsap.to(".about_cont ul li:nth-child(1)", {
    scrollTrigger: {
      trigger: ".about_page",
      markers: true,
      start: "5% center",
    },
    opacity: 1,
    height: 100 + "%",
    duration: 1,
    ease: "none",
    delay: 1,
  });
  //about_cont line
  gsap.from(".about_cont ul li > div", {
    scrollTrigger: {
      trigger: ".about_page",
      markers: true,
      start: "5% center",
    },
    scaleX: 1,
    scaleY: 1,
  });
  gsap.to(".about_cont ul li > div", {
    scrollTrigger: {
      trigger: ".about_page",
      markers: true,
      start: "5% center",
    },
    delay: 1,
    duration: 4,
    scaleX: 1.3,
    scaleY: 1.3,
  });

  gsap.from(".about_cont ul li:nth-child(2)", {
    scrollTrigger: {
      trigger: ".about_page",
      markers: true,
      start: "5% center",
    },
    opacity: 0,
    height: 0,
  });
  gsap.to(".about_cont ul li:nth-child(2)", {
    scrollTrigger: {
      trigger: ".about_page",
      markers: true,
      start: "5% center",
    },
    opacity: 1,
    height: 100 + "%",
    duration: 0.7,
    ease: "none",
    delay: 1.1,
  });

  gsap.from(".about_cont ul li:nth-child(3)", {
    scrollTrigger: {
      trigger: ".about_page",
      markers: true,
      start: "5% center",
    },
    opacity: 0,
    height: 0,
  });
  gsap.to(".about_cont ul li:nth-child(3)", {
    scrollTrigger: {
      trigger: ".about_page",
      markers: true,
      start: "5% center",
    },
    opacity: 1,
    height: 100 + "%",
    duration: 0.7,
    ease: "none",
    delay: 1.2,
    paddingTop: 9 + "%",
  });

  gsap.from(".about_cont ul li:nth-child(4)", {
    scrollTrigger: {
      trigger: ".about_page",
      markers: true,
      start: "5% center",
    },
    opacity: 0,
    height: 0,
  });
  gsap.to(".about_cont ul li:nth-child(4)", {
    scrollTrigger: {
      trigger: ".about_page",
      markers: true,
      start: "5% center",
    },
    opacity: 1,
    height: 100 + "%",
    duration: 0.7,
    ease: "none",
    delay: 1.4,
    paddingTop: 15 + "%",
  });
  //about_cont line

  // about_num
  gsap.from(".about_cont ul li .about_num1", {
    scrollTrigger: {
      trigger: ".about_page",
      markers: true,
      start: "5% center",
    },
    x: -100,
    opacity: 0,
  });
  gsap.to(".about_cont ul li .about_num1", {
    scrollTrigger: {
      trigger: ".about_page",
      markers: true,
      start: "5% center",
    },
    opacity: 1,
    x: 0,
    duration: 0.7,
    ease: "sine.out",
    delay: 1.8,
  });

  gsap.from(".about_cont ul li .about_num2", {
    scrollTrigger: {
      trigger: ".about_page",
      markers: true,
      start: "5% center",
    },
    x: -100,
    opacity: 0,
  });
  gsap.to(".about_cont ul li .about_num2", {
    scrollTrigger: {
      trigger: ".about_page",
      markers: true,
      start: "5% center",
    },
    opacity: 1,
    x: 0,
    duration: 0.7,
    ease: "sine.out",
    delay: 2.2,
  });

  gsap.from(".about_cont ul li .about_num3", {
    scrollTrigger: {
      trigger: ".about_page",
      markers: true,
      start: "5% center",
    },
    x: -100,
    opacity: 0,
  });
  gsap.to(".about_cont ul li .about_num3", {
    scrollTrigger: {
      trigger: ".about_page",
      markers: true,
      start: "5% center",
    },
    opacity: 1,
    x: 0,
    duration: 0.7,
    ease: "sine.out",
    delay: 2.5,
  });
  // about_num

  //about_desc
  gsap.from(".about_cont ul li .about_desc1", {
    scrollTrigger: {
      trigger: ".about_page",
      markers: true,
      start: "5% center",
    },
    y: 20,
    opacity: 0,
  });
  gsap.to(".about_cont ul li .about_desc1", {
    scrollTrigger: {
      trigger: ".about_page",
      markers: true,
      start: "5% center",
    },
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: "power1.out",
    delay: 2.4,
  });

  gsap.from(".about_cont ul li .about_desc2", {
    scrollTrigger: {
      trigger: ".about_page",
      markers: true,
      start: "5% center",
    },
    y: 20,
    opacity: 0,
  });
  gsap.to(".about_cont ul li .about_desc2", {
    scrollTrigger: {
      trigger: ".about_page",
      markers: true,
      start: "5% center",
    },
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: "power1.out",
    delay: 2.6,
  });

  gsap.from(".about_cont ul li .about_desc3", {
    scrollTrigger: {
      trigger: ".about_page",
      markers: true,
      start: "5% center",
    },
    y: 20,
    opacity: 0,
  });
  gsap.to(".about_cont ul li .about_desc3", {
    scrollTrigger: {
      trigger: ".about_page",
      markers: true,
      start: "5% center",
    },
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: "power1.out",
    delay: 2.8,
  });
  //about_desc
}

/////////////////////////////////////////////////////////////////

//about_page 2 title-->
gsap.from(".aboutImg_box > .about_text", {
  scrollTrigger: {
    trigger: ".aboutImg_box",
    markers: true,
    start: "10% center",
  },
  opacity: 0,
  y: 100,
  duration: 1,
});
gsap.to(".aboutImg_box > .about_text", {
  scrollTrigger: {
    trigger: ".aboutImg_box",
    markers: true,
    start: "10% center",
  },
  opacity: 1,
  y: 0,
  duration: 1,
});
//about_page 2 title-->

//about_page 2 img-->
gsap.from(".slider__img", {
  scrollTrigger: {
    trigger: ".aboutImg_box",
    markers: true,
    start: "10% center",
  },
  opacity: 0,
  duration: 1,
});
gsap.to(".slider__img", {
  scrollTrigger: {
    trigger: ".aboutImg_box",
    markers: true,
    start: "10% center",
  },
  opacity: 1,
  ease: "power2.out",
  duration: 2,
});
//about_page 2 img-->

// slider
var menu = [];
jQuery(".swiper-slide").each(function (index) {
  menu.push(jQuery(this).find(".slide-inner").attr("data-text"));
});
var interleaveOffset = 0.5;
var swiperOptions = {
  loop: true,
  speed: 1000,
  parallax: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  watchSlidesProgress: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  on: {
    progress: function () {
      var swiper = this;
      for (var i = 0; i < swiper.slides.length; i++) {
        var slideProgress = swiper.slides[i].progress;
        var innerOffset = swiper.width * interleaveOffset;
        var innerTranslate = slideProgress * innerOffset;
        swiper.slides[i].querySelector(".slide-inner").style.transform =
          "translate3d(" + innerTranslate + "px, 0, 0)";
      }
    },

    touchStart: function () {
      var swiper = this;
      for (var i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = "";
      }
    },

    setTransition: function (speed) {
      var swiper = this;
      for (var i = 0; i < swiper.slides.length; i++) {
        swiper.slides[i].style.transition = speed + "ms";
        swiper.slides[i].querySelector(".slide-inner").style.transition =
          speed + "ms";
      }
    },
  },
};

var swiper = new Swiper(".swiper-container", swiperOptions);

// DATA BACKGROUND IMAGE
var sliderBgSetting = $(".slide-bg-image");
sliderBgSetting.each(function (indx) {
  if ($(this).attr("data-background")) {
    $(this).css("background-image", "url(" + $(this).data("background") + ")");
  }
});
