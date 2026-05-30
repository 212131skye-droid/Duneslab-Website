'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
}

const steps = [
  {
    number: '01',
    title: 'Verbinden',
    description:
      'Wij integreren met uw bestaande productdatabase, ERP-systeem of prijslijst. Geen herstructurering nodig — wij werken met wat u al heeft.',
  },
  {
    number: '02',
    title: 'Configureren',
    description:
      'Stel eenmalig uw PDF-templates, prijslogica en huisstijl in. Duneslab leert uw bedrijfsregels zodat elke output aan uw standaarden voldoet.',
  },
  {
    number: '03',
    title: 'Genereren',
    description:
      'Uw salesteam selecteert producten via een overzichtelijke interface. De AI bouwt een complete, accurate offerte in minder dan 10 seconden.',
  },
  {
    number: '04',
    title: 'Afsluiten',
    description:
      'Stuur met één klik een professionele PDF naar de klant. Volg offertestatussen, follow-ups en dealprogress via uw dashboard.',
  },
]

export default function HowItWorks() {
  return (
    <section
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
          <motion.div variants={fadeUp} className="max-w-xl mb-16 lg:mb-24">
            <p className="text-gold text-xs tracking-widest uppercase font-display mb-5">
              Hoe het werkt
            </p>
            <h2 className="font-display font-bold text-4xl lg:text-5xl xl:text-6xl text-ink leading-tight">
              Van database naar deal. In seconden.
            </h2>
          </motion.div>

          <div className="relative">
            <div
              className="hidden xl:block absolute h-px pointer-events-none"
              style={{
                top: '2.75rem',
                left: '12.5%',
                right: '12.5%',
                background:
                  'linear-gradient(to right, transparent, rgba(231,208,95,0.35) 10%, rgba(231,208,95,0.35) 90%, transparent)',
              }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-px bg-edge">
              {steps.map((step) => (
                <motion.div
                  key={step.number}
                  variants={fadeUp}
                  className="bg-void p-8 lg:p-10 group"
                >
                  <div className="font-display font-bold text-5xl lg:text-6xl text-gold opacity-40 group-hover:opacity-90 transition-opacity duration-300 mb-6 leading-none">
                    {step.number}
                  </div>
                  <h3 className="font-display font-bold text-xl text-ink mb-4">
                    {step.title}
                  </h3>
                  <p className="text-ink-dim text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            variants={fadeUp}
            className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-10 border-t border-edge"
          >
            <p className="text-ink-dim text-base max-w-md">
              Implementatie duurt doorgaans{' '}
              <span className="text-ink font-semibold">2–4 weken</span>. Wij
              verzorgen onboarding, integratie en training van A tot Z.
            </p>
            <Link
              href="/contact"
              className="shrink-0 px-8 py-4 bg-gold text-void font-display font-bold text-sm tracking-[0.12em] uppercase transition-colors hover:bg-gold-bright"
            >
              Plan een demo →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
