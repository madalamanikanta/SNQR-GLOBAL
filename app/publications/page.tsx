import Link from 'next/link'
import { ArrowRight, Calendar, Download, FileText } from 'lucide-react'
import { PageShell } from '@/components/page-shell'

const publications = [
  { id: 1, title: 'Annual investment outlook 2025', type: 'Annual report', date: 'January 2025', description: 'Comprehensive market outlook and investment strategy recommendations for 2025.' },
  { id: 2, title: 'Q3 2024 market review & forecast', type: 'Quarterly report', date: 'October 2024', description: 'Detailed analysis of Q3 market movements and forward-looking guidance.' },
  { id: 3, title: 'The rise of AI in investment management', type: 'White paper', date: 'September 2024', description: 'In-depth research on AI implementation across institutional investment operations.' },
  { id: 4, title: 'Geopolitical risk index report', type: 'Research paper', date: 'August 2024', description: 'Quantifying geopolitical risk and its correlation with market movements.' },
  { id: 5, title: 'ESG integration framework', type: 'White paper', date: 'July 2024', description: 'Best practices for integrating environmental, social, and governance factors.' },
  { id: 6, title: 'Emerging markets deep dive', type: 'Research paper', date: 'June 2024', description: 'Analysis of growth opportunities in emerging market economies.' },
]

export default function PublicationsPage() {
  return (
    <main>
      <PageShell eyebrow="Publications" title="Reports, briefs, and long-form analysis" description="White papers and research reports from our team of analysts and strategists." />

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {publications.map((pub) => (
            <div key={pub.id} className="group rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/10">
              <div className="mb-5 flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary"><FileText size={22} /></div>
                <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-primary">{pub.type}</span>
              </div>
              <h3 className="text-xl font-semibold text-white">{pub.title}</h3>
              <p className="mt-3 flex items-center gap-2 text-sm text-white/55"><Calendar size={14} />{pub.date}</p>
              <p className="mt-4 text-base leading-7 text-white/65">{pub.description}</p>
              <Link href="#" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 hover:gap-3">
                <Download size={16} /> Download
                <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
