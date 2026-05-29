'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
}

const steps = [
  {
    number: '01',
    title: 'Connect',
    description:
      'We integrate with your existing product database, ERP system or price list. No restructuring required — we work with what you have.',
  },
  {
    number: '02',
    title: 'Configure',
    description:
      'Set your PDF templates, pricing logic and branding once. Duneslab learns your business rules so every output matches your standards.',
  },
  {
    number: '03',
    title: 'Generate',
    description:
      'Your sales team selects products from a clean interface. The AI builds a complete, accurate quotation in under 10 seconds.',
  },
  {
    number: '04',
    title: 'Close',
    description:
      'Send a professional PDF to the client with one click. Track proposal status, follow-ups and deal progression in your dashboard.',
  },
]

export default function HowItWorks() {
  return (
    <section
      className="py-28 lg:py-36 border-t border-edge"
      style={{ background: 'rgba(5,5,5,0.92)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Heading */}
          <motion.div variants={fadeUp} className="max-w-xl mb-16 lg:mb-24">
            <p className="text-gold text-xs tracking-[0.25em] uppercase font-display mb-5">
              How it works
            </p>
            <h2 className="font-display font-bold text-4xl lg:text-5xl xl:text-6xl text-ink leading-tight">
              From database to deal. In seconds.
            </h2>
          </motion.div>

          {/* Steps */}
          <div className="relative">
            {/* Connecting line — desktop only */}
            <div
              className="hidden xl:block absolute h-px pointer-events-none"
              style={{
                top: '2.75rem',
                left: '12.5%',
                right: '12.5%',
                background:
                  'linear-gradient(to right, transparent, rgba(231,208,95,0.35) 10%, rgba(231,208,95,0.35) 90%, transparent)',
              }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-px bg-edge">
              {steps.map((step) => (
                <motion.div
                  key={step.number}
                  variants={fadeUp}
                  className="bg-void p-8 lg:p-10 group"
                >
                  <div className="font-display font-bold text-5xl lg:text-6xl text-gold opacity-40 group-hover:opacity-90 transition-opacity duration-300 mb-6 leading-none">
                    {step.number}
                  </div>
                  <h3 className="font-display font-bold text-xl text-ink mb-4">
                    {step.title}
                  </h3>
                  <p className="text-ink-dim text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            variants={fadeUp}
            className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-10 border-t border-edge"
          >
            <p className="text-ink-dim text-base max-w-md">
              Implementation typically takes{' '}
              <span className="text-ink font-semibold">2–4 weeks</span>. We
              handle onboarding, integration and training end-to-end.
            </p>
            <Link
              href="/contact"
              className="shrink-0 px-8 py-4 bg-gold text-void font-display font-bold text-sm tracking-[0.12em] uppercase transition-colors hover:bg-gold-bright"
            >
              Book a demo →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

