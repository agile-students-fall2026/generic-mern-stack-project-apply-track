import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // While developing, send API calls and static files to the Express back-end (run it with `npm run dev` in back-end/).
    proxy: {
      '/api': 'http://localhost:3000',
      '/static': 'http://localhost:3000',
    },
  },
})
