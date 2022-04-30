import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//默认index.js可以省略。
import router from './router'



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
