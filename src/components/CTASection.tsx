'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
}

export default function CTASection() {
  return (
    <section
      id="contact"
      className="relative py-32 lg:py-44 border-t border-edge overflow-hidden"
      style={{ background: 'rgba(5,5,5,0.92)' }}
    >
      {/* Radial gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(231,208,95,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Vertical gold hairline */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(231,208,95,0.4), transparent)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.p
            variants={fadeUp}
            className="text-gold text-xs tracking-[0.25em] uppercase font-display mb-6"
          >
            Get started
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-ink leading-tight mb-6"
          >
            Ready to automate
            <br />
            your workflow?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-ink-dim text-lg lg:text-xl max-w-xl mx-auto mb-12"
          >
            Book a free 30-minute demo and see the tool in action. No
            commitment, no sales pressure — just results.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-gold text-void font-display font-bold text-sm tracking-[0.12em] uppercase transition-colors hover:bg-gold-bright"
            >
              Book a demo →
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 border border-gold-muted text-ink font-display font-semibold text-sm tracking-[0.12em] uppercase transition-colors hover:bg-[rgba(231,208,95,0.07)]"
            >
              View pricing
            </Link>
          </motion.div>

          <motion.p variants={fadeUp} className="text-ink-faint text-sm">
            Or email us directly at{' '}
            <a
              href="mailto:marijn@duneslab.nl"
              className="text-gold-muted hover:text-gold transition-colors underline underline-offset-4"
            >
              marijn@duneslab.nl
            </a>
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

