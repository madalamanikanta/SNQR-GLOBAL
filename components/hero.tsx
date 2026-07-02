'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ArrowRight, ChevronDown } from 'lucide-react'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animate grid on load
    if (gridRef.current) {
      const gridItems = gridRef.current.querySelectorAll('.grid-item')
      gsap.to(gridItems, {
        opacity: 1,
        duration: 2,
        stagger: 0.05,
        ease: 'power2.out',
      })
    }

    // Parallax effect on scroll
    const handleMouseMove = (e: MouseEvent) => {
      if (!gridRef.current) return
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      const xPercent = (clientX / innerWidth - 0.5) * 10
      const yPercent = (clientY / innerHeight - 0.5) * 10

      gsap.to(gridRef.current, {
        x: xPercent,
        y: yPercent,
        duration: 0.5,
        ease: 'power2.out',
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated Background Grid */}
      <div ref={gridRef} className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-secondary/20" />
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1" className="text-primary" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-l from-accent/20 to-primary/20 rounded-full blur-3xl opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-primary">
            ✨ Premium Institutional Research Platform
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight text-balance"
        >
          Transforming Research Into{' '}
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Intelligent Decisions
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-foreground/70 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Institutional-grade research, investment intelligence, geopolitical analysis, market insights, and AI-powered decision support built for the world's smartest investors.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Link
            href="/research"
            className="group px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-2xl hover:shadow-primary/40 hover:scale-105 transition-all inline-flex items-center gap-2"
          >
            Explore Research
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
          <Link
            href="/products"
            className="px-8 py-4 rounded-lg border border-border text-foreground font-semibold hover:bg-muted hover:border-primary transition-all"
          >
            View Products
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center mt-16"
        >
          <div className="p-2 rounded-lg border border-border/50 text-foreground/40 hover:text-primary hover:border-primary/50 transition-colors cursor-pointer">
            <ChevronDown size={24} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
