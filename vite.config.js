import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://Intelector-Nic-Elliot.github.io/vite-rick-and-morty/",
  plugins: [react()]
})
