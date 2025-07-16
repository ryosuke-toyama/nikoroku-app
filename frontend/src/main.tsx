import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DiarySingle from './pages/Diary/DiarySingle.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DiarySingle />
  </StrictMode>,
)
