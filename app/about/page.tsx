import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function AboutPage() {
  return (
    <main className="bg-background">
      {/* Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            About Intelligence
          </h1>
          <p className="text-xl text-foreground/60 leading-relaxed">
            Premium institutional research and investment intelligence platform trusted by the world's leading investment firms.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-6">Our Mission</h2>
          <p className="text-xl text-foreground/60 leading-relaxed mb-8">
            We empower institutional investors, policy makers, and research organizations with world-class intelligence and decision-support tools. Our mission is to democratize access to premium research and advanced analytics that were previously available only to the largest institutions.
          </p>
          <p className="text-xl text-foreground/60 leading-relaxed">
            By combining cutting-edge technology with deep domain expertise, we enable our clients to make better, more informed decisions faster.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted border-b border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-lg bg-card border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-3">Institutional Quality</h3>
              <p className="text-foreground/60">
                Everything we build meets the highest standards for institutional investors, with enterprise-grade security, compliance, and reliability.
              </p>
            </div>
            <div className="p-8 rounded-lg bg-card border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-3">Research Excellence</h3>
              <p className="text-foreground/60">
                Our research team consists of PhDs, former hedge fund analysts, and policy experts with decades of combined experience.
              </p>
            </div>
            <div className="p-8 rounded-lg bg-card border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-3">Technology Innovation</h3>
              <p className="text-foreground/60">
                We leverage AI, machine learning, and advanced analytics to provide insights that would be impossible to derive manually.
              </p>
            </div>
            <div className="p-8 rounded-lg bg-card border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-3">Client Success</h3>
              <p className="text-foreground/60">
                Your success is our success. We're committed to delivering tangible value and measurable improvements to your investment process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="text-5xl font-bold text-primary mb-2">200+</div>
            <p className="text-foreground/60">Institutional Clients</p>
          </div>
          <div>
            <div className="text-5xl font-bold text-primary mb-2">50+</div>
            <p className="text-foreground/60">Expert Researchers</p>
          </div>
          <div>
            <div className="text-5xl font-bold text-primary mb-2">$500B+</div>
            <p className="text-foreground/60">Assets Under Management</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to partner with us?
          </h2>
          <p className="text-lg text-foreground/60 mb-8">
            Join hundreds of institutional investors using Intelligence to make better decisions.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/40 transition-all group"
          >
            Get in Touch
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  )
}
