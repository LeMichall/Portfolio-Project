import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    manifest: {
      name: 'Portfolio Project',
      short_name: 'Portfolio',
      start_url: '/',
      display: 'standalone',
      description: 'A portfolio project built with Vite and React',
      background_color: '#ffffff',
      theme_color: '#4f46E5',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    }
  })],
})
