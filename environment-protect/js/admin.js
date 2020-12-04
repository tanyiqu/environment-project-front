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
            console.log(e.index);
            if(e.aaa){
                console.log(e.aaa)
            }
        }
    }
};
let CtorSlideNav = Vue.extend(slideNav);
new CtorSlideNav().$mount('#slide-nav');