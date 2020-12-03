// noinspection JSUnresolvedVariable

/**
 * 首页的js
 */

const $ = jQuery;

// 入口函数
$(function () {
    // 加载样式效果
    loadStyleEffect();
    // 加载环保数据
    loadData();
});


// 加载环保数据
function loadData() {
    let optionAQI = {
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 100],
            type: 'line',
            areaStyle: {}
        }]
    };

    let optionPM25 = {
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            areaStyle: {}
        }]
    };

    let chartAQI = echarts.init(document.getElementById('chart-aqi'));
    let chartPM25 = echarts.init(document.getElementById('chart-pm25'));

    chartAQI.setOption(optionAQI);
    chartPM25.setOption(optionPM25);

    window.onresize = function () {
        chartAQI.resize();
        chartPM25.resize();
    }
}


// 加载样式效果
function loadStyleEffect() {

    // 加载时候的动图
    $(window).load(function () {
        // noinspection JSUnresolvedFunction
        $('#loading').fadeOut();
        // noinspection JSUnresolvedFunction
        $('#loadingDiv').delay(1000).fadeOut("slow");
    });

    // 滚动到30的时候，导航栏折叠
    // noinspection JSUnresolvedFunction
    $(window).on('ready , scroll', function () {
        if ($(window).scrollTop() > 30) {
            // noinspection JSUnresolvedFunction
            $('#navbar').addClass('minified');
        } else {
            // noinspection JSUnresolvedFunction
            $('#navbar').removeClass('minified');
        }
    });

    // 轮播图翻页效果
    // noinspection JSUnresolvedFunction
    $('#nav-menu').onePageNav({
        currentClass: 'active',
        scrollSpeed: 500,
        easing: 'linear'
    });

    // 动画效果
    // noinspection JSUnresolvedFunction
    let wow = new WOW(
        {
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 250,
            mobile: true,
            live: true
        }
    );
    // noinspection JSUnresolvedFunction
    wow.init();


    // 新闻的 幻灯片效果
    // noinspection JSUnresolvedFunction
    $("#news-list").owlCarousel({
        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [768, 1],
        itemsMobile: [520, 1],
        autoPlay: 5000
    });

    // 视差效果
    // noinspection JSUnresolvedFunction
    $(window).stellar({
        responsive: true,
        positionProperty: 'position'
    });


    // 轮播图
    // noinspection JSUnresolvedFunction
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