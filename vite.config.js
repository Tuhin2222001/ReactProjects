import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // 👈 Allows access from other devices on your Wi-Fi
    port: 5173       // (Optional) You can change this if needed
  }
})
