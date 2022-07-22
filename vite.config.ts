import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import eslint from 'vite-plugin-eslint';
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    vue(),
  ],
  server: {
    host: 'localhost',
    port: 3000,
    base: '/self-site/'
  }
})
