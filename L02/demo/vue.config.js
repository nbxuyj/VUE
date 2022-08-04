// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   //在开发环境中不使用esLint帮我们做语法检查。
//   lintOnSave:false
// })


module.exports = {
  //在开发环境中不使用esLint帮我们做语法检查。
  lintOnSave: false,
  configureWebpack: {
    devtool: 'source-map'
    }
}