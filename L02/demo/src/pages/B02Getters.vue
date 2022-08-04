<template>
  <div>
    <h2>vuex测试Getters</h2>
    <div>{{ doneCount }}</div>
    <input type="text" v-model="qid" />
    <button type="button" @click="query">查询</button><br />
    findName:
    <div>{{ findName }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "app",
  components: {},
  data() {
    return {
      qid: "1",
      findName: "",
    };
  },
  methods: {
    query() {
      // this.findName= this.$store.getters.getTodoById(this.qid).name
      var res = this.$store.getters.getTodoById(this.qid);
      this.findName = res.text;
    },
  },
  computed: {
    //方法1：采用原始方法。
    // doneTodosCount() {
    //   return this.$store.getters.doneTodosCount;
    // },

    //方法2：mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性：
    //   ...mapGetters([
    //   'doneTodosCount',
    // ])
    //方法3：别名。
    ...mapGetters({
      doneCount: "doneTodosCount",
    }),
  },
};
</script>

<style  scoped>
</style>