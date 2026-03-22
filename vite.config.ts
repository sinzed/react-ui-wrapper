import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Linked `file:../god-button-ui` resolves its own node_modules; without dedupe you get two Reacts → invalid hooks / Emotion warnings.
  resolve: {
    dedupe: [
      'react',
      'react-dom',
      'react/jsx-runtime',
      'react/jsx-dev-runtime',
      '@emotion/react',
      '@emotion/styled'
    ]
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      '@emotion/react',
      '@emotion/styled',
      '@mui/material'
    ]
  }
})
