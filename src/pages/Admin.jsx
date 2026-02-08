import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import MetricCard from '../components/admin/MetricCard';
import PopularStylesChart from '../components/admin/PopularStylesChart';
import TrafficChart from '../components/admin/TrafficChart';
import LiveFeed from '../components/admin/LiveFeed';
import { analyticsData } from '../data/mockData';

const Admin = () => {
  const [metrics, setMetrics] = useState(analyticsData.metrics);
  const [liveFeed, setLiveFeed] = useState(analyticsData.liveFeed);
  const [hourlyTraffic, setHourlyTraffic] = useState(analyticsData.hourlyTraffic);
  const [popularStyles, setPopularStyles] = useState(analyticsData.popularStyles);
  
  // Enhanced real-time simulation for demo
  const simulateRealTimeUpdates = useCallback(() => {
    // Simulate increasing sales and activity
    const salesIncrement = Math.floor(Math.random() * 100) + 25; // $25-$125 per update
    const scanIncrement = Math.floor(Math.random() * 3) + 1; // 1-3 scans per update
    
    setMetrics(prev => ({
      ...prev,
      totalScansToday: prev.totalScansToday + scanIncrement,
      couponsRedeemed: prev.couponsRedeemed + Math.floor(Math.random() * 2),
      salesGenerated: prev.salesGenerated + salesIncrement,
      conversionRate: parseFloat((prev.conversionRate + (Math.random() * 2 - 0.5)).toFixed(1))
    }));

    // Update hourly traffic data realistically
    setHourlyTraffic(prev => {
      const updated = [...prev];
      const currentHour = new Date().getHours();
      const hourIndex = currentHour;
      
      // Increase traffic for current hour
      updated[hourIndex] = {
        ...updated[hourIndex],
        count: updated[hourIndex].count + Math.floor(Math.random() * 5) + 1
      };
      
      return updated;
    });

    // Update popular styles with slight variations
    setPopularStyles(prev => {
      const updated = prev.map(style => ({
        ...style,
        value: Math.max(5, Math.min(80, style.value + (Math.random() * 6 - 3)))
      }));
      
      // Normalize to 100%
      const total = updated.reduce((sum, style) => sum + style.value, 0);
      return updated.map(style => ({
        ...style,
        value: parseFloat(((style.value / total) * 100).toFixed(1))
      }));
    });

    // Add realistic live feed entries
    if (Math.random() > 0.3) { // 70% chance every interval
      const actions = [
        { type: 'New Scan', icon: '🔍', color: 'text-cyan-400' },
        { type: 'Coupon Redeemed', icon: '🎟️', color: 'text-green-400' },
        { type: 'Purchase Made', icon: '💰', color: 'text-purple-400' },
        { type: 'Style Generated', icon: '✨', color: 'text-yellow-400' }
      ];
      
      const outfits = [
        'Executive Suit', 'Casual Weekend', 'Gym Essentials', 
        'Evening Glam', 'Business Casual', 'Athleisure',
        'Smart Formal', 'Weekend Vibes', 'Professional Look'
      ];
      
      const action = actions[Math.floor(Math.random() * actions.length)];
      const outfit = outfits[Math.floor(Math.random() * outfits.length)];
      const value = Math.floor(Math.random() * 300) + 45; // $45-$345
      
      const newEntry = {
        id: Date.now() + Math.random(),
        action: action.type,
        details: outfit,
        timestamp: 'Just now',
        value: `$${value}`,
        icon: action.icon,
        color: action.color
      };
      
      setLiveFeed(prev => [newEntry, ...prev.slice(0, 14)]); // Keep last 15 entries
    }
  }, []);

  // Main simulation interval
  useEffect(() => {
    const interval = setInterval(simulateRealTimeUpdates, 4000); // Every 4 seconds for dynamic demo
    return () => clearInterval(interval);
  }, [simulateRealTimeUpdates]);

  // Peak hour simulation (busier periods)
  useEffect(() => {
    const peakInterval = setInterval(() => {
      const hour = new Date().getHours();
      // Higher activity during business hours and evening
      const isPeakTime = (hour >= 9 && hour <= 18) || (hour >= 20 && hour <= 22);
      
      if (isPeakTime && Math.random() > 0.4) { // 60% chance during peak hours
        simulateRealTimeUpdates();
      }
    }, 2500);
    
    return () => clearInterval(peakInterval);
  }, [simulateRealTimeUpdates]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4 sm:p-6">
      {/* Enhanced Header with visual effects */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 relative overflow-hidden rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 p-6"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
        <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <h1 className="text-2xl sm:text-3xl font-bold text-cyan-400 glitch-text">StyleOS Command Center</h1>
            </div>
            <p className="text-gray-400 ml-6">Business Analytics Dashboard</p>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-400">Last updated</div>
            <div className="text-cyan-400 font-mono">
              {new Date().toLocaleTimeString()}
            </div>
          </div>
        </div>
        <div className="h-1 w-full bg-gradient-to-r from-cyan-500 to-green-500 mt-4 rounded-full"></div>
      </motion.div>

      {/* Metrics Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
      >
        <MetricCard
          title="Total Scans Today"
          value={metrics.totalScansToday}
          change="+12%"
          icon="🔍"
          color="cyan"
        />
        <MetricCard
          title="Coupons Redeemed"
          value={metrics.couponsRedeemed}
          change="+8%"
          icon="🎟️"
          color="green"
        />
        <MetricCard
          title="Sales Generated"
          value={`$${metrics.salesGenerated.toLocaleString()}`}
          change="+15%"
          icon="💰"
          color="purple"
        />
        <MetricCard
          title="Conversion Rate"
          value={`${metrics.conversionRate}%`}
          change="+3%"
          icon="📈"
          color="yellow"
        />
      </motion.div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <PopularStylesChart data={popularStyles} />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <TrafficChart data={hourlyTraffic} />
        </motion.div>
      </div>

      {/* Live Feed */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <LiveFeed data={liveFeed} />
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 p-6 bg-gray-800 rounded-lg border border-gray-700"
      >
        <h2 className="text-xl font-bold text-cyan-400 mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <button className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 rounded-lg font-medium transition-colors">
            Export Reports
          </button>
          <button className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-medium transition-colors">
            View User Analytics
          </button>
          <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors">
            Manage Coupons
          </button>
          <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition-colors">
            System Settings
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Admin;