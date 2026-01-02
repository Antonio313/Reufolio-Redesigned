import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/data': path.resolve(__dirname, './src/data'),
      '@/components': path.resolve(__dirname, './src/components'),
    },
  },
  preview: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000,
    allowedHosts: [
      'reufolio-redesigned-production.up.railway.app',
      'www.reufolio.online',
      'reufolio.online',
      '.railway.app', // Allow all Railway domains
      '.up.railway.app', // Allow all Railway preview domains
    ],
  },
})
