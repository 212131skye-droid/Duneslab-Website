'use client'

import { motion } from 'framer-motion'
import { Cpu, Lightbulb, Monitor, Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'
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

const aiSoftwareFeatures = [
  'Live productdatabase-integratie (ERP, SQL, CSV)',
  'AI-aangedreven prijsregelengine met margefunctie',
  'Branded PDF-generatie in minder dan 10 seconden',
  'Multi-user toegang voor uw volledige salesteam',
  'Offerteversiegeschiedenis en revisiebeheer',
  'E-mailbezorging naar klanten met één klik',
  'Realtime dashboard met dealprogress-tracking',
  'ERP- en CRM-integratie (Exact, AFAS, SAP)',
  'Eigen huisstijl en layout per template',
  'AVG-conforme dataverwerking en -opslag',
]

const consultancySteps = [
  {
    number: '01',
    title: 'Kennismakingsgesprek',
    description:
      'Sessie van 90 minuten om uw huidige workflows in kaart te brengen, uw knelpunten te begrijpen en te identificeren waar automatisering de meeste waarde oplevert.',
  },
  {
    number: '02',
    title: 'Procesanalyse',
    description:
      'Wij analyseren uw tools, datastromen en teamgewoonten. Elke handmatige stap die geautomatiseerd kan worden, wordt gedocumenteerd met een geschatte tijd- en kostenbesparing.',
  },
  {
    number: '03',
    title: 'Roadmap',
    description:
      'Een geprioriteerde lijst met automatiseringsmogelijkheden, elk met ROI-schattingen, technische vereisten en een aanbevolen implementatievolgorde.',
  },
  {
    number: '04',
    title: 'Proof of concept',
    description:
      'Wij bouwen een kleine, werkende automatisering om de waarde aan te tonen vóór een volledige uitrol. U ziet het werken voordat u investeert.',
  },
  {
    number: '05',
    title: 'Volledige uitrol',
    description:
      'Implementatie, testen en teamtraining. Wij verzorgen elke stap en blijven beschikbaar voor vragen na de livegang.',
  },
]

const webDesignIncludes = [
  'Volledig maatwerk ontwerp — nooit templates',
  'Mobile-first, volledig responsieve layout',
  'SEO-geoptimaliseerde structuur en metadata',
  'Core Web Vitals geoptimaliseerd (LCP, CLS, FID)',
  'CMS-integratie (Sanity, Contentful) op verzoek',
  '6 maanden post-launch ondersteuning en updates',
]

const webTechStack = ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Framer Motion']

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        label="Oplossingen"
        heading="Wat Wij Bouwen."
        subtext="Drie kernservices, één missie: uw bedrijf sneller en slimmer maken."
      />

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
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-block font-display font-bold text-[9px] tracking-[0.28em] uppercase px-2 py-1 mb-6 text-void bg-gold">
                VLAGGENSCHIP
              </span>
              <div className="flex items-center gap-3 mb-6">
                <Cpu size={28} className="text-gold" strokeWidth={1.5} />
                <h2 className="font-display font-bold text-3xl lg:text-4xl text-ink">
                  AI Software & SaaS
                </h2>
              </div>
              <p className="text-ink-dim text-lg leading-relaxed mb-6">
                Ons vlaggenschipproduct automatiseert het volledige offerteproces. Salesteams
                selecteren producten via een overzichtelijke interface, waarna onze AI-engine
                een perfecte, branded PDF-offerte genereert in minder dan 10 seconden — met
                live prijzen direct uit uw database.
              </p>
              <p className="text-ink-dim text-base leading-relaxed mb-10">
                Specifiek gebouwd voor B2B bedrijven die grote volumes maatwerk offertes verwerken.
                Geen generieke SaaS-tool die u zelf moet ombuigen — dit is ontworpen rondom
                uw workflow, uw data en uw huisstijl.
              </p>
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 text-gold font-display font-semibold text-sm tracking-wide hover:text-gold-bright transition-colors"
              >
                Zie hoe het werkt <ArrowRight size={14} />
              </Link>
            </motion.div>

            <motion.div variants={fadeUp}>
              <div className="p-8 border border-edge bg-surface">
                <p className="font-display font-bold text-xs tracking-[0.2em] uppercase text-gold mb-6">
                  Wat is inbegrepen
                </p>
                <ul className="flex flex-col gap-3">
                  {aiSoftwareFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check size={14} className="text-gold mt-0.5 shrink-0" strokeWidth={2.5} />
                      <span className="text-ink-dim text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
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
            <motion.div variants={fadeUp} className="max-w-2xl mb-14">
              <span className="inline-block font-display font-bold text-[9px] tracking-[0.28em] uppercase px-2 py-1 mb-6 text-gold border border-gold-muted">
                STRATEGIE
              </span>
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb size={28} className="text-ink-dim" strokeWidth={1.5} />
                <h2 className="font-display font-bold text-3xl lg:text-4xl text-ink">
                  AI Advies
                </h2>
              </div>
              <p className="text-ink-dim text-lg leading-relaxed">
                Weet u niet waar AI past in uw bedrijf — of waar u moet beginnen? Wij brengen
                uw huidige workflows in kaart, identificeren de meest waardevolle
                automatiseringsmogelijkheden en stellen een helder, uitvoerbaar plan op.
                Geen jargon, geen hype. Gewoon een plan dat echt werkt voor uw team.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-edge">
              {consultancySteps.map((step) => (
                <motion.div
                  key={step.number}
                  variants={fadeUp}
                  className="bg-void p-8 group"
                >
                  <div className="font-display font-bold text-4xl text-gold opacity-30 group-hover:opacity-80 transition-opacity duration-300 mb-4 leading-none">
                    {step.number}
                  </div>
                  <h3 className="font-display font-bold text-base text-ink mb-3">
                    {step.title}
                  </h3>
                  <p className="text-ink-dim text-sm leading-relaxed">
                    {step.description}
                  </p>
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
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-block font-display font-bold text-[9px] tracking-[0.28em] uppercase px-2 py-1 mb-6 text-gold border border-gold-muted">
                DIGITAAL
              </span>
              <div className="flex items-center gap-3 mb-6">
                <Monitor size={28} className="text-ink-dim" strokeWidth={1.5} />
                <h2 className="font-display font-bold text-3xl lg:text-4xl text-ink">
                  Web Design
                </h2>
              </div>
              <p className="text-ink-dim text-lg leading-relaxed mb-6">
                Professionele, conversiegerichte websites gebouwd van nul.
                Elke site die wij ontwerpen start vanaf een leeg canvas — geen templates, geen
                pagebuilders, geen compromissen op kwaliteit.
              </p>
              <p className="text-ink-dim text-base leading-relaxed mb-10">
                Wij gebruiken dezelfde technologiestack als onze eigen producten:
                snel, schoon en ontworpen om hoog te scoren. Sites worden geleverd met
                zes maanden ondersteuning inbegrepen.
              </p>
              <div className="flex flex-wrap gap-2">
                {webTechStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-display text-xs tracking-wide px-3 py-1.5 border border-edge text-ink-dim"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeUp}>
              <div className="p-8 border border-edge bg-surface">
                <p className="font-display font-bold text-xs tracking-[0.2em] uppercase text-ink-dim mb-6">
                  Wat is inbegrepen
                </p>
                <ul className="flex flex-col gap-3">
                  {webDesignIncludes.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check size={14} className="text-gold mt-0.5 shrink-0" strokeWidth={2.5} />
                      <span className="text-ink-dim text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CTAStrip
        heading="Interesse in samenwerken?"
        subtext="Plan een gratis gesprek en wij bespreken welke dienst het beste bij uw doelen past."
        buttonLabel="Plan een gesprek →"
        buttonHref="/contact"
        secondaryLabel="Bekijk prijzen"
        secondaryHref="/pricing"
      />
    </>
  )
}
