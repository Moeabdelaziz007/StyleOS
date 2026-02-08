import { motion } from 'framer-motion';

const LiveFeed = ({ data }) => {
  const getActionColor = (action) => {
    switch (action) {
      case 'New Scan': return 'text-cyan-400';
      case 'Coupon Redeemed': return 'text-green-400';
      case 'Purchase Made': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  const getActionIcon = (action) => {
    switch (action) {
      case 'New Scan': return '🔍';
      case 'Coupon Redeemed': return '🎟️';
      case 'Purchase Made': return '💰';
      default: return '📋';
    }
  };

  return (
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-cyan-400">Live Activity Feed</h2>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-400">LIVE</span>
        </div>
      </div>
      
      <div className="space-y-3 max-h-96 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
        {data.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-700/50 to-gray-800/50 rounded-lg border border-gray-600/50 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 group"
          >
            <div className="flex items-center space-x-4">
              <div className={`text-2xl ${item.color || getActionColor(item.action)} group-hover:scale-110 transition-transform`}>
                {item.icon || getActionIcon(item.action)}
              </div>
              <div>
                <div className={`font-semibold ${item.color || getActionColor(item.action)} group-hover:brightness-125 transition-all`}>
                  {item.action}
                </div>
                <div className="text-sm text-gray-400 mt-1">{item.details}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-bold text-cyan-400 text-lg group-hover:text-cyan-300 transition-colors">
                {item.value}
              </div>
              <div className="text-xs text-gray-500 flex items-center gap-2 mt-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                {item.timestamp}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {data.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <div className="text-4xl mb-2">📭</div>
          <p>No recent activity</p>
        </div>
      )}
    </div>
  );
};

export default LiveFeed;