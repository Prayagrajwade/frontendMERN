// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: '/dashboard',
  server: {
    proxy: {
      "/api/v1/users": {
        target: "https://backendmern-r876.onrender.com",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\/v1\/users/, ""),
      },
    },
    historyApiFallback: true, // Add this line
  },
});

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   server: {
//     proxy: {
//       '/api/v1/users': "https://backendmern-r876.onrender.com"
//     }
//   },
//   plugins: [react()]
// })

// proxy: {
//   "/api/v1/users": {
//     target: "https://backendmern-r876.onrender.com",
//     changeOrigin: true,
//     secure: false,
//     rewrite: (path) => path.replace(/^\/api\/v1\/users/, ""),
//   },
// },
