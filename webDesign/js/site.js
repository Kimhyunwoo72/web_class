$("#header > nav > ul > li").mouseover(()=>{
    $("#header > nav > ul > li").find(".hid").stop().slideDown();
})
$("#header > nav > ul > li").mouseout(()=>{
    $("#header > nav > ul > li").find(".hid").stop().slideUp();
})