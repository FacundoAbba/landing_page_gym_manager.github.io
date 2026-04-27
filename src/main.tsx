import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { LightboxProvider } from './lightbox/LightboxContext'
import { ThemeProvider } from './theme/ThemeContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <LightboxProvider>
        <App />
      </LightboxProvider>
    </ThemeProvider>
  </StrictMode>,
)
