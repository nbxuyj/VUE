import Vue from 'vue'
import App from './App.vue'

//导入路由。
import VueRouter from 'vue-router'

//因为VueRouter是一个插件需要Use。
Vue.use(VueRouter)

Vue.config.productionTip = false

//导入路由需要的页面。
import Page1 from "./pages/Page1.vue";
import Page2 from "./pages/Page2.vue";
import Page3 from "./pages/Page3.vue";

//创建一个路由器对象并配置路由信息。
let router = new VueRouter({
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



//创建Vue实例。
new Vue({
  render: h => h(App),

  // 创建VueRouter对象，并通过router传给vue实例。
  // router: new VueRouter({
  //   //通过routes配置具体的路由信息，每一条路由信息需要配置一个对象，至少包含path component
  //   routes: router
  // })

  router
}).$mount('#app')
