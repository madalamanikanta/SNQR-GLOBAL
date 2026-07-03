import Link from 'next/link'
import { ArrowRight, Clock, Download, Headphones, Play } from 'lucide-react'
import { PageShell } from '@/components/page-shell'

const audioContent = [
  { id: 1, title: 'Investment trends podcast', host: 'Sarah Chen', duration: '45 min', category: 'Podcast', description: 'Weekly insights on emerging investment trends and market analysis.' },
  { id: 2, title: 'Geopolitical intelligence weekly', host: 'Michael Richardson', duration: '38 min', category: 'Briefing', description: 'Weekly roundup of geopolitical developments impacting markets.' },
  { id: 3, title: 'AI in finance deep dive', host: 'Dr. James Peterson', duration: '52 min', category: 'Lecture', description: 'In-depth exploration of artificial intelligence applications in investment management.' },
  { id: 4, title: 'Risk management masterclass', host: 'Elena Petrova', duration: '61 min', category: 'Masterclass', description: 'Advanced risk management techniques for institutional portfolios.' },
  { id: 5, title: 'Market outlook for Q4 2024', host: 'Michael Johnson', duration: '44 min', category: 'Market update', description: 'Comprehensive market outlook and investment strategy recommendations.' },
  { id: 6, title: 'Central banks & monetary policy', host: 'Prof. David Lee', duration: '48 min', category: 'Analysis', description: 'Understanding central bank decisions and their market implications.' },
]

export default function AudioPage() {
  return (
    <main>
      <PageShell eyebrow="Audio" title="Listen to research on the move" description="Premium audio briefings, podcasts, and deep dives from our research team." />

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {audioContent.map((item) => (
            <div key={item.id} className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/10">
              <div className="mb-6 flex h-24 items-center justify-center rounded-[24px] border border-white/10 bg-gradient-to-r from-primary/15 via-secondary/10 to-accent/10">
                <div className="flex h-12 items-end gap-1">
                  {[...Array(8)].map((_, index) => (
                    <div key={index} className="w-1 rounded-full bg-gradient-to-t from-primary to-secondary" style={{ height: `${20 + ((index + 1) % 5) * 10}%` }} />
                  ))}
                </div>
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">{item.category}</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-white/55">Hosted by {item.host}</p>
              <div className="mt-4 flex items-center gap-2 text-sm text-white/55"><Clock size={14} />{item.duration}</div>
              <p className="mt-4 text-base leading-7 text-white/65">{item.description}</p>
              <div className="mt-6 flex gap-3">
                <button className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300">
                  <Play size={16} />Play
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-950/40 text-white/70"><Download size={16} /></button>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-[32px] border border-white/10 bg-gradient-to-br from-primary/10 via-white/5 to-transparent p-10 text-center backdrop-blur-xl">
          <div className="mb-4 flex justify-center text-primary"><Headphones size={24} /></div>
          <p className="text-lg text-white/70">Premium members get unlimited access to our full audio library.</p>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03]">
            Start listening
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}
