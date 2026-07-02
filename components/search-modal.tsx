'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, Zap } from 'lucide-react'
import Link from 'next/link'

interface SearchResult {
  id: string
  title: string
  description: string
  category: 'research' | 'book' | 'audio' | 'page'
  url: string
  author?: string
}

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])

  const mockSearchData: SearchResult[] = [
    {
      id: '1',
      title: 'The AI Revolution in Finance',
      description: 'Exploring artificial intelligence applications in institutional investing',
      category: 'audio',
      url: '/audio/ai-revolution',
      author: 'Dr. Sarah Chen',
    },
    {
      id: '2',
      title: 'Mastering Market Intelligence',
      description: 'A comprehensive guide to advanced market analysis and institutional investment strategies',
      category: 'book',
      url: '/books/mastering-markets',
      author: 'Dr. Alexandra Sterling',
    },
    {
      id: '3',
      title: 'The Future of Artificial Intelligence in Finance',
      description: 'Deep-dive analysis on AI transforming the investment landscape',
      category: 'research',
      url: '/research/ai-in-finance',
      author: 'Dr. Sarah Chen',
    },
    {
      id: '4',
      title: 'Geopolitical Risks and Market Volatility',
      description: 'Understanding how geopolitical events impact markets',
      category: 'research',
      url: '/research/geopolitics',
      author: 'Michael Richardson',
    },
    {
      id: '5',
      title: 'Solutions',
      description: 'Enterprise-grade intelligence solutions for institutions',
      category: 'page',
      url: '/solutions',
    },
    {
      id: '6',
      title: 'Products',
      description: 'Complete suite of investment research tools',
      category: 'page',
      url: '/products',
    },
  ]

  useEffect(() => {
    if (query.length === 0) {
      setResults([])
      return
    }

    const filtered = mockSearchData.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        (item.author?.toLowerCase().includes(query.toLowerCase()) ?? false),
    )

    setResults(filtered.slice(0, 8))
  }, [query])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        // Open search
      }
      if (e.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Search Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed left-1/2 top-1/4 -translate-x-1/2 w-full max-w-2xl z-50"
          >
            <div className="bg-card border border-border rounded-lg shadow-2xl overflow-hidden">
              {/* Search Input */}
              <div className="p-4 border-b border-border flex items-center gap-3">
                <Search size={20} className="text-foreground/40" />
                <input
                  autoFocus
                  type="text"
                  placeholder="Search research, books, audio, products..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 bg-transparent text-lg text-foreground placeholder-foreground/40 outline-none"
                />
                <button
                  onClick={onClose}
                  className="p-1 rounded-lg hover:bg-muted transition-colors text-foreground/60"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Results */}
              <div className="max-h-96 overflow-y-auto">
                {results.length === 0 && query ? (
                  <div className="p-8 text-center text-foreground/60">
                    <p>No results found for &quot;{query}&quot;</p>
                  </div>
                ) : results.length === 0 ? (
                  <div className="p-8 space-y-4">
                    <p className="text-foreground/60 text-sm">Recent Searches</p>
                    <div className="flex flex-wrap gap-2">
                      {['AI Research', 'Market Analysis', 'Geopolitics'].map((tag) => (
                        <button
                          key={tag}
                          onClick={() => setQuery(tag)}
                          className="px-3 py-1.5 rounded-lg bg-muted text-foreground/70 hover:text-foreground transition-colors text-sm"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="p-4 space-y-2">
                    {results.map((result) => (
                      <Link
                        key={result.id}
                        href={result.url}
                        onClick={onClose}
                        className="group p-4 rounded-lg hover:bg-muted transition-colors border border-transparent hover:border-border flex gap-3"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Zap size={18} className="text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-foreground group-hover:text-primary transition-colors truncate">
                            {result.title}
                          </p>
                          <p className="text-sm text-foreground/60 truncate">{result.description}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs px-2 py-1 rounded bg-border text-foreground/60">
                              {result.category}
                            </span>
                            {result.author && (
                              <span className="text-xs text-foreground/40">{result.author}</span>
                            )}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-3 border-t border-border flex justify-between text-xs text-foreground/40 bg-muted/30">
                <div className="flex gap-4">
                  <span>↑↓ Navigate</span>
                  <span>↵ Select</span>
                  <span>ESC Close</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
