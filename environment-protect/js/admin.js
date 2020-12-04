// 侧边导航
// noinspection JSUnusedGlobalSymbols
let slideNav = {
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        tap(e) {
            let index = e.index;
            console.log(index);
            let id = `#section${index}`;
            console.log(id);
            for (let i = 1; i <= 4; i++) {
                $(`#section${i}`).hide();
            }
            $(id).show();
        }
    }
};
// noinspection JSUnresolvedVariable
let CtorSlideNav = Vue.extend(slideNav);
new CtorSlideNav().$mount('#slide-nav');


// 视频
// noinspection JSUnusedGlobalSymbols
let videoTable = {
    data() {
        return {
            videoData: [{
                "videoId": "id",
                "videoName": "正在获取...",
                "videoUrl": "正在获取..."
            }]
        }
    },
    created() {
        // 加载视频数据
        let that = this;
        (async function () {
            let url = API.VIDEO_API.ALL;
            let data = await get(url);
            that.videoData = data.data;
        })();
    },
    methods: {
        deleteVideo(id) {
            console.log('删除' + id);
        },
        handleClick(a) {
            console.log(a);
        },
        page(curr) {
            console.log(curr)
        }
    }
};
// noinspection JSUnresolvedVariable
let CtorVideoTable = Vue.extend(videoTable);
new CtorVideoTable().$mount('#video-table');


