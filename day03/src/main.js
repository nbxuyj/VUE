import Vue from 'vue'
import App from './App.vue'

//在开发阶段不显示提示信息。
Vue.config.productionTip = false

//引用ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入的是插件，需要use.
Vue.use(ElementUI);


//引用wiper，轮播图。
import 'swiper/css/swiper.css'
import  VueAwesomeSwiper  from  'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)



//默认index.js可以省略。
import router from './router'




new Vue({
  render: h => h(App),
  router
}).$mount('#app')
