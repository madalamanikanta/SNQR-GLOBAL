'use client'

import { useState } from 'react'
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import { PageShell } from '@/components/page-shell'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' })

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  return (
    <main>
      <PageShell eyebrow="Contact" title="Let’s build your next edge" description="Speak with our team about research access, product demos, and strategic partnerships." />

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-primary">Reach us</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white">Available for demos, partnerships, and strategic briefings.</h2>
            <div className="mt-8 space-y-6">
              {[
                { title: 'Email', value: 'contact@intelligence.com', detail: 'sales@intelligence.com', icon: Mail },
                { title: 'Phone', value: '+1 (212) 555-0123', detail: 'Mon–Fri, 9:00–18:00 ET', icon: Phone },
                { title: 'Office', value: 'Intelligence Research', detail: 'New York, NY 10001 · United States', icon: MapPin },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="flex gap-4 rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary"><Icon size={20} /></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <p className="mt-1 text-white/70">{item.value}</p>
                      <p className="text-sm text-white/50">{item.detail}</p>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/10 p-5 text-sm leading-7 text-white/70">
              Response times are typically under two business hours during East Coast operating hours.
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-slate-950/60 p-8 backdrop-blur-xl">
            <h2 className="text-3xl font-semibold tracking-tight text-white">Send a message</h2>
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {[
                { label: 'Name', name: 'name', type: 'text', placeholder: 'Your name', required: true },
                { label: 'Email', name: 'email', type: 'email', placeholder: 'you@company.com', required: true },
                { label: 'Company', name: 'company', type: 'text', placeholder: 'Your company', required: false },
              ].map((field) => (
                <div key={field.name}>
                  <label className="mb-2 block text-sm font-semibold text-white/80">{field.label}{field.required ? ' *' : ''}</label>
                  <input type={field.type} required={field.required} value={formData[field.name as keyof typeof formData]} onChange={(event) => setFormData({ ...formData, [field.name]: event.target.value })} className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/35 outline-none transition-all focus:border-primary/50" placeholder={field.placeholder} />
                </div>
              ))}
              <div>
                <label className="mb-2 block text-sm font-semibold text-white/80">Message *</label>
                <textarea required value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} className="min-h-36 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/35 outline-none transition-all focus:border-primary/50" placeholder="Tell us about your inquiry..." />
              </div>
              <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02]">
                Send message
                <ArrowRight size={18} />
              </button>
            </form>
            <p className="mt-4 text-sm text-white/50">By sending this form, you agree to our privacy policy.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
