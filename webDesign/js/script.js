(function($){
    // $(".submenu").css("display","block");

        //첫번째 유형 자기 밑에 자식
        // $(".nav > ul > li").mouseover(function(){
        //     $(this).find(".submenu").css("display","block");
        // })
        // $(".nav > ul > li").mouseout(function(){
        //     $(this).find(".submenu").css("display","none");
        // })

        //두번째 유형 모든 자식 밑에
        // $(".nav > ul > li").mouseover(function(){
        //     $(".nav > ul > li").find(".submenu").css("display","block");
        // })
        // $(".nav > ul > li").mouseout(function(){
        //     $(".nav > ul > li").find(".submenu").css("display","none");
        // })

        //세번째 유형 
        // $(".nav > ul > li").mouseover(function(){
        //     $(this).find(".submenu").stop().show(500);
        // })
        // $(".nav > ul > li").mouseout(function(){
        //     $(this).find(".submenu").stop().hide(500);
        // })

        //네번째
        // $(".nav > ul > li").mouseover(function(){
        //     $(this).find(".submenu").stop().slideDown(500);
        // })
        // $(".nav > ul > li").mouseout(function(){
        //     $(this).find(".submenu").stop().slideUp(500);
        // })

        //다섯번째 stop을 넣는 이유는 스텍이 한번만 쌓이게 하기위해
        $(".nav > ul > li").mouseover(function(){
            $(".nav > ul > li").find(".submenu").stop().slideDown(500);
        })
        $(".nav > ul > li").mouseout(function(){
            $(".nav > ul > li").find(".submenu").stop().slideUp(500);
        })



        //탭 메뉴
        let tabMenu = $(".notice");

        tabMenu.find("ul > li > ul").hide();
        tabMenu.find("ul > li.active > ul").show();

        function tabList(e){
            e.preventDefault(); //페이지 위로 안가지게

            var target = $(this); //사용자가 클릭한 메뉴
            target.next().show().parent("li").addClass("active").siblings("li").removeClass("active").find("ul").hide();
        }
        tabMenu.find("ul > li > a").click(tabList)
})(jQuery);
