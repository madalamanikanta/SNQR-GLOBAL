# Intelligence Platform - Architecture Guide

## System Architecture Overview

This document outlines the technical architecture, design patterns, and data flow of the Intelligence institutional research platform.

## 1. Technology Stack

### Core Framework
- **Next.js 16** - React meta-framework with App Router
- **TypeScript** - Type-safe development
- **React 19** - Latest React with compiler support ready

### Styling & UI
- **Tailwind CSS v4** - Utility-first CSS with custom theme
- **Framer Motion** - React animation library
- **GSAP** - Advanced animation library
- **Lucide React** - Icon library (20+ icons)
- **shadcn/ui** - Pre-built component library

### Performance & UX
- **Lenis** - Smooth scrolling library (60fps)
- **Next.js Image** - Automatic image optimization
- **Code Splitting** - Automatic with Next.js

## 2. Project Structure & Routing

### App Directory Structure

```
/app
├── layout.tsx                 # Root layout (RSC)
├── page.tsx                   # Home page
├── globals.css                # Global styles + theme
│
├── /solutions                 # Solutions route group
│   └── page.tsx              # Solutions page
│
├── /products                  # Products route group
│   └── page.tsx              # Products page
│
├── /research                  # Research hub
│   ├── page.tsx              # Research listing
│   └── /[id]
│       └── page.tsx          # Article detail template
│
├── /publications              # Publications
│   └── page.tsx
│
├── /books                     # Books library
│   ├── page.tsx              # Book grid
│   └── /[id]
│       └── page.tsx          # Book detail
│
├── /audio                     # Audio library
│   ├── page.tsx              # Audio grid
│   └── /[id]
│       └── page.tsx          # Audio player detail
│
├── /insights                  # Market insights
│   └── page.tsx
│
├── /about                     # About page
│   └── page.tsx
│
└── /contact                   # Contact page
    └── page.tsx
```

### Component Structure

```
/components
├── navbar.tsx                # Client - sticky nav with search
├── footer.tsx                # Client - multi-column footer
├── hero.tsx                  # Client - animated hero
├── trusted-by.tsx            # Client - client logos
├── featured-research.tsx     # Client - research cards
├── solutions-section.tsx     # Client - solutions grid
├── products-section.tsx      # Client - products grid
├── search-modal.tsx          # Client - global search
├── lenis-scroll.tsx          # Client - smooth scroll provider
├── theme-provider.tsx        # Client - dark mode provider
├── button-enhanced.tsx       # Client - animated buttons
├── card-enhanced.tsx         # Client - hover cards
└── /ui                       # shadcn/ui components
    └── button.tsx            # Base button
```

## 3. Data Flow Architecture

### Page Rendering Flow

```
User Request
    ↓
Next.js Router (App Router)
    ↓
Layout.tsx (Root RSC)
    ├─ ThemeProvider (Client)
    ├─ Navbar (Client)
    ├─ LenisScroll (Client)
    ├─ Main Content (RSC or Client)
    └─ Footer (Client)
    ↓
Output HTML
```

### Client vs Server Components

**Server Components (RSC):**
- `app/layout.tsx` - Root layout
- Individual page files - Content pages
- Benefits: Direct database access, secrets, larger libraries

**Client Components:**
- All animation components (Framer Motion, GSAP)
- Interactive components (buttons, search, modals)
- State management components (providers)
- Benefits: Interactivity, hooks, event listeners

## 4. Component Architecture

### Design Patterns Used

#### 1. Provider Pattern
```typescript
// theme-provider.tsx - Wraps app with theme
export function ThemeProvider({ children }) {
  return <>{children}</>
}

// In layout.tsx
<ThemeProvider>
  <Navbar />
  <Main>{children}</Main>
  <Footer />
</ThemeProvider>
```

#### 2. Container Pattern
```typescript
// featured-research.tsx
export function FeaturedResearch() {
  const articles = [/* mock data */]
  
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Content */}
      </div>
    </section>
  )
}
```

#### 3. Card Pattern
```typescript
// CardEnhanced - Reusable card with hover
export function CardEnhanced({ children }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="bg-card border border-border rounded-lg p-6"
    >
      {children}
    </motion.div>
  )
}
```

#### 4. Detail Page Pattern
```typescript
// /research/[id]/page.tsx
export default function ArticleDetail({ params }) {
  const article = articles[params.id]
  
  return (
    <article>
      <Hero cover={article.cover} />
      <Content>{article.content}</Content>
      <RelatedArticles />
    </article>
  )
}
```

## 5. Styling Architecture

### Tailwind CSS Theme Structure

Located in `/app/globals.css`:

```css
:root {
  /* Colors */
  --background: #050505
  --foreground: #FFFFFF
  --primary: #0099FF
  --card: #111111
  --border: #242424
  
  /* Spacing (inherited from Tailwind) */
  --radius: 0.625rem
}
```

### CSS Utility Patterns

```typescript
// Large spacing for luxury feel
className="py-24 px-6 md:px-12 lg:px-24"

// Premium typography
className="text-4xl md:text-5xl font-bold"

// Hover effects
className="hover:bg-muted transition-colors"

// Glass effect
className="bg-background/80 backdrop-blur-xl"
```

## 6. Animation Architecture

### Framer Motion Patterns

```typescript
// Page entry animation
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
>
  Content
</motion.div>

// Hover lift effect
<motion.div whileHover={{ y: -4 }}>
  Card content
</motion.div>

// Staggered children
<motion.div>
  {items.map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: i * 0.1 }}
    >
      {item}
    </motion.div>
  ))}
</motion.div>
```

### Smooth Scroll (Lenis)

```typescript
// lenis-scroll.tsx
'use client'
import Lenis from 'lenis'
import { useEffect } from 'react'

export function LenisScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis()
    
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])
  
  return children
}
```

## 7. Content Data Models

### Research Article Model

```typescript
interface Article {
  id: string
  title: string
  subtitle?: string
  category: 'Markets' | 'Economics' | 'Geopolitics' | 'AI' | 'Blockchain'
  author: string
  authorBio?: string
  date: string
  coverImage: string
  content: string
  readingTime: number
  tags: string[]
  tableOfContents?: Array<{ level: number; title: string; id: string }>
  relatedArticles?: Article[]
}
```

### Book Model

```typescript
interface Book {
  id: string
  title: string
  author: string
  category: string
  year: number
  description: string
  fullDescription?: string
  pages: number
  isbn: string
  coverImage: string
  tags: string[]
  downloadUrl?: string
  readOnlineUrl?: string
  relatedBooks?: Book[]
}
```

### Audio Model

```typescript
interface AudioItem {
  id: string
  title: string
  narrator: string
  category: string
  duration: string
  durationSeconds: number
  description: string
  audioUrl?: string
  transcript?: string
  downloadUrl?: string
  coverImage?: string
  tags: string[]
  relatedAudio?: AudioItem[]
}
```

## 8. Search Architecture

### Global Search Implementation

```typescript
// search-modal.tsx
- Search across: articles, books, audio, pages, authors
- Autocomplete: Real-time filtering
- Keyboard shortcuts: Cmd+K to open, ESC to close
- Results: Show category badges, author info, reading time
- Mock data: 6 items per category
```

### Future CMS Integration Points

```typescript
// Replace mock data with API calls
const searchResults = await fetch('/api/search?q=' + query)
const articles = await fetch('/api/articles')
const books = await fetch('/api/books')
```

## 9. SEO Architecture

### Metadata Strategy

```typescript
// Dynamic metadata on each page
export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description',
  keywords: ['keyword1', 'keyword2'],
  openGraph: {
    title: 'OG Title',
    description: 'OG Description',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
}
```

### Sitemap & Robots

```
/public/sitemap.xml  - 10 primary routes
/public/robots.txt   - Crawl rules + sitemap URL
```

## 10. Performance Optimization

### Image Optimization
- Use Next.js `<Image>` component
- Automatic WebP conversion
- Lazy loading by default
- Responsive images with srcSet

### Code Splitting
- Automatic per route
- Dynamic imports for heavy components
- Framer Motion components loaded on demand

### Caching Strategy
- Static pages prerendered
- Dynamic routes cached with revalidation
- Images cached indefinitely

## 11. Responsive Design Strategy

### Breakpoints (Tailwind)
```
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

### Mobile-First Approach
```typescript
// Start with mobile styles
className="px-4 py-6"

// Add medium screen styles
className="md:px-8 md:py-12"

// Add large screen styles
className="lg:px-12 lg:py-24"
```

## 12. Component Composition Pattern

### Example: Featured Research Section

```
FeaturedResearch (Container)
├─ Section Header
│  ├─ "Research & Insights" subtitle
│  ├─ "Featured Research" title
│  ├─ "View All →" link
│  └─ Description text
└─ Articles Grid (4 columns)
   ├─ ResearchCard (motion animated)
   │  ├─ Category badge
   │  ├─ Title
   │  ├─ Tags
   │  ├─ Author + time
   │  ├─ Date
   │  └─ "Read Article" button
   ├─ ResearchCard
   ├─ ResearchCard
   └─ ResearchCard
```

## 13. Future CMS Integration Guide

### Step 1: Replace Mock Data
```typescript
// Before: components/featured-research.tsx
const articles = [/* mock data */]

// After: Use server component to fetch
const articles = await fetch(`${CMS_URL}/api/articles`)
```

### Step 2: Connect to CMS API
```typescript
// Environment variables
NEXT_PUBLIC_CMS_URL=https://your-cms.com
CMS_API_KEY=xxx
```

### Step 3: Update Data Models
```typescript
// Match CMS response structure
interface CMSArticle {
  _id: string
  title: string
  // ... map CMS fields to local types
}
```

## 14. Security Considerations

- No sensitive data in client code
- Environment variables for API keys
- CORS headers configured if needed
- CSRF protection ready for forms
- Input sanitization on all forms

## 15. Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS 14+, Android Chrome)

## 16. Deployment Architecture

### Vercel Deployment
```
GitHub → Push
    ↓
Vercel → Build (Next.js)
    ↓
Edge Network → Cache & Serve
    ↓
Client ← Optimized Assets
```

### Build Configuration
- Turbopack enabled (default in Next.js 16)
- Automatic image optimization
- Function bundling & streaming
- Edge middleware support

## 17. Development Workflow

### Local Development
```bash
pnpm dev          # Start dev server with HMR
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run linter
```

### File Watching
- Hot Module Replacement (HMR) enabled
- CSS changes instant
- Component changes with preserving state

## 18. Monitoring & Analytics Ready

### Integration Points
- Google Analytics (via gtag)
- Vercel Analytics (automatic)
- Sentry for error tracking (ready)
- Custom event tracking (ready)

## 19. Accessibility (a11y)

### Implemented Standards
- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast ratios (WCAG AA)
- Responsive text sizing
- Screen reader friendly

## 20. Progressive Enhancement

### Works Without JavaScript
- Core content accessible
- Navigation functional
- Fallbacks for animations
- Form submission with JavaScript disabled

---

## Quick Reference: Key Files

| File | Purpose | Type |
|------|---------|------|
| `/app/layout.tsx` | Root layout with providers | RSC |
| `/app/globals.css` | Theme colors & typography | CSS |
| `/components/navbar.tsx` | Main navigation | Client |
| `/components/hero.tsx` | Hero section | Client |
| `/components/search-modal.tsx` | Global search | Client |
| `public/sitemap.xml` | SEO sitemap | XML |
| `public/robots.txt` | Search engines | TXT |

---

**Architecture designed for scalability, maintainability, and premium user experience.**
