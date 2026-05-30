'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

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
  },
]

export default function Pricing() {
  return (
    <section
      id="pricing"
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
              Prijzen
            </p>
            <h2 className="font-display font-bold text-4xl lg:text-5xl xl:text-6xl text-ink leading-tight mb-4">
              Transparante prijzen.
            </h2>
            <p className="text-ink-dim text-lg">Geen verborgen kosten. Geen verrassingen.</p>
          </motion.div>

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
                    ? { boxShadow: '0 0 30px rgba(231,208,95,0.15)' }
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
                      <Check
                        size={14}
                        className="text-gold mt-0.5 shrink-0"
                        strokeWidth={2.5}
                      />
                      <span className="text-ink-dim text-sm">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Year 1 total */}
                <div className="pt-4 border-t border-edge mb-6">
                  <p className="text-xs italic" style={{ color: '#9A9A9A' }}>
                    {plan.yearTotal}
                  </p>
                </div>

                <a
                  href="#contact"
                  className={`mt-auto inline-flex items-center justify-center px-6 py-3.5 font-display font-bold text-sm tracking-wide transition-colors ${
                    plan.featured
                      ? 'bg-gold text-void hover:bg-gold-bright'
                      : 'border border-gold-muted text-ink hover:bg-[rgba(231,208,95,0.07)]'
                  }`}
                >
                  {plan.cta} →
                </a>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeUp}
            className="text-ink-faint text-xs text-center"
          >
            Alle genoemde prijzen zijn exclusief BTW. De eenmalige opstartkosten omvatten implementatie, configuratie en training.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
