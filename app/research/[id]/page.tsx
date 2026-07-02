import Link from 'next/link'
import { ArrowLeft, Bookmark, Share2, Clock, User, Calendar, Tag } from 'lucide-react'

const articles = {
  1: {
    title: 'The Future of Artificial Intelligence in Finance',
    subtitle: 'How machine learning and neural networks are transforming financial services',
    author: 'Dr. Sarah Chen',
    date: 'October 18, 2024',
    readingTime: '12 min',
    category: 'Artificial Intelligence',
    tags: ['AI', 'Finance', 'Technology', 'Machine Learning'],
    image: 'bg-gradient-to-br from-primary/20 to-secondary/20',
    content: `
      <h2>Introduction</h2>
      <p>Artificial intelligence is no longer a future technology—it's reshaping how financial institutions operate today. From algorithmic trading to risk management, AI applications are becoming central to institutional investment strategies.</p>

      <h2>Current Applications of AI in Finance</h2>
      <p>Financial institutions are deploying AI across multiple domains:</p>
      <ul>
        <li><strong>Algorithmic Trading:</strong> AI-powered systems execute trades based on market patterns and real-time data</li>
        <li><strong>Risk Management:</strong> Machine learning models identify emerging risks before they become critical</li>
        <li><strong>Portfolio Optimization:</strong> AI algorithms continuously rebalance portfolios for optimal risk-adjusted returns</li>
        <li><strong>Natural Language Processing:</strong> Analyzing earnings calls, SEC filings, and news to extract investment signals</li>
      </ul>

      <h2>The Competitive Advantage</h2>
      <p>Institutions that effectively leverage AI gain significant competitive advantages. These systems can process vast amounts of data, identify non-obvious patterns, and execute decisions at machine speed—advantages that human traders cannot match.</p>

      <h2>Challenges and Considerations</h2>
      <p>Despite the opportunities, implementing AI in finance presents challenges:</p>
      <ul>
        <li>Data quality and availability</li>
        <li>Model interpretability and explainability</li>
        <li>Regulatory compliance and risk management</li>
        <li>Talent acquisition and retention</li>
      </ul>

      <h2>Future Outlook</h2>
      <p>As AI technology matures, we expect to see further integration into financial services. The institutions best positioned for the future will be those that successfully combine human expertise with AI capabilities.</p>
    `,
    relatedArticles: [2, 4, 5],
  },
  2: {
    title: 'Geopolitical Risks and Market Volatility',
    subtitle: 'Understanding the complex relationship between geopolitics and markets',
    author: 'Michael Richardson',
    date: 'October 17, 2024',
    readingTime: '15 min',
    category: 'Geopolitics',
    tags: ['Geopolitics', 'Risk', 'Markets', 'Volatility'],
    image: 'bg-gradient-to-br from-secondary/20 to-accent/20',
    content: `
      <h2>Geopolitical Risk in the Modern Era</h2>
      <p>Geopolitical tensions have increasingly become a driver of market volatility. From trade disputes to sanctions regimes, geopolitical events can have immediate and significant impacts on markets.</p>

      <h2>Key Risk Factors</h2>
      <p>Several geopolitical factors are creating investment headwinds:</p>
      <ul>
        <li>Trade tensions between major economies</li>
        <li>Regional conflicts and their supply chain implications</li>
        <li>Sanctions regimes affecting commodity markets</li>
        <li>Technology export controls</li>
      </ul>

      <h2>Implications for Investors</h2>
      <p>Investors must develop robust geopolitical risk monitoring capabilities to stay ahead of market moves.</p>
    `,
    relatedArticles: [1, 3, 6],
  },
}

export default function ResearchArticle({ params }: { params: { id: string } }) {
  const article = articles[params.id as keyof typeof articles]

  if (!article) {
    return (
      <main className="bg-background min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Article Not Found</h1>
          <p className="text-foreground/60 mb-8">This research article doesn't exist.</p>
          <Link
            href="/research"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg transition-all"
          >
            <ArrowLeft size={18} />
            Back to Research
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-background">
      {/* Navigation */}
      <div className="sticky top-16 z-40 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/research"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            <ArrowLeft size={18} />
            Back to Research
          </Link>
        </div>
      </div>

      {/* Article */}
      <article className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Image */}
          <div className={`h-96 rounded-2xl ${article.image} mb-12 border border-border`} />

          {/* Meta */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-muted text-sm font-semibold text-primary">
                {article.category}
              </span>
              <span className="text-sm text-foreground/60">{article.readingTime}</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
              {article.title}
            </h1>

            <p className="text-2xl text-foreground/70 mb-6">
              {article.subtitle}
            </p>

            {/* Author & Date */}
            <div className="flex flex-wrap items-center gap-6 pb-6 border-b border-border">
              <div className="flex items-center gap-2 text-foreground/60">
                <User size={18} />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/60">
                <Calendar size={18} />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2 text-foreground/60">
                <Clock size={18} />
                <span>{article.readingTime}</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 mb-12">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-primary hover:bg-primary/10 text-foreground/70 hover:text-primary transition-all">
              <Bookmark size={18} />
              Save
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-primary hover:bg-primary/10 text-foreground/70 hover:text-primary transition-all">
              <Share2 size={18} />
              Share
            </button>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none mb-16">
            <div
              dangerouslySetInnerHTML={{ __html: article.content }}
              className="space-y-6 text-lg text-foreground/70 leading-relaxed"
            >
            </div>
          </div>

          {/* Tags */}
          <div className="py-8 border-y border-border mb-12">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/research?search=${tag}`}
                  className="px-3 py-1.5 rounded-full bg-card border border-border hover:border-primary text-sm text-foreground/70 hover:text-primary transition-all"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </div>

          {/* Related Articles */}
          {article.relatedArticles && article.relatedArticles.length > 0 && (
            <div className="py-12">
              <h3 className="text-2xl font-bold text-foreground mb-8">
                Related Research
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {article.relatedArticles.map((relatedId) => {
                  const related = articles[relatedId as keyof typeof articles]
                  return (
                    <Link
                      key={relatedId}
                      href={`/research/${relatedId}`}
                      className="group p-6 rounded-lg border border-border hover:border-primary hover:bg-card transition-all"
                    >
                      <p className="text-sm text-primary font-semibold mb-2">
                        {related.category}
                      </p>
                      <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                        {related.title}
                      </h4>
                      <p className="text-sm text-foreground/60">
                        by {related.author}
                      </p>
                    </Link>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Want to read more research?
          </h2>
          <p className="text-lg text-foreground/60 mb-8">
            Explore our full research library for insights on markets, AI, geopolitics, and more.
          </p>
          <Link
            href="/research"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg transition-all"
          >
            Browse Research
          </Link>
        </div>
      </section>
    </main>
  )
}
