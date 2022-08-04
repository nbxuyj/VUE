<template>
  <div>
    <h2>page3</h2>
    <SH />

    <button @click="increment">+1</button>
    <div>Count:{{ count }}</div> <br/>
    <div>Count:{{ bankName }}</div> <br/>
    <div>socketQuery:{{ socketQuery }}</div> <br/>
    
  </div>
</template>

<script>
import SH from "../components/Shanghai.vue";
export default {
  name: "Page3",
  components: {
    SH,
  },
  data() {
    return {
      count: this.$store.state.count,
      socketQuery:""
    };
  },

  methods: {
    increment() {
      this.$store.commit("increment");
      console.log(this.$store.state.count);
    },
  },

  computed: {
    // count() {
    //   return this.$store.state.count;
    // },
    bankName() {
      return this.$store.state.bankInf.bankName;
    },
  },
  watch: {
    // count: {
    //   handler(newVal, oldVal) {
    //     console.log(newVal, oldVal);
    //   },
    //   deep: true,
    // },

    "$store.state.count": function (newVal,oldVal) {
      //你需要执行的代码
      this.count=newVal;
    },

    

    // count(newValue,oldValue){
    //     console.log(newValue,oldValue);
    // }
  },

  mounted() {
    const that = this;
    //监听缓存中指定key的值变化
    window.addEventListener('storage', function (e) {
      if(e.key && e.key == 'socketQuery' && e.newValue){
        that.socketQuery = e.newValue //即可获取到【页面A】最新的socketQuery
      }
    })
 },

};
</script>

<style  scoped>
</style>