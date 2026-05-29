'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface CTAStripProps {
  heading?: string
  subtext?: string
  buttonLabel?: string
  buttonHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

export default function CTAStrip({
  heading = 'Ready to get started?',
  subtext = 'Book a free 30-minute demo and see the tool in action. No commitment, no sales pressure.',
  buttonLabel = 'Book a demo →',
  buttonHref = '/contact',
  secondaryLabel,
  secondaryHref,
}: CTAStripProps) {
  return (
    <section
      className="relative py-28 lg:py-36 border-t border-edge overflow-hidden"
      style={{ background: 'rgba(5,5,5,0.92)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(231,208,95,0.07) 0%, transparent 70%)',
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display font-bold text-4xl lg:text-5xl xl:text-6xl text-ink leading-tight mb-5">
            {heading}
          </h2>
          <p className="text-ink-dim text-lg max-w-xl mx-auto mb-10">{subtext}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={buttonHref}
              className="inline-flex items-center justify-center px-10 py-4 bg-gold text-void font-display font-bold text-sm tracking-[0.12em] uppercase transition-colors hover:bg-gold-bright"
            >
              {buttonLabel}
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link
                href={secondaryHref}
                className="inline-flex items-center justify-center px-10 py-4 border border-gold-muted text-ink font-display font-semibold text-sm tracking-[0.12em] uppercase transition-colors hover:bg-[rgba(231,208,95,0.07)]"
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
