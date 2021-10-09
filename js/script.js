$(function () {
    //햄버거메뉴 -버튼 show hide / all_menu fade
    $(".ham").on("click",function(){
        $(this).hide();
        $(".all_menu").fadeIn();
        $(".ham2").show();
    });
    $(".ham2").on("click",function(){
        $(this).hide();
        $(".all_menu").fadeOut();
        $(".ham").show();
    });

    //슬라이더
    $('ul.main_slider').bxSlider({
        auto: true,
        pagerCustom: '.pager', //페이저
        nextSelector: '.next', //다음 버튼
        prevSelector: '.prev', //이전 버튼
        nextText: '<i class="fa fa-angle-right" aria-hidden="true"></i>', //다음 버튼 요소에 ‘next’ 텍스트 삽입 , 텍스트가 필요 없다면 text-indent로 텍스트 숨김
        prevText: '<i class="fa fa-angle-left" aria-hidden="true"></i>', //이전 버튼 요소에 ‘prev’ 텍스트 삽입
    });


    /* 랭귀지 체인지 */
    var chk =0;
    $("header ul.l_box li:first-child").click(function(){
        if(chk ==0){
            $(this).find("i").removeClass("fa-caret-down").addClass("fa-caret-up");
            $(this).siblings().stop().slideDown();
            chk++;
        }else{
            $(this).find("i").removeClass("fa-caret-up").addClass("fa-caret-down");
            $(this).siblings().stop().slideUp();
            chk =0;
        }
    });

    //스크롤이벤트
    $(window).scroll(function(){
        var st = $(this).scrollTop(); //스크롤 탑 위치를 st에 저장
        var evTop=$(".event").offset().top - 500 //이벤트가 스크롤될 위치를 evTop에 저장
        var lineTop=$(".line_up").offset().top -400 //라인업이 스크롤될 위치를 lineTop에 저장

        //이벤트 컨텐츠 액션
        if(st>=evTop){
            $(".contents .event section").eq(0).addClass("on").siblings().addClass("on").css({
                "transition-delay" :"0.3s"
            })
        }else{
            $(".contents .event section").removeClass("on");
        }

        //line up
        for(var i=0; i<4; i++){
            if(st>=lineTop +(i*50)){
                //이미지 박스 나오기
                $("ul.img_box li").eq(i).addClass("on").css({
                    "transition-delay": (0.4 *i)+"s"
                })
                //텍스트박스 나오기
                $("ul.txt_box li").eq(i).addClass("on").css({
                    "transition-delay": (0.3 *i)+"s"
                })
            }else{
                $("ul.img_box li, ul.txt_box li").removeClass("on");
            }
        }

        //products
        if(st>= $(".products").offset().top -500){
            for(var i =0; i < $(".products").find("li").length; i++){
                $(".products").find("li").eq(i).addClass("on").css({
                    "animation-delay" :(0.2 *i)+"s"
                });
            }

        }else{
            $(".products").find("li").removeClass("on");
        }


    });
    //스크롤이벤트 끝

    //비디오모달
    $(".video button").click(function(){
        $(".vid_modal").fadeIn(1000);
        $(".vid_modal iframe").attr("src","https://www.youtube.com/embed/WDkrfYSKAk0");
    });

    $(".vid_modal i").click(function(){
        $(".vid_modal").fadeOut(1000);
        $(".vid_modal iframe").attr("src","");
    });

    //패밀리사이트 토글
    $(".family").click(function(){
        $(this).find(".none").slideToggle().siblings().find("i").toggleClass("fa-angle-down").toggleClass("fa-angle-up");
    });

    //탑버튼
    $(".top").click(function(e){
        e.preventDefault();
        $("body,html").animate({"scrollTop":0},500,"swing");
    });

});