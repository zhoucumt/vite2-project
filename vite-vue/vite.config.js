import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import {viteMockServe} from 'vite-plugin-mock'
import myPlugins from './plugins/my-plugin'
import orderPlugin from './plugins/vite-plugin-order';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // 别名配置
    alias: {
      '@': resolve('./src')
    }
  },

  server: {
    proxy: {
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  // 如果不是ts文件，这里需要加水supportTs: false
  plugins: [
    vue(),
    viteMockServe({supportTs: false}),
    myPlugins(),
    orderPlugin({name: 'yes'})
  ]
})
