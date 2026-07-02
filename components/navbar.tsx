'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Search, Menu, X } from 'lucide-react'


const navItems = [
  { label: 'Solutions', href: '/solutions', submenu: true },
  { label: 'Products', href: '/products', submenu: true },
  { label: 'Research', href: '/research' },
  { label: 'Publications', href: '/publications' },
  { label: 'Books', href: '/books' },
  { label: 'Audio Library', href: '/audio' },
  { label: 'Insights', href: '/insights' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const solutionsMenu = [
  { label: 'Research & Articles', href: '#' },
  { label: 'Investment Advisory', href: '#' },
  { label: 'Institutional Research', href: '#' },
  { label: 'Private Research', href: '#' },
  { label: 'Risk Intelligence', href: '#' },
]

const productsMenu = [
  { label: 'Investment Dashboard', href: '/products/dashboard' },
  { label: 'Algo Trading', href: '/products/algo-trading' },
  { label: 'Political Research', href: '/products/political' },
  { label: 'Geopolitical Research', href: '/products/geopolitical' },
  { label: 'Market Research', href: '/products/market' },
  { label: 'AI Research Assistant', href: '/products/ai-assistant' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/50'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center font-bold text-foreground group-hover:shadow-lg group-hover:shadow-primary/50 transition-all">
              IN
            </div>
            <span className="font-bold text-lg hidden sm:inline">Intelligence</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
                </Link>

                {/* Mega Menus */}
                {item.label === 'Solutions' && (
                  <div className="absolute left-0 mt-0 w-56 bg-card border border-border rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pt-2">
                    <div className="p-4 space-y-3">
                      {solutionsMenu.map((subitem) => (
                        <Link
                          key={subitem.label}
                          href={subitem.href}
                          className="block px-3 py-2 rounded-lg text-sm font-medium text-foreground/70 hover:text-primary hover:bg-muted/50 transition-all"
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {item.label === 'Products' && (
                  <div className="absolute left-0 mt-0 w-56 bg-card border border-border rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pt-2">
                    <div className="p-4 space-y-3">
                      {productsMenu.map((subitem) => (
                        <Link
                          key={subitem.label}
                          href={subitem.href}
                          className="block px-3 py-2 rounded-lg text-sm font-medium text-foreground/70 hover:text-primary hover:bg-muted/50 transition-all"
                        >
                          {subitem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="p-2 rounded-lg hover:bg-muted transition-colors text-foreground/70 hover:text-foreground">
              <Search size={20} />
            </button>
            <Link
              href="#"
              className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <motion.div
            className="lg:hidden pb-4 space-y-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {navItems.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() =>
                    setOpenSubmenu(
                      openSubmenu === item.label ? null : item.label
                    )
                  }
                  className="w-full text-left px-3 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:bg-muted hover:text-primary transition-colors flex items-center justify-between"
                >
                  {item.label}
                  {item.submenu && (
                    <span className={`transition-transform ${openSubmenu === item.label ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  )}
                </button>

                {item.submenu && openSubmenu === item.label && (
                  <div className="pl-4 space-y-2 mt-2">
                    {(item.label === 'Solutions'
                      ? solutionsMenu
                      : productsMenu
                    ).map((subitem) => (
                      <Link
                        key={subitem.label}
                        href={subitem.href}
                        className="block px-3 py-2 rounded-lg text-xs font-medium text-foreground/60 hover:text-primary hover:bg-muted/50 transition-all"
                        onClick={() => setIsMobileOpen(false)}
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
