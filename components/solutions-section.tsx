'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Brain, Globe, Shield, TrendingUp } from 'lucide-react'

const solutions = [
  { id: 1, title: 'Investment Intelligence', description: 'Real-time portfolio insights, performance analytics, and AI-driven recommendations for optimal investment decisions.', icon: TrendingUp, features: ['Portfolio analytics', 'Performance tracking', 'Risk assessment'], link: '/solutions' },
  { id: 2, title: 'Risk Intelligence', description: 'Comprehensive risk analysis tools that identify emerging threats and opportunities across global markets.', icon: Shield, features: ['Risk monitoring', 'Threat detection', 'Market alerts'], link: '/solutions' },
  { id: 3, title: 'AI Research Assistant', description: 'Powered by cutting-edge AI, our research assistant synthesizes vast amounts of data into actionable insights.', icon: Brain, features: ['Data synthesis', 'Pattern recognition', 'Recommendations'], link: '/solutions' },
  { id: 4, title: 'Geopolitical Intelligence', description: 'Track geopolitical developments and their implications for markets, sectors, and individual securities.', icon: Globe, features: ['Global monitoring', 'Impact analysis', 'Forecasting'], link: '/solutions' },
]

export function SolutionsSection() {
  return (
    <section className="border-y border-white/10 bg-slate-950/40 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-primary">Our solutions</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Enterprise-grade intelligence for confident decisions</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-white/65">Comprehensive solutions designed for institutional investors, policy makers, and research-driven organizations.</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <motion.article key={solution.id} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.06 }} viewport={{ once: true }} className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_30px_90px_rgba(95,140,255,0.16)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(95,140,255,0.14),transparent_40%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/25 bg-primary/10 text-primary"><Icon size={24} /></div>
                  <h3 className="text-2xl font-semibold text-white">{solution.title}</h3>
                  <p className="mt-4 text-base leading-7 text-white/65">{solution.description}</p>
                  <div className="mt-6 space-y-3">
                    {solution.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-sm text-white/70"><span className="h-2 w-2 rounded-full bg-primary" />{feature}</div>
                    ))}
                  </div>
                  <Link href={solution.link} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 hover:gap-3">
                    Learn more
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
