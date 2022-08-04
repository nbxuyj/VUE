<template>
  <div>
    LocalStorage<br />
    小结：
    <ul>
      <li></li>
    </ul>

    <hr />
    <input v-model="text" />
    <button @click="cun">保存</button>
    <button @click="cha">查询</button>
    <button @click="shan">删除</button>
    <button @click="gai">修改</button>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {
      msg: "1",
      text: "",
    };
  },
  methods: {
    //保存
    cun() {
      localStorage.setItem("data", this.text);
    },
    cha() {
      alert(localStorage.getItem("data"));
    },
    shan() {
      localStorage.removeItem("data");
    },
    gai() {
      var cnt = parseInt(localStorage.getItem("data"));
      localStorage.setItem("data", cnt + 1);
    },
  },

  beforeRouteEnter:(to,from,next)=>{
    console.log("准备进入");
    next();
  },
  beforeRouteLeave:(to,from,next)=>{
    console.log("准备离开");
    next();
  }
};
</script>

<style  scoped>
</style>