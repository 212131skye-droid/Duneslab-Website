'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Cpu, Lightbulb, Monitor } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
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
            <p className="text-gold text-xs tracking-[0.25em] uppercase font-display mb-5">
              Services
            </p>
            <h2 className="font-display font-bold text-4xl lg:text-5xl xl:text-6xl text-ink leading-tight">
              What we build.
            </h2>
          </motion.div>

          {/* Service cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {services.map(({ icon: Icon, tag, title, description, featured }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className={`group relative flex flex-col p-8 border transition-colors duration-300 bg-surface ${
                  featured
                    ? 'border-gold-muted hover:border-gold'
                    : 'border-edge hover:border-gold'
                }`}
                style={
                  featured
                    ? { boxShadow: '0 0 30px rgba(231,208,95,0.10)' }
                    : undefined
                }
              >
                {/* Gold top border */}
                <div
                  className={`absolute top-0 left-0 right-0 h-px transition-opacity duration-300 ${
                    featured
                      ? 'bg-gold opacity-100'
                      : 'bg-gold opacity-0 group-hover:opacity-100'
                  }`}
                />

                {/* Tag */}
                <span
                  className={`self-start font-display font-bold text-[9px] tracking-[0.28em] uppercase px-2 py-1 mb-6 ${
                    featured
                      ? 'text-void bg-gold'
                      : 'text-gold border border-gold-muted'
                  }`}
                >
                  {tag}
                </span>

                <div className="mb-5">
                  <Icon
                    size={24}
                    className={featured ? 'text-gold' : 'text-ink-dim group-hover:text-gold transition-colors duration-300'}
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="font-display font-bold text-xl lg:text-2xl text-ink mb-4">
                  {title}
                </h3>
                <p className="text-ink-dim text-sm leading-relaxed flex-1">
                  {description}
                </p>

                <div className="mt-8 pt-6 border-t border-edge">
                  <Link
                    href="/contact"
                    className={`font-display font-semibold text-sm tracking-wide transition-colors ${
                      featured
                        ? 'text-gold hover:text-gold-bright'
                        : 'text-ink-dim hover:text-gold'
                    }`}
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
