import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import testHapticFeedback from './utils/hapticTest.js'

// Make haptic test available globally
window.testHaptics = testHapticFeedback;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
