import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Version from './Version'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Version />
  </StrictMode>,
)
