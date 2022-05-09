<template>
 <div class="login-section">
    <el-form
      label-position="top"
      label-width="100px" class="demo-ruleForm"
      :rules="rules"
      ref="ruleForm"
      :model="ruleForm"
    >
      <el-form-item label="用户名" prop="name" >
        <el-input type="text" v-model="ruleForm.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'login',
  components: {
  },
data() {
    return {
      //需要提交的参数
      ruleForm: {
          name: '',
          password: '',
        },
        //输入规则
        rules: {
          name: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
        }
    };
  },
methods: {
    //提交时执行的事件
    submitForm(formName){
      this.$refs[formName].validate(async (valid)=>{
        //valid： 表示整个表单的验证是否全部通过
        console.log(this.ruleForm)
        if(valid){
          //数据请求
          // eslint-disable-next-line no-undef
          login({
            name:this.ruleForm.name,
            password:this.ruleForm.password
          }).then(data=>{
            console.log(data)
            if(data.code === 0){
              localStorage.setItem('token',data.data.token)
              window.location.href = '/'
            }
            if(data.code === 1){
              this.$message.error(data.mes)
            }
          })
        }
 
      })
    },
    //重置
    resetForm(formName) {
        this.$refs[formName].resetFields();
      }
  }
};
</script>

<style  scoped>

</style>