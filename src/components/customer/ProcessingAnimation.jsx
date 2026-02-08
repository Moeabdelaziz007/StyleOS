import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import useCyberSound from '../../hooks/useCyberSound';

const ProcessingAnimation = () => {
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);
  const { playProcess, stopProcess } = useCyberSound();
  
  const messages = [
    "ANALYZING FASHION TRENDS...",
    "SCANNING DATABASE...",
    "GENERATING RECOMMENDATIONS...",
    "OPTIMIZING FOR YOUR STYLE..."
  ];

  useEffect(() => {
    // Start processing sound
    playProcess();
    
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          // Stop processing sound
          stopProcess();
          // Haptic feedback when processing completes
          if ('vibrate' in navigator) {
            navigator.vibrate([200, 100, 200]); // Double pulse vibration
          }
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    // Message rotation
    const messageInterval = setInterval(() => {
      setCurrentMessage(prev => (prev + 1) % messages.length);
      // Light haptic feedback on message change
      if ('vibrate' in navigator) {
        navigator.vibrate(50); // Short vibration
      }
    }, 1000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
      stopProcess();
    };
  }, [playProcess, stopProcess]);

  return (
    <div className="min-h-screen cyberpunk-bg flex items-center justify-center p-6">
      <div className="text-center max-w-2xl w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-mono text-cyber-primary mb-4 glitch-text">
            PROCESSING
          </h1>
          <div className="h-1 w-24 bg-cyber-primary mx-auto"></div>
        </motion.div>

        {/* Animated progress circle */}
        <div className="relative mb-12">
          <motion.div
            className="w-48 h-48 mx-auto relative"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            {/* Outer ring */}
            <div className="absolute inset-0 border-4 border-gray-800 rounded-full"></div>
            
            {/* Progress ring */}
            <motion.div
              className="absolute inset-0 border-4 border-cyber-primary rounded-full"
              style={{
                clipPath: `inset(0 ${100 - progress}% 0 0)`
              }}
            ></motion.div>
            
            {/* Inner content */}
            <div className="absolute inset-4 bg-cyber-bg rounded-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-mono text-cyber-primary mb-2">
                  {progress}%
                </div>
                <div className="w-8 h-8 border-4 border-cyber-secondary border-t-transparent rounded-full animate-spin mx-auto"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Status messages */}
        <motion.div
          key={currentMessage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="mb-12"
        >
          <p className="text-2xl font-mono text-cyber-secondary">
            {messages[currentMessage]}
          </p>
        </motion.div>

        {/* Data stream effect */}
        <div className="grid grid-cols-8 gap-2 mb-8">
          {[...Array(32)].map((_, i) => (
            <motion.div
              key={i}
              className="h-4 bg-cyber-primary rounded"
              animate={{
                opacity: [0.3, 1, 0.3],
                scaleY: [0.5, 1.5, 0.5]
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.1
              }}
            />
          ))}
        </div>

        {/* Binary data visualization */}
        <div className="font-mono text-xs text-gray-600 space-y-1">
          {[...Array(6)].map((_, line) => (
            <motion.div
              key={line}
              className="flex space-x-2"
              animate={{
                x: [-10, 10, -10]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: line * 0.3
              }}
            >
              {[...Array(20)].map((_, char) => (
                <span key={char} className="opacity-70">
                  {Math.random() > 0.5 ? '1' : '0'}
                </span>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessingAnimation;