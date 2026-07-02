import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { LenisScroll } from '@/components/lenis-scroll'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Intelligence - Premium Institutional Research & Investment Platform',
  description: 'Institutional-grade research, investment intelligence, geopolitical analysis, market insights, and AI-powered decision support built for the world\'s smartest investors. Trusted by 200+ institutions.',
  keywords: ['institutional research', 'investment intelligence', 'portfolio management', 'geopolitical analysis', 'AI analytics', 'market research'],
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Intelligence - Premium Institutional Research Platform',
    description: 'Institutional-grade research, investment intelligence, geopolitical analysis, market insights, and AI-powered decision support.',
    type: 'website',
    url: 'https://intelligence.example.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Intelligence Platform',
    description: 'Premium institutional research and investment intelligence.',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#050505' },
  ],
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark bg-background`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          <LenisScroll>
            <Navbar />
            <main className="min-h-screen pt-16">{children}</main>
            <Footer />
          </LenisScroll>
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}
