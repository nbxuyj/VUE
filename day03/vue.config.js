const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:true ,//关闭语法检查。
  devServer:{
    port:8082,
    open:true,
    https:false,
    proxy: {
      '/usermanage': {

        // target: 'http://192.168.208.50:9098',
        //target: 'http://localhost:9098',
        //target: 'http://localhost:5143/',
        target: 'http://localhost:5281/',
        changeOrigin: true, //  是否跨域
        pathRewrite: {
          '^/ticketmanage': '/' //  重定向
        }
      }
    }


  },
  configureWebpack:{
    devtool:'source-map'
  }
})
