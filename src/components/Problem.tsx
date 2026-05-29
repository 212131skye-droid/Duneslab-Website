'use client'

import { motion } from 'framer-motion'
import { Clock, AlertTriangle, TrendingDown } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const painPoints = [
  {
    icon: Clock,
    title: 'Hours wasted',
    description:
      'Manual quotation creation takes 2â€“4 hours per client. Your sales team spends more time formatting than closing.',
  },
  {
    icon: AlertTriangle,
    title: 'Human errors',
    description:
      'Wrong prices, outdated products, inconsistent formatting. Every manual quote is a liability waiting to happen.',
  },
  {
    icon: TrendingDown,
    title: 'Missed revenue',
    description:
      'Slow proposals mean lost deals. Faster competitors close while your quote is still being built.',
  },
]

export default function Problem() {
  return (
    <section
      className="py-28 lg:py-36"
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
          <motion.div variants={fadeUp} className="max-w-2xl mb-16 lg:mb-20">
            <p className="text-gold text-xs tracking-[0.25em] uppercase font-display mb-5">
              The Problem
            </p>
            <h2 className="font-display font-bold text-4xl lg:text-5xl xl:text-6xl text-ink leading-tight mb-6">
              Your team is losing hours on manual work.
            </h2>
            <p className="text-ink-dim text-lg leading-relaxed">
              Quotations, proposals and workflows still handled by hand.
              Error-prone, time-consuming, and holding your revenue back.
            </p>
          </motion.div>

          {/* Pain point cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {painPoints.map(({ icon: Icon, title, description }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="group relative p-8 border border-edge bg-surface transition-colors duration-300 hover:border-gold"
              >
                {/* Gold top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="w-10 h-10 flex items-center justify-center mb-6">
                  <Icon size={22} className="text-gold" strokeWidth={1.5} />
                </div>

                <h3 className="font-display font-bold text-xl text-ink mb-3">
                  {title}
                </h3>
                <p className="text-ink-dim text-sm leading-relaxed">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

