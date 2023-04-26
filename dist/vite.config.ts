import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
// 自动导入组件
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  optimizeDeps: {
    include: ['@element-plus/icons', 'dayjs']
  },
  server: {
    host: '0.0.0.0',
    port: 8200,
    // 访问本地，或Nginx未作代理时访问配置如下
    proxy: {
      '/api': {
        target: 'http://10.68.107.204:8080/', // 后台接口域名
        changeOrigin: true, //是否跨域
        rewrite: (path) => path.replace(/^\/api/, '/')
      }
    }
  },
  publicDir: './'
})
