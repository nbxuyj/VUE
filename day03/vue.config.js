const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:true ,//关闭语法检查。
  devServer:{
    port:8082,
    open:true,
  },
  configureWebpack:{
    devtool:'source-map'
  }
})
