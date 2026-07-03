'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Bookmark, Clock, Share2, User } from 'lucide-react'

const research = [
  {
    id: 1,
    title: 'The Future of Artificial Intelligence in Finance',
    category: 'Artificial Intelligence',
    readingTime: '12 min',
    author: 'Dr. Sarah Chen',
    date: 'Oct 18, 2024',
    tags: ['AI', 'Finance', 'Technology'],
    image: 'from-primary/30 via-secondary/25 to-transparent',
  },
  {
    id: 2,
    title: 'Geopolitical Risks and Market Volatility',
    category: 'Geopolitics',
    readingTime: '15 min',
    author: 'Michael Richardson',
    date: 'Oct 17, 2024',
    tags: ['Geopolitics', 'Risk', 'Markets'],
    image: 'from-secondary/30 via-accent/20 to-transparent',
  },
  {
    id: 3,
    title: 'Emerging Markets: New Opportunities in 2025',
    category: 'Economics',
    readingTime: '18 min',
    author: 'Elena Petrova',
    date: 'Oct 16, 2024',
    tags: ['Emerging Markets', 'Economics', 'Investment'],
    image: 'from-accent/30 via-primary/20 to-transparent',
  },
  {
    id: 4,
    title: 'Blockchain Technology and Institutional Adoption',
    category: 'Blockchain',
    readingTime: '14 min',
    author: 'James Wilson',
    date: 'Oct 15, 2024',
    tags: ['Blockchain', 'Technology', 'Adoption'],
    image: 'from-primary/35 via-accent/20 to-transparent',
  },
]

export function FeaturedResearch() {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-14 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-primary">Research & insights</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Featured research for leaders navigating complexity</h2>
          </div>
          <Link href="/research" className="inline-flex items-center gap-2 self-start rounded-full border border-primary/30 bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary/20">
            View all research
            <ArrowRight size={16} />
          </Link>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {research.map((item, index) => (
            <motion.article key={item.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.06 }} viewport={{ once: true }} className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_30px_90px_rgba(95,140,255,0.16)]">
              <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${item.image}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.24),transparent_34%)]" />
              </div>
              <div className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">{item.category}</span>
                  <Bookmark size={16} className="text-white/35 transition-colors duration-300 group-hover:text-accent" />
                </div>
                <h3 className="mb-4 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-primary">{item.title}</h3>
                <div className="mb-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/55">{tag}</span>
                  ))}
                </div>
                <div className="space-y-3 border-t border-white/10 pt-4 text-sm text-white/60">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2"><User size={14} />{item.author}</div>
                    <div className="flex items-center gap-2"><Clock size={14} />{item.readingTime}</div>
                  </div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/35">{item.date}</p>
                </div>
                <Link href={`/research/${item.id}`} className="mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-sm font-semibold text-white/70 transition-all duration-300 hover:border-primary/30 hover:bg-primary/10 hover:text-white">
                  Read article
                  <Share2 size={16} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
