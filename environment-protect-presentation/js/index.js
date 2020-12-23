// noinspection JSUnresolvedVariable

/**
 * 首页的js
 */

const $ = jQuery;

// 入口函数
$(function () {
    // 加载样式效果
    loadStyleEffect();

    (async function () {
        // 加载环保新闻
        await loadNews();

        // // 加载环保视频
        await loadVideo();

        // // 加载环保数据
        await loadData();

        // 加载小知识
        await loadKnowledge();
    })();

    // 加载事件
    loadEvents();
});


// 加载环保新闻
async function loadNews() {
    let data = [{
        "newsId": 24,
        "newsName": "成都环保设施“云开放”探秘下沉式污水处理厂",
        "newsFace": "../images/news-cover/01.jpg",
        "newsDate": null,
        "newsFrom": "北极星水处理网",
        "newsUrl": "http://www.chinaenvironment.com/scyw/index_68_112555.html",
        "newsAgencyUrl": null
    }, {
        "newsId": 23,
        "newsName": "合肥近万处垃圾投放点“大瘦身” 垃圾分类后将更多“变废为宝”",
        "newsFace": "../images/news-cover/02.jpg",
        "newsDate": null,
        "newsFrom": "北极星固废网",
        "newsUrl": "http://www.chinaenvironment.com/scyw/index_67_112556.html",
        "newsAgencyUrl": null
    }, {
        "newsId": 19,
        "newsName": "新疆生态补水助沙漠边缘重现候鸟“天堂”",
        "newsFace": "../images/news-cover/03.jpg",
        "newsDate": null,
        "newsFrom": "中国发展门户网",
        "newsUrl": "\t http://www.chinaenvironment.com/zxxwlb/index_55_112215.html",
        "newsAgencyUrl": null
    }];
    let covers = $('.news-item img');
    let titles = $('.news-item a');
    let froms = $('.news-item .from');
    for (let i = 0; i < 3; i++) {
        $(covers[i]).attr('src', data[i]['newsFace']);
        $(titles[i]).attr('href', data[i]['newsUrl']);
        $(titles[i]).text(data[i]['newsName']);
        $(froms[i]).text(data[i]['newsFrom']);
    }
}


// 加载环保视频
async function loadVideo() {
    let data = [{
        "videoName": "环境污染，气候变暖，野生动物的逐渐灭亡，下一个将会轮到人类吗",
        "videoUrl": "//player.bilibili.com/player.html?aid=456234157&bvid=BV165411Y7Vr&cid=208747621&page=1"
    }, {
        "videoName": "【环境保护混剪 | 世界环境日】今天我在这里，为将来的世代发声",
        "videoUrl": "//player.bilibili.com/player.html?aid=24240325&bvid=BV1wW411N7C4&cid=40642879&page=1"
    }];
    let frames = $('.video-frame');
    let names = $('.video-name');
    for (let i = 0; i < 2; i++) {
        $(frames[i]).attr('src', data[i]['videoUrl']);
        $(names[i]).html(data[i]['videoName']);
    }
}


// 加载环保数据
async function loadData() {
    // 获取空气质量数据
    let data = [{
        "no2": 63.0,
        "pm25": 100.0,
        "o3": 34.0,
        "datatime": 1608562800000,
        "so2": 11.0,
        "cityname": "平顶山",
        "aqi": 132.0,
        "pm10": 133.0,
        "primarypol": "PM2.5",
        "aqilevel": "轻度污染",
        "co": 1.036
    }, {
        "no2": 67.0,
        "pm25": 103.0,
        "o3": 28.0,
        "datatime": 1608566400000,
        "so2": 10.0,
        "cityname": "平顶山",
        "aqi": 135.0,
        "pm10": 130.0,
        "primarypol": "PM2.5",
        "aqilevel": "轻度污染",
        "co": 0.994
    }, {
        "no2": 56.0,
        "pm25": 100.0,
        "o3": 40.0,
        "datatime": 1608570000000,
        "so2": 11.0,
        "cityname": "平顶山",
        "aqi": 132.0,
        "pm10": 125.0,
        "primarypol": "PM2.5",
        "aqilevel": "轻度污染",
        "co": 0.899
    }, {
        "no2": 51.0,
        "pm25": 86.0,
        "o3": 45.0,
        "datatime": 1608573600000,
        "so2": 10.0,
        "cityname": "平顶山",
        "aqi": 114.0,
        "pm10": 127.0,
        "primarypol": "PM2.5",
        "aqilevel": "轻度污染",
        "co": 0.898
    }, {
        "no2": 53.0,
        "pm25": 89.0,
        "o3": 42.0,
        "datatime": 1608577200000,
        "so2": 11.0,
        "cityname": "平顶山",
        "aqi": 118.0,
        "pm10": 116.0,
        "primarypol": "PM2.5",
        "aqilevel": "轻度污染",
        "co": 0.869
    }, {
        "no2": 65.0,
        "pm25": 90.0,
        "o3": 23.0,
        "datatime": 1608580800000,
        "so2": 10.0,
        "cityname": "平顶山",
        "aqi": 119.0,
        "pm10": 116.0,
        "primarypol": "PM2.5",
        "aqilevel": "轻度污染",
        "co": 0.913
    }, {
        "no2": 69.0,
        "pm25": 87.0,
        "o3": 14.0,
        "datatime": 1608584400000,
        "so2": 10.0,
        "cityname": "平顶山",
        "aqi": 115.0,
        "pm10": 118.0,
        "primarypol": "PM2.5",
        "aqilevel": "轻度污染",
        "co": 1.041
    }, {
        "no2": 69.0,
        "pm25": 98.0,
        "o3": 11.0,
        "datatime": 1608588000000,
        "so2": 10.0,
        "cityname": "平顶山",
        "aqi": 129.0,
        "pm10": 149.0,
        "primarypol": "PM2.5",
        "aqilevel": "轻度污染",
        "co": 1.141
    }, {
        "no2": 68.0,
        "pm25": 107.0,
        "o3": 9.0,
        "datatime": 1608591600000,
        "so2": 11.0,
        "cityname": "平顶山",
        "aqi": 140.0,
        "pm10": 157.0,
        "primarypol": "PM2.5",
        "aqilevel": "轻度污染",
        "co": 1.26
    }, {
        "no2": 69.0,
        "pm25": 122.0,
        "o3": 8.0,
        "datatime": 1608595200000,
        "so2": 11.0,
        "cityname": "平顶山",
        "aqi": 160.0,
        "pm10": 171.0,
        "primarypol": "PM2.5",
        "aqilevel": "中度污染",
        "co": 1.538
    }, {
        "no2": 66.0,
        "pm25": 108.0,
        "o3": 11.0,
        "datatime": 1608598800000,
        "so2": 11.0,
        "cityname": "平顶山",
        "aqi": 142.0,
        "pm10": 146.0,
        "primarypol": "PM2.5",
        "aqilevel": "轻度污染",
        "co": 1.637
    }, {
        "no2": 69.0,
        "pm25": 93.0,
        "o3": 12.0,
        "datatime": 1608602400000,
        "so2": 12.0,
        "cityname": "平顶山",
        "aqi": 123.0,
        "pm10": 133.0,
        "primarypol": "PM2.5",
        "aqilevel": "轻度污染",
        "co": 1.687
    }, {
        "no2": 47.0,
        "pm25": 141.0,
        "o3": 52.0,
        "datatime": 1608606000000,
        "so2": 15.0,
        "cityname": "平顶山",
        "aqi": 188.0,
        "pm10": 202.0,
        "primarypol": "PM2.5",
        "aqilevel": "中度污染",
        "co": 1.163
    }, {
        "no2": 31.0,
        "pm25": 107.0,
        "o3": 81.0,
        "datatime": 1608609600000,
        "so2": 16.0,
        "cityname": "平顶山",
        "aqi": 140.0,
        "pm10": 155.0,
        "primarypol": "PM2.5",
        "aqilevel": "轻度污染",
        "co": 0.977
    }, {
        "no2": 25.0,
        "pm25": 103.0,
        "o3": 97.0,
        "datatime": 1608613200000,
        "so2": 15.0,
        "cityname": "平顶山",
        "aqi": 135.0,
        "pm10": 133.0,
        "primarypol": "PM2.5",
        "aqilevel": "轻度污染",
        "co": 0.903
    }, {
        "no2": 27.0,
        "pm25": 96.0,
        "o3": 92.0,
        "datatime": 1608616800000,
        "so2": 16.0,
        "cityname": "平顶山",
        "aqi": 127.0,
        "pm10": 117.0,
        "primarypol": "PM2.5",
        "aqilevel": "轻度污染",
        "co": 0.873
    }, {
        "no2": 28.0,
        "pm25": 101.0,
        "o3": 89.0,
        "datatime": 1608620400000,
        "so2": 14.0,
        "cityname": "平顶山",
        "aqi": 133.0,
        "pm10": 136.0,
        "primarypol": "PM2.5",
        "aqilevel": "轻度污染",
        "co": 0.87
    }, {
        "no2": 27.0,
        "pm25": 107.0,
        "o3": 92.0,
        "datatime": 1608624000000,
        "so2": 13.0,
        "cityname": "平顶山",
        "aqi": 140.0,
        "pm10": 136.0,
        "primarypol": "PM2.5",
        "aqilevel": "轻度污染",
        "co": 0.838
    }, {
        "no2": 30.0,
        "pm25": 92.0,
        "o3": 85.0,
        "datatime": 1608627600000,
        "so2": 12.0,
        "cityname": "平顶山",
        "aqi": 122.0,
        "pm10": 122.0,
        "primarypol": "PM2.5",
        "aqilevel": "轻度污染",
        "co": 0.859
    }, {
        "no2": 39.0,
        "pm25": 104.0,
        "o3": 70.0,
        "datatime": 1608631200000,
        "so2": 12.0,
        "cityname": "平顶山",
        "aqi": 137.0,
        "pm10": 130.0,
        "primarypol": "PM2.5",
        "aqilevel": "轻度污染",
        "co": 0.948
    }, {
        "no2": 42.0,
        "pm25": 110.0,
        "o3": 67.0,
        "datatime": 1608634800000,
        "so2": 12.0,
        "cityname": "平顶山",
        "aqi": 144.0,
        "pm10": 141.0,
        "primarypol": "PM2.5",
        "aqilevel": "轻度污染",
        "co": 1.043
    }, {
        "no2": 44.0,
        "pm25": 112.0,
        "o3": 64.0,
        "datatime": 1608638400000,
        "so2": 12.0,
        "cityname": "平顶山",
        "aqi": 147.0,
        "pm10": 145.0,
        "primarypol": "PM2.5",
        "aqilevel": "轻度污染",
        "co": 1.081
    }, {
        "no2": 48.0,
        "pm25": 103.0,
        "o3": 58.0,
        "datatime": 1608642000000,
        "so2": 12.0,
        "cityname": "平顶山",
        "aqi": 135.0,
        "pm10": 157.0,
        "primarypol": "PM2.5",
        "aqilevel": "轻度污染",
        "co": 1.072
    }, {
        "no2": 54.0,
        "pm25": 115.0,
        "o3": 48.0,
        "datatime": 1608645600000,
        "so2": 11.0,
        "cityname": "平顶山",
        "aqi": 150.0,
        "pm10": 152.0,
        "primarypol": "PM2.5",
        "aqilevel": "轻度污染",
        "co": 1.121
    }]

    let xAxis_data = [];
    let pm25_data = [];
    let pm10_data = [];

    data.forEach(item => {
        xAxis_data.push(formatDate(item['datatime']));
        pm25_data.push(item['pm25']);
        pm10_data.push(item['pm10']);
    });

    let option_pm25 = {
        title: {
            text: '平顶山市空气质量 - PM2.5 趋势图'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: xAxis_data
        }],
        yAxis: [{
            type: 'value'
        }],
        series: [{
            name: 'PM2.5',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: pm25_data
        }]
    };

    let option_pm10 = {
        title: {
            text: '平顶山市空气质量 - PM10 趋势图'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: xAxis_data
        }],
        yAxis: [{
            type: 'value'
        }],
        series: [{
            name: 'PM2.5',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: pm10_data
        }]
    };

    let chartAQI = echarts.init(document.getElementById('chart-aqi'));
    let chartPM25 = echarts.init(document.getElementById('chart-pm25'));
    chartAQI.setOption(option_pm25);
    chartPM25.setOption(option_pm10);


    window.onresize = function () {
        chartAQI.resize();
        chartPM25.resize();
    };

}


// 加载小知识
async function loadKnowledge() {
    let data = [{
        "holidayId": 4,
        "holidayName": "世界水日",
        "holidayDate": "3月22日",
        "holidayReason": "联合国大会作出决议确定<br>致力于解决因水资源需求上升而引起的全球性水危机"
    }, {
        "holidayId": 5,
        "holidayName": "世界地球日",
        "holidayDate": "4月22日",
        "holidayReason": "世界地球日是一项世界性的环境保护运动<br>联合国大会一致通过决议，决定世界地球日"
    }, {
        "holidayId": 7,
        "holidayName": "防治荒漠化和干旱日",
        "holidayDate": "6月17日",
        "holidayReason": "为防治荒漠化<br>由联合国通过决议"
    }, {
        "holidayId": 9,
        "holidayName": "世界动物日",
        "holidayDate": "10月4日",
        "holidayReason": "为唤起世人关注濒危生物<br>中国从1997年开始纪念世界动物日"
    }, {
        "holidayId": 2,
        "holidayName": "植树日",
        "holidayDate": "3月12日",
        "holidayReason": "党和国家十分重视绿化建设<br>国务院提议，为动员全国各族人民植树造林"
    }, {
        "holidayId": 6,
        "holidayName": "国际生物多样性日",
        "holidayDate": "5月22日",
        "holidayReason": "为了保护全球的生物多样性<br>联合国大会通过决议成立国际生物多样性日"
    }];


    let titles = $('.knowledge-item h3');
    let contents = $('.knowledge-item p');

    for (let i = 0; i < 6; i++) {
        $(titles[i]).html(data[i]['holidayName']);
        $(contents[i]).html(`${data[i]['holidayDate']}<br>${data[i]['holidayReason']}`);
    }
}


// 加载事件
function loadEvents() {
    // 刷新新闻
    $('#refresh-news').click(() => {
        (async function () {
            await loadNews();
        })();
    });


    // 刷新视频
    $('#refresh-video').click(() => {
        (async function () {
            await loadVideo();
        })();
    });


    // 刷新小知识
    $('#refresh-knowledge').click(() => {
        (async function () {
            await loadKnowledge();
        })();
    });
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
    let wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 250,
        mobile: true,
        live: true
    });
    // noinspection JSUnresolvedFunction
    wow.init();


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