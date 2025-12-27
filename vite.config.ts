import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // This must match your repository name exactly
  base: "/radical-creativity.github.io/", 
})
