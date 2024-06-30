import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api/v1/users': "https://backendmern-r876.onrender.com"
    }
  },
  plugins: [react()]
})
