import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// https://vitejs.dev/config/
export default defineConfig(() => {
  const config = {
    plugins: [react()],
    /* base: '/<REPO>/', */
    base: '/pokedex/',
  }
  return config
})
