import Link from 'next/link'
import { BookOpen, Download, Headphones, ArrowRight } from 'lucide-react'

const books = [
  {
    id: 1,
    title: 'The New Investment Paradigm',
    author: 'Dr. James Peterson',
    category: 'Investment Strategy',
    description: 'Comprehensive guide to modern portfolio construction in the age of AI and algorithmic trading.',
    year: 2024,
    icon: BookOpen,
  },
  {
    id: 2,
    title: 'Geopolitics and Markets',
    author: 'Sarah Mitchell',
    category: 'Geopolitics',
    description: 'Understanding how global events shape market movements and investment opportunities.',
    year: 2024,
    icon: BookOpen,
  },
  {
    id: 3,
    title: 'AI for Finance Professionals',
    author: 'Prof. David Chen',
    category: 'Technology',
    description: 'Practical guide to implementing AI and machine learning in financial operations.',
    year: 2023,
    icon: BookOpen,
  },
  {
    id: 4,
    title: 'Risk Management in Uncertain Times',
    author: 'Michael Johnson',
    category: 'Risk',
    description: 'Advanced techniques for managing portfolio risk in volatile markets.',
    year: 2023,
    icon: BookOpen,
  },
]

export default function BooksPage() {
  return (
    <main className="bg-background">
      {/* Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Research Books
          </h1>
          <p className="text-xl text-foreground/60 leading-relaxed">
            Premium research publications and educational resources from leading experts in finance and investment.
          </p>
        </div>
      </section>

      {/* Books Library */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {books.map((book) => (
              <div
                key={book.id}
                className="group relative p-8 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all"
              >
                {/* Icon */}
                <div className="mb-6 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <BookOpen size={28} className="text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {book.title}
                </h3>
                <p className="text-primary font-semibold mb-3">by {book.author}</p>
                <p className="text-sm text-primary/80 mb-4">{book.category} • {book.year}</p>
                <p className="text-foreground/60 mb-6 leading-relaxed">
                  {book.description}
                </p>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary font-medium transition-all">
                    <BookOpen size={16} />
                    Read
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary font-medium transition-all">
                    <Download size={16} />
                    Download
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary font-medium transition-all">
                    <Headphones size={16} />
                    Audio
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-foreground/60 mb-8">
              All books are included with premium Intelligence membership.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg transition-all group"
            >
              Get Access
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
