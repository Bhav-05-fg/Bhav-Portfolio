import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  define: {
    'process.env': {
      MY_VARIABLE: JSON.stringify(process.env.MY_VARIABLE),
      // Add other environment variables as needed.
    },
  },
  base: "/Bhav-Portfolio/"
})
