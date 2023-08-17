<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="姓名">
        <el-input v-model="form.Name"></el-input>
      </el-form-item>
      <el-form-item label="乘车日期">
        <el-col :span="8">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.BusDate" style="width: 100%"></el-date-picker>
        </el-col>
        <el-col v-for="(item, index) in form.ResFiles" :key="index" :span="8">
          <el-upload
            style="width: 150px"
            class="upload-demo"
            drag
            action="/asset_manage_api/FSServer/FSUpload/Upfile"
            :on-success="
              (response, file, fileList) => {
                return handleSuccess(response, file, fileList, item.Guid)
              }
            "
            multiple
          >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text"><em>点击图片上传</em></div>
          </el-upload>
        </el-col>
        <!-- <el-col :span="8">
          <el-upload style="width: 150px" class="upload-demo" drag action="/asset_manage_api/FSServer/FSUpload/Upfile" :on-success="(val) => handleSuccess(val, '2')" multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text"><em>点击图片上传</em></div>
          </el-upload>
        </el-col> -->
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
        ResFiles: []
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
            ...this.form
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
    },
    handleSuccess(response, file, fileList, guid) {
      //成功后，从表单对象中循环赋值。
      //问题：如何response解析出文件的GUID.
      this.form.ResFiles.forEach((file) => {
        if (file.Guid === guid) {
          file.ImgUrlIco = response.Data.ImgUrlIco
          file.Url = response.Data.Url
          file.ImgUrl = response.Data.ImgUrl
          file.UrlIco = response.Data.UrlIco
          file.FileExt = response.Data.FileExt
          return
        }
      })
    }
  },

  computed: {
    getTime2() {
      return new Date()
    },
    /**
     * 是否处于编辑状态
     */
    editable() {
      return true
    }
  },
  created() {
    // 编辑时-获取详情数据
    if (this.editable) {
      getbasdriversDetail('111').then((res) => {
        this.form = res.Data
      })
    }
  }
}
</script>

<style scoped></style>
