<template>
  <div>
    <h2>vuex测试</h2>
    <button @click="increment">+1</button>
    <button @click="subt">-1</button>
    <div>{{ count }}</div>
  </div>
</template>

<script>
// 状态

export default {
  name: "B01Store",

  data() {
    // return {
    //   count: this.$store.state.count,
    // };
  },
  //方法
  methods: {
    increment() {
      //debugger;
      //this.count++;
      this.$store.commit("increment");
      console.log(this.$store.state.count);
    },

    subt() {
      this.$store.commit("subt");
    },
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
};
</script>

<style>
</style>