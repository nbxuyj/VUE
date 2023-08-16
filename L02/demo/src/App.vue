<template>
  <div id="app">
    <h1>欢迎学习vue路由课程</h1>
    <!-- <a>页面1</a>
    <a>页面2</a>
    <a>页面3</a>
    <hr />
    <Page1 />
    <Page2 />
    <Page3 /> -->
    
    <div>{{ $log(message) || message }}</div>
    <!-- 使用路由视图，用于展现路由匹配的组件。tag默认是a标签 注：在vue-route4中已经移除了。 -->
    <router-link to="/Page1">原始A标签跳转Page1</router-link> &nbsp;
    <!--方案1.使用插槽方案：但是不是想要的结果。是在a标签中嵌套button，页面结构复杂 -->
    <router-link to="/Page1"> <button>插槽方案跳转Page1</button></router-link>
    &nbsp;
    <!--方案2.手动跳转。 -->
    <button @click="gotoPage3">手动跳转Page3</button>
    <router-link to="/B01">B01.Vuex.Store用法</router-link> &nbsp; <router-link to="/P5">P5.Watch用法</router-link> &nbsp; <router-link to="/P13">P13计算属性</router-link> &nbsp; <router-link to="/B02">B02Getters用法</router-link> &nbsp; <router-link to="/B03">B03Actions用法</router-link> &nbsp;
    <router-link to="/B04">B04LocalStorage用法</router-link> &nbsp; <router-link to="/B05">B05Mock</router-link> &nbsp; <router-link to="/B06">B06Minxins</router-link> &nbsp;
    <p style="height: 100px;">页面展示</p>
    <router-view></router-view>
  </div>
</template>

<script>
// import Page1 from "./pages/Page1.vue";
// import Page2 from "./pages/Page2.vue";
// import Page3 from "./pages/Page3.vue";
//exportDefault用法： 许要军2022.11.01
//https://wenku.baidu.com/view/d47b330b29f90242a8956bec0975f46527d3a7cd.html?_wkts_=1667284404863&bdQuery=export+default+%28%29%3D%3E%7B%7D
// 示例：D:\vueProject\VUE\L02\demo\src\app.vue
// 知识点1： $log(message)  输出日志。
// 知识点2： exportDefault时，通过import导入时名称可以随便起。


import ix2 from './utils/index2'


export default {
  name: 'App',
  data() {
    return {
      message: '姓名：'+ix2.name+"，年龄："+ix2.age
    }
  },
  components: {
    // Page1,
    // Page2,
    // Page3,
  },
  created() {
    this.test()
  },
  methods: {
    gotoPage3() {
      //this.$router 保存的是Vue实例身上添加的VueRouter对象。（路由器对象）
      //this.$route 保存的当前路由信息。
      //console.log(this.$router,this.$route);
      //3.判断当前路由非目标路由再跳转。
      if (this.$route.path != '/page3') {
        this.$router.push('/page3')
      }
    },
    test(){
        var a = [];
        for (let i = 0; i < 10; i++) {
        a[i] = function () {
        console.log(i);
        };
        }
        
       a[6](); 

    }
  }
}
</script>

<style>
#app {
}
</style>
