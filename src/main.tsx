import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import PageLoader from './components/Loading/PageLoader.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <PageLoader>
        <App />
      </PageLoader>
    </BrowserRouter>
  </StrictMode>,
)
