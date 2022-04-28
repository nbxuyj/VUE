<template>
  <div id="app">
    <h1>欢迎使用vue-cli创建项目</h1>
    <h2>{{ name }}--{{ age }}</h2>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      name: "许要军",
      age: 30,
    };
  },
};
</script>

<style>
#app {
}
</style>
