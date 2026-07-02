'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Bookmark, Share2, Clock, User } from 'lucide-react'

const research = [
  {
    id: 1,
    title: 'The Future of Artificial Intelligence in Finance',
    category: 'Artificial Intelligence',
    readingTime: '12 min',
    author: 'Dr. Sarah Chen',
    date: 'Oct 18, 2024',
    tags: ['AI', 'Finance', 'Technology'],
    image: 'bg-gradient-to-br from-primary/20 to-secondary/20',
  },
  {
    id: 2,
    title: 'Geopolitical Risks and Market Volatility',
    category: 'Geopolitics',
    readingTime: '15 min',
    author: 'Michael Richardson',
    date: 'Oct 17, 2024',
    tags: ['Geopolitics', 'Risk', 'Markets'],
    image: 'bg-gradient-to-br from-secondary/20 to-accent/20',
  },
  {
    id: 3,
    title: 'Emerging Markets: New Opportunities in 2025',
    category: 'Economics',
    readingTime: '18 min',
    author: 'Elena Petrova',
    date: 'Oct 16, 2024',
    tags: ['Emerging Markets', 'Economics', 'Investment'],
    image: 'bg-gradient-to-br from-accent/20 to-primary/20',
  },
  {
    id: 4,
    title: 'Blockchain Technology and Institutional Adoption',
    category: 'Blockchain',
    readingTime: '14 min',
    author: 'James Wilson',
    date: 'Oct 15, 2024',
    tags: ['Blockchain', 'Technology', 'Adoption'],
    image: 'bg-gradient-to-br from-primary/30 to-accent/20',
  },
]

export function FeaturedResearch() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">
            Research & Insights
          </p>
          <div className="flex items-start justify-between mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Featured Research
            </h2>
            <Link
              href="/research"
              className="hidden md:inline-block px-6 py-2 rounded-lg border border-primary text-primary font-medium hover:bg-primary/10 transition-all"
            >
              View All →
            </Link>
          </div>
          <p className="text-lg text-foreground/60 max-w-2xl">
            Deep-dive analysis on markets, geopolitics, AI, and investment strategies from our expert researchers.
          </p>
        </motion.div>

        {/* Research Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {research.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Card Image */}
              <div className={`h-40 ${item.image} relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full bg-muted text-xs font-semibold text-primary">
                    {item.category}
                  </span>
                  <Bookmark
                    size={16}
                    className="text-foreground/40 group-hover:text-accent transition-colors cursor-pointer"
                  />
                </div>

                <h3 className="text-lg font-bold text-foreground mb-4 line-clamp-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                {/* Tags */}
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

                {/* Metadata */}
                <div className="space-y-3 pt-4 border-t border-border">
                  <div className="flex items-center justify-between text-sm text-foreground/60">
                    <div className="flex items-center gap-2">
                      <User size={14} />
                      <span>{item.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={14} />
                      <span>{item.readingTime}</span>
                    </div>
                  </div>
                  <p className="text-xs text-foreground/50">{item.date}</p>
                </div>

                {/* Hover CTA */}
                <Link
                  href={`/research/${item.id}`}
                  className="mt-4 flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-primary/20 transition-colors group/link"
                >
                  <span className="text-sm font-medium text-foreground/70 group-hover/link:text-primary">
                    Read Article
                  </span>
                  <Share2 size={16} className="text-foreground/40 group-hover/link:text-primary" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile CTA */}
        <Link
          href="/research"
          className="md:hidden mt-12 w-full flex items-center justify-center px-6 py-3 rounded-lg border border-primary text-primary font-medium hover:bg-primary/10 transition-all"
        >
          View All Research →
        </Link>
      </div>
    </section>
  )
}
