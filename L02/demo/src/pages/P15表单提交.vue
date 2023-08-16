<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="姓名">
        <el-input v-model="form.Name"></el-input>
      </el-form-item>
      <el-form-item label="乘车日期">
        <el-col :span="24">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.BusDate" style="width: 100%"></el-date-picker>
        </el-col>
      </el-form-item>
    
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getbasdriversDetail, editbasdrivers, addbasdrivers, deletebasdrivers } from '@/api/basebusiness/modules/basdrivers'
export default {
  name: 'app',
  components: {},
  data() {
    return {
      form: {
        Name: '',
        BusDate: '',
      }
    }
  },
  methods: {
 
    onSubmit() {

      this.$refs.form.validate((valid) => {
				if (valid) {
					const requestApi = addbasdrivers
					requestApi({
						Guid: this.$route.query.Guid,
						...this.ruleForm
					}).then((res) => {
						if (res.IsSuccess) {
							this.$message.success('保存成功')
							this.$store.dispatch('tagsView/delView', this.$route)
							this.$router.back()
						}
					})
				} else {
					console.log('error submit!!')
					return false
				}
			})

      console.log('submit!')
    }
  },

  computed: {
    getTime2() {
      return new Date()
    }
  }
}
</script>

<style scoped></style>
