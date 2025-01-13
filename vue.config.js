const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/api": {
        target: 'http://localhost:8080',//代理地址 凡是使用/api
        changeOrigin: true,//允许跨域请求
        pathRewrite: { //重写路径 替换请求地址中的指定路径
          ['^/api']: '/' //将请求地址中的api替换为空
        }
      }
    }
  }
})
