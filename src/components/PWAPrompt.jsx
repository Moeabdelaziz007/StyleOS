import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const PWAPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later
      setDeferredPrompt(e);
      // Show the install prompt after a delay
      setTimeout(() => {
        setIsVisible(true);
      }, 3000); // Show after 3 seconds
    };

    const handleAppInstalled = () => {
      // Hide the install prompt
      setIsVisible(false);
      // Clear the deferred prompt
      setDeferredPrompt(null);
      // Haptic feedback on successful installation
      if ('vibrate' in navigator) {
        navigator.vibrate([100, 50, 100]); // Celebration vibration
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    
    // We've used the prompt, and can't use it again, throw it away
    setDeferredPrompt(null);
    setIsVisible(false);

    // Haptic feedback based on user choice
    if ('vibrate' in navigator) {
      if (outcome === 'accepted') {
        navigator.vibrate([50, 50, 50]); // Success vibration
      } else {
        navigator.vibrate([100]); // Cancel vibration
      }
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    // Haptic feedback on close
    if ('vibrate' in navigator) {
      navigator.vibrate(25);
    }
  };

  if (!isVisible || !deferredPrompt) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      className="fixed bottom-4 left-4 right-4 z-50"
    >
      <div className="bg-gray-900 border border-cyan-500 rounded-xl p-4 shadow-2xl backdrop-blur-sm">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-xl">📱</span>
              </div>
              <div>
                <h3 className="font-bold text-cyan-400 text-lg">Install StyleOS Pro</h3>
                <p className="text-gray-300 text-sm">Add to Home Screen for full experience</p>
              </div>
            </div>
            <button
              onClick={handleInstallClick}
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200 mt-2"
            >
              Install App
            </button>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-white ml-2"
          >
            ✕
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PWAPrompt;