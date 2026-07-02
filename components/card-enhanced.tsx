'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  children: React.ReactNode
}

export function CardEnhanced({ hover = true, children, className = '', ...props }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.02 } : undefined}
      className={`bg-card border border-border rounded-lg p-6 transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
}
