/**
 * 首页的js
 */

const $ = jQuery;


// 入口函数
$(function () {
    loadEvent();
});


// 加载事件
function loadEvent() {

    // 加载时候的动图
    $(window).load(function () {
        $('#loading').fadeOut();
        $('#loadingDiv').delay(1000).fadeOut("slow");
    });

    // 滚动到30的时候，导航栏折叠
    $(window).on('ready , scroll', function () {
        if ($(window).scrollTop() > 30) {
            $('#navbar').addClass('minified');
        } else {
            $('#navbar').removeClass('minified');
        }
    });

    // 翻页效果
    $('#nav-menu').onePageNav({
        currentClass: 'active',
        scrollSpeed: 500,
        easing: 'linear'
    });

    // 动画效果
    let wow = new WOW(
        {
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 250,
            mobile: true,
            live: true,
            callback: box => {
            }
        }
    );
    wow.init();


    // 新闻的 幻灯片效果
    $("#news-list").owlCarousel({
        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [768, 1],
        itemsMobile: [520, 1],
        autoPlay: 5000
    });

    // 视差效果
    $(window).stellar({
        responsive: true,
        positionProperty: 'position'
    });


    // 轮播图
    $('#slider').sliderPro({
        width: '100%',
        height: 768,
        fade: true,
        arrows: true,
        waitForLayers: true,
        buttons: true,
        autoplay: true,
        autoScaleLayers: false,
        imageScaleMode: 'cover',
        slideAnimationDuration: 1500,
        breakpoints: {
            600: {
                height: 480
            }
        }
    });


}
