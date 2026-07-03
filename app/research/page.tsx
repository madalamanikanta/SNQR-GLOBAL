'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Bookmark, Clock, Search, User, X } from 'lucide-react'
import { PageShell } from '@/components/page-shell'

const allResearch = [
  { id: 1, title: 'The future of artificial intelligence in finance', category: 'Artificial Intelligence', readingTime: '12 min', author: 'Dr. Sarah Chen', date: 'Oct 18, 2024', tags: ['AI', 'Finance', 'Technology'], excerpt: 'Exploring how machine learning and neural networks are transforming financial services and investment management.' },
  { id: 2, title: 'Geopolitical risks and market volatility', category: 'Geopolitics', readingTime: '15 min', author: 'Michael Richardson', date: 'Oct 17, 2024', tags: ['Geopolitics', 'Risk', 'Markets'], excerpt: 'Understanding the complex relationship between geopolitical events and market movements in 2024.' },
  { id: 3, title: 'Emerging markets: new opportunities in 2025', category: 'Economics', readingTime: '18 min', author: 'Elena Petrova', date: 'Oct 16, 2024', tags: ['Emerging Markets', 'Economics', 'Investment'], excerpt: 'Identifying high-growth opportunities in developing economies and regional market dynamics.' },
  { id: 4, title: 'Blockchain technology and institutional adoption', category: 'Blockchain', readingTime: '14 min', author: 'James Wilson', date: 'Oct 15, 2024', tags: ['Blockchain', 'Technology', 'Adoption'], excerpt: 'How institutional investors are integrating blockchain technology into their operations.' },
  { id: 5, title: 'Central bank digital currencies: implications for crypto', category: 'Cryptocurrency', readingTime: '16 min', author: 'Prof. David Lee', date: 'Oct 14, 2024', tags: ['CBDC', 'Crypto', 'Finance'], excerpt: 'Analyzing the impact of central bank digital currencies on the cryptocurrency ecosystem.' },
  { id: 6, title: 'ESG investing: moving beyond sentiment to impact', category: 'Sustainability', readingTime: '13 min', author: 'Jennifer Brown', date: 'Oct 13, 2024', tags: ['ESG', 'Sustainability', 'Investing'], excerpt: 'Measuring real environmental and social impact in ESG portfolios with quantitative metrics.' },
]

const categories = ['All', 'Artificial Intelligence', 'Geopolitics', 'Economics', 'Blockchain', 'Cryptocurrency', 'Sustainability']

export default function ResearchPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = allResearch.filter((item) => {
    const matchCategory = selectedCategory === 'All' || item.category === selectedCategory
    const matchSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())) || item.author.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <main>
      <PageShell eyebrow="Research" title="A library for serious, modern analysis" description="Deep-dive analysis on markets, geopolitics, AI, and investment strategy from our expert researchers." />

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 rounded-[28px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:p-6">
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
              <input type="text" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder="Search articles, authors, or topics..." className="w-full rounded-2xl border border-white/10 bg-slate-950/50 py-3 pl-12 pr-12 text-white outline-none placeholder:text-white/35 focus:border-primary/50" />
              {searchQuery ? <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40"><X size={18} /></button> : null}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {categories.map((category) => (
                <button key={category} onClick={() => setSelectedCategory(category)} className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${selectedCategory === category ? 'bg-primary text-white' : 'border border-white/10 bg-white/5 text-white/70 hover:border-primary/30 hover:text-white'}`}>
                  {category}
                </button>
              ))}
            </div>
          </div>

          {filtered.length > 0 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="space-y-4">
              {filtered.map((item, index) => (
                <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.04 }} className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/10">
                  <Link href={`/research/${item.id}`} className="absolute inset-0" />
                  <div className="relative z-10 flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary">{item.category}</span>
                        <div className="flex items-center gap-2 text-sm text-white/55"><Clock size={14} />{item.readingTime}</div>
                      </div>
                      <h3 className="mt-4 text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-primary">{item.title}</h3>
                      <p className="mt-3 max-w-3xl text-base leading-7 text-white/65">{item.excerpt}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 bg-slate-950/40 px-2.5 py-1 text-xs text-white/55">{tag}</span>)}
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
                      <div className="flex items-center gap-2"><User size={14} />{item.author}</div>
                      <div>{item.date}</div>
                      <Bookmark size={16} className="text-white/35 transition-colors duration-300 group-hover:text-accent" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-10 text-center text-white/70 backdrop-blur-xl">
              <p className="text-lg">No articles found matching your criteria.</p>
              <button onClick={() => { setSearchQuery(''); setSelectedCategory('All') }} className="mt-6 rounded-full border border-primary/30 bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary">Clear filters</button>
            </div>
          )}

          <p className="mt-8 text-center text-sm text-white/50">Showing {filtered.length} of {allResearch.length} articles</p>
        </div>
      </section>
    </main>
  )
}
