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
    question: 'Met welke systemen kunt u integreren?',
    answer:
      'Duneslab integreert met de meeste gangbare ERP- en databasesystemen, waaronder SAP, Microsoft Dynamics, Exact, Salesforce en custom SQL-databases. Gebruikt u een ander systeem? Neem contact op — wij verzorgen maatwerk integraties per geval.',
  },
  {
    question: 'Hoe lang duurt de implementatie?',
    answer:
      'De meeste klanten zijn volledig operationeel binnen 2 tot 4 weken. Dit omvat integratie, configuratie van templates en prijslogica, teamtraining en een volledige QA-ronde. Wij verzorgen het volledige onboardingtraject.',
  },
  {
    question: 'Is mijn data veilig?',
    answer:
      'Ja. Alle data wordt verwerkt en opgeslagen in overeenstemming met de AVG (GDPR). Wij delen of verkopen geen klantdata. Enterprise-abonnementen omvatten een verwerkersovereenkomst (DPA) en kunnen worden geconfigureerd met on-premise implementatieopties.',
  },
  {
    question: 'Kan ik op elk moment opzeggen?',
    answer:
      'Onze standaard contracten hebben een minimale looptijd van 12 maanden. Daarna kunt u opzeggen met een opzegtermijn van 30 dagen. Wij zijn hierover transparant van het begin — geen verborgen bindingen na de initiële contractperiode.',
  },
  {
    question: 'Biedt u een demo aan?',
    answer:
      'Absoluut. Wij bieden een gratis demo van 30 minuten waarbij wij u live door het platform leiden, uw vragen beantwoorden en beoordelen of het een goede match is voor uw workflow. Gebruik de knop hierboven om uw afspraak in te plannen.',
  },
  {
    question: 'Wat maakt Duneslab anders dan andere tools?',
    answer:
      'De meeste tools zijn generiek. Duneslab is specifiek gebouwd voor B2B offerteprocessen en volledig geconfigureerd rondom uw productdatabase, prijslogica en huisstijl. U krijgt een oplossing op maat — geen template die u zelf moet ombuigen.',
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
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-4"
          >
            <p className="text-gold text-xs tracking-widest uppercase font-display mb-5">
              FAQ
            </p>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-ink leading-tight mb-6">
              Veelgestelde vragen.
            </h2>
            <p className="text-ink-dim text-base leading-relaxed mb-8">
              Staat uw vraag er niet bij? Mail ons direct via{' '}
              <a
                href="mailto:marijn@duneslab.nl"
                className="text-gold hover:text-gold-bright transition-colors"
              >
                marijn@duneslab.nl
              </a>
            </p>
          </motion.div>

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
