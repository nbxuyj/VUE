// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   //在开发环境中不使用esLint帮我们做语法检查。
//   lintOnSave:false
// })

// module.exports = {
//   //在开发环境中不使用esLint帮我们做语法检查。
//   lintOnSave: false,
//   configureWebpack: {
//     devtool: 'source-map'
//   },
//   proxy: {
//     '/': {
//       target: 'http://localhost:9899/',
//       changeOrigin: true, //  是否跨域
//       pathRewrite: {
//         '^/fitnessUnit/': '/'
//       }
//     }
//   }
// }

// module.exports = {
// 	/**
// 	 * You will need to set publicPath if you plan to deploy your site under a sub path,
// 	 * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
// 	 * then publicPath should be set to "/bar/".
// 	 * In most cases please use '/' !!!
// 	 * Detail: https://cli.vuejs.org/config/#publicpath
// 	 */
// 	publicPath: '/',
// 	outputDir: 'dist',
// 	assetsDir: 'static',
// 	lintOnSave: process.env.NODE_ENV === 'development',
// 	productionSourceMap: false,
// 	devServer: {
// 		port: 9991,
// 		host: '0.0.0.0',
// 		https: false,
// 		open: true,
// 		overlay: {
// 			warnings: false,
// 			errors: true
// 		},
// 		// before: require('./mock/mock-server.js'),
// 		proxy: {
// 			'/': {
// 				target: 'http://localhost:9899/',
// 				changeOrigin: true, //  是否跨域
// 				pathRewrite: {
// 					'^/fitnessUnit/': '/'
// 				}
// 			},
// 			'/picServer/': {
// 				target: 'http://173.1.1.130:7760/',
// 				changeOrigin: true, //  是否跨域
// 				pathRewrite: {
// 					'^/picServer/': '/'
// 				}
// 			}
// 			// before: app => {}
// 		}
// 	}
// }
module.exports = {
  // ...
  devServer: {
    historyApiFallback: true,
    allowedHosts: "all",
    port: 8080,
    proxy: {
      '/fitnessUnit/': {
        target: 'http://localhost:9899',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/fitnessUnit/': ''
        }
      },
    },
    //disableHostCheck: true // 这是由于新版的webpack-dev-server出于安全考虑，默认检查hostname，如果hostname 不是配置内的，将中断访问。
  }
  //...
}
