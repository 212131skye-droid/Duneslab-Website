'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Clock, CheckCircle } from 'lucide-react'
import PageHero from '@/components/PageHero'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const nextSteps = [
  {
    step: '01',
    title: 'We contact you within 24h',
    description:
      'After you submit, Marijn will personally respond within 24 hours — usually much faster. No automated sequences, no sales team.',
  },
  {
    step: '02',
    title: 'Free 30-minute demo call',
    description:
      'We schedule a screen-share call where you can see the tool in action with your type of product data. No slides, no pitch decks — just the real thing.',
  },
  {
    step: '03',
    title: 'Custom proposal',
    description:
      'If it looks like a fit, we send a tailored proposal within 48 hours: scope, timeline, and a fixed price. No vague estimates.',
  },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const lines = [
      `Name: ${fd.get('name')}`,
      `Company: ${fd.get('company')}`,
      `Email: ${fd.get('email')}`,
      `Phone: ${fd.get('phone')}`,
      `Service of interest: ${fd.get('service')}`,
      '',
      'Message:',
      fd.get('message') as string,
    ]
    const body = lines.join('\n')
    const subject = `Demo request — ${fd.get('company') || fd.get('name')}`
    window.location.href = `mailto:marijn@duneslab.nl?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        label="Contact"
        heading="Let's Talk."
        subtext="Tell us what you're working on. We'll get back to you within 24 hours."
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
            className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20"
          >
            {/* Left: form */}
            <motion.div variants={fadeUp} className="lg:col-span-7">
              {submitted ? (
                <div className="flex flex-col items-start gap-4 p-8 border border-gold bg-surface">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gold" />
                  <CheckCircle size={28} className="text-gold" strokeWidth={1.5} />
                  <h3 className="font-display font-bold text-xl text-ink">
                    Your email client should be open.
                  </h3>
                  <p className="text-ink-dim text-base leading-relaxed">
                    Your message has been prepared in your email client. Hit send and
                    we will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-gold text-sm font-display hover:text-gold-bright transition-colors"
                  >
                    ← Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-display text-xs tracking-[0.18em] uppercase text-ink-dim mb-2">
                        Name *
                      </label>
                      <input
                        name="name"
                        type="text"
                        required
                        placeholder="Jan de Vries"
                        className="w-full px-4 py-3 bg-surface border border-edge text-ink text-sm font-sans placeholder:text-ink-faint focus:border-gold focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-display text-xs tracking-[0.18em] uppercase text-ink-dim mb-2">
                        Company *
                      </label>
                      <input
                        name="company"
                        type="text"
                        required
                        placeholder="Acme B.V."
                        className="w-full px-4 py-3 bg-surface border border-edge text-ink text-sm font-sans placeholder:text-ink-faint focus:border-gold focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-display text-xs tracking-[0.18em] uppercase text-ink-dim mb-2">
                        Email *
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        placeholder="jan@acme.nl"
                        className="w-full px-4 py-3 bg-surface border border-edge text-ink text-sm font-sans placeholder:text-ink-faint focus:border-gold focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-display text-xs tracking-[0.18em] uppercase text-ink-dim mb-2">
                        Phone
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        placeholder="+31 6 12345678"
                        className="w-full px-4 py-3 bg-surface border border-edge text-ink text-sm font-sans placeholder:text-ink-faint focus:border-gold focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-display text-xs tracking-[0.18em] uppercase text-ink-dim mb-2">
                      Service of interest
                    </label>
                    <select
                      name="service"
                      className="w-full px-4 py-3 bg-surface border border-edge text-ink text-sm font-sans focus:border-gold focus:outline-none transition-colors appearance-none"
                    >
                      <option value="AI Software">AI Software &amp; SaaS</option>
                      <option value="AI Consultancy">AI Consultancy</option>
                      <option value="Web Design">Web Design</option>
                      <option value="Not sure">Not sure yet</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-display text-xs tracking-[0.18em] uppercase text-ink-dim mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your business and what you're looking to automate..."
                      className="w-full px-4 py-3 bg-surface border border-edge text-ink text-sm font-sans placeholder:text-ink-faint focus:border-gold focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gold text-void font-display font-bold text-sm tracking-[0.12em] uppercase transition-colors hover:bg-gold-bright"
                  >
                    Send message →
                  </button>

                  <p className="text-ink-faint text-xs pt-2">
                    This opens your email client with the message pre-filled. Hit send to submit.
                  </p>
                </form>
              )}
            </motion.div>

            {/* Right: contact info + next steps */}
            <motion.div variants={fadeUp} className="lg:col-span-5 space-y-10">
              {/* Contact details */}
              <div>
                <p className="text-gold text-xs tracking-[0.25em] uppercase font-display mb-6">
                  Direct contact
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <Mail size={16} className="text-gold mt-0.5 shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="text-ink-dim text-xs uppercase tracking-wide font-display mb-1">
                        Email
                      </p>
                      <a
                        href="mailto:marijn@duneslab.nl"
                        className="text-ink text-sm hover:text-gold transition-colors"
                      >
                        marijn@duneslab.nl
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={16} className="text-gold mt-0.5 shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="text-ink-dim text-xs uppercase tracking-wide font-display mb-1">
                        Response time
                      </p>
                      <p className="text-ink text-sm">Within 24 hours</p>
                      <p className="text-ink-faint text-xs mt-0.5">
                        Usually much faster
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What happens next */}
              <div>
                <p className="text-gold text-xs tracking-[0.25em] uppercase font-display mb-6">
                  What happens next
                </p>
                <div className="flex flex-col gap-6">
                  {nextSteps.map(({ step, title, description }) => (
                    <div key={step} className="flex gap-4">
                      <span className="font-display font-bold text-2xl text-gold opacity-40 leading-none shrink-0 w-8">
                        {step}
                      </span>
                      <div>
                        <h4 className="font-display font-semibold text-sm text-ink mb-1">
                          {title}
                        </h4>
                        <p className="text-ink-dim text-sm leading-relaxed">
                          {description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prefer email */}
              <div className="pt-6 border-t border-edge">
                <p className="text-ink-faint text-sm">
                  Prefer to email directly?{' '}
                  <a
                    href="mailto:marijn@duneslab.nl"
                    className="text-gold hover:text-gold-bright transition-colors"
                  >
                    marijn@duneslab.nl
                  </a>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

