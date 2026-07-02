'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Bookmark, Clock, User, Search, X } from 'lucide-react'

const allResearch = [
  {
    id: 1,
    title: 'The Future of Artificial Intelligence in Finance',
    category: 'Artificial Intelligence',
    readingTime: '12 min',
    author: 'Dr. Sarah Chen',
    date: 'Oct 18, 2024',
    tags: ['AI', 'Finance', 'Technology'],
    excerpt: 'Exploring how machine learning and neural networks are transforming financial services and investment management.',
  },
  {
    id: 2,
    title: 'Geopolitical Risks and Market Volatility',
    category: 'Geopolitics',
    readingTime: '15 min',
    author: 'Michael Richardson',
    date: 'Oct 17, 2024',
    tags: ['Geopolitics', 'Risk', 'Markets'],
    excerpt: 'Understanding the complex relationship between geopolitical events and market movements in 2024.',
  },
  {
    id: 3,
    title: 'Emerging Markets: New Opportunities in 2025',
    category: 'Economics',
    readingTime: '18 min',
    author: 'Elena Petrova',
    date: 'Oct 16, 2024',
    tags: ['Emerging Markets', 'Economics', 'Investment'],
    excerpt: 'Identifying high-growth opportunities in developing economies and regional market dynamics.',
  },
  {
    id: 4,
    title: 'Blockchain Technology and Institutional Adoption',
    category: 'Blockchain',
    readingTime: '14 min',
    author: 'James Wilson',
    date: 'Oct 15, 2024',
    tags: ['Blockchain', 'Technology', 'Adoption'],
    excerpt: 'How institutional investors are integrating blockchain technology into their operations.',
  },
  {
    id: 5,
    title: 'Central Bank Digital Currencies: Implications for Crypto',
    category: 'Cryptocurrency',
    readingTime: '16 min',
    author: 'Prof. David Lee',
    date: 'Oct 14, 2024',
    tags: ['CBDC', 'Crypto', 'Finance'],
    excerpt: 'Analyzing the impact of central bank digital currencies on the cryptocurrency ecosystem.',
  },
  {
    id: 6,
    title: 'ESG Investing: Moving Beyond Sentiment to Impact',
    category: 'Sustainability',
    readingTime: '13 min',
    author: 'Jennifer Brown',
    date: 'Oct 13, 2024',
    tags: ['ESG', 'Sustainability', 'Investing'],
    excerpt: 'Measuring real environmental and social impact in ESG portfolios with quantitative metrics.',
  },
]

const categories = [
  'All',
  'Artificial Intelligence',
  'Geopolitics',
  'Economics',
  'Blockchain',
  'Cryptocurrency',
  'Sustainability',
]

export default function ResearchPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = allResearch.filter((item) => {
    const matchCategory = selectedCategory === 'All' || item.category === selectedCategory
    const matchSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      item.author.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <main className="bg-background">
      {/* Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Research Library
          </h1>
          <p className="text-xl text-foreground/60 leading-relaxed">
            Deep-dive analysis on markets, geopolitics, AI, and investment strategies from our expert researchers.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Search & Filters */}
          <div className="space-y-6 mb-12">
            {/* Search Box */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-foreground/40" size={20} />
              <input
                type="text"
                placeholder="Search articles, authors, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-foreground/40 hover:text-foreground/60"
                >
                  <X size={20} />
                </button>
              )}
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-card border border-border text-foreground/70 hover:border-primary hover:text-primary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results */}
          {filtered.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all cursor-pointer"
                >
                  <Link href={`/research/${item.id}`} className="absolute inset-0 rounded-xl" />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 rounded-full bg-muted text-xs font-semibold text-primary">
                          {item.category}
                        </span>
                        <div className="flex items-center gap-1 text-sm text-foreground/60">
                          <Clock size={14} />
                          {item.readingTime}
                        </div>
                      </div>
                      <Bookmark
                        size={18}
                        className="text-foreground/40 group-hover:text-accent transition-colors"
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                        }}
                      />
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-foreground/60 mb-4 line-clamp-2">
                      {item.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 rounded text-xs text-foreground/50 border border-border/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-foreground/60">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User size={14} />
                          {item.author}
                        </div>
                        <span>{item.date}</span>
                      </div>
                      <span className="text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Read →
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-foreground/60 mb-4">
                No articles found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('All')
                }}
                className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}

          {/* Results Count */}
          <p className="text-sm text-foreground/60 text-center mt-8">
            Showing {filtered.length} of {allResearch.length} articles
          </p>
        </div>
      </section>
    </main>
  )
}
