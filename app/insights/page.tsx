import Link from 'next/link'
import { TrendingUp, AlertCircle, Globe, ArrowRight } from 'lucide-react'

const insights = [
  {
    id: 1,
    title: 'Market Update: Fed Signals Continued Rate Stability',
    category: 'Market Analysis',
    time: '2 hours ago',
    icon: TrendingUp,
    highlight: true,
  },
  {
    id: 2,
    title: 'Risk Alert: Tech Sector Volatility Increases',
    category: 'Risk Alert',
    time: '4 hours ago',
    icon: AlertCircle,
    highlight: false,
  },
  {
    id: 3,
    title: 'Geopolitical: New Trade Policy Developments',
    category: 'Geopolitics',
    time: '6 hours ago',
    icon: Globe,
    highlight: false,
  },
  {
    id: 4,
    title: 'Sector Watch: Energy Markets Rally on Supply Concerns',
    category: 'Sector Analysis',
    time: '1 day ago',
    icon: TrendingUp,
    highlight: false,
  },
]

export default function InsightsPage() {
  return (
    <main className="bg-background">
      {/* Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Latest Insights
          </h1>
          <p className="text-xl text-foreground/60 leading-relaxed">
            Daily market updates, risk alerts, and investment insights from our research team.
          </p>
        </div>
      </section>

      {/* Insights Feed */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {insights.map((insight) => {
            const Icon = insight.icon
            return (
              <div
                key={insight.id}
                className={`group relative p-6 rounded-lg border transition-all cursor-pointer ${
                  insight.highlight
                    ? 'bg-card border-primary/50 hover:border-primary hover:shadow-lg hover:shadow-primary/20'
                    : 'bg-card border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 p-3 rounded-lg ${
                    insight.highlight
                      ? 'bg-primary/20'
                      : 'bg-card border border-border group-hover:border-primary/50'
                  }`}>
                    <Icon size={24} className={insight.highlight ? 'text-primary' : 'text-primary'} />
                  </div>
                  <div className="flex-grow min-w-0">
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                      {insight.category}
                    </p>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {insight.title}
                    </h3>
                    <p className="text-sm text-foreground/60">
                      {insight.time}
                    </p>
                  </div>
                  <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="inline-flex items-center gap-1 text-primary font-medium">
                      View
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 rounded-lg border border-border text-foreground font-semibold hover:border-primary hover:bg-muted transition-all">
            Load More Insights
          </button>
        </div>
      </section>
    </main>
  )
}
