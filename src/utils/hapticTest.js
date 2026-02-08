// Test haptic feedback functionality
const testHapticFeedback = () => {
  if ('vibrate' in navigator) {
    console.log('Haptic feedback is supported');
    
    // Test different vibration patterns
    navigator.vibrate([100, 50, 100]); // Pattern: 100ms on, 50ms off, 100ms on
    
    setTimeout(() => {
      navigator.vibrate(200); // Single 200ms vibration
    }, 500);
    
    setTimeout(() => {
      navigator.vibrate([50, 50, 50, 50, 50]); // Rapid pulses
    }, 1000);
    
  } else {
    console.log('Haptic feedback is not supported on this device');
  }
};

// Add to window for easy testing
window.testHaptics = testHapticFeedback;

export default testHapticFeedback;