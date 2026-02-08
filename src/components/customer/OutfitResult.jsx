import { motion } from 'framer-motion';
import { useState } from 'react';
import QRCode from 'react-qr-code';
import useCyberSound from '../../hooks/useCyberSound';

const OutfitResult = ({ outfit, onTryAgain }) => {
  const [copied, setCopied] = useState(false);
  const { playSuccess, playClick } = useCyberSound();

  // Play success sound when component mounts
  useState(() => {
    playSuccess();
  }, []);

  const handleBuyNow = () => {
    playClick();
    
    const outfitItems = [
      `${outfit.top.name} (${outfit.top.category})`,
      `${outfit.bottom.name} (${outfit.bottom.category})`,
      `${outfit.shoes.name} (${outfit.shoes.category})`
    ].join(', ');
    
    const message = `Hi! I want to order this outfit: ${outfitItems}. Discount Code: ${outfit.discountCode}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const copyToClipboard = () => {
    playClick();
    navigator.clipboard.writeText(outfit.discountCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!outfit) return null;

  return (
    <div className="min-h-screen cyberpunk-bg p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-mono text-cyber-primary mb-4">
            YOUR RECOMMENDATION
          </h1>
          <div className="h-1 w-32 bg-cyber-primary mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">
            Confidence Level: <span className="text-cyber-secondary font-bold">{outfit.confidence}%</span>
          </p>
        </motion.div>

        {/* Outfit Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {/* Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-800 rounded-lg overflow-hidden neon-border"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={outfit.top.imageUrl}
                alt={outfit.top.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="font-mono text-cyber-primary mb-2">TOP</h3>
              <p className="text-gray-300 mb-2">{outfit.top.name}</p>
              <p className="text-cyber-secondary font-bold">${outfit.top.price}</p>
            </div>
          </motion.div>

          {/* Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-800 rounded-lg overflow-hidden neon-border"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={outfit.bottom.imageUrl}
                alt={outfit.bottom.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="font-mono text-cyber-primary mb-2">BOTTOM</h3>
              <p className="text-gray-300 mb-2">{outfit.bottom.name}</p>
              <p className="text-cyber-secondary font-bold">${outfit.bottom.price}</p>
            </div>
          </motion.div>

          {/* Shoes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gray-800 rounded-lg overflow-hidden neon-border"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={outfit.shoes.imageUrl}
                alt={outfit.shoes.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="font-mono text-cyber-primary mb-2">SHOES</h3>
              <p className="text-gray-300 mb-2">{outfit.shoes.name}</p>
              <p className="text-cyber-secondary font-bold">${outfit.shoes.price}</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Discount Code & QR Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gray-800 rounded-lg p-8 mb-8 neon-border"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-mono text-cyber-primary mb-4">
              EXCLUSIVE DISCOUNT CODE
            </h2>
            <div className="relative inline-block">
              <div className="text-4xl font-mono font-bold text-cyber-secondary bg-gray-900 px-8 py-4 rounded-lg border-2 border-cyber-secondary animate-pulse">
                {outfit.discountCode}
              </div>
              {copied && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-green-400 text-sm font-mono"
                >
                  Copied!
                </motion.div>
              )}
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={copyToClipboard}
                className="bg-cyber-primary text-cyber-dark px-6 py-3 rounded-lg font-mono font-bold hover:bg-cyan-400 transition-colors neon-border"
              >
                COPY CODE
              </motion.button>
            </div>
          </div>
          
          {/* QR Code Section */}
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center mt-8 pt-8 border-t border-gray-700">
            <div className="text-center">
              <h3 className="text-xl font-mono text-cyber-primary mb-4">SCAN TO CLAIM</h3>
              <div className="p-4 bg-white rounded-lg inline-block border-4 border-cyan-400 shadow-lg shadow-cyan-500/30">
                <QRCode 
                  value={`DISCOUNT_CLAIM: ${outfit.discountCode} - VALUE: 20%`} 
                  size={128}
                  bgColor="#ffffff"
                  fgColor="#09090b"
                />
              </div>
              <p className="text-gray-400 text-sm mt-2 font-mono">20% OFF YOUR ORDER</p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-mono text-cyber-primary mb-4">ORDER NOW</h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleBuyNow}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-mono font-bold transition-all duration-300 shadow-lg shadow-green-500/30 border-2 border-green-500 animate-pulse"
              >
                <div className="flex items-center gap-2">
                  <span>📱</span>
                  <span>ORDER VIA WHATSAPP</span>
                </div>
              </motion.button>
              <p className="text-gray-400 text-sm mt-2 font-mono">Get instant assistance</p>
            </div>
          </div>
        </motion.div>

        {/* Total Price */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center mb-12"
        >
          <div className="text-2xl text-gray-300 mb-2">
            Total Estimated Value
          </div>
          <div className="text-5xl font-mono font-bold text-cyber-primary">
            ${outfit.totalPrice}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onTryAgain}
            className="px-8 py-4 bg-gray-700 text-gray-200 rounded-lg font-mono font-bold hover:bg-gray-600 transition-colors border-2 border-gray-600"
          >
            TRY AGAIN
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-cyber-secondary text-cyber-dark rounded-lg font-mono font-bold hover:bg-green-400 transition-colors neon-border"
          >
            SHOP NOW
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default OutfitResult;