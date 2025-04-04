import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['fav.png'],
      manifest: {
        name: 'Jayprakash Malik | Backend Developer',
        short_name: 'Jayprakash Malik',
        description: 'Portfolio of Jayprakash Malik, a Backend Developer specialized in Node.js, Express.js, MongoDB, and React.',
        start_url: '/',
        display: 'standalone',
        background_color: '#0f172a',
        theme_color: '#2563eb',
        icons: [
          {
            src: '/fav.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/fav.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === 'document',
            handler: 'NetworkFirst',
            options: {
              cacheName: 'html-cache'
            }
          },
          {
            urlPattern: ({ request }) =>
              ['style', 'script', 'worker'].includes(request.destination),
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'assets-cache'
            }
          },
          {
            urlPattern: ({ url }) =>
              url.origin === self.origin && url.pathname.endsWith('.png'),
            handler: 'CacheFirst',
            options: {
              cacheName: 'image-cache',
              expiration: {
                maxEntries: 10
              }
            }
          }
        ]
      }
    })
  ],
  server: {
    historyApiFallback: true
  },
  build: {
    outDir: 'dist'
  },
  base: '/'
})
