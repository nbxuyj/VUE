<template>
  <div>
    <h2>需求1：父组件中如何传递参数到子组件中？</h2>
    <a href="https://www.cnblogs.com/hellman/p/10985377.html">参考页面</a>

    <br />
    <h3>步骤：</h3>
    1. 在子组件中export中定义propes:["text"]。 <br />
    2.在template页面中可以通过{{ flag }}来拿到内容。 <br />
    示例：当前读取到的text内容为:{{ text }}
    <hr />
    <h2>需求2：子组件如何将值返回到父组件中？</h2>
    子组件通过$emit向父组件传值。
    <h3>步骤：</h3>
    1.在子组件的方法中调用this.$emit("message",this.msg).
    2.在父组件中接收时，在标签属性中添加 @message="getMessage" 示例：<button
      @click="btnThrowMsg"
    >
      点击我向父组件传值
    </button>
  </div>
</template>

<script>
export default {
  name: "app",
  props: ["text"],
  components: {},
  data() {
    return {
      flag: "{{text}}",
      msg: "我是子组件的内容哦！！",
    };
  },

  methods: {
    btnThrowMsg() {
      //向父组件传传值。
      this.$emit("message", this.msg);
    },
  },

  created(){
      alert(this.text);
  }
};
</script>

<style  scoped>
button {
  background: green;
}
</style>