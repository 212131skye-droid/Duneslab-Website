'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const faqs = [
  {
    question: 'What systems can you integrate with?',
    answer:
      'Duneslab integrates with most common ERP and database systems including SAP, Microsoft Dynamics, Exact, Salesforce and custom SQL databases. If you use a different system, reach out â€” we handle custom integrations on a case-by-case basis.',
  },
  {
    question: 'How long does implementation take?',
    answer:
      'Most clients are fully operational within 2 to 4 weeks. This includes integration, configuration of templates and pricing logic, team training and a full QA round. We handle the entire onboarding process.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Yes. All data is processed and stored in compliance with GDPR. We do not share or sell client data. Enterprise plans include a data processing agreement (DPA) and can be configured with on-premise deployment options.',
  },
  {
    question: 'Can I cancel anytime?',
    answer:
      'Our standard contracts have a minimum term of 12 months. After that, you can cancel with 30 days notice. We are transparent about this upfront â€” no lock-ins beyond the initial term.',
  },
  {
    question: 'Do you offer a demo?',
    answer:
      'Absolutely. We offer a free 30-minute demo where we walk you through the platform live, answer your questions and assess whether it is a fit for your workflow. Use the button above to book your slot.',
  },
  {
    question: 'What makes Duneslab different from other tools?',
    answer:
      'Most tools are generic. Duneslab is built specifically for B2B quotation workflows and is fully configured around your product database, pricing logic and brand. You get a custom solution, not a template you need to bend into shape.',
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
    <motion.div variants={fadeUp} className="border-b border-edge">
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
          transition={{ duration: 0.25, ease: 'easeInOut' }}
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
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      className="py-28 lg:py-36 border-t border-edge"
      style={{ background: 'rgba(5,5,5,0.92)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: heading */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-4"
          >
            <p className="text-gold text-xs tracking-[0.25em] uppercase font-display mb-5">
              FAQ
            </p>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-ink leading-tight mb-6">
              Common questions.
            </h2>
            <p className="text-ink-dim text-base leading-relaxed mb-8">
              Not finding what you need? Email us directly at{' '}
              <a
                href="mailto:marijn@duneslab.nl"
                className="text-gold hover:text-gold-bright transition-colors"
              >
                marijn@duneslab.nl
              </a>
            </p>
          </motion.div>

          {/* Right: accordion */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="lg:col-span-8"
          >
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

