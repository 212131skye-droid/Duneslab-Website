'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Plus } from 'lucide-react'
import PageHero from '@/components/PageHero'
import CTAStrip from '@/components/CTAStrip'
import Link from 'next/link'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const plans = [
  {
    name: 'Starter',
    price: '€595',
    period: '/mo',
    sla: null as string | null,
    setupFee: '+ €9.500 eenmalige opstartkosten',
    setupNote: 'eenmalig, inclusief implementatie en configuratie',
    yearTotal: 'Jaar 1 totaal: ~€16.640 (setup + 12x abonnement)',
    description: 'Alles wat u nodig heeft om offertegeneratie te automatiseren.',
    featured: false,
    features: [
      'AI offertegeneratie',
      'Productdatabase synchronisatie',
      'Professionele PDF export',
      'E-mailondersteuning',
      'Tot 200 offertes/maand',
      'Standaard templates',
    ],
    cta: 'Aan de slag',
  },
  {
    name: 'Professional',
    price: '€595',
    period: '/mo',
    sla: '+ €195/mo SLA' as string | null,
    setupFee: '+ €9.500 eenmalige opstartkosten',
    setupNote: 'eenmalig, inclusief implementatie en configuratie',
    yearTotal: 'Jaar 1 totaal: ~€19.280 (setup + 12x abonnement + SLA)',
    description: 'Prioriteitsondersteuning en uitgebreide analyses voor groeiende teams.',
    featured: true,
    features: [
      'Alles uit Starter',
      'Prioriteitsondersteuning (4 uur reactietijd)',
      'Uitgebreid analysedashboard',
      'Eigen huisstijl & templates',
      'Onbeperkte offertes',
      'SLA-monitoring',
    ],
    cta: 'Aan de slag',
    badge: 'MEEST GEKOZEN',
  },
  {
    name: 'Enterprise',
    price: 'Maatwerk',
    period: '',
    sla: null as string | null,
    setupFee: '+ €3.500 integratievergoeding',
    setupNote: 'eenmalig',
    yearTotal: 'Jaar 1 totaal: op aanvraag',
    description: 'Volledige integratie, toegewijde onboarding en SLA-garanties.',
    featured: false,
    features: [
      'Alles uit Professional',
      'ERP / server-integratie',
      'Vaste onboardingmanager',
      'Aangepaste SLA-garantie',
      'White-label optie',
      'API-toegang',
    ],
    cta: 'Neem contact op',
    note: 'Integratie met Exact, AFAS, SAP, WooCommerce, MySQL, PostgreSQL',
  },
]

const pricingFaqs = [
  {
    question: 'Wat is inbegrepen in de eenmalige setupkosten?',
    answer:
      'De setupkosten dekken de initiële integratie met uw productdatabase of ERP-systeem, configuratie van uw PDF-templates en prijslogica, teamtraining en een volledige QA-ronde vóór livegang. Het is een eenmalige investering — geen terugkerende kosten voor setupwerk.',
  },
  {
    question: 'Kan ik later van abonnement wisselen?',
    answer:
      'Ja. U kunt op elk moment upgraden van Starter naar Professional — het prijsverschil wordt pro rata verrekend per volgende factuurperiode. Downgraden is mogelijk aan het einde van uw contractperiode.',
  },
  {
    question: 'Wat omvat het minimale contract van 12 maanden?',
    answer:
      'Het 12-maandencontract omvat toegang tot de software, alle updates, e-mailondersteuning (Starter) of prioriteitsondersteuning (Professional) en hosting. Na 12 maanden loopt het contract maandelijks door met een opzegtermijn van 30 dagen.',
  },
  {
    question: 'Zijn er gebruikslimieten op het Starter-abonnement?',
    answer:
      'Starter is beperkt tot 200 gegenereerde offertes per maand, wat de meeste kleine en middelgrote salesteams dekt. Als u dit regelmatig overschrijdt, is Professional met onbeperkte offertes voordeliger.',
  },
  {
    question: 'Zijn prijzen exclusief BTW?',
    answer:
      'Ja, alle getoonde prijzen zijn exclusief BTW. Voor Nederlandse klanten geldt 21% BTW. EU B2B-klanten met een geldig BTW-nummer kunnen gebruikmaken van de verleggingsregeling.',
  },
]

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-edge">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-6 py-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-display font-semibold text-base text-ink group-hover:text-gold transition-colors">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0"
        >
          <Plus size={18} className="text-gold" strokeWidth={1.5} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
            style={{ overflow: 'hidden' }}
          >
            <p className="text-ink-dim text-sm leading-relaxed pb-6 max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <>
      <PageHero
        label="Prijzen"
        heading="Transparante Prijzen."
        subtext="Geen verborgen kosten. Geen verrassingen. Kies het abonnement dat bij uw team past."
      />

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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
              {plans.map((plan) => (
                <motion.div
                  key={plan.name}
                  variants={fadeUp}
                  whileHover={{ scale: 1.015 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  className={`relative flex flex-col p-8 border bg-surface ${
                    plan.featured ? 'border-gold' : 'border-edge'
                  }`}
                  style={
                    plan.featured
                      ? { boxShadow: '0 0 40px rgba(231,208,95,0.12)' }
                      : undefined
                  }
                >
                  <div
                    className={`absolute top-0 left-0 right-0 h-px ${
                      plan.featured ? 'bg-gold' : 'bg-edge'
                    }`}
                  />
                  {plan.badge && (
                    <span className="self-start font-display font-bold text-[9px] tracking-[0.28em] uppercase px-2 py-1 mb-5 text-void bg-gold">
                      {plan.badge}
                    </span>
                  )}
                  <div className={plan.badge ? '' : 'mt-0'}>
                    <h3 className="font-display font-bold text-lg text-ink-dim mb-4">
                      {plan.name}
                    </h3>

                    {/* Monthly price */}
                    <div className="flex items-end gap-1 mb-3">
                      <span className="font-display font-bold text-4xl lg:text-5xl text-ink">
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-ink-dim text-base mb-1.5">{plan.period}</span>
                      )}
                    </div>

                    {/* SLA line (Professional only) */}
                    {plan.sla && (
                      <p className="text-ink-dim text-sm font-semibold mb-1">{plan.sla}</p>
                    )}

                    {/* Setup fee — prominent */}
                    <p className="text-ink text-sm font-semibold mb-1">{plan.setupFee}</p>
                    <p className="text-ink-faint text-xs italic mb-5">({plan.setupNote})</p>

                    <p className="text-ink-dim text-sm leading-relaxed mb-8 pb-8 border-b border-edge">
                      {plan.description}
                    </p>
                  </div>
                  <ul className="flex flex-col gap-3 mb-6 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <Check size={14} className="text-gold mt-0.5 shrink-0" strokeWidth={2.5} />
                        <span className="text-ink-dim text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                  {'note' in plan && plan.note && (
                    <p className="text-ink-faint text-[11px] leading-relaxed mb-4 pt-4 border-t border-edge">
                      {plan.note as string}
                    </p>
                  )}

                  {/* Year 1 total */}
                  <div className="pt-4 border-t border-edge mb-6">
                    <p className="text-xs italic" style={{ color: '#9A9A9A' }}>
                      {plan.yearTotal}
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className={`mt-auto inline-flex items-center justify-center px-6 py-3.5 font-display font-bold text-sm tracking-wide transition-colors ${
                      plan.featured
                        ? 'bg-gold text-void hover:bg-gold-bright'
                        : 'border border-gold-muted text-ink hover:bg-[rgba(231,208,95,0.07)]'
                    }`}
                  >
                    {plan.cta} →
                  </Link>
                </motion.div>
              ))}
            </div>
            <motion.p variants={fadeUp} className="text-ink-faint text-xs text-center">
              Alle genoemde prijzen zijn exclusief BTW. De eenmalige opstartkosten omvatten implementatie, configuratie en training.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section
        className="py-24 lg:py-32 border-t border-edge"
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
                Veelgestelde vragen
              </p>
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-ink leading-tight mb-6">
                Vragen over prijzen.
              </h2>
              <p className="text-ink-dim text-base leading-relaxed">
                Nog twijfels?{' '}
                <Link href="/contact" className="text-gold hover:text-gold-bright transition-colors">
                  Spreek ons direct aan
                </Link>{' '}
                en wij vinden samen de juiste oplossing.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] as const, delay: 0.1 }}
              className="lg:col-span-8"
            >
              {pricingFaqs.map((faq, i) => (
                <FAQItem
                  key={i}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <CTAStrip
        heading="Klaar om te beginnen?"
        subtext="Plan een gratis demo van 30 minuten en zie het platform live. Geen verplichtingen."
        buttonLabel="Plan een demo →"
        buttonHref="/contact"
        secondaryLabel="Bekijk oplossingen"
        secondaryHref="/solutions"
      />
    </>
  )
}
