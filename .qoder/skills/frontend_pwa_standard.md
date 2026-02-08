# Skill: React Vite PWA Setup

## Context
Used for creating Progressive Web Apps with React and Vite using industry-standard practices. This setup enables offline functionality, home screen installation, and app-like experiences for web applications.

## The Pattern (Code Snippet)

### 1. Install the plugin
```bash
npm install vite-plugin-pwa --save-dev
```

### 2. Configure vite.config.js
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      manifest: {
        name: 'Your App Name',
        short_name: 'App',
        description: 'App description',
        theme_color: '#your-color',
        background_color: '#your-bg-color',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      }
    })
  ]
})
```

### 3. Create PWA Icons
Generate 192x192 and 512x512 pixel icons and place them in the public folder.

### 4. Optional: Add Installation Prompt Component
Create a component to prompt users to install the PWA:
```javascript
const PWAPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsVisible(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    
    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    setDeferredPrompt(null);
    setIsVisible(false);
  };

  if (!isVisible || !deferredPrompt) return null;
  
  // Render install prompt UI
};
```

## Sources
- https://vite-pwa-org.netlify.app/
- https://www.npmjs.com/package/vite-plugin-pwa
- https://medium.com/@dlrnjstjs/building-a-react-pwa-creating-a-web-app-that-feels-native-57bd21ec03e5
- https://www.timsanteford.com/posts/transform-your-vite-react-app-into-a-pwa-with-ease/