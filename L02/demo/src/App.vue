<template>
  <div id="app">
    <h1>欢迎学习vue路由课程</h1>
    <Page1/>
  </div>
</template>

<script>
import Page1 from "./pages/Page1.vue";

export default {
  name: "App",
  components: {
    Page1,
  },
};
</script>

<style>
#app {
}
</style>
