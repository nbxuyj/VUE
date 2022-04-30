<template>
  <div>
    <h2>page1</h2>
    <Nanjing/>
    <h2>{{myName}}</h2>
    <button @click="sayHi">sayHi</button>
    <b-button>我是自定义组件按钮</b-button>

    <ul>
      <li v-for="(item,index) in goodses" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
//导入组件。
import Nanjing from '../components/Nanjing.vue'

export default {
  name: "Page1",
  //注册。
  components: {
      Nanjing,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>