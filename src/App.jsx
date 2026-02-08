import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import PWAPrompt from './components/PWAPrompt';

// Lazy load components for better performance
const Home = lazy(() => import('./pages/Home')); 
const Admin = lazy(() => import('./pages/Admin'));

// Loading component
const LoadingSpinner = () => (
  <div className="cyberpunk-bg min-h-screen flex items-center justify-center">
    <div className="text-cyber-primary animate-pulse">
      <div className="text-2xl font-mono mb-4">LOADING...</div>
      <div className="w-16 h-16 border-4 border-cyber-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div className="cyberpunk-bg text-cyber-text min-h-screen">
        {/* Matrix rain background effect */}
        <div className="matrix-rain"></div>
        
        <Suspense fallback={<LoadingSpinner />}> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </Suspense>
        
        {/* PWA Installation Prompt */}
        <PWAPrompt />
      </div>
    </BrowserRouter>
  );
}

export default App;
