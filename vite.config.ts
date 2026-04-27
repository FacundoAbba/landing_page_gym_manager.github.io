import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// En GitHub Actions se define VITE_BASE (p. ej. /nombre-repo/) para Pages en subruta.
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [tailwindcss(), react()],
})
