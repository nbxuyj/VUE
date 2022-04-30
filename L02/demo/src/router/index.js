import Vue from 'vue'

//导入路由。
import VueRouter from 'vue-router'

//因为VueRouter是一个插件需要Use。
Vue.use(VueRouter)



//导入路由需要的页面。
import Page1 from "../pages/Page1.vue";
import Page2 from "../pages/Page2.vue";
import Page3 from "../pages/Page3.vue";

//创建一个路由器对象并配置路由信息放到外面。
export default new VueRouter({
  routes: [
    {
      //请求路由的路径
      path: '/Page1',
      //当前路由的组件。
      component: Page1

    },
    {
      //请求路由的路径
      path: '/Page2',
      //当前路由的组件。
      component: Page2

    },
    {
      //请求路由的路径
      path: '/Page3',
      //当前路由的组件。
      component: Page3

    }

  ]

})

