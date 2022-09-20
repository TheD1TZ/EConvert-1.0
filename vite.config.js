import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ['convert-audio']
  },
  build: {
    commonjsOptions: {
      include: ['convert-audio', /node_modules/]
    }
  },
  plugins: [vue()],
})
