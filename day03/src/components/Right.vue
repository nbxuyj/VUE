<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card">
      <el-tab-pane label="表格图表" name="first"><Test01 /></el-tab-pane>
      <el-tab-pane label="传参示例" name="second"
        ><Test02 text="传参示例" @message="getMessage"
      /></el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import Test01 from "./Test01";
import Test02 from "./Test02";

export default {
  data() {
    return {
      activeName: "first",
    };
  },

  components: {
    Test01,
    Test02,
  },
  methods: {
    getMessage(val) {
      //子组件返回的内容。
        alert(val);
    },
  },
};
</script>



