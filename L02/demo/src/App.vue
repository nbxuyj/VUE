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

    <!-- 使用路由视图，用于展现路由匹配的组件。tag默认是a标签 注：在vue-route4中已经移除了。 -->
    <router-link to="/Page1">原始A标签跳转Page1</router-link> &nbsp;
    <!--方案1.使用插槽方案：但是不是想要的结果。是在a标签中嵌套button，页面结构复杂 -->
    <router-link to="/Page1"> <button>插槽方案跳转Page1</button></router-link>
    &nbsp;
    <!--方案2.手动跳转。 -->
    <button @click="gotoPage3">手动跳转Page3</button>

    <router-view></router-view>
  </div>
</template>

<script>
// import Page1 from "./pages/Page1.vue";
// import Page2 from "./pages/Page2.vue";
// import Page3 from "./pages/Page3.vue";
export default {
  name: "App",
  components: {
    // Page1,
    // Page2,
    // Page3,
  },
  methods: {
    gotoPage3() {
      //this.$router 保存的是Vue实例身上添加的VueRouter对象。（路由器对象）
      //this.$route 保存的当前路由信息。
      //console.log(this.$router,this.$route);
      //3.判断当前路由非目标路由再跳转。
      if (this.$route.path != "/page3") {
        this.$router.push("/page3");
      }
    },
  },
};
</script>

<style>
#app {
}
</style>
