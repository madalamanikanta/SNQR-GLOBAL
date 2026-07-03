'use client'

import { motion } from 'framer-motion'

const logos = ['BlackRock', 'Goldman Sachs', 'JP Morgan', 'Citadel', 'Bridgewater', 'Two Sigma', 'Renaissance', 'D.E. Shaw']

export function TrustedBy() {
  return (
    <section className="relative border-y border-white/10 bg-slate-950/40 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-primary">Trusted globally</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Trusted by the world’s leading investment firms</h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-8">
          {logos.map((logo, index) => (
            <motion.div key={logo} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.04 }} viewport={{ once: true }} className="group flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/10">
              <span className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/55 transition-colors duration-300 group-hover:text-white">{logo}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
