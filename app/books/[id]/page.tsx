'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Download, BookOpen } from 'lucide-react'

export default function BookDetailPage({ params }: { params: { id: string } }) {
  const bookId = params.id

  // Mock book data - in production this would come from a database
  const books: Record<string, any> = {
    'mastering-markets': {
      id: 'mastering-markets',
      title: 'Mastering Market Intelligence',
      author: 'Dr. Alexandra Sterling',
      category: 'Investment Strategy',
      year: 2024,
      description:
        'A comprehensive guide to advanced market analysis and institutional investment strategies in the modern era.',
      fullDescription: `In this groundbreaking work, Dr. Alexandra Sterling provides a masterclass in modern market intelligence. Drawing from decades of experience at leading hedge funds and investment firms, she reveals the sophisticated analytical frameworks that separate world-class investors from the rest.

This book covers:
- Advanced portfolio construction techniques
- Macroeconomic analysis frameworks
- Risk assessment methodologies
- AI-powered market prediction
- Geopolitical impact on markets
- Real-world case studies from institutional investors

Perfect for portfolio managers, analysts, and institutional investors seeking to enhance their decision-making capabilities.`,
      pages: 432,
      isbn: '978-1-234567-89-0',
      tags: ['Markets', 'Strategy', 'Finance', 'Investment'],
    },
    'geopolitics-wealth': {
      id: 'geopolitics-wealth',
      title: 'Geopolitics and Global Wealth',
      author: 'Michael Richardson',
      category: 'Geopolitics',
      year: 2024,
      description: 'Understanding how geopolitical events shape investment opportunities and market dynamics.',
      pages: 356,
      isbn: '978-1-234567-90-6',
      tags: ['Geopolitics', 'Markets', 'Global', 'Investment'],
    },
  }

  const book = books[bookId] || books['mastering-markets']

  return (
    <div className="bg-background min-h-screen">
      {/* Back Button */}
      <div className="fixed top-24 left-6 z-50">
        <Link
          href="/books"
          className="flex items-center space-x-2 text-foreground/60 hover:text-primary transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Books</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          {/* Book Cover */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="md:col-span-1 flex justify-center"
          >
            <div className="w-full max-w-xs aspect-[2/3] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg border border-border flex items-center justify-center">
              <BookOpen size={48} className="text-primary/40" />
            </div>
          </motion.div>

          {/* Book Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2"
          >
            <div className="space-y-6">
              <div>
                <p className="text-primary text-sm font-semibold mb-2">{book.category}</p>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
                  {book.title}
                </h1>
                <p className="text-xl text-foreground/70">by {book.author}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {book.tags.map((tag: string) => (
                  <span key={tag} className="px-3 py-1 bg-muted text-foreground/70 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-lg text-foreground/70 leading-relaxed">{book.description}</p>

              <div className="grid grid-cols-2 gap-4 py-6 border-y border-border">
                <div>
                  <p className="text-foreground/50 text-sm mb-1">Published</p>
                  <p className="text-lg font-semibold">{book.year}</p>
                </div>
                <div>
                  <p className="text-foreground/50 text-sm mb-1">Pages</p>
                  <p className="text-lg font-semibold">{book.pages}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all flex items-center justify-center gap-2"
                >
                  <BookOpen size={20} />
                  Read Online
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 px-6 py-3 bg-muted text-foreground font-medium rounded-lg hover:bg-border transition-all flex items-center justify-center gap-2"
                >
                  <Download size={20} />
                  Download PDF
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full Description */}
      <section className="py-12 px-6 md:px-12 lg:px-24 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-6">About This Book</h2>
          <div className="prose prose-invert max-w-none">
            {book.fullDescription?.split('\n\n').map((paragraph: string, i: number) => (
              <p key={i} className="text-foreground/70 text-lg leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Related Books */}
      <section className="py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Related Books</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {['geopolitics-wealth', 'mastering-markets'].slice(0, 3).map((relatedId) => {
              const relatedBook = books[relatedId]
              return (
                <Link
                  key={relatedId}
                  href={`/books/${relatedId}`}
                  className="group bg-card border border-border rounded-lg p-6 hover:border-primary transition-all"
                >
                  <div className="w-full h-48 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg mb-4 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/20 transition-all">
                    <BookOpen size={40} className="text-primary/40" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {relatedBook.title}
                  </h3>
                  <p className="text-sm text-foreground/60">{relatedBook.author}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
