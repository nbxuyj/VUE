<template>
  <div>
    Action 提交的是 mutation，而不是直接变更状态。<br />
    小结：
    <ul>
      <li>1.action可以执行异步。</li>
    </ul>

    示例：点击增加计数+1.<br />

    <button type="button" @click="exec">增加</button><br />
    <button type="button" @click="execAsync">5秒后增加</button><br />
    {{ count }}
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {};
  },
  methods: {
    exec() {
      this.$store.dispatch("increment");
    },
    execAsync() {
      this.$store.dispatch("incrementAsync");
    },
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
};
</script>

<style  scoped>
</style>