import { useRef } from 'react';

// Base64 encoded simple cyberpunk-style sounds
const CYBER_SOUNDS = {
  // Simple click sound - short beep
  click: 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAA',
  
  // Processing sound - looping digital hum (simplified)
  process: 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAA',
  
  // Success sound - ascending chime
  success: 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQQAAAAA'
};

// Generate actual simple waveforms for the sounds
const generateClickSound = () => {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  
  oscillator.frequency.setValueAtTime(800, audioCtx.currentTime);
  oscillator.type = 'square';
  
  gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
  
  oscillator.start(audioCtx.currentTime);
  oscillator.stop(audioCtx.currentTime + 0.1);
};

const generateProcessSound = () => {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  
  oscillator.frequency.setValueAtTime(200, audioCtx.currentTime);
  oscillator.type = 'sawtooth';
  
  gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
  
  oscillator.start(audioCtx.currentTime);
  oscillator.stop(audioCtx.currentTime + 0.3);
};

const generateSuccessSound = () => {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  
  // Create ascending chime sequence
  const frequencies = [523.25, 659.25, 783.99]; // C, E, G
  
  frequencies.forEach((freq, index) => {
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    oscillator.frequency.setValueAtTime(freq, audioCtx.currentTime);
    oscillator.type = 'sine';
    
    const startTime = audioCtx.currentTime + (index * 0.15);
    gainNode.gain.setValueAtTime(0.2, startTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + 0.3);
    
    oscillator.start(startTime);
    oscillator.stop(startTime + 0.3);
  });
};

const useCyberSound = () => {
  const isProcessPlaying = useRef(false);

  const playClick = () => {
    try {
      generateClickSound();
    } catch (error) {
      console.log('Audio playback failed:', error);
    }
  };

  const playProcess = () => {
    if (isProcessPlaying.current) return;
    
    isProcessPlaying.current = true;
    
    const playLoop = () => {
      if (!isProcessPlaying.current) return;
      
      generateProcessSound();
      
      // Schedule next sound
      setTimeout(playLoop, 400);
    };
    
    playLoop();
  };

  const stopProcess = () => {
    isProcessPlaying.current = false;
  };

  const playSuccess = () => {
    try {
      generateSuccessSound();
    } catch (error) {
      console.log('Audio playback failed:', error);
    }
  };

  return {
    playClick,
    playProcess,
    stopProcess,
    playSuccess
  };
};

export default useCyberSound;