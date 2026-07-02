import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Shield, Brain, Globe, BarChart3, Zap } from 'lucide-react'
import Link from 'next/link'

const solutions = [
  {
    id: 1,
    title: 'Investment Intelligence',
    subtitle: 'Real-time Portfolio Analysis & Optimization',
    description: 'Comprehensive portfolio intelligence platform providing real-time insights, performance analytics, and AI-driven recommendations.',
    icon: TrendingUp,
    features: [
      'Live portfolio monitoring',
      'Performance analytics dashboard',
      'Risk assessment tools',
      'Allocation optimization',
      'Rebalancing alerts',
      'Tax-loss harvesting reports',
    ],
    benefits: [
      'Make faster, data-driven decisions',
      'Optimize portfolio performance',
      'Reduce risk exposure',
      'Improve asset allocation',
    ],
  },
  {
    id: 2,
    title: 'Risk Intelligence',
    subtitle: 'Advanced Risk Monitoring & Forecasting',
    description: 'Comprehensive risk analysis tools that identify emerging threats and opportunities across global markets and asset classes.',
    icon: Shield,
    features: [
      'Real-time risk monitoring',
      'Threat detection and alerts',
      'Market stress testing',
      'Correlation analysis',
      'VaR calculations',
      'Scenario modeling',
    ],
    benefits: [
      'Anticipate market risks early',
      'Protect portfolio downside',
      'Test strategy resilience',
      'Reduce unexpected losses',
    ],
  },
  {
    id: 3,
    title: 'AI Research Assistant',
    subtitle: 'Intelligent Data Analysis & Synthesis',
    description: 'Powered by cutting-edge AI, synthesize vast amounts of research data into actionable investment insights automatically.',
    icon: Brain,
    features: [
      'Natural language queries',
      'Automated data synthesis',
      'Pattern recognition',
      'Sentiment analysis',
      'Predictive modeling',
      'Custom report generation',
    ],
    benefits: [
      'Save research time by 80%',
      'Uncover hidden patterns',
      'Get data-backed recommendations',
      'Stay ahead of market trends',
    ],
  },
  {
    id: 4,
    title: 'Geopolitical Intelligence',
    subtitle: 'Global Events & Market Impact Analysis',
    description: 'Track geopolitical developments in real-time and understand their implications for markets, sectors, and individual securities.',
    icon: Globe,
    features: [
      'Global event monitoring',
      'Market impact analysis',
      'Policy tracking',
      'Sanctions monitoring',
      'Trade flow analysis',
      'Forecasting models',
    ],
    benefits: [
      'Anticipate policy changes',
      'Understand global dynamics',
      'Identify market opportunities',
      'Manage geopolitical risk',
    ],
  },
]

export default function SolutionsPage() {
  return (
    <main className="bg-background">
      {/* Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Enterprise Solutions
          </h1>
          <p className="text-xl text-foreground/60 leading-relaxed">
            Comprehensive research, intelligence, and investment solutions designed for institutional investors and professional organizations.
          </p>
        </div>
      </section>

      {/* Solutions Details */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-24">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            const isEven = index % 2 === 0

            return (
              <div key={solution.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-6">
                    <Icon size={32} className="text-primary" />
                  </div>

                  <h2 className="text-4xl font-bold text-foreground mb-3">
                    {solution.title}
                  </h2>
                  <p className="text-lg text-primary font-semibold mb-4">
                    {solution.subtitle}
                  </p>
                  <p className="text-lg text-foreground/60 mb-8 leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                      Key Features
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {solution.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-foreground/70">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                      Benefits
                    </h3>
                    <div className="space-y-2">
                      {solution.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span className="text-foreground/70">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/40 transition-all group"
                  >
                    Request Demo
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Visual */}
                <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                  <div className={`h-80 rounded-2xl bg-gradient-to-br ${
                    solution.id === 1
                      ? 'from-primary/20 to-secondary/10'
                      : solution.id === 2
                        ? 'from-secondary/20 to-accent/10'
                        : solution.id === 3
                          ? 'from-accent/20 to-primary/10'
                          : 'from-primary/20 to-accent/10'
                  } border border-border flex items-center justify-center`}>
                    <Icon size={120} className="text-foreground/20" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Research?
          </h2>
          <p className="text-lg text-foreground/60 mb-8">
            Get started with our premium institutional solutions today. Contact our team to schedule a personalized demo.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/40 transition-all group inline-flex items-center gap-2"
            >
              Get Started
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/research"
              className="px-8 py-4 rounded-lg border border-border text-foreground font-semibold hover:border-primary hover:bg-muted transition-all"
            >
              Explore Research
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
