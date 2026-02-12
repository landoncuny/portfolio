# Landon Cuny Portfolio Site

A modern, responsive portfolio website showcasing marketing, content creation, and social media work.

## Quick Start

### Option 1: Python (Recommended)
```bash
cd site
python3 -m http.server 8000
```
Then open http://localhost:8000 in your browser.

### Option 2: Node.js
```bash
npx serve site
```

### Option 3: PHP
```bash
cd site
php -S localhost:8000
```

### Option 4: VS Code Live Server
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

---

## Project Structure

```
site/
├── index.html              # Homepage
├── pages/
│   ├── whit-education.html # WHIT Education page
│   ├── content-creation.html # Content Creation page
│   ├── brand-partnerships.html # Brand Partnerships page
│   └── campus.html         # Campus Activities page
├── assets/
│   ├── images/             # All downloaded images
│   └── resume.pdf          # Downloadable resume
├── styles/
│   └── main.css            # Global stylesheet (design system)
├── scripts/
│   └── main.js             # Scroll animations & interactions
├── migration_map.json      # Content migration mapping
├── assets_report.md        # Asset inventory
├── notes.md                # Migration notes
└── README.md               # This file
```

---

## Design System

### Colors
- Primary Background: `#FAF8F5`
- Secondary Background: `#F5F0EB`
- Dark Background: `#1C1917`
- Accent (Red): `#E11D48`
- Accent Soft: `#FDA4AF`

### Typography
- Display Font: Instrument Serif
- Body Font: Satoshi

### Components
- Navigation (fixed, glassmorphism)
- Hero Section (split layout)
- Bento Grid (asymmetric cards)
- Feature Cards
- Stat Cards
- Gallery Grid
- Process Steps
- Certification Cards
- Contact Section (dark theme)

---

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## Features

- Responsive design (mobile, tablet, desktop)
- Scroll-triggered animations
- Smooth scroll navigation
- Parallax effects on hero image
- Hover micro-interactions
- SEO-optimized meta tags
- Semantic HTML5

---

## Performance Notes

- Images are served in original quality
- Fonts are loaded from Google Fonts CDN
- No JavaScript frameworks - vanilla JS only
- CSS animations use GPU-accelerated properties

---

## Customization

### Changing Colors
Edit CSS variables in `styles/main.css`:
```css
:root {
  --accent: #E11D48; /* Change this for different accent color */
}
```

### Adding New Pages
1. Create a new HTML file in `pages/`
2. Copy the structure from an existing page
3. Update navigation links in all pages
4. Update `migration_map.json`

---

## Contact

- Email: lmcuny30@gmail.com
- LinkedIn: https://linkedin.com/in/landon-cuny
