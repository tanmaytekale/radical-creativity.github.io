import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/radical-creativity.github.io/", // This prefix makes assets load correctly
})
