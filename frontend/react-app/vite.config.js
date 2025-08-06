// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// NO necesitas importar tailwindcss aquí
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base:'aplicaciónChatBot',
})
