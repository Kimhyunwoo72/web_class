// bottom line
gsap.to(".main_line ul ", {
  duration: 1.5,
  width: 100 + "%",
  ease: "none",
  // delay: 3,
});
// right line
gsap.to(".main_line ul li:nth-child(1)", {
  duration: 0.7,
  height: 35 + "vw",
  opacity: "1",
  ease: "none",
  delay: 1.4,
});
gsap.to(".main_line ul li:nth-child(2)", {
  duration: 0.7,
  height: 35 + "vw",
  opacity: "1",
  ease: "none",
  delay: 1.6,
});
gsap.to(".main_line ul li:nth-child(3)", {
  duration: 0.7,
  height: 35 + "vw",
  opacity: "1",
  ease: "none",
  delay: 1.8,
});
gsap.to(".main_line ul li:nth-child(4)", {
  duration: 0.7,
  height: 35 + "vw",
  opacity: "1",
  ease: "none",
  delay: 2,
});
//라인

// h1
gsap.from(".main_page h1 span span ", {
  delay: 2,
  y: 200,
  stagger: {
    amount: 0.6,
    // from: "end",
  },
});
setTimeout(() => {
  gsap.to(".main_page h1 span span ", {
    y: 0,
    delay: 2.5,
  });
}, 4100);

// h2
gsap.from(".main_page h2 span span ", {
  delay: 2.2,
  y: 200,
  stagger: {
    amount: 0.6,
    // from: "center",
  },
});
setTimeout(() => {
  gsap.to(".main_page h2 span span ", {
    y: 0,
    delay: 2.7,
  });
}, 4100);

gsap.to(".sub_text", {
  opacity: 1,
  duration: 1,
  delay: 2.9,
});
gsap.to(".main_inpo", {
  opacity: 1,
  duration: 1.5,
  delay: 2.9,
});
gsap.to(".main_banner figure img", {
  opacity: 1,
  duration: 2,
  delay: 3,
});

ScrollTrigger.name = "ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const circle = document.querySelector(".cursor").getBoundingClientRect();

document.querySelector(".main_inner").addEventListener("mousemove", (e) => {
  //커서
  gsap.to(".cursor", {
    duration: 2,
    left: e.pageX - circle.width / 2,
    top: e.pageY - circle.height / 2,
  });

  //마우스 좌표값
  let mousePageX = e.pageX;
  let mousePageY = e.pageY;

  //마우스 좌표값을 가운데 초기화
  let centerPageX = window.innerWidth / 2 - mousePageX;
  let centerPageY = window.innerHeight / 2 - mousePageY;

  //이미지 움직이기
  gsap.to(".main_inner figure img", {
    duration: 0.3,
    x: centerPageX / 30,
    y: centerPageY / 30,
  });

  let windowHeight = window.screen.height; //1080 // 화면 크기
});
