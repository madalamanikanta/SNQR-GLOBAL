'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, BarChart3, Globe, Sparkles, Zap } from 'lucide-react'

const products = [
  { id: 1, title: 'Investment Dashboard', subtitle: 'Bloomberg-style portfolio intelligence', description: 'Real-time portfolio monitoring, performance analytics, and advanced charting.', icon: BarChart3, features: ['Live portfolio view', 'Performance metrics', 'Risk analysis'], colors: 'from-primary/30 via-primary/10 to-transparent', link: '/products/dashboard' },
  { id: 2, title: 'Algo Trading Terminal', subtitle: 'Institutional-grade trading platform', description: 'Build, backtest, and execute algorithmic trading strategies with advanced analytics.', icon: Zap, features: ['Strategy builder', 'Backtesting engine', 'Execution workflows'], colors: 'from-secondary/30 via-secondary/10 to-transparent', link: '/products/algo-trading' },
  { id: 3, title: 'Geopolitical Platform', subtitle: 'Global intelligence network', description: 'Monitor geopolitical events and understand their market implications in real time.', icon: Globe, features: ['Event tracking', 'Impact analysis', 'Alerts'], colors: 'from-accent/30 via-primary/10 to-transparent', link: '/products/geopolitical' },
  { id: 4, title: 'AI Research Assistant', subtitle: 'Powered by advanced language models', description: 'Synthesize data, answer complex questions, and get insights from your research library.', icon: Sparkles, features: ['Natural language Q&A', 'Research synthesis', 'Insight delivery'], colors: 'from-primary/25 via-secondary/20 to-transparent', link: '/products/ai-assistant' },
]

export function ProductsSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-primary">Our products</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Powerful tools for sharp investing teams</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-white/65">Purpose-built platforms designed specifically for institutional investors and research professionals.</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <motion.article key={product.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.06 }} viewport={{ once: true }} className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_30px_90px_rgba(95,140,255,0.16)]">
                <div className={`absolute inset-0 bg-gradient-to-br ${product.colors} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
                <div className="relative">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary">
                    <Icon size={24} />
                  </div>
                  <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-primary">{product.subtitle}</p>
                  <h3 className="text-2xl font-semibold text-white">{product.title}</h3>
                  <p className="mt-4 text-base leading-7 text-white/65">{product.description}</p>
                  <div className="mt-6 space-y-3 border-t border-white/10 pt-6">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-sm text-white/70"><span className="h-2 w-2 rounded-full bg-primary" />{feature}</div>
                    ))}
                  </div>
                  <Link href={product.link} className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white/80 transition-all duration-300 hover:border-primary/30 hover:bg-primary/10 hover:text-white">
                    Explore now
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
