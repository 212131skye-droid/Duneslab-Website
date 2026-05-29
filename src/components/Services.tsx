'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Cpu, Lightbulb, Monitor } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const services = [
  {
    icon: Cpu,
    tag: 'FLAGSHIP',
    title: 'AI Software & SaaS',
    description:
      'Custom AI-powered software that automates your core business processes. From intelligent quotation tools to full workflow automation — built for B2B enterprises that demand speed and precision.',
    featured: true,
  },
  {
    icon: Lightbulb,
    tag: 'STRATEGY',
    title: 'AI Consultancy',
    description:
      "Not sure where to start with AI? We analyse your workflows, identify automation opportunities, and build a clear implementation roadmap tailored to your business.",
    featured: false,
  },
  {
    icon: Monitor,
    tag: 'DIGITAL',
    title: 'Web Design',
    description:
      'Professional, conversion-focused websites. Clean code, fast loading, and built to grow your business online. No templates — every site is designed from the ground up.',
    featured: false,
  },
]

export default function Services() {
  return (
    <section
      id="solutions"
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
          <motion.div variants={fadeUp} className="max-w-xl mb-16 lg:mb-20">
            <p className="text-gold text-xs tracking-widest uppercase font-display mb-5">
              Services
            </p>
            <h2 className="font-display font-bold text-4xl lg:text-5xl xl:text-6xl text-ink leading-tight">
              What we build.
            </h2>
          </motion.div>

          {/* Featured card — AI Software, full width */}
          {(() => {
            const { icon: Icon, tag, title, description } = services[0]
            return (
              <motion.div
                variants={fadeUp}
                whileHover={{ scale: 1.005 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="group relative flex flex-col lg:flex-row lg:items-center gap-10 p-10 lg:p-12 border border-gold-muted hover:border-gold bg-surface mb-5 transition-colors duration-300"
                style={{ boxShadow: '0 0 60px rgba(231,208,95,0.12)' }}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gold" />

                <div className="flex-1">
                  <span className="inline-block font-display font-bold text-[9px] tracking-[0.28em] uppercase px-2 py-1 mb-6 text-void bg-gold">
                    {tag}
                  </span>
                  <div className="flex items-center gap-3 mb-4">
                    <Icon size={28} className="text-gold" strokeWidth={1.5} />
                    <h3 className="font-display font-bold text-2xl lg:text-3xl text-ink">{title}</h3>
                  </div>
                  <p className="text-ink-dim text-base leading-relaxed max-w-2xl">{description}</p>
                </div>

                <div className="shrink-0">
                  <Link
                    href="/solutions"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-void font-display font-bold text-sm tracking-wide uppercase transition-colors hover:bg-gold-bright"
                  >
                    Learn more →
                  </Link>
                </div>
              </motion.div>
            )
          })()}

          {/* Secondary cards — 2-col */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.slice(1).map(({ icon: Icon, tag, title, description }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="group relative flex flex-col p-8 border border-edge hover:border-gold bg-surface transition-colors duration-300"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <span className="self-start font-display font-bold text-[9px] tracking-[0.28em] uppercase px-2 py-1 mb-6 text-gold border border-gold-muted">
                  {tag}
                </span>

                <div className="mb-5">
                  <Icon size={24} className="text-ink-dim group-hover:text-gold transition-colors duration-300" strokeWidth={1.5} />
                </div>

                <h3 className="font-display font-bold text-xl lg:text-2xl text-ink mb-4">{title}</h3>
                <p className="text-ink-dim text-sm leading-relaxed flex-1">{description}</p>

                <div className="mt-8 pt-6 border-t border-edge">
                  <Link
                    href="/solutions"
                    className="font-display font-semibold text-sm tracking-wide text-ink-dim hover:text-gold transition-colors"
                  >
                    Learn more →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}


