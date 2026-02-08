import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SplashLoader from '../components/customer/SplashLoader';
import OccasionSelector from '../components/customer/OccasionSelector';
import BudgetSlider from '../components/customer/BudgetSlider';
import ProcessingAnimation from '../components/customer/ProcessingAnimation';
import OutfitResult from '../components/customer/OutfitResult';

const Home = () => {
  const [currentStep, setCurrentStep] = useState('splash'); // splash, input, processing, result
  const [selectedOccasion, setSelectedOccasion] = useState('');
  const [budget, setBudget] = useState(150);
  const [outfitResult, setOutfitResult] = useState(null);
  const [pressTimer, setPressTimer] = useState(null);
  const [showSecretHint, setShowSecretHint] = useState(false);
  
  const navigate = useNavigate();
  const logoRef = useRef(null);

  // Handle splash screen completion
  useEffect(() => {
    if (currentStep === 'splash') {
      const timer = setTimeout(() => {
        setCurrentStep('input');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  // Secret long-press handler
  const handleLongPressStart = () => {
    const timer = setTimeout(() => {
      navigate('/admin');
    }, 3000); // 3 seconds
    setPressTimer(timer);
    setShowSecretHint(true);
  };

  const handleLongPressEnd = () => {
    if (pressTimer) {
      clearTimeout(pressTimer);
      setPressTimer(null);
    }
    setShowSecretHint(false);
  };

  // Cleanup timers
  useEffect(() => {
    return () => {
      if (pressTimer) clearTimeout(pressTimer);
    };
  }, [pressTimer]);

  // Handle form submission
  const handleSubmit = () => {
    setCurrentStep('processing');
    
    // Simulate processing delay
    setTimeout(() => {
      // Generate mock outfit result
      const mockOutfit = {
        top: {
          name: 'Stylish Blazer',
          imageUrl: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop',
          price: Math.floor(budget * 0.4)
        },
        bottom: {
          name: 'Premium Trousers',
          imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop',
          price: Math.floor(budget * 0.3)
        },
        shoes: {
          name: 'Designer Shoes',
          imageUrl: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=400&h=400&fit=crop',
          price: Math.floor(budget * 0.3)
        },
        discountCode: `${selectedOccasion.toUpperCase()}${Math.floor(Math.random() * 90) + 10}`,
        totalPrice: budget,
        confidence: Math.floor(Math.random() * 30) + 70 // 70-99%
      };
      
      setOutfitResult(mockOutfit);
      setCurrentStep('result');
    }, 3000);
  };

  const resetFlow = () => {
    setCurrentStep('input');
    setSelectedOccasion('');
    setBudget(150);
    setOutfitResult(null);
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'splash':
        return <SplashLoader />;
      
      case 'input':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto p-6"
          >
            <div className="text-center mb-8 relative">
              <h1 
                ref={logoRef}
                className="text-4xl font-mono text-cyber-primary mb-4 glitch-text cursor-pointer select-none"
                onMouseDown={handleLongPressStart}
                onMouseUp={handleLongPressEnd}
                onMouseLeave={handleLongPressEnd}
                onTouchStart={handleLongPressStart}
                onTouchEnd={handleLongPressEnd}
              >
                STYLE OS
              </h1>
              {showSecretHint && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-cyber-secondary text-sm font-mono animate-pulse"
                >
                  🔐 Secret access activated...
                </motion.div>
              )}
              <p className="text-xl text-gray-300">
                Your AI-Powered Fashion Assistant
              </p>
            </div>
            
            <div className="space-y-8">
              <OccasionSelector 
                selectedOccasion={selectedOccasion}
                onSelect={setSelectedOccasion}
              />
              
              <BudgetSlider 
                value={budget}
                onChange={setBudget}
              />
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSubmit}
                disabled={!selectedOccasion}
                className={`w-full py-4 px-6 rounded-lg font-mono text-lg transition-all ${
                  selectedOccasion
                    ? 'bg-cyber-primary text-cyber-dark hover:bg-cyan-400 neon-border hover-glow'
                    : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                }`}
              >
                ANALYZE TRENDS
              </motion.button>
            </div>
          </motion.div>
        );
      
      case 'processing':
        return <ProcessingAnimation />;
      
      case 'result':
        return (
          <OutfitResult 
            outfit={outfitResult}
            onTryAgain={resetFlow}
          />
        );
      
      default:
        return <SplashLoader />;
    }
  };

  return (
    <div className="min-h-screen cyberpunk-bg relative overflow-hidden">
      {/* Scanline effect */}
      <div className="scanline"></div>
      
      {/* Main content */}
      <div className="relative z-10 pt-8 pb-16">
        {renderCurrentStep()}
      </div>
      
      {/* Hidden admin access button (top right corner) */}
      <button
        onClick={() => window.location.href = '/admin'}
        className="absolute top-4 right-4 text-xs text-gray-500 hover:text-cyber-primary transition-colors font-mono"
        aria-label="Admin Access"
      >
        [ADMIN]
      </button>
    </div>
  );
};

export default Home;