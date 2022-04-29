<template>
  <div>
    <button @click="showTable = !showTable">显示/隐藏 表格</button>
    <button @click="showCharts = !showCharts">显示/隐藏 图表</button>
    <el-table v-if="showTable" :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>

    <div id="main" v-show="showCharts"></div>
  </div>
</template>



<script>
//导入echart
import * as echarts from "echarts";

export default {
  data() {
    return {
      //表格数据。
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      showTable: true,
      showCharts: false,
    };
  },

  //问题：点击显示时不会再次显示。
  //方案：采用v-show解决问题。
  mounted() {
    //数据挂载完毕。
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("main"));
    // 绘制图表
    myChart.setOption({
      title: {
        text: "ECharts 入门示例",
      },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    });
  },

  //监听器。
  // watch: {
  //   showCharts(val) {
  //     if (val) {
  //       //数据挂载完毕。
  //       // 基于准备好的dom，初始化echarts实例
  //       var myChart = echarts.init(document.getElementById("main"));
  //       // 绘制图表
  //       myChart.setOption({
  //         title: {
  //           text: "ECharts 入门示例",
  //         },
  //         tooltip: {},
  //         xAxis: {
  //           data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
  //         },
  //         yAxis: {},
  //         series: [
  //           {
  //             name: "销量",
  //             type: "bar",
  //             data: [5, 20, 36, 10, 10, 20],
  //           },
  //         ],
  //       });
  //     }
  //   },
  // },


};
</script>
<style scoped>
#main {
  width: 400px;
  height: 200px;
}
</style>