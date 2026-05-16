# Cybersecurity Portfolio

A modern, dark-themed portfolio website built with React and Vite, optimized for showcasing cybersecurity projects and skills.

## ✨ Features

- **🎨 Modern Design** - Dark theme with cinematic animations
- **📱 Fully Responsive** - Perfect on mobile, tablet, and desktop
- **⚡ High Performance** - Built with Vite for fast loading
- **🔍 SEO Optimized** - Meta tags and Open Graph support
- **♿ Accessible** - WCAG compliant with screen reader support
- **📧 Contact Form** - Zero-setup email integration with FormSubmit
- **🎭 Interactive Animations** - Smooth scroll reveals and transitions
- **🌐 Globe Component** - 3D visual elements
- **📊 Skills Visualization** - Proficiency bars and skill categories
- **🚀 Fast Build Time** - Optimized with Vite and React

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Navigate to project directory
cd testportfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

## 📋 Setup Instructions

### 1. Update Your Information

Edit `src/data/portfolio.json` with:
- Personal information (name, email, location)
- Education and certifications
- Skills with proficiency levels
- Project details and links
- Timeline of achievements
- Social media profiles

### 2. Configure Contact Form

The portfolio uses **FormSubmit** for email handling (free, no backend required).

1. Visit https://formsubmit.co
2. Add your email address
3. Confirm the verification email
4. Update the email in `src/sections/Contact/Contact.jsx`

### 3. Add Your Links

Replace placeholder URLs in `portfolio.json`:
- GitHub profile
- LinkedIn profile
- Twitter/X profile
- CV download link
- Project repositories and demo URLs

### 4. Customize Styling

Edit `src/index.css` to customize colors:
- `--accent`: Primary accent color
- `--bg`: Background colors
- `--text`: Text colors

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── CustomCursor/   # Custom mouse cursor
│   ├── GlobeCanvas/    # 3D globe component
│   ├── Navbar/         # Navigation bar
│   └── ScrollReveal/   # Scroll animation hook
├── sections/           # Page sections
│   ├── About/          # About me section
│   ├── Contact/        # Contact form
│   ├── Footer/         # Footer with links
│   ├── Hero/           # Hero section
│   ├── Marquee/        # Scrolling text marquee
│   ├── Projects/       # Projects showcase
│   ├── Skills/         # Skills visualization
│   └── Timeline/       # Education timeline
├── data/
│   └── portfolio.json  # All portfolio content
├── App.jsx            # Main app component
├── index.css          # Global styles
└── main.jsx           # Entry point
```

## 🎯 Main Sections

### Hero
- Eye-catching introduction with 3D globe
- Call-to-action buttons
- Key statistics

### About
- Personal bio
- Education details
- Areas of interest

### Skills
- Categorized technical skills
- Proficiency levels
- Visual progress bars

### Projects
- Featured projects with descriptions
- Project tags (technologies)
- GitHub and live demo links

### Timeline
- Education history
- Certifications
- Achievements

### Contact
- Contact form with email integration
- Social media links
- Direct email option

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
- Drag & drop the `dist` folder or connect your Git repository

### Traditional Hosting
```bash
npm run build
# Upload the `dist` folder to your web host
```

## 🔧 Available Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm lint         # Run ESLint
```

## ♿ Accessibility Features

- ✅ Semantic HTML
- ✅ ARIA labels and roles
- ✅ Keyboard navigation
- ✅ Screen reader optimized
- ✅ Focus indicators
- ✅ Color contrast compliance

## 📊 Performance

- Lighthouse Performance: 90+
- Lighthouse Accessibility: 95+
- Lighthouse SEO: 100
- Bundle Size: ~150KB gzipped

## 📚 Additional Documentation

- **SETUP_GUIDE.md** - Comprehensive setup and configuration guide
- **package.json** - Project dependencies and scripts
- **.env.example** - Environment variable template

## 🔒 Security

- Never commit sensitive information
- Don't expose API keys in frontend
- Use HTTPS for your domain
- Validate form inputs on backend

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [FormSubmit Help](https://formsubmit.co)
- [WCAG Accessibility](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Built with ❤️ for cybersecurity professionals**
