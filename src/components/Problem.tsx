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
    title: 'Uren verspild',
    description:
      'Handmatig offertes maken kost 2–4 uur per klant. Uw salesteam besteedt meer tijd aan opmaken dan aan verkopen.',
  },
  {
    icon: AlertTriangle,
    title: 'Menselijke fouten',
    description:
      'Verkeerde prijzen, verouderde producten, inconsistente opmaak. Elke handmatige offerte is een risico dat op zijn beurt wacht.',
  },
  {
    icon: TrendingDown,
    title: 'Gemiste omzet',
    description:
      'Trage offertes betekenen verloren deals. Snellere concurrenten sluiten terwijl uw offerte nog wordt samengesteld.',
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
          <motion.div variants={fadeUp} className="max-w-2xl mb-16 lg:mb-20">
            <p className="text-gold text-xs tracking-widest uppercase font-display mb-5">
              Het Probleem
            </p>
            <h2 className="font-display font-bold text-4xl lg:text-5xl xl:text-6xl text-ink leading-tight mb-6">
              Uw team verliest uren aan handmatig werk.
            </h2>
            <p className="text-ink-dim text-lg leading-relaxed">
              Offertes, voorstellen en workflows nog steeds handmatig verwerkt.
              Foutgevoelig, tijdrovend en een rem op uw omzet.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {painPoints.map(({ icon: Icon, title, description }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="group relative p-8 border border-edge bg-surface transition-colors duration-300 hover:border-gold"
              >
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
