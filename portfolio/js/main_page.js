
// banner 움직이는 효과
{
const circle = document.querySelector(".cursor").getBoundingClientRect();

document.querySelector(".banner_inner").addEventListener("mousemove", (e)=>{
     //커서
     gsap.to(".cursor", {duration: .2, left: e.pageX - circle.width/2, top: e.pageY - circle.height/2});

     //마우스 좌표값
     let mousePageX = e.pageX
     let mousePageY = e.pageY

     //마우스 좌표값을 가운데 초기화
     let centerPageX = window.innerWidth/2 - mousePageX
     let centerPageY = window.innerHeight/2 - mousePageY

     //이미지 움직이기
     gsap.to(".banner_inner figure img", {duration: 0.3, x: centerPageX/20, y: centerPageY/20});

     let windowHeight = window.screen.height //1080 // 화면 크기

 })
 getSite = () => {
    setTimeout(() => {
        // .main__inner > div:nth-child(1)
        gsap.to("#header", {
            duration:0.5, 
            top:0,
            ease: "expo.out",
            delay: 3.2
        })
        gsap.to(".sub_text", {
            left:0,
            opacity: 1,
            duration:2,
            delay: 4
        })
        gsap.to(".main_page h1 i", {
            bottom:0,
            opacity: 1,
            duration:2,
            delay: 3

        })
        gsap.to(".main_page h1 span", {
            bottom:0,
            opacity: 1,
            duration: 2,
            delay: 3.2
        })
        gsap.to(".main_inpo p", {
            top:0,
            opacity: 1,
            duration: 1,
            delay: 4.5
        })
        // gsap.to(".main_banner", {
        //     opacity: 0,
        //     duration: 0,
        //     delay: 0
        // })
    }, 1000);
}
getSite ()
}