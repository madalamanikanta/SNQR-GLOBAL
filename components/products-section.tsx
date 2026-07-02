'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, BarChart3, Zap, Globe, Sparkles } from 'lucide-react'

const products = [
  {
    id: 1,
    title: 'Investment Dashboard',
    subtitle: 'Bloomberg-style portfolio intelligence',
    description: 'Real-time portfolio monitoring, performance analytics, and advanced charting.',
    icon: BarChart3,
    features: ['Live Portfolio View', 'Performance Metrics', 'Risk Analysis'],
    colors: 'from-primary/20 to-primary/5',
    link: '/products/dashboard',
  },
  {
    id: 2,
    title: 'Algo Trading Terminal',
    subtitle: 'Institutional-grade trading platform',
    description: 'Build, backtest, and execute algorithmic trading strategies with advanced analytics.',
    icon: Zap,
    features: ['Strategy Builder', 'Backtesting', 'Execution Engine'],
    colors: 'from-secondary/20 to-secondary/5',
    link: '/products/algo-trading',
  },
  {
    id: 3,
    title: 'Geopolitical Platform',
    subtitle: 'Global intelligence network',
    description: 'Monitor geopolitical events and understand their market implications in real-time.',
    icon: Globe,
    features: ['Event Tracking', 'Impact Analysis', 'Alerts'],
    colors: 'from-accent/20 to-accent/5',
    link: '/products/geopolitical',
  },
  {
    id: 4,
    title: 'AI Research Assistant',
    subtitle: 'Powered by advanced language models',
    description: 'Synthesize data, answer complex questions, and get insights from your research library.',
    icon: Sparkles,
    features: ['Data Analysis', 'Q&A System', 'Insights'],
    colors: 'from-primary/20 to-secondary/20',
    link: '/products/ai-assistant',
  },
]

export function ProductsSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">
            Our Products
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Powerful Tools for Smart Investing
          </h2>
          <p className="text-lg text-foreground/60 max-w-3xl mx-auto">
            Purpose-built platforms designed specifically for institutional investors and research professionals.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {products.map((product, i) => {
            const Icon = product.icon
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.colors} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Content */}
                <div className="relative p-8 h-full flex flex-col">
                  {/* Icon */}
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-card border border-border group-hover:border-primary/50 group-hover:bg-primary/10 transition-all w-fit">
                    <Icon size={28} className="text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {product.title}
                  </h3>
                  <p className="text-sm font-medium text-primary mb-3">
                    {product.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-foreground/60 mb-6 flex-grow leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6 py-4 border-t border-border">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm text-foreground/70">
                        <div className="w-1 h-1 rounded-full bg-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    href={product.link}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium hover:bg-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all w-fit"
                  >
                    Explore
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Border effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 border border-primary/20" />
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition-all"
          >
            View All Products
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
