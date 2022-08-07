import path from 'path'
import vue from '@vitejs/plugin-vue'
import { defineConfig, loadEnv } from 'vite'
// import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return defineConfig({
    base: mode === 'development' ? process.env.VITE_DEV_BASE_URI : process.env.VITE_PROD_BASE_URI,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    plugins: [
      vue(),
      // eslintPlugin()
    ],
    server: {
      host: 'localhost',
      port: 3000,
    }
  });
}
