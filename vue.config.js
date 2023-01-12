const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    open: true,
    // proxy: {
    //   '/api': {//表示拦截以/api开头的请求路径  //event/allEvent
    //     target: 'http://192.168.110.179:8092',
    //     changOrigin: true,//是否开启跨域
    //     pathRewrite: {
    //       '^/api': '' //重写api，把它变成看的字符串
    //     }
    //   }
    // }
  },
  configureWebpack: {
    externals: {
      'AMap': 'AMap'  // 高德地图配置
    }
  }
})
