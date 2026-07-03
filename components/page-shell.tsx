'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface PageShellProps {
  eyebrow?: string
  title: string
  description?: string
  children?: ReactNode
  align?: 'center' | 'left'
  className?: string
  compact?: boolean
}

export function PageShell({
  eyebrow,
  title,
  description,
  children,
  align = 'center',
  className = '',
  compact = false,
}: PageShellProps) {
  const alignClasses = align === 'left' ? 'items-start text-left' : 'items-center text-center'

  return (
    <section className={`relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,153,255,0.16),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(93,63,211,0.15),transparent_45%)]" />
      <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`flex flex-col ${alignClasses} ${compact ? 'max-w-3xl' : 'max-w-4xl'} ${align === 'left' ? 'mx-0' : 'mx-auto'}`}
        >
          {eyebrow ? (
            <span className="mb-4 inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-primary">
              {eyebrow}
            </span>
          ) : null}
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
              {description}
            </p>
          ) : null}
        </motion.div>
        {children ? <div className="relative mt-14">{children}</div> : null}
      </div>
    </section>
  )
}
