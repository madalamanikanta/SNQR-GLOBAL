'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Play, Pause, Download, Volume2 } from 'lucide-react'
import { useState } from 'react'

export default function AudioDetailPage({ params }: { params: { id: string } }) {
  const audioId = params.id
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  // Mock audio data
  const audioLibrary: Record<string, any> = {
    'ai-revolution': {
      id: 'ai-revolution',
      title: 'The AI Revolution in Finance',
      narrator: 'Dr. Sarah Chen',
      category: 'Technology',
      duration: '2:34:00',
      durationSeconds: 9240,
      description: 'An in-depth exploration of artificial intelligence applications in institutional investment management.',
      tags: ['AI', 'Finance', 'Technology', 'Investment'],
    },
    'market-cycles': {
      id: 'market-cycles',
      title: 'Understanding Market Cycles',
      narrator: 'Michael Richardson',
      category: 'Markets',
      duration: '1:58:00',
      durationSeconds: 7080,
      description: 'Expert analysis of historical and modern market cycles and their implications for investors.',
      tags: ['Markets', 'Analysis', 'Economics'],
    },
  }

  const audio = audioLibrary[audioId] || audioLibrary['ai-revolution']

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    const secs = Math.floor(seconds % 60)
    return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="bg-background min-h-screen">
      {/* Back Button */}
      <div className="fixed top-24 left-6 z-50">
        <Link
          href="/audio"
          className="flex items-center space-x-2 text-foreground/60 hover:text-primary transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Audio</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          {/* Waveform Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-lg border border-border"
          >
            <div className="flex items-center justify-center h-32 gap-1">
              {Array.from({ length: 60 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1 bg-gradient-to-t from-primary to-secondary rounded-full"
                  animate={isPlaying ? { height: [20, 30, 25, 35, 20] } : { height: 20 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.05,
                    repeat: Infinity,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Audio Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <div>
              <p className="text-primary text-sm font-semibold mb-2">{audio.category}</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4">
                {audio.title}
              </h1>
              <p className="text-xl text-foreground/70">Narrated by {audio.narrator}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {audio.tags.map((tag: string) => (
                <span key={tag} className="px-3 py-1 bg-muted text-foreground/70 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-lg text-foreground/70 leading-relaxed">{audio.description}</p>

            {/* Player Controls */}
            <div className="space-y-4 mt-8 p-6 bg-card border border-border rounded-lg">
              {/* Progress Bar */}
              <div className="space-y-2">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progress}
                  onChange={(e) => setProgress(Number(e.target.value))}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-sm text-foreground/60">
                  <span>{formatTime((progress / 100) * audio.durationSeconds)}</span>
                  <span>{audio.duration}</span>
                </div>
              </div>

              {/* Control Buttons */}
              <div className="flex gap-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:shadow-lg hover:shadow-primary/50 transition-all"
                >
                  {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 px-6 py-3 bg-muted text-foreground font-medium rounded-lg hover:bg-border transition-all flex items-center justify-center gap-2"
                >
                  <Download size={20} />
                  Download
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-lg bg-muted hover:bg-border flex items-center justify-center transition-all"
                >
                  <Volume2 size={20} />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Transcript Section */}
      <section className="py-12 px-6 md:px-12 lg:px-24 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">Transcript</h2>
          <div className="space-y-4 text-foreground/70 leading-relaxed">
            <p>
              [00:00] Welcome to our audio research series. Today we&apos;re discussing the revolutionary impact of artificial
              intelligence on institutional finance. As we move deeper into the digital age, AI is fundamentally transforming
              how investment professionals analyze markets, execute strategies, and manage risk.
            </p>
            <p>
              [02:30] The statistics are compelling. Over 80% of leading hedge funds now incorporate AI into their investment
              process. From machine learning algorithms that identify market patterns to natural language processing that
              analyzes news sentiment, artificial intelligence is becoming indispensable...
            </p>
            <p className="text-center text-foreground/50 italic mt-8">
              [Transcript continues in full audio player]
            </p>
          </div>
        </div>
      </section>

      {/* Related Audio */}
      <section className="py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-8">Related Audio</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {['market-cycles', 'ai-revolution'].slice(0, 2).map((relatedId) => {
              const relatedAudio = audioLibrary[relatedId]
              return (
                <Link
                  key={relatedId}
                  href={`/audio/${relatedId}`}
                  className="group bg-card border border-border rounded-lg p-6 hover:border-primary transition-all"
                >
                  <div className="w-full h-32 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-lg mb-4 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/20 transition-all">
                    <Volume2 size={40} className="text-primary/40" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {relatedAudio.title}
                  </h3>
                  <p className="text-sm text-foreground/60 mb-2">{relatedAudio.narrator}</p>
                  <p className="text-xs text-foreground/50">{relatedAudio.duration}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
