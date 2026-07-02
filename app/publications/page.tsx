import Link from 'next/link'
import { FileText, Download, Calendar, ArrowRight } from 'lucide-react'

const publications = [
  {
    id: 1,
    title: 'Annual Investment Outlook 2025',
    type: 'Annual Report',
    date: 'January 2025',
    description: 'Comprehensive market outlook and investment strategy recommendations for 2025.',
  },
  {
    id: 2,
    title: 'Q3 2024 Market Review & Forecast',
    type: 'Quarterly Report',
    date: 'October 2024',
    description: 'Detailed analysis of Q3 market movements and forward-looking guidance.',
  },
  {
    id: 3,
    title: 'The Rise of AI in Investment Management',
    type: 'White Paper',
    date: 'September 2024',
    description: 'In-depth research on AI implementation across institutional investment operations.',
  },
  {
    id: 4,
    title: 'Geopolitical Risk Index Report',
    type: 'Research Paper',
    date: 'August 2024',
    description: 'Quantifying geopolitical risk and its correlation with market movements.',
  },
  {
    id: 5,
    title: 'ESG Integration Framework',
    type: 'White Paper',
    date: 'July 2024',
    description: 'Best practices for integrating environmental, social, and governance factors.',
  },
  {
    id: 6,
    title: 'Emerging Markets Deep Dive',
    type: 'Research Paper',
    date: 'June 2024',
    description: 'Analysis of growth opportunities in emerging market economies.',
  },
]

export default function PublicationsPage() {
  return (
    <main className="bg-background">
      {/* Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Publications
          </h1>
          <p className="text-xl text-foreground/60 leading-relaxed">
            White papers, research reports, and market analysis from our expert team.
          </p>
        </div>
      </section>

      {/* Publications Grid */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {publications.map((pub) => (
            <div
              key={pub.id}
              className="group relative p-6 rounded-lg bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all"
            >
              {/* Icon & Type */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10">
                  <FileText size={24} className="text-primary" />
                </div>
                <span className="px-2 py-1 rounded text-xs font-semibold text-primary bg-primary/10">
                  {pub.type}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {pub.title}
              </h3>
              <p className="text-sm text-foreground/60 mb-4 flex items-center gap-2">
                <Calendar size={14} />
                {pub.date}
              </p>
              <p className="text-foreground/70 mb-6 line-clamp-2">
                {pub.description}
              </p>

              {/* Action */}
              <Link
                href="#"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary font-medium transition-all group/link"
              >
                <Download size={16} />
                Download
                <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
