import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return defineConfig({
    base: mode === 'development' ? process.env.VITE_DEV_BASE_URL : process.env.VITE_PROD_BASE_URL,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    plugins: [
      vue(),
    ],
    server: {
      host: 'localhost',
      port: 3000,
    }
  });
}
