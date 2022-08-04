<template>
  <div class="header flex j-s j-c a-c">
    <div class="title">高校信息管理系统</div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">消息中心</el-menu-item>
      <el-menu-item index="2">邮件中心</el-menu-item>
      <el-submenu index="3">
        <template slot="title">我的工作台</template>
        <el-menu-item index="3-1">个人中心（{{userName}}）</el-menu-item>
        <el-menu-item index="3-2">修改密码</el-menu-item>
        <el-menu-item index="3-3">退出系统</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  props: ["userName"],
  data() {
    return {
      //导航中默认选中的索引。
      activeIndex: "2"
    };
  },
  methods: {
    //导航菜单选中后调用的方法。
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
// sytle 标签中的scoped表示仅在当前组件中有效。
<style scoped>
.header {
  padding-right: 20px;
  background: #545c64;
}

.header .title {
  color: #fff;
  font-size: 20px;
  padding-left: 20px;
}
</style>


