import { motion } from 'framer-motion';

const MetricCard = ({ title, value, change, icon, color }) => {
  const colorClasses = {
    cyan: 'text-cyan-400 border-cyan-400/50',
    green: 'text-green-400 border-green-400/50', 
    purple: 'text-purple-400 border-purple-400/50',
    yellow: 'text-yellow-400 border-yellow-400/50'
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="text-3xl">{icon}</div>
        <div className={`px-2 py-1 rounded-full text-xs font-bold border ${colorClasses[color]}`}>
          {change}
        </div>
      </div>
      
      <h3 className="text-gray-400 text-sm font-medium mb-1">{title}</h3>
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`text-3xl font-bold ${colorClasses[color].split(' ')[0]}`}
      >
        {value}
      </motion.div>
      
      {/* Trend indicator */}
      <div className="mt-3 h-1 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${colorClasses[color].split(' ')[0]}`}
          initial={{ width: 0 }}
          animate={{ width: '75%' }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>
    </motion.div>
  );
};

export default MetricCard;