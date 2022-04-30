<template>
  <div>
    <h2>page1</h2>
    <Nanjing/>
  </div>
</template>

<script>
//导入组件。
import Nanjing from '../components/Nanjing.vue'
export default {
  name: "Page1",
  //注册。
  components: {
      Nanjing
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
</style>