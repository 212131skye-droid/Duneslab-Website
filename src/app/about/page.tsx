'use client'

import { motion } from 'framer-motion'
import { Zap, Target, Lightbulb } from 'lucide-react'
import PageHero from '@/components/PageHero'
import CTAStrip from '@/components/CTAStrip'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const values = [
  {
    icon: Zap,
    title: 'Snelheid',
    description:
      'Elk tool dat wij bouwen is geoptimaliseerd voor snelheid — zowel in hoe snel het werkt als hoe snel het geleverd wordt. Wij geloven dat tijd het meest waardevolle is wat een bedrijf kan besparen.',
  },
  {
    icon: Target,
    title: 'Precisie',
    description:
      'Software die verkeerde output produceert is erger dan helemaal geen software. Wij bouwen voor 100% nauwkeurigheid elke keer — geen benaderingen, geen afrondingsfouten, geen excuses.',
  },
  {
    icon: Lightbulb,
    title: 'Innovatie',
    description:
      'Wij verleggen constant de grenzen van wat zakelijke software kan doen. AI is hier geen buzzword — het is de kern van alles wat wij bouwen.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="Over Duneslab"
        heading="Anders Gebouwd."
        subtext="Een softwarebedrijf gebouwd op resultaten, niet op beloftes."
      />

      <section
        className="py-24 lg:py-32 border-b border-edge"
        style={{ background: 'rgba(5,5,5,0.92)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] as const }}
              className="lg:col-span-4"
            >
              <p className="text-gold text-xs tracking-widest uppercase font-display mb-5">
                Ons verhaal
              </p>
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-ink leading-tight">
                Gebouwd door iemand die het probleem uit de eerste hand kent.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] as const, delay: 0.1 }}
              className="lg:col-span-8 space-y-6"
            >
              <p className="text-ink-dim text-lg leading-relaxed">
                Marijn van der Heijden is de oprichter van Duneslab. Met een achtergrond
                in techniek en een sterke focus op bedrijfsprocessen bouwt hij software
                die complexe workflows automatiseert voor Nederlandse B2B bedrijven.
              </p>
              <p className="text-ink-dim text-base leading-relaxed">
                Duneslab is opgericht vanuit een simpele overtuiging: zakelijke software
                moet snel, intelligent en betrouwbaar zijn — zonder compromissen.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        className="py-24 lg:py-32 border-b border-edge"
        style={{ background: 'rgba(5,5,5,0.92)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <p className="text-gold text-xs tracking-widest uppercase font-display mb-8">
              Onze missie
            </p>
            <blockquote className="font-display font-bold text-3xl lg:text-4xl xl:text-5xl text-ink leading-tight max-w-4xl mx-auto">
              "Wij geloven dat zakelijke software snel, intelligent en daadwerkelijk effectief moet zijn."
            </blockquote>
          </motion.div>
        </div>
      </section>

      <section
        className="py-24 lg:py-32 border-b border-edge"
        style={{ background: 'rgba(5,5,5,0.92)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.div variants={fadeUp} className="max-w-xl mb-14">
              <p className="text-gold text-xs tracking-widest uppercase font-display mb-5">
                Onze waarden
              </p>
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-ink leading-tight">
                Wat elke beslissing stuurt.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {values.map(({ icon: Icon, title, description }) => (
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
                  <h3 className="font-display font-bold text-xl text-ink mb-3">{title}</h3>
                  <p className="text-ink-dim text-sm leading-relaxed">{description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section
        className="py-24 lg:py-32"
        style={{ background: 'rgba(5,5,5,0.92)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.div variants={fadeUp} className="max-w-xl mb-14">
              <p className="text-gold text-xs tracking-widest uppercase font-display mb-5">
                Het team
              </p>
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-ink leading-tight">
                De persoon achter Duneslab.
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-8 max-w-xl p-8 border border-edge bg-surface"
            >
              <div
                className="w-20 h-20 shrink-0 flex items-center justify-center border border-gold"
                style={{ background: 'rgba(231,208,95,0.07)' }}
              >
                <span className="font-display font-bold text-xl text-gold tracking-widest">
                  MH
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-xl text-ink mb-1">
                  Marijn van der Heijden
                </h3>
                <p className="text-gold text-xs tracking-[0.2em] uppercase font-display mb-4">
                  Oprichter & Ontwikkelaar
                </p>
                <p className="text-ink-dim text-sm leading-relaxed">
                  Oprichter van Duneslab. Bouwt AI software en automatiseringstools
                  voor Nederlandse B2B bedrijven. Gevestigd in Nederland.
                </p>
                <a
                  href="mailto:marijn@duneslab.nl"
                  className="inline-block mt-4 text-gold-muted text-xs hover:text-gold transition-colors"
                >
                  marijn@duneslab.nl
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CTAStrip
        heading="Wilt u met ons samenwerken?"
        subtext="Plan een gratis gesprek van 30 minuten en laten we bespreken wat we samen kunnen bouwen."
        buttonLabel="Neem contact op →"
        buttonHref="/contact"
      />
    </>
  )
}
