import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import './index.css'
import App from './App.tsx'

const theme = createTheme({
  direction: 'rtl',
  typography: {
    // Match the component playground fallback so inherited text renders consistently.
    fontFamily: 'system-ui, sans-serif'
  },
  palette: {
    mode: 'light',
    background: { default: '#f0f2f8' }
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
)
