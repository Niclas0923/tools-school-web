import * as VueRouter from 'vue-router'

export default VueRouter.createRouter({
    // 设置使用 hash
    history: VueRouter.createWebHashHistory(),
    routes:[
        // 一级路由
        // {
        //     path: '/',
        //     // 直接跳转 /home
        //     redirect: '/home'
        // },
        // // 二级路由
        // {
        //     path:"/home",
        //     component:,
        // },
    ]
})