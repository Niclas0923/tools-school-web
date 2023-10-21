import * as VueRouter from 'vue-router'
import Home from "../components/home.vue";
import RollCallTool from "../components/RollCallTool.vue";
import WeChatRelay from "../components/WeChatRelay.vue";
import DataShow from "../components/DataShow.vue";
import Others from "../components/Others.vue";
import ScreenSize from "../components/Others/ScreenSize.vue";

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
        {
            path:"/rollCallTool",
            component:RollCallTool,
        },
        {
            path:"/weChatRelay",
            component:WeChatRelay,
        },
        {
            path:"/dataShow",
            component:DataShow,
        },
        {
            path:"/others",
            component:Others,
            // 直接跳转到页面尺寸
            redirect: '/others/screenSize',
            children:[
                {
                    path:"screenSize",
                    component:ScreenSize
                }
            ]
        },
    ]
})