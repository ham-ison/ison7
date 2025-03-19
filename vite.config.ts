import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path";
import electron from 'vite-plugin-electron';

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    electron({
      entry: "electron/main.ts", // 指定 Electron 主进程入口
    }),
  ],
  publicDir: "public",
  base: mode === 'development' ? '/' : './', // 打包路径适配
  build: {
    outDir: 'dist/renderer',  // 指定 Vite 输出目录
    emptyOutDir: true,        // 构建前清空目录
    lib: {
      entry: "electron/main.ts",
      formats: ["cjs"], // 指定 CommonJS 格式，适用于 Electron 主进程
    },
    rollupOptions: {
      input: {
        main: "public/index.html", // Vite 会根据这个生成 index.html
      },
      external: ["electron", "path", "url"], // 告诉 Rollup 这些是外部依赖，不要打包
    },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(mode)
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  /*server: {
    host: true,
    port: 5173,
  },*/
}))