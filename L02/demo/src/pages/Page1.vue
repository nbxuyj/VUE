<template>
  <div>
    <h2>page1</h2>
    <Nanjing />
    <h2>{{ myName }}</h2>
    <button @click="sayHi">sayHi</button>
    <b-button>我是自定义组件按钮</b-button>

    <ul>
      <li v-for="(item, index) in goodses" :key="index">{{ item }}</li>
    </ul>
    <br />
    <!--自定定义指令在使用时，必须增加前缀。 -->
    <!-- <div v-red>abc</div> -->
    <div v-color="'blue'">abc</div>
    <!-- exception保存的变量名。 -->
    <div v-color="g">abc</div>
  </div>
</template>

<script>
//导入组件。
import Nanjing from "../components/Nanjing.vue";

export default {
  name: "Page1",
  //注册。
  components: {
    Nanjing,
  },
  data() {
    return {
      g:'green'
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>