'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
}

export default function Testimonials() {
  return (
    <section
      id="about"
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
          <motion.div variants={fadeUp} className="max-w-xl mb-16 lg:mb-20">
            <p className="text-gold text-xs tracking-widest uppercase font-display mb-5">
              Resultaten
            </p>
            <h2 className="font-display font-bold text-4xl lg:text-5xl xl:text-6xl text-ink leading-tight">
              Wat onze pilot partners zeggen.
            </h2>
          </motion.div>

          <motion.div variants={fadeUp} className="flex justify-center">
            <div
              className="relative flex flex-col p-8 lg:p-10 border border-gold bg-surface w-full max-w-2xl"
              style={{ boxShadow: '0 0 30px rgba(231,208,95,0.1)' }}
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gold" />

              <div
                className="font-display font-bold text-7xl lg:text-8xl text-gold leading-none mb-4 opacity-60"
                aria-hidden="true"
                style={{ lineHeight: '0.8' }}
              >
                "
              </div>

              <blockquote className="text-ink text-base lg:text-lg leading-relaxed flex-1 mb-8">
                Wij zijn momenteel in pilot met 3 Nederlandse B2B bedrijven. Referenties zijn
                beschikbaar op aanvraag via marijn@duneslab.nl
              </blockquote>

              <div className="pt-6 border-t border-edge">
                <p className="font-display font-semibold text-sm text-ink-dim">
                  — Pilot partners, Nederland
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
