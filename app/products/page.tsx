import { ArrowRight, BarChart3, Zap, Globe, Sparkles } from 'lucide-react'
import Link from 'next/link'

const products = [
  {
    id: 1,
    slug: 'dashboard',
    title: 'Investment Dashboard',
    subtitle: 'Bloomberg-style Portfolio Intelligence',
    description: 'Real-time portfolio monitoring, performance analytics, and advanced charting for institutional investors.',
    icon: BarChart3,
    highlights: [
      'Live portfolio view with real-time updates',
      'Performance metrics and attribution analysis',
      'Risk analytics and stress testing',
      'Custom dashboards and alerts',
      'Advanced charting and technical analysis',
    ],
    useCases: [
      'Portfolio managers tracking daily performance',
      'Risk officers monitoring market exposure',
      'Traders executing strategic decisions',
      'Analysts deep-diving into holdings',
    ],
    pricing: 'Custom',
  },
  {
    id: 2,
    slug: 'algo-trading',
    title: 'Algo Trading Terminal',
    subtitle: 'Institutional-Grade Trading Platform',
    description: 'Build, backtest, and execute algorithmic trading strategies with advanced analytics and execution capabilities.',
    icon: Zap,
    highlights: [
      'Visual strategy builder (no coding required)',
      'Historical backtesting engine',
      'Live paper trading and execution',
      'Performance analytics and reporting',
      'Integration with multiple brokers',
    ],
    useCases: [
      'Quantitative traders building strategies',
      'Hedge funds executing algorithmic trading',
      'Asset managers automating rebalancing',
      'Trading shops testing new ideas',
    ],
    pricing: 'Custom',
  },
  {
    id: 3,
    slug: 'geopolitical',
    title: 'Geopolitical Research Platform',
    subtitle: 'Global Intelligence Network',
    description: 'Monitor geopolitical events and understand their market implications with advanced analytics and forecasting.',
    icon: Globe,
    highlights: [
      'Real-time geopolitical event tracking',
      'Market impact analysis and scoring',
      'Policy and sanction monitoring',
      'Trade flow analysis',
      'Predictive modeling and alerts',
    ],
    useCases: [
      'Portfolio managers hedging geopolitical risk',
      'Policy analysts tracking regulatory changes',
      'Commodity traders monitoring trade flows',
      'Enterprise teams managing country risk',
    ],
    pricing: 'Custom',
  },
  {
    id: 4,
    slug: 'ai-assistant',
    title: 'AI Research Assistant',
    subtitle: 'Powered by Advanced Language Models',
    description: 'Synthesize data, answer complex questions, and get insights from your research library using AI.',
    icon: Sparkles,
    highlights: [
      'Natural language question answering',
      'Automated data synthesis from documents',
      'Sentiment analysis and trend detection',
      'Custom report generation',
      'Integration with your data sources',
    ],
    useCases: [
      'Researchers analyzing large documents',
      'Analysts extracting key insights quickly',
      'Investors understanding market themes',
      'Teams automating research workflows',
    ],
    pricing: 'Custom',
  },
]

export default function ProductsPage() {
  return (
    <main className="bg-background">
      {/* Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Powerful Tools
          </h1>
          <p className="text-xl text-foreground/60 leading-relaxed">
            Purpose-built platforms designed specifically for institutional investors and research professionals.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product) => {
            const Icon = product.icon
            return (
              <div
                key={product.id}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 flex flex-col"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br from-primary to-secondary transition-opacity duration-300 pointer-events-none" />

                {/* Content */}
                <div className="relative p-8 flex flex-col h-full">
                  {/* Icon & Title */}
                  <div className="mb-6">
                    <div className="inline-flex p-3 rounded-lg bg-card border border-border group-hover:border-primary/50 group-hover:bg-primary/10 transition-all mb-4">
                      <Icon size={32} className="text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {product.title}
                    </h3>
                    <p className="text-primary font-semibold">
                      {product.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/60 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {product.highlights.slice(0, 3).map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2 text-sm text-foreground/70">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Use Cases */}
                  <div className="mb-6 py-4 border-t border-border">
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                      Who Uses This
                    </h4>
                    <ul className="space-y-2">
                      {product.useCases.slice(0, 2).map((useCase) => (
                        <li key={useCase} className="flex items-start gap-2 text-sm text-foreground/70">
                          <div className="w-1 h-1 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="mt-auto">
                    <Link
                      href={`/products/${product.slug}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium hover:bg-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                    >
                      Learn More
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
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
            Ready to Get Started?
          </h2>
          <p className="text-lg text-foreground/60 mb-8">
            Schedule a demo with our team to see how our products can transform your investment process.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/40 transition-all group"
          >
            Request Demo
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  )
}
