import Vue from 'vue'
import VueRoute from 'vue-router'
Vue.use(VueRoute);

import Home from '../pages/Home.vue'
//创建并导出当前项目中创建的路由器对象。
export default new VueRoute({
    routers:[{
        path:'/'
    }]
})