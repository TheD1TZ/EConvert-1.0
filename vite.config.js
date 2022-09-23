import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ['@ffmpeg/ffmpeg', '@ffmpeg/core', 'fs'],
  },
  build: {
    commonjsOptions: {
      include: ['convert-audio', /node_modules/]
    }
  },
  resolve: {
    fallback: {
      fs: false
    }
  },
  plugins: [vue()],
})
