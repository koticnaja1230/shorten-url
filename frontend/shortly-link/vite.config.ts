import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    proxy: {
      '/shorten': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },
});
