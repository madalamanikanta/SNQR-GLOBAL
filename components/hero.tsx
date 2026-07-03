'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react'

export function Hero() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!gridRef.current) return
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event
      const { innerWidth, innerHeight } = window
      const xPercent = (clientX / innerWidth - 0.5) * 16
      const yPercent = (clientY / innerHeight - 0.5) * 16
      gsap.to(gridRef.current, { x: xPercent, y: yPercent, duration: 0.6, ease: 'power2.out' })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-transparent pt-16">
      <div ref={gridRef} className="pointer-events-none absolute inset-0 opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(95,140,255,0.2),transparent_30%),radial-gradient(circle_at_70%_20%,rgba(139,92,246,0.18),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(243,201,139,0.12),transparent_26%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute left-[10%] top-[18%] h-72 w-72 rounded-full bg-primary/25 blur-[120px]" />
        <div className="absolute bottom-[8%] right-[8%] h-80 w-80 rounded-full bg-secondary/20 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-8 flex items-center gap-2 rounded-full border border-primary/30 bg-white/8 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-xl">
          <Sparkles size={16} className="text-primary" />
          Premium institutional research platform
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.03em] text-white sm:text-6xl lg:text-8xl">
          Shape decisions with
          <span className="mt-3 block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">clarity, depth, and speed.</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-8 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
          Institutional-grade research, market intelligence, and AI-assisted analysis designed for teams navigating complexity with precision.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Link href="/research" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_35px_rgba(95,140,255,0.25)] transition-all duration-300 hover:scale-[1.03]">
            Explore research
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link href="/products" className="rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white/80 backdrop-blur-xl transition-all duration-300 hover:border-primary/30 hover:text-white">
            View products
          </Link>
        </motion.div>

        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2.2, repeat: Infinity }} className="mt-16 flex justify-center">
          <div className="rounded-full border border-white/10 bg-white/5 p-3 text-white/50 backdrop-blur-xl">
            <ChevronDown size={22} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
