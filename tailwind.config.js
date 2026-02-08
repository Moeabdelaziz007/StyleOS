/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#09090b',
          primary: '#06b6d4',
          secondary: '#22c55e',
          text: '#f8fafc',
          dark: '#000000',
        }
      },
      fontFamily: {
        'mono': ['Space Mono', 'monospace'],
      },
      boxShadow: {
        'neon': '0 0 10px rgba(6, 182, 212, 0.5)',
        'neon-strong': '0 0 20px rgba(6, 182, 212, 0.8)',
      },
      animation: {
        'glitch': 'glitch 2s infinite',
        'matrix': 'matrix 3s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        matrix: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        }
      }
    },
  },
  plugins: [],
}

