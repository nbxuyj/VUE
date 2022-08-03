<template>
  <div>
    {{ count }}
    {{result}}
    <button type="button" @click="add">增加</button><br/>
    方法：{{getTime()}}<br/>
    属性：{{getTime2}}<br/>
<p>
    1.演示正常修改内容，当count满足条件时显示。<br/>
    2.属性具有计算能力。要求前端内容调用函数，可通过插值表达式。<br/>
    3.将method替换为computed.
    <br/>

</p>

  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {

        count:0,
        result:"",
    };
  },
  methods: {
    add() {
            this.count++;
            this.result=this.count>10?"大于10":"不大于10"
    },
    getTime(){
        return new Date();
    }
  },

  computed:{

        getTime2(){
        return new Date();
    }
  }
};
</script>

<style  scoped>
</style>