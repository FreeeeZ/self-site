import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import vercel from 'vite-plugin-vercel';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    vercel(),
  ],
  server: {
    host: 'localhost',
    port: 3000,
  },
  // @ts-ignore
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
