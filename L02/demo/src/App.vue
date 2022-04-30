<template>
  <div id="app">
    <h1>欢迎学习vue路由课程</h1>
    <Page1 />
    <Page2 />
    <Page3 />
  </div>
</template>

<script>
import Page1 from "./pages/Page1.vue";
import Page2 from "./pages/Page2.vue";
import Page3 from "./pages/Page3.vue";
export default {
  name: "App",
  components: {
    Page1,
    Page2,
    Page3,
  },
};
</script>

<style>
#app {
}
</style>
