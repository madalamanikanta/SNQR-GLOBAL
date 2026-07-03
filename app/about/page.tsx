import Link from 'next/link'
import { ArrowRight, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react'
import { PageShell } from '@/components/page-shell'

const values = [
  {
    title: 'Institutional quality',
    description: 'Every experience is designed to meet the bar of enterprise teams: precise, dependable, and secure.',
    icon: ShieldCheck,
  },
  {
    title: 'Research excellence',
    description: 'Our analysts combine domain expertise and rigorous method with modern tooling to deliver nuanced guidance.',
    icon: Sparkles,
  },
  {
    title: 'Technology innovation',
    description: 'We blend machine intelligence with human judgment to reveal patterns that would otherwise stay hidden.',
    icon: TrendingUp,
  },
]

export default function AboutPage() {
  return (
    <main>
      <PageShell eyebrow="About SNQR" title="Premium research for high-conviction teams" description="We help institutions move with clarity through shifting markets, geopolitical complexity, and fast-moving opportunities." />

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-primary">Our mission</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Make world-class intelligence accessible to teams that need to decide quickly.</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-white/65">
            <p>We empower institutional investors, policy makers, and research organizations with decision-support tools that combine rigor, speed, and strategic context.</p>
            <p>By pairing deep domain expertise with modern analysis, we help our clients move from fragmented information to confident action.</p>
          </div>
        </div>
      </section>

      <section className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <div key={value.title} className="rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary"><Icon size={22} /></div>
                <h3 className="text-xl font-semibold text-white">{value.title}</h3>
                <p className="mt-3 text-base leading-7 text-white/65">{value.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 rounded-[32px] border border-white/10 bg-slate-950/50 p-8 backdrop-blur-xl md:grid-cols-3 md:p-10">
          {[
            ['200+', 'Institutional clients'],
            ['50+', 'Expert researchers'],
            ['$500B+', 'Assets under management'],
          ].map(([value, label]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
              <div className="text-4xl font-semibold text-primary">{value}</div>
              <p className="mt-2 text-sm uppercase tracking-[0.24em] text-white/55">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-[32px] border border-white/10 bg-gradient-to-br from-primary/10 via-white/5 to-transparent p-10 text-center backdrop-blur-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Ready to partner with us?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/65">Join professionals who rely on Intelligence to make smarter, faster, and more resilient decisions.</p>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03]">
            Get in touch
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}
