<template>
  <div>
    <table>
      <tr>
        <td>序号</td>
        <td>姓名</td>
        <td>年龄</td>
        <td>手机</td>
      </tr>
      <tr v-for="(user, i) in users"
       :key="i">
        <td>{{ i + 1 }}</td>
        <td v-for="(value,j) in user"
        :key="j">
        {{ value }}</td>
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
      users: [
        {
          name: "小明",
          age: 20,
          tel: "13884409520",
        },
        {
          name: "小花",
          age: 30,
          tel: "138444409520",
        },
        {
          name: "小丽",
          age: 50,
          tel: "13884455520",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style  scoped>
</style>