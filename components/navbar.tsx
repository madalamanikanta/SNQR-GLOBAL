'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Menu, X, Sparkles } from 'lucide-react'
import { SearchModal } from './search-modal'


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
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
    <motion.nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-white/10 bg-background/75 backdrop-blur-2xl shadow-[0_0_80px_rgba(8,15,30,0.6)]'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/80 via-secondary/80 to-accent/70 text-sm font-semibold text-white shadow-[0_0_30px_rgba(95,140,255,0.25)] transition-all duration-300 group-hover:scale-105">
            <Sparkles size={18} />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold tracking-[0.24em] text-white/70 uppercase">SNQR</p>
            <p className="text-base font-semibold text-white">Intelligence</p>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-2 backdrop-blur-xl">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              <Link
                href={item.href}
                className="relative rounded-full px-4 py-2 text-sm font-medium text-white/70 transition-colors duration-300 hover:text-white"
              >
                {item.label}
                <span className="absolute bottom-1 left-4 right-4 h-0.5 origin-left scale-x-0 rounded-full bg-gradient-to-r from-primary to-secondary transition-transform duration-300 group-hover:scale-x-100" />
              </Link>

              {item.label === 'Solutions' && (
                <div className="invisible absolute left-0 top-full mt-3 w-56 rounded-2xl border border-white/10 bg-slate-950/95 p-3 opacity-0 shadow-[0_30px_80px_rgba(0,0,0,0.4)] backdrop-blur-2xl transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  {solutionsMenu.map((subitem) => (
                    <Link
                      key={subitem.label}
                      href={subitem.href}
                      className="block rounded-xl px-3 py-2 text-sm font-medium text-white/65 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      {subitem.label}
                    </Link>
                  ))}
                </div>
              )}

              {item.label === 'Products' && (
                <div className="invisible absolute left-0 top-full mt-3 w-56 rounded-2xl border border-white/10 bg-slate-950/95 p-3 opacity-0 shadow-[0_30px_80px_rgba(0,0,0,0.4)] backdrop-blur-2xl transition-all duration-300 group-hover:visible group-hover:opacity-100">
                  {productsMenu.map((subitem) => (
                    <Link
                      key={subitem.label}
                      href={subitem.href}
                      className="block rounded-xl px-3 py-2 text-sm font-medium text-white/65 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      {subitem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => setIsSearchOpen(true)}
            className="rounded-full border border-white/10 bg-white/5 p-2.5 text-white/70 transition-all duration-300 hover:border-primary/30 hover:text-white"
          >
            <Search size={18} />
          </button>
          <Link
            href="/contact"
            className="rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(95,140,255,0.25)] transition-all duration-300 hover:scale-[1.03]"
          >
            Book a demo
          </Link>
        </div>

        <button
          className="rounded-full border border-white/10 bg-white/5 p-2.5 text-white/80 lg:hidden"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-slate-950/95 px-4 py-4 lg:hidden"
          >
            {navItems.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-2">
                <button
                  onClick={() => setOpenSubmenu(openSubmenu === item.label ? null : item.label)}
                  className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm font-medium text-white/80"
                >
                  {item.label}
                  {item.submenu ? <span className={`transition-transform ${openSubmenu === item.label ? 'rotate-180' : ''}`}>▾</span> : null}
                </button>
                {item.submenu && openSubmenu === item.label ? (
                  <div className="mt-2 space-y-1 pl-3">
                    {(item.label === 'Solutions' ? solutionsMenu : productsMenu).map((subitem) => (
                      <Link
                        key={subitem.label}
                        href={subitem.href}
                        className="block rounded-lg px-3 py-2 text-sm text-white/60 transition-colors hover:bg-white/5 hover:text-white"
                        onClick={() => setIsMobileOpen(false)}
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.nav>
    {isSearchOpen && <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />}
    </>
  )
}
