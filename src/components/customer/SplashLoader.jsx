import { motion } from 'framer-motion';

const SplashLoader = () => {
  const matrixChars = ['0', '1', 'A', 'B', 'C', 'D', 'E', 'F'];

  return (
    <div className="min-h-screen cyberpunk-bg flex items-center justify-center relative overflow-hidden">
      {/* Matrix rain background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-cyber-primary text-lg font-mono"
            initial={{
              x: `${Math.random() * 100}%`,
              y: '-20px',
              opacity: 0
            }}
            animate={{
              y: '100vh',
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          >
            {matrixChars[Math.floor(Math.random() * matrixChars.length)]}
          </motion.div>
        ))}
      </div>

      {/* Main loading content */}
      <div className="relative z-10 text-center">
        {/* Glitch text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-mono text-cyber-primary mb-4 glitch-text">
            STYLE OS
          </h1>
          <div className="h-1 w-32 bg-cyber-primary mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl text-gray-300 font-mono">
            INITIALIZING NEURAL NETWORK...
          </p>
        </motion.div>

        {/* Loading progress */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="max-w-md mx-auto"
        >
          {/* Progress bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm font-mono text-gray-400 mb-2">
              <span>SYSTEM STATUS</span>
              <span id="progress-percent">0%</span>
            </div>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-cyber-primary"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{
                  duration: 3,
                  ease: "easeInOut"
                }}
              />
            </div>
          </div>

          {/* Status messages */}
          <div className="space-y-2 font-mono text-left">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.8 }}
              className="flex items-center text-green-400"
            >
              <span className="mr-2">✓</span>
              <span>LOADING CORE MODULES...</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.2 }}
              className="flex items-center text-green-400"
            >
              <span className="mr-2">✓</span>
              <span>ESTABLISHING CONNECTION...</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.6 }}
              className="flex items-center text-green-400"
            >
              <span className="mr-2">✓</span>
              <span>INITIALIZING AI ENGINES...</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 2.0 }}
              className="flex items-center text-cyan-400"
            >
              <span className="mr-2 animate-pulse">▶</span>
              <span>FINALIZING BOOT SEQUENCE...</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Scanline effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            background: [
              'linear-gradient(transparent 0%, transparent 40%, rgba(6, 182, 212, 0.3) 50%, transparent 60%, transparent 100%)',
              'linear-gradient(transparent 0%, transparent 100%)'
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>
    </div>
  );
};

export default SplashLoader;