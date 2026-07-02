import Link from 'next/link'
import { Headphones, Play, Download, Clock, ArrowRight } from 'lucide-react'

const audioContent = [
  {
    id: 1,
    title: 'Investment Trends Podcast',
    host: 'Sarah Chen',
    duration: '45 min',
    category: 'Podcast',
    description: 'Weekly insights on emerging investment trends and market analysis.',
  },
  {
    id: 2,
    title: 'Geopolitical Intelligence Weekly',
    host: 'Michael Richardson',
    duration: '38 min',
    category: 'Briefing',
    description: 'Weekly roundup of geopolitical developments impacting markets.',
  },
  {
    id: 3,
    title: 'AI in Finance Deep Dive',
    host: 'Dr. James Peterson',
    duration: '52 min',
    category: 'Lecture',
    description: 'In-depth exploration of artificial intelligence applications in investment management.',
  },
  {
    id: 4,
    title: 'Risk Management Masterclass',
    host: 'Elena Petrova',
    duration: '61 min',
    category: 'Masterclass',
    description: 'Advanced risk management techniques for institutional portfolios.',
  },
  {
    id: 5,
    title: 'Market Outlook for Q4 2024',
    host: 'Michael Johnson',
    duration: '44 min',
    category: 'Market Update',
    description: 'Comprehensive market outlook and investment strategy recommendations.',
  },
  {
    id: 6,
    title: 'Central Banks & Monetary Policy',
    host: 'Prof. David Lee',
    duration: '48 min',
    category: 'Analysis',
    description: 'Understanding central bank decisions and their market implications.',
  },
]

export default function AudioPage() {
  return (
    <main className="bg-background">
      {/* Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Audio Library
          </h1>
          <p className="text-xl text-foreground/60 leading-relaxed">
            Listen to expert analysis, market insights, and research from leading voices in finance and investment.
          </p>
        </div>
      </section>

      {/* Audio Content */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {audioContent.map((item) => (
              <div
                key={item.id}
                className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all"
              >
                {/* Waveform Visualization */}
                <div className="mb-6 h-20 rounded-lg bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center border border-border/50 group-hover:border-primary/30 transition-colors">
                  <div className="flex items-end justify-center gap-1 h-12">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 bg-gradient-to-t from-primary to-secondary rounded-full opacity-60 group-hover:opacity-100 transition-all"
                        style={{
                          height: `${20 + Math.random() * 60}%`,
                          animationDelay: `${i * 0.1}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                  {item.category}
                </p>
                <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-foreground/60 mb-4">
                  Hosted by {item.host}
                </p>

                {/* Duration */}
                <div className="flex items-center gap-2 text-sm text-foreground/60 mb-4">
                  <Clock size={14} />
                  {item.duration}
                </div>

                {/* Description */}
                <p className="text-sm text-foreground/60 mb-6 line-clamp-2">
                  {item.description}
                </p>

                {/* Actions */}
                <div className="flex items-center gap-2 pt-4 border-t border-border">
                  <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:shadow-lg transition-all group/btn">
                    <Play size={16} className="group-hover/btn:translate-x-0.5 transition-transform" />
                    Play
                  </button>
                  <button className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-border hover:border-primary hover:bg-muted transition-all">
                    <Download size={16} className="text-foreground/60" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-foreground/60 mb-8">
              Premium members get unlimited access to our entire audio library.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg transition-all group"
            >
              Start Listening
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
