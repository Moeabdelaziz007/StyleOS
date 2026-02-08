# StyleOS Pro - AI-Powered Fashion Stylist Platform

![StyleOS Banner](https://img.shields.io/badge/StyleOS-Pro-blueviolet) ![React](https://img.shields.io/badge/React-18-blue) ![Vite](https://img.shields.io/badge/Vite-5.0-green) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0-cyan)

A cutting-edge dual-interface fashion platform featuring an AI-powered stylist for customers and a professional analytics dashboard for business owners.

## 🌟 Features

### Customer Interface (`/`)
- **Cyberpunk-themed UI** with immersive visual effects
- **AI Style Recommendations** based on occasion and budget
- **Interactive Experience** with smooth animations and transitions
- **Real-time Processing** simulation with engaging feedback
- **Mobile-responsive Design** optimized for all devices

### Admin Dashboard (`/admin`)
- **Live Analytics Dashboard** with real-time data visualization
- **Business Metrics Tracking** (sales, conversions, traffic patterns)
- **Interactive Charts** using Recharts for data insights
- **Live Activity Feed** showing customer interactions
- **Professional Dark Theme** with glowing UI elements
- **Secret Access** via long-press gesture on logo

## 🚀 Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS 3.0 with custom cyberpunk theme
- **Animations**: Framer Motion
- **Charts**: Recharts for data visualization
- **Routing**: React Router v6
- **Icons**: Lucide React

## 📁 Project Structure

```
src/
├── components/
│   ├── admin/           # Admin dashboard components
│   │   ├── MetricCard.jsx
│   │   ├── PopularStylesChart.jsx
│   │   ├── TrafficChart.jsx
│   │   └── LiveFeed.jsx
│   └── customer/        # Customer interface components
│       ├── SplashLoader.jsx
│       ├── OccasionSelector.jsx
│       ├── BudgetSlider.jsx
│       ├── ProcessingAnimation.jsx
│       └── OutfitResult.jsx
├── data/
│   └── mockData.js      # Mock data for demo
├── pages/
│   ├── Home.jsx         # Customer interface
│   └── Admin.jsx        # Admin dashboard
├── App.jsx              # Main routing component
└── index.css           # Global styles and themes
```

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/Moeabdelaziz007/StyleOS.git
cd StyleOS
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🎯 Usage

### Customer Journey
1. Visit the homepage to experience the cyberpunk splash screen
2. Select an occasion (Work, Casual, Party, or Gym)
3. Set your budget using the interactive slider
4. Watch the AI processing animation
5. Receive personalized outfit recommendations

### Admin Access
**Method 1:** Navigate to `/admin` directly
**Method 2:** Long-press (3 seconds) on the "STYLE OS" logo from any page

### Admin Dashboard Features
- Real-time metrics updating every 4 seconds
- Live sales tracking with realistic fluctuations
- Hourly traffic pattern visualization
- Popular styles distribution charts
- Live activity feed with customer interactions

## 📱 Mobile Optimization

The application is fully responsive and optimized for:
- Smartphones (320px+)
- Tablets (768px+)
- Desktop computers (1024px+)

Charts automatically adapt to screen size with:
- Reduced margins on mobile
- Optimized font sizes
- Touch-friendly interactions

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Customization
- Modify color themes in `tailwind.config.js`
- Update mock data in `src/data/mockData.js`
- Adjust animation timings in component files

## 🎨 Design Philosophy

StyleOS combines:
- **Cyberpunk Aesthetics** for customer engagement
- **Professional Minimalism** for business analytics
- **Seamless Transitions** between interfaces
- **Performance Optimization** for smooth user experience

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Inspired by modern fashion tech trends
- Built with cutting-edge web technologies
- Designed for retail innovation and customer engagement

---

**Built with ❤️ using React, Vite, and Tailwind CSS**