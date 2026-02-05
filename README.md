# Landon Cuny - Portfolio Website

A modern, high-converting portfolio website built with Next.js, TypeScript, and Tailwind CSS. Designed to showcase marketing expertise, content creation achievements, and professional experience.

## Features

- **Modern Design**: Clean, bold typography with lots of whitespace
- **Dark Mode**: System-aware with manual toggle
- **Responsive**: Mobile-first design that looks great on all devices
- **Animations**: Subtle Framer Motion animations for polish
- **SEO Optimized**: Metadata, Open Graph images, sitemap, robots.txt
- **Accessible**: Semantic HTML, keyboard navigation, focus states
- **Fast**: Optimized for performance with good Lighthouse scores

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Deployment**: Vercel-ready

## Project Structure

```
├── public/
│   ├── resume.pdf          # Your resume (add your own)
│   └── site.webmanifest    # PWA manifest
├── src/
│   ├── app/                # Next.js app router pages
│   │   ├── about/          # About page
│   │   ├── contact/        # Contact page
│   │   ├── content/        # Content & Growth page
│   │   ├── experience/     # Experience page
│   │   ├── og/             # OG image generator
│   │   ├── resume/         # Resume page
│   │   ├── work/           # Work/Case Studies pages
│   │   │   └── [slug]/     # Individual case study pages
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   ├── not-found.tsx   # 404 page
│   │   ├── page.tsx        # Home page
│   │   ├── robots.ts       # Robots.txt generation
│   │   └── sitemap.ts      # Sitemap generation
│   ├── components/         # React components
│   │   ├── ui/             # Reusable UI components
│   │   ├── contact-form.tsx
│   │   ├── footer.tsx
│   │   ├── motion.tsx      # Animation wrappers
│   │   ├── navigation.tsx
│   │   └── theme-provider.tsx
│   ├── content/            # Content files (edit these!)
│   │   └── site-content.ts # All site content in one place
│   └── lib/
│       └── utils.ts        # Utility functions
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## How to Edit Content

### All content is centralized in `src/content/site-content.ts`

This file contains:
- Personal information (name, email, phone, social links)
- Hero section copy
- Proof bar metrics
- Education details
- Skills (categorized)
- Work experience
- Organizations
- Creator stats
- Case studies
- "What I'm focused on" section

Simply edit this file to update your content. No need to modify any component files.

### Example: Updating the hero headline

```typescript
// src/content/site-content.ts
export const heroContent = {
  headline: "Your new headline here.",
  subheadline: "Your subheadline here.",
};
```

### Adding a new case study

Add to the `caseStudies` array in `site-content.ts`:

```typescript
{
  id: "unique-slug",
  title: "Case Study Title",
  category: "Category Name",
  summary: "Brief summary...",
  context: "Full context...",
  goal: "What you aimed to achieve...",
  strategy: ["Strategy point 1", "Strategy point 2"],
  execution: ["Execution step 1", "Execution step 2"],
  tools: ["Tool 1", "Tool 2"],
  learned: "Key takeaways...",
}
```

### Adding your photos

The site has multiple photo placeholder slots. Add your images to `public/images/`:

| Image Path | Location on Site |
|------------|-----------------|
| `public/images/hero-photo.jpg` | Hero section (main headshot) |
| `public/images/about-1.jpg` | About section (left photo) |
| `public/images/about-2.jpg` | About section (right photo) |
| `public/images/gallery-1.jpg` | Gallery - Main large photo |
| `public/images/gallery-2.jpg` | Gallery - Small photo 2 |
| `public/images/gallery-3.jpg` | Gallery - Small photo 3 |
| `public/images/gallery-4.jpg` | Gallery - Small photo 4 |
| `public/images/gallery-5.jpg` | Gallery - Small photo 5 |

**Recommended image sizes:**
- Hero photo: 800x800px (square)
- About photos: 600x800px (portrait)
- Gallery main: 800x800px (square)
- Gallery small: 400x400px (square)

Use JPG or PNG format. The placeholders will automatically show "Add Photo" labels until you add the images.

### Adding your resume

1. Place your resume PDF at `public/resume.pdf`
2. The resume page will automatically display and link to it

### Updating social links

Edit the `siteConfig.social` object in `site-content.ts`:

```typescript
social: {
  linkedin: "https://linkedin.com/in/your-profile",
  instagram: "https://instagram.com/your-handle",
  tiktok: "https://tiktok.com/@your-handle",
  youtube: "https://youtube.com/@your-channel",
},
```

## Customization

### Colors

The site uses Tailwind's neutral color palette. To change the accent color, update the relevant classes in components or add custom colors in `tailwind.config.ts`.

### Fonts

The site uses Inter font. To change it, update the import in `src/app/layout.tsx`.

### Dark mode

Dark mode is handled by the `ThemeProvider` component. It respects system preferences and allows manual toggle.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy

### Environment Variables

No environment variables are required for basic functionality.

For form submissions, you can optionally set up:
- Formspree: Update the form action in `contact-form.tsx`
- Resend: Add API integration for email sending

### Custom Domain

After deploying to Vercel:
1. Go to your project settings
2. Add your custom domain
3. Update the `metadataBase` in `src/app/layout.tsx`

## Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint
npm run lint
```

## Performance Tips

- Optimize images before adding to public folder
- Keep case study content focused and concise
- Test on mobile devices regularly

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for personal use. Feel free to use it as inspiration for your own portfolio.

---

Built with Next.js by Landon Cuny
