import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Enable minification for smaller bundle sizes
    minify: 'terser',
    // Optimize chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          vendor: ['react', 'react-dom'],
          analytics: ['@vercel/analytics', '@vercel/speed-insights']
        }
      }
    },
    // Enable source maps for debugging (can be disabled in production)
    sourcemap: false,
    // Optimize CSS
    cssMinify: true,
    // Set chunk size warning limit
    chunkSizeWarningLimit: 1000
  }
})
