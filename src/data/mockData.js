// Mock data for analytics dashboard
export const analyticsData = {
  metrics: {
    totalScansToday: 142,
    couponsRedeemed: 45,
    salesGenerated: 2850,
    conversionRate: 31.7,
    avgOrderValue: 127,
    customerSatisfaction: 4.8,
    repeatCustomers: 67,
    socialShares: 23
  },
  popularStyles: [
    { name: 'Casual', value: 60 },
    { name: 'Formal', value: 25 },
    { name: 'Athletic', value: 15 }
  ],
  hourlyTraffic: [
    { hour: '00:00', count: 2 },
    { hour: '01:00', count: 1 },
    { hour: '02:00', count: 0 },
    { hour: '03:00', count: 0 },
    { hour: '04:00', count: 0 },
    { hour: '05:00', count: 1 },
    { hour: '06:00', count: 3 },
    { hour: '07:00', count: 12 },
    { hour: '08:00', count: 28 },
    { hour: '09:00', count: 45 },
    { hour: '10:00', count: 52 },
    { hour: '11:00', count: 58 },
    { hour: '12:00', count: 62 },
    { hour: '13:00', count: 55 },
    { hour: '14:00', count: 48 },
    { hour: '15:00', count: 51 },
    { hour: '16:00', count: 59 },
    { hour: '17:00', count: 67 },
    { hour: '18:00', count: 61 },
    { hour: '19:00', count: 49 },
    { hour: '20:00', count: 42 },
    { hour: '21:00', count: 35 },
    { hour: '22:00', count: 28 },
    { hour: '23:00', count: 15 }
  ],
  liveFeed: [
    {
      id: 1,
      action: 'New Scan',
      details: 'Executive Suit Recommendation',
      timestamp: '2 mins ago',
      value: '$189',
      icon: '👔',
      color: 'text-blue-400'
    },
    {
      id: 2,
      action: 'Coupon Redeemed',
      details: 'Business Casual Collection',
      timestamp: '5 mins ago',
      value: '$145',
      icon: '🎟️',
      color: 'text-green-400'
    },
    {
      id: 3,
      action: 'Style Generated',
      details: 'Weekend Warrior Outfit',
      timestamp: '8 mins ago',
      value: '$98',
      icon: '✨',
      color: 'text-purple-400'
    },
    {
      id: 4,
      action: 'Purchase Completed',
      details: 'Gym Essentials Package',
      timestamp: '12 mins ago',
      value: '$234',
      icon: '💰',
      color: 'text-yellow-400'
    },
    {
      id: 5,
      action: 'New Scan',
      details: 'Evening Glam Collection',
      timestamp: '15 mins ago',
      value: '$167',
      icon: '👗',
      color: 'text-pink-400'
    },
    {
      id: 6,
      action: 'Share Generated',
      details: 'Summer Casual Look',
      timestamp: '18 mins ago',
      value: '$78',
      icon: '📱',
      color: 'text-cyan-400'
    },
    {
      id: 7,
      action: 'Premium Style',
      details: 'Luxury Formal Wear',
      timestamp: '22 mins ago',
      value: '$345',
      icon: '💎',
      color: 'text-indigo-400'
    },
    {
      id: 8,
      action: 'Quick Scan',
      details: 'Office Ready Outfit',
      timestamp: '25 mins ago',
      value: '$132',
      icon: '⚡',
      color: 'text-orange-400'
    },
    {
      id: 9,
      action: 'Seasonal Special',
      details: 'Winter Coat Recommendation',
      timestamp: '28 mins ago',
      value: '$198',
      icon: '❄️',
      color: 'text-teal-400'
    }
  ]
};

// Mock data for outfit recommendations
export const outfitRecommendations = {
  work: [
    {
      id: 'work-1',
      top: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop',
      bottom: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop',
      shoes: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=400&h=400&fit=crop',
      discountCode: 'WORK20'
    },
    {
      id: 'work-2',
      top: 'https://images.unsplash.com/photo-1591047131774-3829c37214ce?w=400&h=500&fit=crop',
      bottom: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop',
      shoes: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop',
      discountCode: 'OFFICE15'
    }
  ],
  party: [
    {
      id: 'party-1',
      top: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=400&h=500&fit=crop',
      bottom: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop',
      shoes: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=400&h=400&fit=crop',
      discountCode: 'PARTY25'
    }
  ],
  gym: [
    {
      id: 'gym-1',
      top: 'https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=400&h=500&fit=crop',
      bottom: 'https://images.unsplash.com/photo-1549887534-1541e9326642?w=400&h=500&fit=crop',
      shoes: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
      discountCode: 'FITNESS30'
    }
  ],
  casual: [
    {
      id: 'casual-1',
      top: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop',
      bottom: 'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=400&h=500&fit=crop',
      shoes: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop',
      discountCode: 'CASUAL15'
    }
  ]
};