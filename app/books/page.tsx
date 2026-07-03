import Link from 'next/link'
import { ArrowRight, BookOpen, Download, Headphones } from 'lucide-react'
import { PageShell } from '@/components/page-shell'

const books = [
  { id: 1, title: 'The new investment paradigm', author: 'Dr. James Peterson', category: 'Investment strategy', description: 'A practical guide to modern portfolio construction in the age of AI and algorithmic trading.', year: 2024 },
  { id: 2, title: 'Geopolitics and markets', author: 'Sarah Mitchell', category: 'Geopolitics', description: 'Understanding how global events shape market movements and investment opportunities.', year: 2024 },
  { id: 3, title: 'AI for finance professionals', author: 'Prof. David Chen', category: 'Technology', description: 'Practical guidance to implementing AI and machine learning in financial operations.', year: 2023 },
  { id: 4, title: 'Risk management in uncertain times', author: 'Michael Johnson', category: 'Risk', description: 'Advanced techniques for managing portfolio risk in volatile markets.', year: 2023 },
]

export default function BooksPage() {
  return (
    <main>
      <PageShell eyebrow="Books" title="Research books for deeper strategic thinking" description="Premium publications and educational resources from leading experts in finance, policy, and technology." />

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {books.map((book) => (
            <div key={book.id} className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary"><BookOpen size={22} /></div>
              <h3 className="text-2xl font-semibold text-white">{book.title}</h3>
              <p className="mt-2 text-base font-semibold text-primary">by {book.author}</p>
              <p className="mt-3 text-sm uppercase tracking-[0.24em] text-white/45">{book.category} • {book.year}</p>
              <p className="mt-4 text-base leading-7 text-white/65">{book.description}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {[['Read', BookOpen], ['Download', Download], ['Audio', Headphones]].map(([label, Icon]) => (
                  <button key={label} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/40 px-4 py-2 text-sm font-medium text-white/70 transition-all duration-300 hover:border-primary/30 hover:text-white">
                    {Icon ? <Icon size={16} /> : null}
                    {label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-[32px] border border-white/10 bg-gradient-to-br from-primary/10 via-white/5 to-transparent p-10 text-center backdrop-blur-xl">
          <p className="text-lg text-white/70">All books are included with premium Intelligence membership.</p>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03]">
            Get access
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}
