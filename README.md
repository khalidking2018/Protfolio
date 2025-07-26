# Modern Portfolio Website

A stunning, responsive personal portfolio website built with React, Vite, and modern web technologies. Features 3D visual effects, smooth animations, and a beautiful user interface.

## ✨ Features

### 🎨 Visual Design

- **Modern UI/UX**: Clean, minimalist design with beautiful gradients and glassmorphism effects
- **Dark Mode Toggle**: Seamless light/dark theme switching
- **Responsive Design**: Fully responsive across all devices and screen sizes
- **3D Effects**: Parallax tilt effects on project cards and skill boxes
- **Animated Background**: Interactive 3D dots background using Vanta.js

### 🚀 Performance

- **Fast Loading**: Built with Vite for lightning-fast development and build times
- **Optimized Animations**: Smooth 60fps animations using Framer Motion
- **Modern CSS**: Tailwind CSS for utility-first styling
- **Lazy Loading**: Components load efficiently as you scroll

### 📱 Sections

- **Hero Section**: Eye-catching introduction with 3D text effects
- **About Me**: Personal information with animated profile elements
- **Projects**: Showcase with 3D parallax tilt effects on cards
- **Skills**: Interactive skill bars with progress animations
- **Contact Form**: Functional contact form with validation
- **Footer**: Social links and additional information

## 🛠 Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Effects**: react-parallax-tilt
- **Background Animation**: Vanta.js + Three.js
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation with dark mode toggle
│   ├── Hero.jsx           # Hero section with 3D background
│   ├── About.jsx          # About section with profile info
│   ├── Projects.jsx       # Projects showcase with 3D tilt
│   ├── Skills.jsx         # Skills with animated progress bars
│   ├── Contact.jsx        # Contact form and info
│   └── Footer.jsx         # Footer with social links
├── assets/                # Static assets
├── App.jsx               # Main app component
├── main.jsx              # App entry point
└── index.css             # Global styles and Tailwind
```

## 🎯 Customization

### Personal Information

Update the following files with your information:

- `src/components/Hero.jsx` - Name, title, and tagline
- `src/components/About.jsx` - Bio, experience, and stats
- `src/components/Projects.jsx` - Your projects
- `src/components/Skills.jsx` - Your skills and proficiency levels
- `src/components/Contact.jsx` - Contact information
- `src/components/Footer.jsx` - Social links

### Styling

- Colors: Modify the color palette in `tailwind.config.js`
- Animations: Adjust animation settings in component files
- 3D Effects: Customize tilt parameters in project cards

### Background Animation

The hero section uses Vanta.js for the animated background. You can customize it in `src/components/Hero.jsx`:

- Change colors, size, and spacing of dots
- Switch to different Vanta effects (waves, birds, etc.)
- Adjust animation parameters

## 🌟 Key Features Explained

### 3D Parallax Tilt

Project cards use `react-parallax-tilt` for interactive 3D effects:

- Mouse tracking for realistic tilt
- Glare effects for enhanced visual appeal
- Smooth transitions and scaling

### Animated Skill Bars

Skills section features animated progress bars:

- Staggered animations on scroll
- Color-coded by technology
- Smooth progress filling

### Dark Mode

Seamless dark/light mode switching:

- Persistent theme preference
- Smooth transitions
- Optimized colors for both themes

### Responsive Design

Mobile-first approach with:

- Flexible grid layouts
- Adaptive typography
- Touch-friendly interactions

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Vanta.js](https://www.vantajs.com/) for beautiful background animations
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Lucide React](https://lucide.dev/) for beautiful icons

---

Made with ❤️ using React & Vite
