# High-Performance Portfolio Website with WebGL

A stunning, high-resolution developer portfolio with 3D WebGL animations, glassmorphism effects, and cutting-edge visual design.

## 🚀 Features

### Visual Excellence
- **WebGL 3D Background**: Animated particle system with 2,000+ particles using Three.js
- **Glassmorphism Design**: Modern frosted-glass effects throughout
- **Animated Code Editor**: Syntax-highlighted code display in hero section
- **3D Tilt Effects**: Interactive card tilting with perspective
- **Gradient Animations**: Flowing color gradients and glowing effects
- **Parallax Scrolling**: Smooth depth-based scroll animations

### Advanced Interactions
- **Typing Animation**: Auto-typing effect showcasing tech stack
- **Counter Animations**: Smooth number counting for statistics
- **Scroll Reveal**: Elements fade in as you scroll
- **Hover Effects**: Glowing buttons, scaling cards, animated icons
- **Mouse Tracking**: 3D perspective follows cursor movement

### Developer-Focused Design
- **Code Aesthetics**: Monospace fonts, syntax highlighting, terminal-style UI
- **Tech Iconography**: SVG icons representing modern development tools
- **Dark Theme**: Optimized for developer preferences with cyberpunk vibes
- **High Contrast**: Readable typography with WCAG compliance

### Technical Features
- **Fully Responsive**: Mobile-first design (320px to 4K displays)
- **Dark Mode Toggle**: Persistent theme switching
- **CSS Variables**: Complete theming system
- **Google Fonts**: Poppins, Inter, and Fira Code
- **No Framework Dependencies**: Pure HTML, CSS, and vanilla JavaScript
- **Performance Optimized**: Hardware-accelerated animations

## 📁 Project Structure

```
html styled website/
├── index.html              # Main HTML with enhanced structure
├── styles.css              # 800+ lines of advanced CSS
├── script.js               # Interactive animations and effects
├── webgl-background.js     # Three.js particle system
├── assets/
│   └── images/
│       └── profile.svg     # Hero illustration
└── README.md              # This file
```

## 🚀 Getting Started

### Option 1: Open Directly in Browser

1. Navigate to the project folder
2. Double-click `index.html` to open in your default browser

### Option 2: Using a Local Server (Recommended)

#### Python (if installed)
```powershell
python -m http.server 8000
```

#### Node.js with npx
```powershell
npx serve
```

#### VS Code Live Server Extension
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

Then open your browser to `http://localhost:8000` (or the port shown in your terminal).

## 🎨 Sections Included

1. **Header & Navigation**
   - Sticky header with smooth scroll navigation
   - Responsive navigation bar
   - Dark mode toggle button

2. **Hero Section**
   - Eye-catching headline with gradient text
   - SVG illustration with floating animation
   - Call-to-action button

3. **About Section**
   - Personal introduction
   - Skills showcase with interactive tags
   - Statistics cards with hover effects

4. **Services Section**
   - Responsive grid layout (3 columns → 1 column on mobile)
   - 6 service cards with icons and descriptions
   - Smooth hover animations

5. **Contact Section**
   - Professional contact form with validation
   - Styled input fields with focus states
   - Submit button with hover effects

6. **Footer**
   - Multi-column layout with quick links
   - Social media links
   - Copyright information

## 🎨 Color Palette

### Light Mode
- Primary: `#6366f1` (Indigo)
- Secondary: `#ec4899` (Pink)
- Accent: `#14b8a6` (Teal)
- Background: `#ffffff` (White)
- Text: `#1e293b` (Slate)

### Dark Mode
- Background: `#0f172a` (Dark Slate)
- Secondary BG: `#1e293b` (Slate)
- Text: `#f1f5f9` (Light Slate)

## 📱 Responsive Breakpoints

- **Mobile**: < 480px (Single column layout)
- **Tablet**: 481px - 768px (Adjusted spacing and grid)
- **Desktop**: 769px - 1199px (Multi-column layouts)
- **Large Desktop**: ≥ 1200px (Optimized for large screens)

## ✨ CSS Features Implemented

- **CSS Custom Properties (Variables)**: For easy theming and consistency
- **Flexbox**: For navigation, hero, and footer layouts
- **CSS Grid**: For services/portfolio grid
- **Media Queries**: For responsive design across all devices
- **Transitions & Animations**: Smooth hover effects and floating animation
- **Box Model**: Proper spacing with padding, margin, and border-radius
- **Box Shadows**: Depth and elevation for cards and sections
- **Gradient Text**: Eye-catching gradient effects on headings
- **Pseudo-elements**: Animated underlines and decorative elements

## 🌙 Dark Mode

The dark mode toggle:
- Persists user preference in `localStorage`
- Updates `data-theme` attribute on the `<html>` element
- Smoothly transitions all color properties
- Updates icon (🌙 → ☀️) based on current theme

## 🔧 Customization

### Change Colors
Edit the CSS variables in `styles.css`:
```css
:root {
  --color-primary: #6366f1;
  --color-secondary: #ec4899;
  /* ... modify other colors */
}
```

### Change Fonts
Replace the Google Fonts link in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

### Modify Content
Edit `index.html` to change text, add sections, or update information.

## 📝 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is free to use for personal and commercial projects. Attribution is appreciated but not required.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio or business website!

---

**Built with ❤️ using HTML, CSS, and JavaScript**
