import Link from 'next/link'
import { ArrowRight, Mail, Send, Sparkles } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-slate-950/80">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(95,140,255,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.16),transparent_24%)]" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/80 via-secondary/80 to-accent/70 text-white shadow-[0_0_30px_rgba(95,140,255,0.25)]">
                <Sparkles size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">SNQR</p>
                <p className="text-base font-semibold text-white">Intelligence</p>
              </div>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/60">
              Premium intelligence and research infrastructure for institutions that need clarity, speed, and conviction.
            </p>
            <div className="mt-6 flex gap-3">
              {['Research', 'Products', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={item === 'Contact' ? '/contact' : item === 'Products' ? '/products' : '/research'}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition-all duration-300 hover:border-primary/30 hover:text-white"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/50">Solutions</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              {['Research & Articles', 'Investment Advisory', 'Risk Analysis', 'Decision Intelligence'].map((item) => (
                <li key={item}><Link href="/solutions" className="transition-colors hover:text-white">{item}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/50">Explore</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              {['Products', 'Books', 'Audio Library', 'Insights'].map((item) => (
                <li key={item}><Link href={item === 'Products' ? '/products' : item === 'Books' ? '/books' : item === 'Audio Library' ? '/audio' : '/insights'} className="transition-colors hover:text-white">{item}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/50">Connect</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {[Mail, Send].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/70 transition-all duration-300 hover:border-primary/30 hover:text-white"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-white">
              Start a conversation
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© 2026 SNQR Intelligence. All rights reserved.</p>
          <p>Built for institutions, strategists, and research teams.</p>
        </div>
      </div>
    </footer>
  )
}
