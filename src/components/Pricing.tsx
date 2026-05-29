'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
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
    setup: '+ €9.500 one-time setup',
    description: 'Everything you need to automate quotation generation.',
    featured: false,
    features: [
      'AI quotation generation',
      'Product database sync',
      'Professional PDF export',
      'Email support',
      'Up to 200 quotations/mo',
      'Standard templates',
    ],
    cta: 'Get started',
  },
  {
    name: 'Professional',
    price: '€790',
    period: '/mo',
    setup: '+ €9.500 one-time setup',
    description: 'Priority support and advanced analytics for growing teams.',
    featured: true,
    features: [
      'Everything in Starter',
      'Priority support (4hr response)',
      'Advanced analytics dashboard',
      'Custom branding & templates',
      'Unlimited quotations',
      'SLA monitoring',
    ],
    cta: 'Get started',
    badge: 'MOST POPULAR',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    setup: '+ €3.500 integration fee',
    description: 'Full integration, dedicated onboarding and SLA guarantees.',
    featured: false,
    features: [
      'Everything in Professional',
      'ERP / server integration',
      'Dedicated onboarding manager',
      'Custom SLA guarantee',
      'White-label option',
      'API access',
    ],
    cta: 'Contact us',
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
          {/* Heading */}
          <motion.div variants={fadeUp} className="max-w-xl mb-16 lg:mb-20">
            <p className="text-gold text-xs tracking-[0.25em] uppercase font-display mb-5">
              Pricing
            </p>
            <h2 className="font-display font-bold text-4xl lg:text-5xl xl:text-6xl text-ink leading-tight mb-4">
              Transparent pricing.
            </h2>
            <p className="text-ink-dim text-lg">No hidden costs. No surprises.</p>
          </motion.div>

          {/* Cards */}
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
                {/* Top accent */}
                <div
                  className={`absolute top-0 left-0 right-0 h-px ${
                    plan.featured ? 'bg-gold' : 'bg-edge'
                  }`}
                />

                {/* Badge */}
                {plan.badge && (
                  <span className="self-start font-display font-bold text-[9px] tracking-[0.28em] uppercase px-2 py-1 mb-5 text-void bg-gold">
                    {plan.badge}
                  </span>
                )}

                {/* Name & price */}
                <div className={plan.badge ? '' : 'mt-0'}>
                  <h3 className="font-display font-bold text-lg text-ink-dim mb-4">
                    {plan.name}
                  </h3>
                  <div className="flex items-end gap-1 mb-1">
                    <span className="font-display font-bold text-4xl lg:text-5xl text-ink">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-ink-dim text-base mb-1.5">{plan.period}</span>
                    )}
                  </div>
                  <p className="text-ink-faint text-xs mb-4">{plan.setup}</p>
                  <p className="text-ink-dim text-sm leading-relaxed mb-8 pb-8 border-b border-edge">
                    {plan.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="flex flex-col gap-3 mb-10 flex-1">
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

                {/* CTA */}
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

          {/* Footnote */}
          <motion.p
            variants={fadeUp}
            className="text-ink-faint text-xs text-center"
          >
            All prices exclude VAT. Minimum contract: 12 months. Custom pricing
            available for high-volume usage.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
