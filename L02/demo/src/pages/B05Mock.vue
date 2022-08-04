<template>
  <div>
    <table>
      <tr>
        <td>序号</td>
        <td>姓名</td>
        <td>年龄</td>
        <td>手机</td>
      </tr>
      <tr v-for="(user, i) in users" :key="i">
        <td>{{ i + 1 }}</td>
        <td v-for="(value, j) in user" :key="j">
          {{ value }}
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {
      users: [],
      //采用axios请求Mock数据。
      // users: [
      //   {
      //     name: "小明",
      //     age: 20,
      //     tel: "13884409520",
      //   },
      //   {
      //     name: "小花",
      //     age: 30,
      //     tel: "138444409520",
      //   },
      //   {
      //     name: "小丽",
      //     age: 50,
      //     tel: "13884455520",
      //   },
      // ],
    };
  },
  methods: {},
  mounted() {

    console.log("执行mounted");
    //     this.tableData = [];
    // for (let i = 0; i < data.length; i++) {
    //   //遍历node伪数组每一项，给每一项增加一个class
    //   this.users.push(data[i]);
    // }

    this.axios.post("/goods/goodAll").then((res) => {
      console.log(res);
    });
  },
};
</script>

<style  scoped>
</style>