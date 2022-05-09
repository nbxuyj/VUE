<template>
  <div class="left">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>学生管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">添加学生</el-menu-item>
          <el-menu-item index="1-2">查询学生</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
     


      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-goods"></i>
          <span>课程管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">添加课程</el-menu-item>
          <el-menu-item index="1-2">查询课程生</el-menu-item>
        </el-menu-item-group>
      </el-submenu>


    </el-menu>

  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  .left{
    height: 100%;
    background: #545c64;
  }
</style>