import Vue from 'vue'
import VueRouter from 'vue-router'
//因为VueRouter是一个插件需要Use。
Vue.use(VueRouter)

//导入路由需要的页面。
import login from "../views/login";
import Home1 from "../views/home";
//创建一个路由器对象并配置路由信息放到外面。
export default new VueRouter({
    routes: [
        { path: '/', redirect: '/login' },
        {
            //请求路由的路径
            path: '/login',
            //当前路由的组件。
            component: login
        }
        , { 
            path: '/home',
            component:Home1,

         },

    ]

})

