'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const cards = [
  {
    title: 'Salaris verspild',
    body: 'Een salesmedewerker kost €50.000/jaar. 30% van zijn tijd gaat naar offertes maken. Dat is €15.000 per jaar aan verspild salaris — per persoon.',
  },
  {
    title: 'Gemiste deals',
    body: 'Elke dag dat een offerte later verstuurd wordt, vergroot de kans dat een concurrent sneller is. Bij een gemiddelde dealwaarde van €25.000 kost één gemiste deal meer dan een heel jaar abonnement.',
  },
  {
    title: 'Fouten kosten geld',
    body: "Een verkeerde prijs in een handmatige offerte kan duizenden euro's kosten. Onze tool haalt altijd live prijzen op uit uw database. Geen menselijke fouten meer.",
  },
]

export default function ROISection() {
  return (
    <section
      className="py-28 lg:py-36"
      style={{ background: '#111111', borderTop: '1px solid #E7D05F' }}
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
              De rekening
            </p>
            <h2 className="font-display font-bold text-4xl lg:text-5xl xl:text-6xl text-ink leading-tight">
              Wat kost handmatig werken u écht?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {cards.map(({ title, body }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="group relative p-8 border border-edge bg-surface transition-colors duration-300 hover:border-gold"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h3 className="font-display font-bold text-xl text-ink mb-4">{title}</h3>
                <p className="text-ink-dim text-sm leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center px-8 py-6 border border-gold bg-surface"
            style={{ boxShadow: '0 0 24px rgba(231,208,95,0.1)' }}
          >
            <p className="text-ink text-base lg:text-lg font-display text-center">
              Duneslab kost{' '}
              <span className="text-gold font-bold">€595/maand</span>
              {'. '}Eén voorkomen fout betaalt het al terug.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
