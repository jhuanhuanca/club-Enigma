import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const rootDir = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [vue()],
  root: rootDir,
  publicDir: resolve(rootDir, 'public'),
  build: {
    outDir: resolve(rootDir, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: (info) => {
          const name = info.names?.[0] ?? ''
          if (/\.(mp4|mp3)$/i.test(name)) return 'media/[name]-[hash][extname]'
          return 'assets/[name]-[hash][extname]'
        },
      },
    },
  },
  server: {
    port: 5174,
    strictPort: true,
  },
  preview: {
    port: 4174,
    strictPort: true,
  },
})
