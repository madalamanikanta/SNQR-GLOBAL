# Intelligence Platform - Deployment Guide

## Deployment Options

### 1. Vercel (Recommended)

Vercel is the optimal platform for Next.js applications, offering seamless integration and automatic optimizations.

#### Quick Start

```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Deploy
vercel deploy

# 3. Set production domain
vercel domains add your-domain.com
```

#### GitHub Integration (Recommended)

```bash
# 1. Push code to GitHub
git push origin main

# 2. Connect to Vercel at vercel.com
# - Select repository
# - Automatic deployments on push
# - Preview deployments for PRs

# 3. Deploy with auto-configuration
# Vercel detects Next.js and configures automatically
```

#### Environment Variables

```bash
# Set in Vercel Dashboard or via CLI
vercel env add NEXT_PUBLIC_CMS_URL
vercel env add CMS_API_KEY
```

#### Features

- ✅ Automatic image optimization
- ✅ Edge functions support
- ✅ Automatic SSL/TLS
- ✅ Global CDN
- ✅ Serverless functions
- ✅ Analytics included
- ✅ One-click rollbacks

### 2. Self-Hosted (Docker)

For full control and custom infrastructure.

#### Docker Setup

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package*.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Copy source
COPY . .

# Build
RUN pnpm build

# Production
EXPOSE 3000
CMD ["pnpm", "start"]
```

Create `docker-compose.yml`:

```yaml
version: '3.9'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      NODE_ENV: production
      NEXT_PUBLIC_CMS_URL: ${NEXT_PUBLIC_CMS_URL}
    restart: always
```

#### Deployment Commands

```bash
# Build image
docker build -t intelligence-platform .

# Run container
docker run -p 3000:3000 intelligence-platform

# Or with compose
docker-compose up -d
```

### 3. AWS Deployment

#### Using Amplify (Easiest)

```bash
# 1. Install Amplify CLI
npm install -g @aws-amplify/cli

# 2. Initialize
amplify init

# 3. Add hosting
amplify add hosting

# 4. Publish
amplify publish
```

#### Using EC2 (More Control)

```bash
# 1. SSH into EC2 instance
ssh -i your-key.pem ec2-user@your-instance

# 2. Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# 3. Clone repository
git clone your-repo-url
cd intelligence-platform

# 4. Install & build
pnpm install
pnpm build

# 5. Start with PM2
npm install -g pm2
pm2 start "pnpm start" --name "intelligence"
pm2 startup
pm2 save
```

### 4. Netlify Deployment

```bash
# 1. Connect GitHub repository at netlify.com
# 2. Set build command: pnpm build
# 3. Set publish directory: .next

# Or use Netlify CLI
netlify deploy --prod
```

## Production Checklist

### Before Deployment

- [ ] Build test locally: `pnpm build && pnpm start`
- [ ] Run linter: `pnpm lint`
- [ ] Check TypeScript: `tsc --noEmit`
- [ ] Update environment variables
- [ ] Configure custom domain
- [ ] Set up SSL/TLS certificate
- [ ] Test all pages in production mode
- [ ] Verify sitemap.xml is accessible
- [ ] Test search functionality
- [ ] Check mobile responsiveness

### Environment Variables

```bash
# .env.production
NEXT_PUBLIC_CMS_URL=https://your-cms-url.com
CMS_API_KEY=your-api-key
NEXT_PUBLIC_SITE_URL=https://intelligence.example.com
```

### Performance Checklist

- [ ] Run Lighthouse audit
- [ ] Test Core Web Vitals
- [ ] Verify image optimization
- [ ] Check bundle size
- [ ] Test with slow network (3G)
- [ ] Verify caching headers

### Security Checklist

- [ ] Enable HTTPS/SSL
- [ ] Set security headers
- [ ] Configure CORS if needed
- [ ] Enable rate limiting
- [ ] Review environment variables
- [ ] Check for exposed secrets
- [ ] Configure CSP headers

## Post-Deployment

### Monitoring

#### Vercel Analytics

```typescript
// Automatically included
// Dashboard: vercel.com/analytics
```

#### Custom Monitoring

```typescript
// pages/api/health.ts
export default function handler(req, res) {
  res.status(200).json({ status: 'ok' })
}

// Monitor this endpoint
```

### Domain Configuration

#### DNS Records (Example with Route53)

```
Type  | Name           | Value
------|----------------|-------------------
A     | intelligence   | 76.76.19.21 (Vercel IP)
CNAME | www            | cname.vercel-dns.com
TXT   | _verification  | vercel-verification
```

### SSL/TLS Certificate

- Vercel: Automatic with Let's Encrypt
- AWS: AWS Certificate Manager
- Self-hosted: Let's Encrypt with Certbot

## Scaling Considerations

### Increase Traffic Handling

```typescript
// 1. Vercel Auto-scaling
// - Automatically scales serverless functions
// - No configuration needed

// 2. Database connection pooling
// - For when connecting to CMS/database
// - Use connection pool like PgBouncer

// 3. CDN optimization
// - Cache static assets aggressively
// - Use edge locations
```

### Caching Strategy

```typescript
// next.config.js
module.exports = {
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
    ]
  },
}
```

## Troubleshooting

### Issue: Build fails

```bash
# Clear cache and rebuild
rm -rf .next
pnpm build

# Check Node version
node --version  # Should be 18.x or 20.x
```

### Issue: Slow performance

```bash
# Analyze bundle
ANALYZE=true pnpm build

# Check images
# - All images should be under 100KB
# - Use Next.js Image component

# Reduce dependencies
npm audit
```

### Issue: Search not working

```bash
# Verify search-modal component loads
# Check browser console for errors
# Ensure SearchModal is imported in navbar
```

### Issue: Styling issues

```bash
# Rebuild Tailwind
pnpm build

# Clear browser cache
# Hard refresh: Ctrl+Shift+R or Cmd+Shift+R
```

## Rollback Procedure

### Vercel Rollback

```bash
# Via Vercel Dashboard
# 1. Go to Deployments
# 2. Find previous deployment
# 3. Click "Promote to Production"

# Via CLI
vercel promote <deployment-url>
```

### Docker Rollback

```bash
# Keep tagged versions
docker tag intelligence:latest intelligence:v1.0.0
docker tag intelligence:latest intelligence:previous

# Rollback
docker run intelligence:previous
```

## Analytics & Monitoring

### Google Analytics Setup

```typescript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### Sentry Error Tracking

```typescript
// app/layout.tsx
import * as Sentry from "@sentry/nextjs"

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
})
```

### Custom Metrics

```typescript
// lib/metrics.ts
export function logPageView(page: string) {
  gtag.pageview({
    page_path: page,
    page_title: document.title,
  })
}
```

## Content Delivery Network (CDN)

### Vercel Edge Network

Automatically included with Vercel:
- 300+ locations
- Automatic caching
- Instant cache invalidation

### CloudFlare Integration (Optional)

```
Domain DNS → CloudFlare → Vercel
```

## Database Optimization

### Connection Pooling

```typescript
// If using external database
// Use Prisma Client with connection pooling
// Or use dedicated connection pool service

// Example with Prisma
const prisma = new PrismaClient()
```

### Query Caching

```typescript
// Cache frequently accessed data
const articles = await fetch(
  `${process.env.CMS_URL}/articles`,
  {
    next: { revalidate: 3600 } // Cache for 1 hour
  }
)
```

## Backup & Recovery

### Database Backups

```bash
# If using external database
# - Enable automated backups
# - Test recovery procedures
# - Keep 30-day retention
```

### Code Backups

```bash
# Git handles code backup automatically
# - Push to GitHub
# - Enable GitHub backup (Settings > Data)
```

## Cost Optimization

### Vercel Pricing

- Hobby: Free tier (great for testing)
- Pro: $20/month (recommended)
- Enterprise: Custom pricing

### Reduce Costs

- [ ] Use edge functions instead of serverless
- [ ] Optimize images (use WebP)
- [ ] Enable caching headers
- [ ] Monitor function execution time

## Security Hardening

### Headers Configuration

```typescript
// next.config.mjs
export default {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          }
        ]
      }
    ]
  }
}
```

### Environment Secrets

```bash
# Vercel Dashboard
# Settings > Environment Variables
# - Mark sensitive vars as "Sensitive"
# - Don't commit to git
# - Use .env.local for local development
```

---

## Quick Deployment Checklist

```
□ Code committed to git
□ Environment variables configured
□ Build test passing locally
□ Lighthouse audit >90
□ Mobile responsive verified
□ All links tested
□ SEO metadata verified
□ SSL certificate ready
□ Domain configured
□ Monitoring set up
□ Backup strategy in place
□ Rollback plan documented
```

## Support & Resources

- Vercel Docs: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/learn/foundations/how-nextjs-works/deployment
- Docker Documentation: https://docs.docker.com
- AWS Deployment Guide: https://aws.amazon.com/containers

---

**Deployment complete! Your Intelligence platform is now live and serving institutional investors worldwide.**
