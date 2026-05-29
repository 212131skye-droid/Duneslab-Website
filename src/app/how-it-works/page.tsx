'use client'

import { motion } from 'framer-motion'
import { Database, Zap, FileText, Send, Server, Code, Globe, Check } from 'lucide-react'
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

const steps = [
  {
    number: '01',
    icon: Database,
    title: 'Connect',
    subtitle: 'We integrate with your data',
    description:
      'Duneslab connects directly to your product database, ERP system, or price list. No restructuring required — we work with your existing data structure, whether that is a cloud ERP, a local SQL server, or a shared spreadsheet.',
    details: [
      'Compatible with all major ERP and database systems',
      'Secure read-only connection — we never modify your data',
      'Live sync: price and stock changes reflect instantly in quotes',
      'Typically completed in the first week of implementation',
    ],
  },
  {
    number: '02',
    icon: Zap,
    title: 'Configure',
    subtitle: 'Your rules, your brand',
    description:
      'Once connected, we configure the intelligence layer. This includes your pricing rules, margin logic, discount structures, and PDF template design. Everything is set once, and then runs automatically for every quote thereafter.',
    details: [
      'Multi-tier pricing rules (volume discounts, client tiers, margins)',
      'Custom PDF templates matching your brand identity exactly',
      'Multiple templates for different product categories or client types',
      'Logic tested and validated before going live',
    ],
  },
  {
    number: '03',
    icon: FileText,
    title: 'Generate',
    subtitle: 'Quotes in under 10 seconds',
    description:
      'Your sales team opens the Duneslab interface, selects products and quantities, and clicks generate. The AI engine applies all configured rules and produces a complete, accurate, client-ready quotation — in under 10 seconds.',
    details: [
      'Clean, intuitive product selection interface',
      'Live price validation as products are selected',
      'Multiple currency and language support',
      'Preview mode before generating the final PDF',
    ],
  },
  {
    number: '04',
    icon: Send,
    title: 'Close',
    subtitle: 'From quote to deal',
    description:
      'Send the PDF directly from the platform with one click, or download it and attach it to your existing email workflow. Track quote status, follow-ups, and conversions from a central dashboard.',
    details: [
      'One-click email delivery with your own sender address',
      'Quote status tracking (sent, opened, accepted, rejected)',
      'Follow-up reminders and deal progression dashboard',
      'Quote history and version control per client',
    ],
  },
]

const integrations = [
  {
    category: 'ERP Systems',
    icon: Server,
    items: ['Exact Online', 'AFAS Profit', 'SAP Business One', 'Microsoft Dynamics 365'],
  },
  {
    category: 'E-commerce',
    icon: Globe,
    items: ['WooCommerce', 'Shopify (via API)', 'Magento', 'Custom storefronts'],
  },
  {
    category: 'Databases',
    icon: Database,
    items: ['MySQL / MariaDB', 'PostgreSQL', 'Microsoft SQL Server', 'SQLite'],
  },
  {
    category: 'Custom & Other',
    icon: Code,
    items: ['REST API integration', 'CSV / Excel import', 'Google Sheets sync', 'Custom connectors'],
  },
]

const timeline = [
  {
    week: 'Week 1',
    title: 'Discovery & integration',
    tasks: [
      'Kick-off call to review requirements and access',
      'System access setup (read-only credentials)',
      'Database structure review and mapping',
      'Initial integration build and connection test',
    ],
  },
  {
    week: 'Week 2',
    title: 'Configuration',
    tasks: [
      'PDF template design (based on your brand guidelines)',
      'Pricing rules and margin logic configuration',
      'Multi-tier discounting and client category setup',
      'First end-to-end test with sample data',
    ],
  },
  {
    week: 'Week 3',
    title: 'Testing & QA',
    tasks: [
      'Internal testing with real product data',
      'Feedback round with your sales team',
      'Edge case handling (zero stock, discontinued products)',
      'Performance and accuracy validation',
    ],
  },
  {
    week: 'Week 4',
    title: 'Go-live & training',
    tasks: [
      'Team training session (60-90 min, recorded)',
      'Full system go-live',
      'Monitoring period with same-day support',
      'Handover documentation and user guide',
    ],
  },
]

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        label="How it works"
        heading="From Database To Deal. In Seconds."
        subtext="Four clear steps from integration to your first AI-generated quotation."
      />

      {/* 4 steps expanded */}
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
            className="space-y-5"
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 p-8 lg:p-10 border border-edge bg-surface group hover:border-gold transition-colors duration-300"
              >
                {/* Step number + header */}
                <div className="lg:col-span-4 flex flex-col justify-start">
                  <div className="font-display font-bold text-5xl text-gold opacity-30 group-hover:opacity-80 transition-opacity duration-300 leading-none mb-4">
                    {step.number}
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <step.icon size={18} className="text-gold" strokeWidth={1.5} />
                    <span className="font-display font-bold text-xs tracking-[0.2em] uppercase text-gold">
                      {step.subtitle}
                    </span>
                  </div>
                  <h2 className="font-display font-bold text-2xl text-ink">
                    {step.title}
                  </h2>
                </div>

                {/* Divider */}
                <div className="hidden lg:block lg:col-span-1 border-l border-edge mx-auto h-full" />

                {/* Description + details */}
                <div className="lg:col-span-7 lg:pl-8">
                  <p className="text-ink-dim text-base leading-relaxed mb-6">
                    {step.description}
                  </p>
                  <ul className="flex flex-col gap-2.5">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-start gap-3">
                        <Check size={13} className="text-gold mt-0.5 shrink-0" strokeWidth={2.5} />
                        <span className="text-ink-dim text-sm">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Flow diagram */}
      <section
        className="py-24 lg:py-32 border-b border-edge"
        style={{ background: 'rgba(5,5,5,0.92)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] as const }}
            className="max-w-xl mb-14"
          >
            <p className="text-gold text-xs tracking-widest uppercase font-display mb-5">
              The flow
            </p>
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-ink leading-tight">
              What happens inside the engine.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] as const, delay: 0.15 }}
            className="flex flex-col lg:flex-row items-stretch lg:items-center justify-center gap-0"
          >
            {[
              { icon: Database, label: 'YOUR DATABASE', desc: 'Live product & pricing data' },
              { icon: Zap, label: 'AI ENGINE', desc: 'Rules, templates & branding', featured: true },
              { icon: FileText, label: 'PDF OUTPUT', desc: 'Client-ready in <10 seconds' },
              { icon: Send, label: 'CLIENT', desc: 'Delivered in one click' },
            ].map((node, i, arr) => (
              <div key={node.label} className="flex flex-col lg:flex-row items-center">
                <div
                  className={`relative p-6 border w-full lg:w-56 bg-surface text-center ${
                    node.featured ? 'border-gold' : 'border-edge'
                  }`}
                  style={node.featured ? { boxShadow: '0 0 24px rgba(231,208,95,0.12)' } : undefined}
                >
                  {node.featured && <div className="absolute top-0 left-0 right-0 h-px bg-gold" />}
                  <node.icon
                    size={20}
                    className={`mx-auto mb-3 ${node.featured ? 'text-gold' : 'text-ink-dim'}`}
                    strokeWidth={1.5}
                  />
                  <p className={`font-display font-bold text-[10px] tracking-[0.22em] uppercase mb-1 ${node.featured ? 'text-gold' : 'text-ink-faint'}`}>
                    {node.label}
                  </p>
                  <p className="text-ink-dim text-xs">{node.desc}</p>
                </div>
                {i < arr.length - 1 && (
                  <>
                    <div className="hidden lg:flex items-center px-3 shrink-0">
                      <svg width="40" height="16" viewBox="0 0 40 16" fill="none">
                        <line x1="0" y1="8" x2="28" y2="8" stroke="#E7D05F" strokeWidth="1" />
                        <polygon points="28,3 40,8 28,13" fill="#E7D05F" />
                      </svg>
                    </div>
                    <div className="flex lg:hidden justify-center py-2">
                      <svg width="16" height="28" viewBox="0 0 16 28" fill="none">
                        <line x1="8" y1="0" x2="8" y2="20" stroke="#E7D05F" strokeWidth="1" />
                        <polygon points="3,18 8,28 13,18" fill="#E7D05F" />
                      </svg>
                    </div>
                  </>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Integrations */}
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
            <motion.div variants={fadeUp} className="max-w-xl mb-14">
              <p className="text-gold text-xs tracking-widest uppercase font-display mb-5">
                Integrations
              </p>
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-ink leading-tight mb-4">
                We connect to the systems you already use.
              </h2>
              <p className="text-ink-dim text-base leading-relaxed">
                Not on the list? We handle custom integrations on a case-by-case basis.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {integrations.map(({ category, icon: Icon, items }) => (
                <motion.div
                  key={category}
                  variants={fadeUp}
                  className="p-6 border border-edge bg-surface"
                >
                  <div className="flex items-center gap-2 mb-5">
                    <Icon size={16} className="text-gold" strokeWidth={1.5} />
                    <span className="font-display font-bold text-xs tracking-[0.2em] uppercase text-gold">
                      {category}
                    </span>
                  </div>
                  <ul className="flex flex-col gap-2.5">
                    {items.map((item) => (
                      <li key={item} className="text-ink-dim text-sm flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-gold-muted shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Implementation timeline */}
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
          >
            <motion.div variants={fadeUp} className="max-w-xl mb-14">
              <p className="text-gold text-xs tracking-widest uppercase font-display mb-5">
                Implementation
              </p>
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-ink leading-tight mb-4">
                Live in 4 weeks. We handle everything.
              </h2>
              <p className="text-ink-dim text-base leading-relaxed">
                From first call to go-live: a structured, predictable process with no
                surprises.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-edge">
              {timeline.map((phase) => (
                <motion.div
                  key={phase.week}
                  variants={fadeUp}
                  className="bg-void p-8 group"
                >
                  <p className="text-gold text-xs tracking-[0.22em] uppercase font-display mb-3">
                    {phase.week}
                  </p>
                  <h3 className="font-display font-bold text-lg text-ink mb-5">
                    {phase.title}
                  </h3>
                  <ul className="flex flex-col gap-2.5">
                    {phase.tasks.map((task) => (
                      <li key={task} className="flex items-start gap-2.5">
                        <Check size={12} className="text-gold mt-0.5 shrink-0" strokeWidth={2.5} />
                        <span className="text-ink-dim text-xs leading-relaxed">{task}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CTAStrip
        heading="Ready to see it in action?"
        subtext="Book a free 30-minute demo. We'll show you the full flow live, with your type of products."
        buttonLabel="Book a demo →"
        buttonHref="/contact"
        secondaryLabel="View pricing"
        secondaryHref="/pricing"
      />
    </>
  )
}


