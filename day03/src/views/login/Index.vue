<template>
 <div class="hello">
    <el-row type="flex">
      <el-col :span="24">
        <p class="Sign">平易智慧景区票务管理平台</p>
      </el-col>
    </el-row>
    <el-row type="flex">
      <el-col :span="12" :offset="2">
        <img src="~@/assets/img/logo_img.png" class="SignTu">
      </el-col>
      <el-col :span="10" class="el-col">
        <el-form class="el-form el-login" ref="form" :model="form" :rules="rules" hide-required-asterisk>
          <div>
            <p class="user">用户登录</p>
            <p class="definition">USER   LOGIN</p>
          </div>
          <el-form-item label="账号" class="label" prop="loginID">
            <img src="~@/assets/img/icon_zhanghao.png" class="imgArr">
            <el-input
              ref="loginID"
              v-model="form.loginID"
              placeholder="请输入用户名"
              @keyup.enter.native="handelTab"
              class="el-input">
            </el-input>
          </el-form-item>
          <el-form-item label="密码" class="label label-mi" prop="password">
            <img src="~@/assets/img/icon_mima.png" class="imgArr">
            <el-input
              ref="password"
              type="passWord"
              v-model="form.password"
              placeholder="请输入密码"
              show-password
              @keyup.enter.native="onSubmit"
              class="el-input">
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" :loading='loading' @click="onSubmit">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { validUsername } from '@/utils/validate'

export default {
  name: 'HelloWorld',
  data () {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 3) {
        callback(new Error('请输入大于3位密码'))
      } else {
        callback()
      }
    }
    return {
      labelPosition: 'top',
      loading: false,
      form: {
        loginID: '',
        password: ''
      },
      rules: {
        loginID: [
          { required: true, trigger: 'blur', validator: validateUsername }
        ],
        password: [
          { required: true, trigger: 'blur', validator: validatePassword }
        ]
      }
    }
  },
  mounted () {
    if (this.form.loginID === '') {
      this.$refs.loginID.focus()
    } else if (this.form.password === '') {
      this.$refs.password.focus()
    }
  },
  methods: {
    onSubmit () {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.form)
            .then(res => {
              this.loading = false
              this.$router.push('home')
            })
            .catch(err => {
              this.loading = false
              this.$confirm(err, '提示', {
                confirmButtonText: '确定',
                type: 'warning'
              })
            })
        }
      })
    },
    handelTab () {
      this.$refs.password.focus()
    }
  }
}
</script>

<style scoped>
  .hello{
    height: 100vh;
    background: url(~@/assets/img/logonBg.jpg) no-repeat center;
    background-size: 100% 100%;
    position: relative;
    font-size: 62.5%;
    font-family: 'Microsoft Yahei';
    overflow: hidden;
  }
  .el-form-item{
    margin-top: 40px;
    margin-bottom: 0;
  }
  .label-mi{
    margin-top: 20px;
  }
  .Sign{
    width: 460px;
    margin-top: 20px;
    height: 200px;
    line-height: 200px;
    font-size: 50px;
    text-align: center;
    color: #fff;
  }
  .SignTu{
    width: 500px;
    position: absolute;
    top: 0;
  }
  .el-col{
    position: relative;
  }
  .el-form{
    width: 300px;
    position: absolute;
  }
  .label{
    background-color: #fff;
  }
  .el-input >>> .el-input__inner{
    border: none !important;
    padding: 0 15px 0 45px;
  }
  .label >>> .el-form-item__label{
    padding: 0 0 0 45px !important;
    letter-spacing: 10px;
  }
  .user{
    font-size: 20px;
    color: #4452d5;
    margin: 0;
  }
  .definition{
    font-size: 14px;
    color: #aaa;
    letter-spacing: 2px;
    margin-top: 5px;
  }
  .imgArr{
    position: absolute;
    top: 8px;
    left: 10px;
    width: 25px;
  }
  .el-button{
    width: 100%;
    font-size: 18px;
    letter-spacing: 6px;
  }
</style>
