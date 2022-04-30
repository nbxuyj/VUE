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
          <img src="https://adsfile.kugou.com/b8f264829670880772dd94117c68a87e.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://adsfile.kugou.com/81e81d43ae4282433fe44ed4fac1bfcd.jpg" />
        </swiper-slide>
        <swiper-slide>
          <img src="https://adsfile.kugou.com/2c4d161f484ef144f127d357f1f45956.jpg" />
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
      swiperOptions: {
        //分页器
        pagination: {
          //指定选择器。
          el: ".swiper-pagination",

          type: 'bullets',
          //type: 'fraction',
          //type: "progressbar",
          //type : 'custom',
          //‘bullets’  圆点（默认）
          // ‘fraction’  分式
          // ‘progressbar’  进度条

          //此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
          clickable: true,




        },

        autoplay:true,//等同于以下设置
        // autoplay: {
        //   delay: 5000,
        //   stopOnLastSlide: true, //如果设置为true，当切换到最后一个slide时停止自动切换。（loop模式下无效）。
        //   disableOnInteraction: true, //用户操作swiper之后，是否禁止autoplay。默认为true：停止。
        // },

        //loop 设置为 true 则开启循环(loop)模式
        loop: true,

        //效果。
        effect: 'cube',

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
  border: 1px solid red;
}

#swiper {
  width: 800px;
  height: 400px;
  border: 1px solid greenyellow;

  /* 修改导航颜色。 */
  --swiper-theme-color: #ff6600;
  /* --swiper-pagination-color: #00ff33; 两种都可以 */
}

#swiper img {
  width: 100%;
}
</style>


