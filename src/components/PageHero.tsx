'use client'

import { motion } from 'framer-motion'

interface PageHeroProps {
  label: string
  heading: string
  subtext?: string
}

export default function PageHero({ label, heading, subtext }: PageHeroProps) {
  return (
    <section
      className="pt-40 pb-24 lg:pt-48 lg:pb-32 border-b border-edge"
      style={{ background: 'rgba(5,5,5,0.92)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <p className="text-gold text-xs tracking-widest uppercase font-display mb-5">
            {label}
          </p>
          <h1 className="font-display font-bold text-5xl lg:text-6xl xl:text-7xl text-ink leading-[0.95] tracking-tight mb-6 max-w-3xl">
            {heading}
          </h1>
          {subtext && (
            <p className="text-ink-dim text-lg lg:text-xl max-w-xl leading-relaxed">
              {subtext}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}


