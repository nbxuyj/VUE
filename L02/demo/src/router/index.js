import Vue from 'vue'

//导入路由。
import VueRouter from 'vue-router'

//因为VueRouter是一个插件需要Use。
Vue.use(VueRouter)



//导入路由需要的页面。
import Page1 from "../pages/Page1.vue";
import Page2 from "../pages/Page2.vue";
import Page3 from "../pages/Page3.vue";
import B01 from "../pages/B01Store.vue";
import P13 from "../pages/P13计算属性.vue";
import P5 from "../pages/P14Watch用法.vue";
import B02 from "../pages/B02Getters.vue";
import B03 from "../pages/B03Actions.vue";
import B04 from "../pages/B04LocalStorage.vue";
import B05 from "../pages/B05Mock.vue";



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

    ,
    {
      //请求路由的路径
      path: '/P5',
      //当前路由的组件。
      component: P5

    }
    ,
    {
      //请求路由的路径
      path: '/P13',
      //当前路由的组件。
      component: P13

    }
    ,
    {
      //请求路由的路径
      path: '/B01',
      //当前路由的组件。
      component: B01

    }
    ,
    {
      //请求路由的路径
      path: '/B02',
      //当前路由的组件。
      component: B02

    }
    ,
    {
      //请求路由的路径
      path: '/B03',
      //当前路由的组件。
      component: B03
    }
    ,
    {
      //请求路由的路径
      path: '/B04',
      //当前路由的组件。
      component: B04
    }
    ,
    {
      //请求路由的路径
      path: '/B05',
      //当前路由的组件。
      component: B05
    }
  ]

})

