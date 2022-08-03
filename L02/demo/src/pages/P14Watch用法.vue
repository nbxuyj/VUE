<template>
  <div>
    <h2>P5.Watch用法</h2>
    <input type="text" v-model="title">
  </div>
</template>

<script>
// 状态

export default {
  data() {
    return {
      title:"hello vue"
    };
  },

  watch: {
    // title发生改变时就会调用。
    title: function (newVal,oldVal) {
      console.log("count发生改变了!"+newVal+"  old:"+oldVal);
    },
  },
};
</script>

<style>
</style>