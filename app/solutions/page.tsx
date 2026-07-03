import { motion } from 'framer-motion'
import { ArrowRight, Brain, Globe, Shield, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { PageShell } from '@/components/page-shell'

const solutions = [
  { id: 1, title: 'Investment intelligence', subtitle: 'Real-time portfolio analysis & optimization', description: 'Comprehensive portfolio intelligence for teams that need live visibility, sharper analytics, and better decisions.', icon: TrendingUp, features: ['Live portfolio monitoring', 'Performance analytics dashboard', 'Risk assessment tools', 'Allocation optimization', 'Rebalancing alerts', 'Tax-loss harvesting reports'], benefits: ['Make faster, data-driven decisions', 'Optimize portfolio performance', 'Reduce risk exposure', 'Improve asset allocation'] },
  { id: 2, title: 'Risk intelligence', subtitle: 'Advanced risk monitoring & forecasting', description: 'Monitor emerging threats and opportunities across markets and asset classes with high-confidence context.', icon: Shield, features: ['Real-time risk monitoring', 'Threat detection and alerts', 'Market stress testing', 'Correlation analysis', 'VaR calculations', 'Scenario modeling'], benefits: ['Anticipate market risks early', 'Protect portfolio downside', 'Test strategy resilience', 'Reduce unexpected losses'] },
  { id: 3, title: 'AI research assistant', subtitle: 'Intelligent data analysis & synthesis', description: 'Transform large volumes of research into concise answers, patterns, and workflows that accelerate teams.', icon: Brain, features: ['Natural language queries', 'Automated data synthesis', 'Pattern recognition', 'Sentiment analysis', 'Predictive modeling', 'Custom report generation'], benefits: ['Save research time', 'Uncover hidden patterns', 'Get data-backed recommendations', 'Stay ahead of market trends'] },
  { id: 4, title: 'Geopolitical intelligence', subtitle: 'Global events & market impact analysis', description: 'Track geopolitical developments and understand their implications for markets, sectors, and securities.', icon: Globe, features: ['Global event monitoring', 'Market impact analysis', 'Policy tracking', 'Sanctions monitoring', 'Trade flow analysis', 'Forecasting models'], benefits: ['Anticipate policy changes', 'Understand global dynamics', 'Identify market opportunities', 'Manage geopolitical risk'] },
]

export default function SolutionsPage() {
  return (
    <main>
      <PageShell eyebrow="Solutions" title="Research-driven solutions for modern institutions" description="Comprehensive intelligence systems designed for strategy teams, investors, and operators." />

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            const isEven = index % 2 === 0
            return (
              <div key={solution.id} className="grid items-center gap-8 rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl lg:grid-cols-2 lg:p-10">
                <div className={isEven ? '' : 'lg:order-2'}>
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary"><Icon size={28} /></div>
                  <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{solution.title}</h2>
                  <p className="mt-3 text-lg font-semibold text-primary">{solution.subtitle}</p>
                  <p className="mt-5 text-lg leading-8 text-white/65">{solution.description}</p>
                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {solution.features.map((feature) => <div key={feature} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-950/40 p-3 text-sm text-white/70"><span className="mt-1 h-2 w-2 rounded-full bg-primary" />{feature}</div>)}
                  </div>
                  <div className="mt-8">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/50">Benefits</h3>
                    <div className="mt-4 space-y-3">
                      {solution.benefits.map((benefit) => <div key={benefit} className="flex items-start gap-3 text-white/70"><span className="mt-1 h-2 w-2 rounded-full bg-accent" />{benefit}</div>)}
                    </div>
                  </div>
                  <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02]">
                    Request a demo
                    <ArrowRight size={18} />
                  </Link>
                </div>
                <div className={isEven ? 'lg:order-2' : ''}>
                  <div className="flex h-80 items-center justify-center rounded-[32px] border border-white/10 bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/10 p-6">
                    <div className="rounded-full border border-white/10 bg-white/10 p-10 backdrop-blur-xl"><Icon size={110} className="text-white/60" /></div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-gradient-to-br from-primary/10 via-white/5 to-transparent p-10 text-center backdrop-blur-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Ready to transform your research?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/65">Get started today with a premium institutional solution tailored to your team.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02]">Get started<ArrowRight size={18} /></Link>
            <Link href="/research" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white/80 transition-all duration-300 hover:border-primary/30 hover:text-white">Explore research</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
