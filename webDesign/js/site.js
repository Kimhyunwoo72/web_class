$("#header > nav > ul > li").mouseover(()=>{
    $("#header > nav > ul > li").find(".hid").stop().slideDown();
})
$("#header > nav > ul > li").mouseout(()=>{
    $("#header > nav > ul > li").find(".hid").stop().slideUp();
})

$(".imgBox > h2 > a").click(()=>{
    $(".imgBox .best").addClass("active")
    $(".imgBox .comment").removeClass("active")
})
$(".imgBox > span > a").click(()=>{
    $(".imgBox .comment").addClass("active")
    $(".imgBox .best").removeClass("active")
})

   // slider
   const sliderWrap = document.querySelector(".slider__wrap")
   const sliderImg = document.querySelector(".slider__img")
   const sliderInner = document.querySelector(".slider__inner")
   const slider = document.querySelectorAll(".slider")

   let currentIndex = 0;
   let sliderCount = slider.length //이미지 갯수
   let sliderWidth = sliderImg.offsetWidth //이미지 가로값
   let sliderClone = sliderInner.firstElementChild.cloneNode(true) //첫번째 이미지 복사
   sliderInner.appendChild(sliderClone) //첫번째 이미지를 마지막에 넣어줌
   
   function sliderEffect() {
       currentIndex++;
       sliderInner.style.transition = "all 0.3s";  
       sliderInner.style.transform = "translateX(-" + sliderWidth * currentIndex + "px)"
       //마지막 사진에 갔을 때
       if(currentIndex == sliderCount){
           setTimeout(() => {
               //초기화
               sliderInner.style.transition = "0s";
               sliderInner.style.transform = "translateX(0px)"
           },300)
           currentIndex = 0;
       }
   }
   setInterval(sliderEffect, 2000);