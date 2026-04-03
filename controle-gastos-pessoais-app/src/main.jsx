import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' 
import { HashRouter } from 'react-router-dom'
import { GastosProvider } from './contexts/GastosContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <GastosProvider>
        <App />
      </GastosProvider>
    </HashRouter>
  </StrictMode>
)
