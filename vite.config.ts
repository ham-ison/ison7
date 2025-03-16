import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: '.',
  plugins: [react()],
  build: {
    outDir: './dist/renderer',
    emptyOutDir: true,
    sourcemap: false
  },
  define: {
    'import.meta.env.MAIN_VITE_NAME': JSON.stringify(process.env.NODE_ENV === 'production' ? 'production' : 'development'),
    'MAIN_WINDOW_VITE_DEV_SERVER_URL': JSON.stringify(process.env.NODE_ENV === 'development' ? 'http://localhost:5173' : null),
    'MAIN_WINDOW_VITE_NAME': JSON.stringify(process.env.NODE_ENV === 'development' ? 'vite-dev' : 'index')
  }
})