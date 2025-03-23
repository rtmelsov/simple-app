import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
      react(),
  ],
  build: {
    sourcemap: true,
    outDir: resolve(__dirname, 'bundles'),
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        app: resolve(__dirname, 'app/index.html'),
        arm: resolve(__dirname, 'arm/index.html'),
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      Containers: '/src/containers',
      Components: '/src/components',
      Constants: '/src/constants',
      Utils: '/src/utils',
      Reducers: '/src/reducers',
      Redux: '/src/redux',
      Styles: '/src/styles',
      Localization: '/src/localization',
      Config: '/src/config',
      Icons: '/src/icons',
      FrontEndURLS: '/src/FrontEndURLS.js',
      CSBootstrap: '/src/CSBootstrap/index.js',
    }
  },
})
