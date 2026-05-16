# Portfolio Setup & Configuration Guide

## Quick Start

### 1. Update Your Information

Edit `src/data/portfolio.json` with your personal information:
- Name, initials, and headline
- University and location
- Bio and contact information
- Skills, projects, and timeline

### 2. Setup Contact Form

The portfolio uses **FormSubmit** for email handling (completely free, no backend needed).

#### Option A: FormSubmit (Recommended)
1. Visit https://formsubmit.co
2. Add your email address
3. The first submission from your site will trigger a confirmation email
4. Confirm it, and you're done!
5. Update the email in `Contact.jsx` (line with `formsubmit.co/ajax/...`)

#### Option B: Custom Backend
Replace the FormSubmit implementation in `src/sections/Contact/Contact.jsx` with your own API endpoint.

#### Option C: Netlify Forms
If deploying to Netlify:
1. Add `netlify` attribute to the form: `<form name="contact" netlify>`
2. Netlify will automatically handle form submissions
3. Set up notifications in your Netlify dashboard

### 3. Add Real Links

Update the following in `src/data/portfolio.json`:
- **GitHub**: Replace with your actual GitHub profile URL
- **LinkedIn**: Add your LinkedIn profile URL
- **Twitter**: Add your Twitter profile URL
- **CV**: Add a link to your CV (Google Drive, Dropbox, etc.)
- **Project Links**: Update all project GitHub and live demo URLs

### 4. Deploy

```bash
# Install dependencies
npm install

# Build for production
npm run build

# The `dist` folder is ready to deploy
```

#### Deployment Options:
- **Vercel**: `npm install -g vercel` → `vercel`
- **Netlify**: Drag & drop `dist` folder or connect to Git
- **GitHub Pages**: Update `vite.config.js` with `base: '/repo-name/'`
- **Traditional Hosting**: Upload `dist` folder to your web host

### 5. Custom Domain

If using a custom domain:
- Update the meta tags in `index.html` with your actual domain
- Update `og:url` and social media links

## Configuration Files

### `src/data/portfolio.json`
Main data file containing all portfolio content:
- Identity and contact information
- Skills with proficiency levels
- Projects with descriptions and links
- Timeline of education and achievements
- Social media links

### `index.html`
SEO meta tags and document head:
- Update page title
- Update meta descriptions
- Update Open Graph tags for social sharing
- Ensure `theme-color` matches your brand

### `.env.example`
Environment variable template for different deployment scenarios.

## CSS Customization

The design uses CSS variables in `src/index.css`:
- `--accent`: Primary accent color (OrangeRed)
- `--bg`, `--bg-2`, `--bg-3`: Background colors
- `--text`, `--text-soft`, `--text-muted`: Text colors
- `--font-display`, `--font-body`, `--font-mono`: Typography

Modify these to match your personal brand.

## Features

✅ **Fully Responsive** - Mobile, tablet, and desktop optimized
✅ **Dark Theme** - Modern, eye-friendly design
✅ **Accessibility** - WCAG compliant
✅ **SEO Optimized** - Meta tags, structured data ready
✅ **Fast** - Built with Vite for optimal performance
✅ **Interactive** - Smooth animations and scroll effects
✅ **Contact Form** - Zero-setup email integration

## Troubleshooting

### Form not working?
- Ensure your email is confirmed on FormSubmit
- Check browser console for errors
- Verify email address in Contact.jsx is correct

### Styles not loading?
- Clear browser cache (`Ctrl+Shift+Delete`)
- Rebuild with `npm run build`
- Check CSS file paths in component imports

### Links not working?
- Ensure URLs in `portfolio.json` are complete (start with https://)
- Check that normalizeUrl() is working correctly
- Verify links in the browser's network tab

## Performance Optimization

- Images should be optimized (use tools like TinyPNG)
- Consider code-splitting for large projects
- Use CDN for static assets when deployed
- Monitor Core Web Vitals in Google Search Console

## Security Notes

- Never commit sensitive information to git
- Don't expose API keys in frontend code
- Validate all form inputs on backend
- Use HTTPS for your domain
- Consider rate-limiting on contact form

## Support & Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [FormSubmit Documentation](https://formsubmit.co)
- [Web.dev](https://web.dev) - Web performance & best practices
