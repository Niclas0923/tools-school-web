import * as VueRouter from 'vue-router'
import Home from "../components/home.vue";
import RollCallTool from "../components/RollCallTool.vue";
import WeChatRelay from "../components/WeChatRelay.vue";

export default VueRouter.createRouter({
    // 设置使用 hash
    history: VueRouter.createWebHashHistory(),
    routes:[
        // 一级路由
        {
            path: '/',
            // 直接跳转 /home
            redirect: '/home'
        },
        // 二级路由
        {
            path:"/home",
            component:Home,
        },
        // 二级路由
        {
            path:"/rollCallTool",
            component:RollCallTool,
        },
        // 二级路由
        {
            path:"/weChatRelay",
            component:WeChatRelay,
        },
    ]
})