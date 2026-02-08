// Clothing database with Unsplash fashion images
export const clothingDatabase = {
  // Work/Professional attire
  work: [
    {
      id: 'work-top-1',
      name: 'Professional Blazer',
      category: 'top',
      imageUrl: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop',
      price: 129.99,
      tags: ['professional', 'office', 'business']
    },
    {
      id: 'work-top-2',
      name: 'Button-Up Shirt',
      category: 'top',
      imageUrl: 'https://images.unsplash.com/photo-1591047131774-3829c37214ce?w=400&h=500&fit=crop',
      price: 49.99,
      tags: ['casual', 'office', 'versatile']
    },
    {
      id: 'work-bottom-1',
      name: 'Tailored Trousers',
      category: 'bottom',
      imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop',
      price: 79.99,
      tags: ['professional', 'formal', 'business']
    },
    {
      id: 'work-shoes-1',
      name: 'Oxford Shoes',
      category: 'shoes',
      imageUrl: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=400&h=400&fit=crop',
      price: 149.99,
      tags: ['professional', 'formal', 'leather']
    },
    {
      id: 'work-shoes-2',
      name: 'Loafers',
      category: 'shoes',
      imageUrl: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=400&fit=crop',
      price: 89.99,
      tags: ['business-casual', 'comfortable', 'versatile']
    }
  ],

  // Party/Social attire
  party: [
    {
      id: 'party-top-1',
      name: 'Silk Blouse',
      category: 'top',
      imageUrl: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=400&h=500&fit=crop',
      price: 89.99,
      tags: ['elegant', 'evening', 'luxury']
    },
    {
      id: 'party-bottom-1',
      name: 'Designer Jeans',
      category: 'bottom',
      imageUrl: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop',
      price: 129.99,
      tags: ['premium', 'stylish', 'trendy']
    },
    {
      id: 'party-shoes-1',
      name: 'Heeled Boots',
      category: 'shoes',
      imageUrl: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=400&h=400&fit=crop',
      price: 159.99,
      tags: ['party', 'elegant', 'statement']
    }
  ],

  // Gym/Athletic wear
  gym: [
    {
      id: 'gym-top-1',
      name: 'Performance Tee',
      category: 'top',
      imageUrl: 'https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=400&h=500&fit=crop',
      price: 34.99,
      tags: ['athletic', 'breathable', 'moisture-wicking']
    },
    {
      id: 'gym-bottom-1',
      name: 'Training Shorts',
      category: 'bottom',
      imageUrl: 'https://images.unsplash.com/photo-1549887534-1541e9326642?w=400&h=500&fit=crop',
      price: 44.99,
      tags: ['gym', 'flexible', 'comfortable']
    },
    {
      id: 'gym-shoes-1',
      name: 'Running Shoes',
      category: 'shoes',
      imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
      price: 119.99,
      tags: ['running', 'performance', 'supportive']
    }
  ],

  // Casual/Everyday wear
  casual: [
    {
      id: 'casual-top-1',
      name: 'Graphic Tee',
      category: 'top',
      imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop',
      price: 29.99,
      tags: ['casual', 'comfortable', 'everyday']
    },
    {
      id: 'casual-bottom-1',
      name: 'Slim Jeans',
      category: 'bottom',
      imageUrl: 'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=400&h=500&fit=crop',
      price: 69.99,
      tags: ['casual', 'versatile', 'classic']
    },
    {
      id: 'casual-shoes-1',
      name: 'Canvas Sneakers',
      category: 'shoes',
      imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop',
      price: 59.99,
      tags: ['casual', 'comfortable', 'everyday']
    }
  ]
};

// Utility function to get random outfit by occasion
export const getRandomOutfit = (occasion) => {
  const items = clothingDatabase[occasion];
  if (!items) return null;
  
  const tops = items.filter(item => item.category === 'top');
  const bottoms = items.filter(item => item.category === 'bottom');
  const shoes = items.filter(item => item.category === 'shoes');
  
  return {
    top: tops[Math.floor(Math.random() * tops.length)],
    bottom: bottoms[Math.floor(Math.random() * bottoms.length)],
    shoes: shoes[Math.floor(Math.random() * shoes.length)]
  };
};

// Utility function to get all occasions
export const getAllOccasions = () => {
  return Object.keys(clothingDatabase);
};