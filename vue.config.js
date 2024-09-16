const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/software-center/',
  devServer: {
    proxy: {
        '/api': {
            target: 'https://clck.ru',
            changeOrigin: true,
            pathRewrite: { '^/api': '' },
        },
    },
  },
})
