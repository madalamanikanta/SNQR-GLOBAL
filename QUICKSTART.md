# Intelligence Platform - Quick Start Guide

Welcome to Intelligence, a premium institutional research platform. This guide will get you up and running in minutes.

## 🚀 5-Minute Start

### 1. Prerequisites
- Node.js 18+ or 20+
- pnpm (or npm/yarn)
- A code editor (VS Code recommended)

### 2. Start Development Server

```bash
cd /vercel/share/v0-project
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Explore the Site

- **Home** - Premium hero section with featured content
- **Solutions** - Enterprise offerings
- **Products** - Product suite overview
- **Research** - Research hub with filtering
- **Books** - Digital library
- **Audio** - Audio library with player
- **About** - Company information
- **Contact** - Contact form

### 4. Test Search

Press `Cmd+K` (or `Ctrl+K` on Windows) to open the global search. Try searching for:
- "AI Revolution"
- "Market Intelligence"
- "Geopolitics"

## 📝 Project Overview

### What You Have

✅ **Complete Multi-Page Site** - 13 full pages with premium design
✅ **Premium Dark Theme** - Luxury institutional color palette
✅ **Smooth Animations** - Framer Motion + GSAP
✅ **Responsive Design** - Works on all devices
✅ **SEO Optimized** - Sitemap, meta tags, structured data
✅ **Global Search** - Real-time search across all content
✅ **Detail Pages** - Books, audio, research articles with full features
✅ **Ready for CMS** - Content architecture designed for external CMS

### Key Files

| File | Purpose |
|------|---------|
| `/app/page.tsx` | Home page |
| `/app/layout.tsx` | Root layout with providers |
| `/app/globals.css` | Theme colors & typography |
| `/components/navbar.tsx` | Navigation with search |
| `/components/hero.tsx` | Animated hero section |
| `package.json` | Dependencies |

## 🎨 Customization

### Change Brand Name

```typescript
// /components/navbar.tsx
// Line 60-67
<Link href="/">
  <span className="text-primary">IN</span>
  <span className="font-bold">Intelligence</span>  {/* Change here */}
</Link>
```

### Change Colors

Edit `/app/globals.css`:

```css
:root {
  --primary: #0099FF;        /* Main blue */
  --secondary: #5D3FD3;      /* Purple */
  --accent: #D4A574;         /* Gold */
  --background: #050505;     /* Black */
}
```

### Change Fonts

Edit `/app/globals.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap');

@theme inline {
  --font-heading: 'Your Font';
  --font-sans: 'Another Font';
}
```

### Add New Page

1. Create folder: `/app/your-page/`
2. Add file: `page.tsx`
3. Update navbar: `/components/navbar.tsx` (line 10-20)

Example:

```typescript
// /app/your-page/page.tsx
export default function YourPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold">Your Page</h1>
      </div>
    </main>
  )
}
```

## 📊 Content Management

### Current Content

All content is mock data in components:

- 6 Research Articles (`featured-research.tsx`)
- 4 Solutions (`solutions-section.tsx`)
- 4 Products (`products-section.tsx`)
- 6 Books (`/books/page.tsx`)
- 6 Audio Items (`/audio/page.tsx`)

### Replace Mock Data

#### Option 1: Edit Components Directly

```typescript
// /components/featured-research.tsx
const articles = [
  {
    id: 'your-id',
    title: 'Your Article',
    author: 'Your Name',
    // ... update fields
  }
]
```

#### Option 2: Connect to CMS (Recommended)

```typescript
// app/research/page.tsx
const articles = await fetch(
  `${process.env.NEXT_PUBLIC_CMS_URL}/api/articles`
)
```

## 🔧 Development Workflow

### Project Structure

```
/app              - Next.js pages and routes
/components       - Reusable React components
/public           - Static assets, sitemap, robots.txt
package.json      - Dependencies and scripts
```

### Common Commands

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint

# Run type check
tsc --noEmit
```

### File Editing

1. Open any file in `/app` or `/components`
2. Make changes
3. Save - page auto-refreshes (HMR)
4. Browser updates instantly

### Hot Module Replacement (HMR)

Changes to components appear instantly in the browser without page reload.

- CSS changes: Instant
- Component changes: Instant with state preservation
- Content changes: Instant

## 🎯 Next Steps

### Step 1: Explore the Code

- Open `/app/page.tsx` - Main home page structure
- Open `/components/hero.tsx` - Hero animation
- Open `/app/globals.css` - Theme colors

### Step 2: Make Your First Change

Try changing the hero headline:

```typescript
// /components/hero.tsx
// Find: <h1>Transforming Research Into Intelligent Decisions</h1>
// Change to your headline
```

Save and see it update instantly!

### Step 3: Add Your Content

Replace mock data in components with real content.

### Step 4: Deploy

When ready to go live:

```bash
# 1. Deploy to Vercel
vercel deploy --prod

# Or push to GitHub for automatic Vercel deployment
```

## 🌐 Deployment Quick Links

### Deploy to Vercel (2 minutes)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Connect GitHub repository
4. Auto-deploys on every push

### Deploy to Other Platforms

- **Netlify**: `netlify deploy --prod`
- **AWS Amplify**: `amplify publish`
- **Docker**: `docker build -t myapp . && docker run -p 3000:3000 myapp`

See `DEPLOYMENT.md` for detailed instructions.

## 📚 Documentation

### Available Docs

- **README.md** - Full project overview
- **ARCHITECTURE.md** - Technical architecture
- **DEPLOYMENT.md** - Deployment guide
- **QUICKSTART.md** - This file

### Learn More

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [shadcn/ui](https://ui.shadcn.com/)

## 🆘 Troubleshooting

### Issue: Build fails

```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm build
```

### Issue: Page not updating

Clear browser cache:
- Windows/Linux: `Ctrl + Shift + Delete`
- Mac: `Cmd + Shift + Delete`

Or hard refresh:
- Windows/Linux: `Ctrl + Shift + R`
- Mac: `Cmd + Shift + R`

### Issue: Search doesn't work

1. Check browser console (F12) for errors
2. Verify `SearchModal` is imported in `navbar.tsx`
3. Test keyboard shortcut: `Cmd+K` or `Ctrl+K`

### Issue: Styling looks broken

```bash
# Rebuild Tailwind
pnpm build

# Clear Next.js cache
rm -rf .next
pnpm dev
```

## 💡 Pro Tips

### Hot Editing

You can edit component files and see changes instantly without losing page state!

### Keyboard Shortcuts

- **Cmd/Ctrl + K** - Open search
- **Escape** - Close modals
- **F12** - Open developer tools

### Responsive Testing

1. Open DevTools (F12)
2. Click Device Toolbar icon
3. Test different screen sizes

### Performance Testing

```bash
# Build and test production
pnpm build
pnpm start

# Open Lighthouse in Chrome DevTools
# Check performance metrics
```

## 🎓 Learning Path

### Beginner

1. Explore the home page (`/app/page.tsx`)
2. Edit some text and colors
3. Try adding a new page
4. Deploy to Vercel

### Intermediate

1. Connect a CMS to replace mock data
2. Add new components
3. Customize animations
4. Set up analytics

### Advanced

1. Implement authentication
2. Add database integration
3. Create API routes
4. Set up admin panel

## 🚀 Ready to Launch?

```bash
# 1. Build for production
pnpm build

# 2. Test production build locally
pnpm start

# 3. Deploy
vercel deploy --prod
```

## 📞 Support

### Getting Help

1. Check documentation in `/docs` folder
2. Review code comments in components
3. Check browser console (F12) for errors
4. Verify environment variables are set

### Common Issues Solved

- Components not rendering? - Check imports
- Styling broken? - Run `pnpm build`
- Page not loading? - Check route exists in `/app`
- Search not working? - Clear browser cache

## ✨ What's Included

### Pages (13 total)

- ✅ Home
- ✅ Solutions
- ✅ Products
- ✅ Research Hub
- ✅ Research Articles
- ✅ Publications
- ✅ Books Library
- ✅ Book Details
- ✅ Audio Library
- ✅ Audio Player
- ✅ Insights
- ✅ About
- ✅ Contact

### Components (15+ total)

- ✅ Premium Navbar
- ✅ Animated Hero
- ✅ Research Cards
- ✅ Product Cards
- ✅ Global Search
- ✅ Smooth Scroll
- ✅ Animations
- ✅ Footer
- ✅ + More

### Features

- ✅ Dark Mode (Always On)
- ✅ Responsive Design
- ✅ SEO Optimized
- ✅ CMS-Ready
- ✅ Smooth Animations
- ✅ Global Search
- ✅ Detail Pages
- ✅ Production Ready

## 🎉 You're All Set!

Your Intelligence platform is ready to customize and deploy. Start by:

1. Running `pnpm dev`
2. Opening http://localhost:3000
3. Making your first change
4. Deploying to the world

Happy building! 🚀

---

**Questions?** Check the documentation files or review the code comments.

**Ready to deploy?** See `DEPLOYMENT.md` for step-by-step instructions.
