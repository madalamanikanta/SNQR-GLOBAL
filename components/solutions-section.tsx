'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, TrendingUp, Shield, Brain, Globe } from 'lucide-react'

const solutions = [
  {
    id: 1,
    title: 'Investment Intelligence',
    description: 'Real-time portfolio insights, performance analytics, and AI-driven recommendations for optimal investment decisions.',
    icon: TrendingUp,
    features: ['Portfolio Analytics', 'Performance Tracking', 'Risk Assessment'],
    link: '/solutions/investment',
  },
  {
    id: 2,
    title: 'Risk Intelligence',
    description: 'Comprehensive risk analysis tools that identify emerging threats and opportunities across global markets.',
    icon: Shield,
    features: ['Risk Monitoring', 'Threat Detection', 'Market Alerts'],
    link: '/solutions/risk',
  },
  {
    id: 3,
    title: 'AI Research Assistant',
    description: 'Powered by cutting-edge AI, our research assistant synthesizes vast amounts of data into actionable insights.',
    icon: Brain,
    features: ['Data Synthesis', 'Pattern Recognition', 'Recommendations'],
    link: '/solutions/ai',
  },
  {
    id: 4,
    title: 'Geopolitical Intelligence',
    description: 'Track geopolitical developments and their implications for markets, sectors, and individual securities.',
    icon: Globe,
    features: ['Global Monitoring', 'Impact Analysis', 'Forecasting'],
    link: '/solutions/geopolitical',
  },
]

export function SolutionsSection() {
  return (
    <section className="py-20 md:py-32 bg-muted border-y border-border">
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
            Our Solutions
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Enterprise-Grade Intelligence
          </h2>
          <p className="text-lg text-foreground/60 max-w-3xl mx-auto">
            Comprehensive solutions designed for institutional investors, policy makers, and research-driven organizations.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, i) => {
            const Icon = solution.icon
            return (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-6 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon size={28} className="text-primary" />
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {solution.title}
                </h3>
                <p className="text-foreground/60 mb-6 leading-relaxed">
                  {solution.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-8">
                  {solution.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-sm text-foreground/70">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={solution.link}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all group/link"
                >
                  Learn More
                  <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 bg-gradient-to-br from-primary to-secondary transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="/solutions"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-2xl hover:shadow-primary/40 hover:scale-105 transition-all"
          >
            Explore All Solutions
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
