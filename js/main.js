$(function($){
    $('.bg-swicher').bgSwitcher({
        images: ['../images/logo2.png','../images/logo2.png','../images/logo2.png'],
        interval: 500,
        loop: true
    });

    $(window).scroll(function (){
        var targetElement = $('.fadein').offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if(scroll > targetElement - windowHeight + 200){
            $('.fadein').css('opacity','1');
            $('.fadein').css('transform', 'translateY(0)');
        }
    });

    $('.slider').slick({

        arrows: false,
        autoplay: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '25%',

    });


    $('.more-button').on('click', function(){
        if($('.open-box').is(':hidden')) {
            $('.open-box').slideDown();
            $(this).text('close');
            $(this).css('background-color', '#808080');
        } else {
            $('.open-box').slideUp();
            $(this).text('more');
            $(this).css('background-color', '#fabb51');  
        }

    });

    $(".modal-button").modaal();

    $('nav a[href^="#"]').click(function() {
        var adjust = 0;
        var speed = 400;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - adjust;
        $('body,html').animate({
            scrollTop: position
        }, speed,'swing');
        return false;
    });

    $('img[usemap]').rwdImageMaps();

    $("svg a").click(function(){
        if(String($(this).attr("xlink:href")).charAt(0) == "#")
             location.href = $(this).attr("xlink:href");
    });

});

