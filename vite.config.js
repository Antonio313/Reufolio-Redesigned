import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: [
      'reufolio-redesigned-production.up.railway.app',
      'www.reufolio.com',
      'reufolio.com',
      '.railway.app', // Allow all Railway domains
      '.up.railway.app', // Allow all Railway preview domains
    ],
  },
})
