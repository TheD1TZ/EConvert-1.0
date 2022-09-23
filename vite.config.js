import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ['@ffmpeg/ffmpeg', '@ffmpeg/core', "headlessui"],
  },
  build: {
    commonjsOptions: {
      include: ['@ffmpeg/ffmpeg', '@ffmpeg/core', /node_modules/, "headlessui"]
    }
  },
  resolve: {
    fallback: {
      fs: false
    }
  },
  plugins: [vue()],
})
