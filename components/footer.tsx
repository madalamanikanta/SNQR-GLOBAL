import Link from 'next/link'
import { Mail, Globe, Send } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center font-bold text-foreground">
                IN
              </div>
              <span className="font-bold text-lg">Intelligence</span>
            </Link>
            <p className="text-sm text-foreground/60 leading-relaxed">
              Premium institutional research and investment intelligence for the world's smartest investors.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Solutions</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  Research & Articles
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  Investment Advisory
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  Risk Analysis
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  Decision Intelligence
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Products</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/products/dashboard" className="text-foreground/60 hover:text-primary transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/products/algo-trading" className="text-foreground/60 hover:text-primary transition-colors">
                  Algo Trading
                </Link>
              </li>
              <li>
                <Link href="/products/geopolitical" className="text-foreground/60 hover:text-primary transition-colors">
                  Geopolitical Research
                </Link>
              </li>
              <li>
                <Link href="/products/ai-assistant" className="text-foreground/60 hover:text-primary transition-colors">
                  AI Assistant
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-foreground/60 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground/60 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-foreground/60 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex space-x-3 mb-6">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-card border border-border hover:border-primary hover:bg-muted flex items-center justify-center text-foreground/60 hover:text-primary transition-all"
              >
                <Globe size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-card border border-border hover:border-primary hover:bg-muted flex items-center justify-center text-foreground/60 hover:text-primary transition-all"
              >
                <Send size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-card border border-border hover:border-primary hover:bg-muted flex items-center justify-center text-foreground/60 hover:text-primary transition-all"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-foreground/60">
            <p>&copy; 2024 Intelligence Research Platform. All rights reserved.</p>
            <p>Designed for institutional investors, policy makers, and research-driven organizations.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
