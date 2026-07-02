'use client'

import { motion } from 'framer-motion'

const logos = [
  'BlackRock',
  'Goldman Sachs',
  'JP Morgan',
  'Citadel',
  'Bridgewater',
  'Two Sigma',
  'Renaissance',
  'D.E. Shaw',
]

export function TrustedBy() {
  return (
    <section className="relative py-16 md:py-24 bg-background border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
            Trusted Globally
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Trusted by the world's leading investment firms
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {logos.map((logo, i) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="flex items-center justify-center p-4 rounded-lg bg-card border border-border/50 hover:border-primary/30 hover:bg-muted transition-all group cursor-pointer"
            >
              <span className="text-xs md:text-sm font-semibold text-foreground/50 group-hover:text-primary transition-colors text-center">
                {logo}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
