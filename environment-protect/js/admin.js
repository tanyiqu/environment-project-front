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
// noinspection JSUnusedGlobalSymbols,ES6ShorthandObjectProperty
let videoTable = {
    data() {
        return {
            videoData: [{
                "videoId": "id",
                "videoName": "正在获取...",
                "videoUrl": "正在获取..."
            }],
            inputName: '',
            inputUrl: ''
        }
    },
    created() {
        // 加载视频数据
        this.refresh();
    },
    methods: {
        async deleteVideo(id) {
            let that = this;
            let flag = confirm(`确定删除 ${id}`);
            if (flag) {
                let url = API.VIDEO_API.DELETE;
                get(url, {
                    videoId: id
                }).then(e => {
                    console.log(e);
                    // noinspection JSUnresolvedFunction
                    that.$message({
                        type: 'success',
                        showClose: true,
                        message: '删除成功'
                    });

                    that.refresh();
                }).catch(e => {
                    console.log(e);
                    // noinspection JSUnresolvedFunction
                    that.$message({
                        type: 'error',
                        showClose: true,
                        message: '删除失败：服务器异常'
                    });
                });
            } else {
                // noinspection JSUnresolvedFunction
                that.$message({
                    showClose: true,
                    message: '操作取消'
                });
            }
        },
        handleClick(a) {
            console.log(a);
        },
        refresh() {
            let that = this;
            (async function () {
                let url = API.VIDEO_API.ALL;
                let data = await get(url);
                that.videoData = data.data;
            })();
        },
        addVideo() {
            let that = this;
            let name = that.inputName;
            let url = that.inputUrl;
            if (name.trim() === '' || url.trim() === '') {
                // noinspection JSUnresolvedFunction
                this.$message({
                    showClose: true,
                    message: `请输入`
                });
            } else {
                post(API.VIDEO_API.ADD, {
                    videoName: name,
                    videoUrl: url
                }).then(e => {
                    if (e.status === 200) {
                        // noinspection JSUnresolvedFunction
                        that.$message({
                            type: 'success',
                            showClose: true,
                            message: '添加成功'
                        });
                        that.refresh();
                    } else {
                        // noinspection JSUnresolvedFunction
                        that.$message({
                            type: 'error',
                            showClose: true,
                            message: '添加失败：服务器异常'
                        });
                    }
                }).catch(e => {
                    console.log(e);
                    // noinspection JSUnresolvedFunction
                    that.$message({
                        type: 'error',
                        showClose: true,
                        message: '添加失败：服务器异常'
                    });
                });
            }
        }
    }
};
// noinspection JSUnresolvedVariable
let CtorVideoTable = Vue.extend(videoTable);
new CtorVideoTable().$mount('#video-table');


