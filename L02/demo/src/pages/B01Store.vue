<template>
  <div>
    <h2>vuex测试</h2>
    <button @click="increment">+1</button>
    <button @click="subt">-1</button>
    <div>{{ count }}</div>
    <div>{{ bankName }}</div>

    04银行详情页面
    <input name="" v-model="textValue" />
    <button type="button" name="获取数据" @click="newBankName">获取数据</button>
  </div>
</template>

<script>
// 状态

export default {
  name: "B01Store",

  data() {
    return {
      //count: this.$store.state.count,
      textValue:""
    };
  },
  //方法
  methods: {
    increment() {
      //debugger;
      //this.count++;
      this.$store.commit("increment");
      console.log(this.$store.state.count);
    },

    subt() {
      this.$store.commit("subt");
    },
    newBankName: function() {
      this.$store.commit('newBankName', this.textValue)
      localStorage.setItem('socketQuery', '插入1')
    }

    
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    bankName() {
      return this.$store.state.bankInf.bankName;
    },
  },
};
</script>

<style>
</style>