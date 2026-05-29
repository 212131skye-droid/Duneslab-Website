'use client'

import { motion } from 'framer-motion'
import { Cpu, Lightbulb, Monitor, Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import CTAStrip from '@/components/CTAStrip'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const aiSoftwareFeatures = [
  'Live product database integration (ERP, SQL, CSV)',
  'AI-powered pricing rules engine with margin control',
  'Branded PDF generation in under 10 seconds',
  'Multi-user access for your full sales team',
  'Quote version history and revision tracking',
  'One-click email delivery to clients',
  'Real-time dashboard with deal status tracking',
  'ERP and CRM integration (Exact, AFAS, SAP)',
  'Custom branding and layout per template',
  'GDPR-compliant data handling and storage',
]

const consultancySteps = [
  {
    number: '01',
    title: 'Discovery call',
    description:
      '90-minute session to map your current workflows, understand your bottlenecks and identify where automation delivers the most value.',
  },
  {
    number: '02',
    title: 'Process audit',
    description:
      'We analyse your tools, data flows and team habits. Every manual step that can be automated is documented with an estimated time and cost saving.',
  },
  {
    number: '03',
    title: 'Roadmap',
    description:
      'A prioritised list of automation opportunities, each with ROI estimates, technical requirements and a recommended implementation order.',
  },
  {
    number: '04',
    title: 'Proof of concept',
    description:
      'We build a small, working automation to demonstrate value before committing to a full rollout. You see it work before you invest.',
  },
  {
    number: '05',
    title: 'Full rollout',
    description:
      'Implementation, testing, and team training. We handle every step and stay available for questions after go-live.',
  },
]

const webDesignIncludes = [
  'Custom design from zero — no templates, ever',
  'Mobile-first, fully responsive layout',
  'SEO-optimised structure and metadata',
  'Core Web Vitals optimised (LCP, CLS, FID)',
  'CMS integration (Sanity, Contentful) on request',
  '6 months of post-launch support and updates',
]

const webTechStack = ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Framer Motion']

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        label="Solutions"
        heading="What We Build."
        subtext="Three core services, one mission: make your business faster and smarter."
      />

      {/* AI Software */}
      <section
        className="py-24 lg:py-32 border-b border-edge"
        style={{ background: 'rgba(5,5,5,0.92)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-block font-display font-bold text-[9px] tracking-[0.28em] uppercase px-2 py-1 mb-6 text-void bg-gold">
                FLAGSHIP
              </span>
              <div className="flex items-center gap-3 mb-6">
                <Cpu size={28} className="text-gold" strokeWidth={1.5} />
                <h2 className="font-display font-bold text-3xl lg:text-4xl text-ink">
                  AI Software & SaaS
                </h2>
              </div>
              <p className="text-ink-dim text-lg leading-relaxed mb-6">
                Our flagship product automates the entire quotation workflow. Sales teams
                select products from a clean interface, and our AI engine generates a
                perfect, branded PDF quotation in under 10 seconds — pulling live prices
                directly from your database.
              </p>
              <p className="text-ink-dim text-base leading-relaxed mb-10">
                Built specifically for B2B enterprises that handle high volumes of custom
                quotations. No generic SaaS tool you have to bend into shape — this is
                engineered around your workflow, your data, and your brand.
              </p>
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 text-gold font-display font-semibold text-sm tracking-wide hover:text-gold-bright transition-colors"
              >
                See how it works <ArrowRight size={14} />
              </Link>
            </motion.div>

            <motion.div variants={fadeUp}>
              <div className="p-8 border border-edge bg-surface">
                <p className="font-display font-bold text-xs tracking-[0.2em] uppercase text-gold mb-6">
                  What's included
                </p>
                <ul className="flex flex-col gap-3">
                  {aiSoftwareFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check size={14} className="text-gold mt-0.5 shrink-0" strokeWidth={2.5} />
                      <span className="text-ink-dim text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* AI Consultancy */}
      <section
        className="py-24 lg:py-32 border-b border-edge"
        style={{ background: 'rgba(5,5,5,0.92)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.div variants={fadeUp} className="max-w-2xl mb-14">
              <span className="inline-block font-display font-bold text-[9px] tracking-[0.28em] uppercase px-2 py-1 mb-6 text-gold border border-gold-muted">
                STRATEGY
              </span>
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb size={28} className="text-ink-dim" strokeWidth={1.5} />
                <h2 className="font-display font-bold text-3xl lg:text-4xl text-ink">
                  AI Consultancy
                </h2>
              </div>
              <p className="text-ink-dim text-lg leading-relaxed">
                Not sure where AI fits in your business — or where to start? We map your
                current workflows, identify the highest-value automation opportunities, and
                build you a clear, actionable roadmap. No jargon, no hype. Just a plan
                that actually makes sense for your team.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-edge">
              {consultancySteps.map((step) => (
                <motion.div
                  key={step.number}
                  variants={fadeUp}
                  className="bg-void p-8 group"
                >
                  <div className="font-display font-bold text-4xl text-gold opacity-30 group-hover:opacity-80 transition-opacity duration-300 mb-4 leading-none">
                    {step.number}
                  </div>
                  <h3 className="font-display font-bold text-base text-ink mb-3">
                    {step.title}
                  </h3>
                  <p className="text-ink-dim text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Web Design */}
      <section
        className="py-24 lg:py-32"
        style={{ background: 'rgba(5,5,5,0.92)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-block font-display font-bold text-[9px] tracking-[0.28em] uppercase px-2 py-1 mb-6 text-gold border border-gold-muted">
                DIGITAL
              </span>
              <div className="flex items-center gap-3 mb-6">
                <Monitor size={28} className="text-ink-dim" strokeWidth={1.5} />
                <h2 className="font-display font-bold text-3xl lg:text-4xl text-ink">
                  Web Design
                </h2>
              </div>
              <p className="text-ink-dim text-lg leading-relaxed mb-6">
                Professional, conversion-focused websites built from the ground up.
                Every site we design starts from a blank canvas — no templates, no
                page builders, no compromises on quality.
              </p>
              <p className="text-ink-dim text-base leading-relaxed mb-10">
                We use the same technology stack we build our own products on:
                fast, clean, and designed to rank. Sites are delivered with
                six months of support included.
              </p>
              <div className="flex flex-wrap gap-2">
                {webTechStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-display text-xs tracking-wide px-3 py-1.5 border border-edge text-ink-dim"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <div className="p-8 border border-edge bg-surface">
                <p className="font-display font-bold text-xs tracking-[0.2em] uppercase text-ink-dim mb-6">
                  What's included
                </p>
                <ul className="flex flex-col gap-3">
                  {webDesignIncludes.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check size={14} className="text-gold mt-0.5 shrink-0" strokeWidth={2.5} />
                      <span className="text-ink-dim text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CTAStrip
        heading="Interested in working together?"
        subtext="Book a free call and we'll discuss which service fits your goals best."
        buttonLabel="Book a call →"
        buttonHref="/contact"
        secondaryLabel="View pricing"
        secondaryHref="/pricing"
      />
    </>
  )
}

