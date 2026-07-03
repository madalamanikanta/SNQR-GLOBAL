import { AlertCircle, ArrowRight, Globe, TrendingUp } from 'lucide-react'
import { PageShell } from '@/components/page-shell'

const insights = [
  { id: 1, title: 'Market update: Fed signals continued rate stability', category: 'Market analysis', time: '2 hours ago', icon: TrendingUp, highlight: true },
  { id: 2, title: 'Risk alert: Tech sector volatility increases', category: 'Risk alert', time: '4 hours ago', icon: AlertCircle, highlight: false },
  { id: 3, title: 'Geopolitical: New trade policy developments', category: 'Geopolitics', time: '6 hours ago', icon: Globe, highlight: false },
  { id: 4, title: 'Sector watch: Energy markets rally on supply concerns', category: 'Sector analysis', time: '1 day ago', icon: TrendingUp, highlight: false },
]

export default function InsightsPage() {
  return (
    <main>
      <PageShell eyebrow="Insights" title="The latest intelligence in motion" description="Daily market updates, risk alerts, and strategic observations from our research team." />

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-4">
          {insights.map((insight) => {
            const Icon = insight.icon
            return (
              <div key={insight.id} className={`group rounded-[24px] border p-6 backdrop-blur-xl transition-all duration-300 ${insight.highlight ? 'border-primary/30 bg-primary/10' : 'border-white/10 bg-white/5 hover:border-primary/30 hover:bg-primary/10'}`}>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/50 text-primary">
                    <Icon size={20} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">{insight.category}</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">{insight.title}</h3>
                    <p className="mt-2 text-sm text-white/55">{insight.time}</p>
                  </div>
                  <div className="hidden text-primary transition-all duration-300 group-hover:translate-x-1 sm:block">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}
