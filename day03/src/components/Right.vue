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
    <div id="swiper">
      <!-- swiper根主键 -->
      <swiper ref="mySwiper" :options="swiperOptions">
              <!-- swipe子主键 -->
        <swiper-slide>
          <img src="http://www.zjeasy.com/Content/MHWZ/img/banner2.jpg"/>
        </swiper-slide>
        <swiper-slide>
          <img src="http://www.zjeasy.com/Content/MHWZ/img/banner3.jpg"/>
          </swiper-slide>
        <swiper-slide>
          <img src="http://www.zjeasy.com/Content/MHWZ/img/banner1.jpg"/>
          </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
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
      //swiper选项。
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
        },
      },
    };
  },
  //计算属性。
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
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

    //swiper
    // console.log("Current Swiper instance object", this.swiper);
    this.swiper.slideTo(3, 1000, false);
  },
};
</script>
<style  scoped>
#main {
  width: 400px;
  height: 200px;
  border:1px solid red;
}

#swiper {
  width: 800px;
  height: 400px;
  border: 1px solid greenyellow;
}

#swiper img{
  width: 100%;
}
</style>


