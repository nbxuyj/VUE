<template>
  <div id="app">
    <div class="header"><Header :userName="userName"></Header></div>
    <div class="main">
      <div class="left"><Left></Left></div>
      <div class="right"><Right></Right></div>
    </div>
  </div>
</template>

<script>
import Header from "./menu/Header.vue";
import Left from "./menu/Left.vue";
import Right from "./menu/Right.vue";
//import request from '../../utils/request';
export default {
  name: "index",
  //注册其它组件
  components: {
    Header,
    Left,
    Right,
  },
  data() {
    return {
      userName: '测试',

    };
  },
    mounted () {
    //获取用户。
    this.getUser()
  },
  methods:{
     getUser () {
      var user = JSON.parse(localStorage.user)
      if (user) {
        this.userName = user.UserID + '/' + user.UserName
      } else {
        this.userName = '未登入'
      }
    },
  }


};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
#app .header {
  height: 60px;

}
#app .main {
  flex: 1;
  display: flex;
}

#app .main .left {
  width: 200px;

}

#app .main .right {
  padding: 10px; 
  flex: 1;
  box-sizing: border-box; 
}
.flex{
  display: flex;
}
.j-c{
  justify-content:  center;
}
.j-s{
  justify-content: space-between;
}
.a-c{
  align-items: center;

}

</style>
