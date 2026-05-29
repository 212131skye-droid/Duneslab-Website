'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Database, Zap, FileText } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
}

const flowSteps = [
  {
    icon: Database,
    label: 'INPUT',
    title: 'Product selection',
    description: 'Sales team picks products from your live database.',
  },
  {
    icon: Zap,
    label: 'AI ENGINE',
    title: 'Intelligent processing',
    description: 'Duneslab AI applies pricing rules, templates and branding.',
    featured: true,
  },
  {
    icon: FileText,
    label: 'OUTPUT',
    title: 'Professional PDF',
    description: 'A client-ready quotation delivered in under 10 seconds.',
  },
]

const stats = [
  { value: '8', suffix: 's', label: 'Generation time' },
  { value: '100', suffix: '%', label: 'Accurate every time' },
  { value: 'âˆž', suffix: '', label: 'Always up to date' },
]

function StatCounter({ value, suffix, label }: { value: string; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })
  const isNumeric = !isNaN(Number(value))
  const [display, setDisplay] = useState(isNumeric ? '0' : value)

  useEffect(() => {
    if (!isInView || !isNumeric) {
      if (!isNumeric) setDisplay(value)
      return
    }
    const target = Number(value)
    const duration = 1800
    const start = performance.now()
    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(String(Math.floor(eased * target)))
      if (progress < 1) requestAnimationFrame(tick)
      else setDisplay(String(target))
    }
    requestAnimationFrame(tick)
  }, [isInView, value, isNumeric])

  return (
    <div ref={ref} className="text-center">
      <div className="font-display font-bold text-5xl lg:text-6xl text-gold mb-3">
        {display}
        {suffix}
      </div>
      <p className="text-ink-dim text-sm tracking-wide">{label}</p>
    </div>
  )
}

function FlowArrow({ vertical = false }: { vertical?: boolean }) {
  if (vertical) {
    return (
      <div className="flex justify-center py-2">
        <svg width="24" height="40" viewBox="0 0 24 40" fill="none" aria-hidden="true">
          <line x1="12" y1="0" x2="12" y2="30" stroke="#E7D05F" strokeWidth="1" />
          <polygon points="6,28 12,40 18,28" fill="#E7D05F" />
        </svg>
      </div>
    )
  }
  return (
    <div className="hidden lg:flex items-center px-4 shrink-0">
      <svg width="60" height="24" viewBox="0 0 60 24" fill="none" aria-hidden="true">
        <line x1="0" y1="12" x2="46" y2="12" stroke="#E7D05F" strokeWidth="1" />
        <polygon points="46,6 60,12 46,18" fill="#E7D05F" />
      </svg>
    </div>
  )
}

export default function Solution() {
  return (
    <section
      id="product"
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
          <motion.div variants={fadeUp} className="max-w-2xl mb-16 lg:mb-20">
            <p className="text-gold text-xs tracking-[0.25em] uppercase font-display mb-5">
              The Solution
            </p>
            <h2 className="font-display font-bold text-4xl lg:text-5xl xl:text-6xl text-ink leading-tight mb-6">
              Duneslab automates it.
            </h2>
            <p className="text-ink-dim text-lg leading-relaxed">
              Our AI software connects to your database and generates perfect
              quotations in seconds â€” accurate, branded, and client-ready.
            </p>
          </motion.div>

          {/* Flow diagram */}
          <motion.div variants={fadeUp} className="mb-20">
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-center gap-0 lg:gap-0">
              {flowSteps.map((step, i) => (
                <div key={step.label} className="flex flex-col lg:flex-row items-center">
                  {/* Card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    className={`relative p-8 border w-full lg:w-72 ${
                      step.featured ? 'border-gold bg-surface' : 'border-edge bg-surface'
                    }`}
                    style={
                      step.featured
                        ? { boxShadow: '0 0 30px rgba(231,208,95,0.12)' }
                        : undefined
                    }
                  >
                    {step.featured && (
                      <div className="absolute top-0 left-0 right-0 h-px bg-gold" />
                    )}
                    <div className="flex items-center gap-2 mb-5">
                      <step.icon
                        size={18}
                        className={step.featured ? 'text-gold' : 'text-ink-dim'}
                        strokeWidth={1.5}
                      />
                      <span
                        className={`font-display font-bold text-[10px] tracking-[0.25em] uppercase ${
                          step.featured ? 'text-gold' : 'text-ink-faint'
                        }`}
                      >
                        {step.label}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-ink mb-2">
                      {step.title}
                    </h3>
                    <p className="text-ink-dim text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>

                  {/* Arrow between cards */}
                  {i < flowSteps.length - 1 && (
                    <>
                      <FlowArrow />
                      <FlowArrow vertical />
                    </>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 sm:grid-cols-3 gap-12 pt-12 border-t border-edge"
          >
            {stats.map((s) => (
              <StatCounter key={s.label} {...s} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

