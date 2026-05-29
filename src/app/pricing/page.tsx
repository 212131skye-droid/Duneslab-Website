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
    note: 'Integratie met Exact, AFAS, SAP, WooCommerce, MySQL, PostgreSQL',
  },
]

const pricingFaqs = [
  {
    question: 'What is included in the one-time setup fee?',
    answer:
      'The setup fee covers initial integration with your product database or ERP system, configuration of your PDF templates and pricing logic, team onboarding and training, and a full QA round before go-live. It is a one-time investment — no recurring charges for setup work.',
  },
  {
    question: 'Can I change plans later?',
    answer:
      'Yes. You can upgrade from Starter to Professional at any time — the price difference is prorated from your next billing cycle. Downgrading is available at the end of your contract term.',
  },
  {
    question: 'What does the minimum 12-month contract include?',
    answer:
      'The 12-month contract includes access to the software, all updates, email support (Starter) or priority support (Professional), and hosting. After 12 months, contracts roll to a monthly arrangement with 30 days notice to cancel.',
  },
  {
    question: 'Are there usage limits on the Starter plan?',
    answer:
      'Starter is capped at 200 generated quotations per month, which covers most small and medium sales teams. If you exceed this regularly, Professional with unlimited quotations will be more cost-effective.',
  },
  {
    question: 'Do prices exclude VAT?',
    answer:
      'Yes, all prices shown are exclusive of VAT (BTW). Dutch VAT at 21% applies for Netherlands-based clients. EU B2B clients with a valid VAT number can use the reverse charge mechanism.',
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
        label="Pricing"
        heading="Transparent Pricing."
        subtext="No hidden costs. No surprises. Choose the plan that fits your team."
      />

      {/* Pricing cards */}
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
                  <ul className="flex flex-col gap-3 mb-6 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <Check size={14} className="text-gold mt-0.5 shrink-0" strokeWidth={2.5} />
                        <span className="text-ink-dim text-sm">{f}</span>
                      </li>
                    ))}
                  </ul>
                  {'note' in plan && plan.note && (
                    <p className="text-ink-faint text-[11px] leading-relaxed mb-6 pt-4 border-t border-edge">
                      {plan.note as string}
                    </p>
                  )}
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
              All prices exclude VAT. Minimum contract: 12 months. Custom pricing available for high-volume usage.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Pricing FAQ */}
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
                Pricing FAQ
              </p>
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-ink leading-tight mb-6">
                Questions about pricing.
              </h2>
              <p className="text-ink-dim text-base leading-relaxed">
                Still unsure?{' '}
                <Link href="/contact" className="text-gold hover:text-gold-bright transition-colors">
                  Talk to us directly
                </Link>{' '}
                and we will find the right fit together.
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
        heading="Ready to get started?"
        subtext="Book a free 30-minute demo and see the platform live. No commitment required."
        buttonLabel="Book a demo →"
        buttonHref="/contact"
        secondaryLabel="View solutions"
        secondaryHref="/solutions"
      />
    </>
  )
}


