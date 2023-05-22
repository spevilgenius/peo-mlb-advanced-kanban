import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: /^~(.*)$/,
        replacement: 'node_modules/$1'
      }
    ]
  },
  build: {
    outDir: 'webpart/src/webparts/assets',
    assetsDir: 'appcode',
    minify: false,
    rollupOptions: {
      output: {
        generatedCode: {
          constBindings: false
        }
      }
    }
  }
})
