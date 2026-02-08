import { motion } from 'framer-motion';

const occasions = [
  { id: 'work', label: 'WORK', icon: '💼' },
  { id: 'party', label: 'PARTY', icon: '🎉' },
  { id: 'gym', label: 'GYM', icon: '💪' },
  { id: 'casual', label: 'CASUAL', icon: '👕' }
];

const OccasionSelector = ({ selectedOccasion, onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <div className="text-center">
        <h2 className="text-2xl font-mono text-cyber-primary mb-2">
          SELECT OCCASION
        </h2>
        <p className="text-gray-400">
          Choose your style context
        </p>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {occasions.map((occasion) => (
          <motion.button
            key={occasion.id}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect(occasion.id)}
            className={`p-6 rounded-lg border-2 transition-all duration-300 font-mono text-center ${
              selectedOccasion === occasion.id
                ? 'border-cyber-primary bg-cyber-primary bg-opacity-20 text-cyber-primary neon-border'
                : 'border-gray-700 bg-gray-800 text-gray-300 hover:border-cyber-secondary hover:text-cyber-secondary'
            }`}
          >
            <div className="text-3xl mb-2">{occasion.icon}</div>
            <div className="text-lg font-bold">{occasion.label}</div>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default OccasionSelector;