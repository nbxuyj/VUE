import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//默认index.js可以省略。
import router from './router'


//导入自定义的插件。
import bingPlugin from './plugins'
//use方法 就是调用install方法。
Vue.use(bingPlugin);
console.log(new Vue());

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

//导入全部成员转为一个对象来接收。
// import * as abc from './utils'
// console.log(abc);

//导入指定成员。
// import {obj2} from './utils'
// console.log(obj2);

//如果导出成员中包含default，那么默认导出的成员的key是default.
// import * as m from './utils'
// console.log(m.default);

//注：由于default是js中的关键字，需要通as重命名。
// import {num2, default as obj3} from './utils'
// console.log(num2,obj3);


//如果就是一个默认导出,在导入时，可以直接定义一个对象名来接收。
//import { default as obj3} from './utils/index2'
import m2 from './utils/index2'
console.log(m2);