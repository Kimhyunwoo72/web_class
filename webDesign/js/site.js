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