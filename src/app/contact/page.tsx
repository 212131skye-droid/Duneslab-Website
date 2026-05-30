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
    title: 'Wij nemen binnen 24 uur contact met u op',
    description:
      'Na uw inzending reageert Marijn persoonlijk binnen 24 uur — vaak veel sneller. Geen geautomatiseerde reeksen, geen salesteam.',
  },
  {
    step: '02',
    title: 'Gratis demo van 30 minuten',
    description:
      'Wij plannen een screen-share waarbij u de tool live in actie ziet met uw type productdata. Geen slides, geen pitchdeck — gewoon de echte tool.',
  },
  {
    step: '03',
    title: 'Persoonlijk voorstel',
    description:
      'Als het een goede match lijkt, sturen wij binnen 48 uur een op maat gemaakt voorstel: scope, planning en een vaste prijs. Geen vage schattingen.',
  },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const lines = [
      `Naam: ${fd.get('name')}`,
      `Bedrijf: ${fd.get('company')}`,
      `E-mail: ${fd.get('email')}`,
      `Telefoon: ${fd.get('phone')}`,
      `Dienst van interesse: ${fd.get('service')}`,
      '',
      'Bericht:',
      fd.get('message') as string,
    ]
    const body = lines.join('\n')
    const subject = `Demoverzoek — ${fd.get('company') || fd.get('name')}`
    window.location.href = `mailto:marijn@duneslab.nl?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        label="Contact"
        heading="Laten We Praten."
        subtext="Vertel ons waar u mee bezig bent. Wij reageren binnen 24 uur."
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
              <div className="flex items-start gap-3 px-5 py-4 border border-gold-muted bg-surface mb-8">
                <div className="w-1 shrink-0 self-stretch bg-gold" />
                <p className="text-ink-dim text-sm leading-relaxed">
                  Wij nemen momenteel maximaal{' '}
                  <span className="text-ink font-semibold">5 klanten per kwartaal</span>{' '}
                  aan. Vul het formulier in om uw plek te reserveren.
                </p>
              </div>
              {submitted ? (
                <div className="flex flex-col items-start gap-4 p-8 border border-gold bg-surface">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gold" />
                  <CheckCircle size={28} className="text-gold" strokeWidth={1.5} />
                  <h3 className="font-display font-bold text-xl text-ink">
                    Uw e-mailclient zou nu open moeten zijn.
                  </h3>
                  <p className="text-ink-dim text-base leading-relaxed">
                    Uw bericht is klaargezet in uw e-mailclient. Klik op verzenden
                    en wij reageren binnen 24 uur.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-gold text-sm font-display hover:text-gold-bright transition-colors"
                  >
                    ← Stuur nog een bericht
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-display text-xs tracking-[0.18em] uppercase text-ink-dim mb-2">
                        Naam *
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
                        Bedrijf *
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
                        E-mail *
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
                        Telefoon
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
                      Dienst van interesse
                    </label>
                    <select
                      name="service"
                      className="w-full px-4 py-3 bg-surface border border-edge text-ink text-sm font-sans focus:border-gold focus:outline-none transition-colors appearance-none"
                    >
                      <option value="AI Software">AI Software &amp; SaaS</option>
                      <option value="AI Consultancy">AI Advies</option>
                      <option value="Web Design">Web Design</option>
                      <option value="Not sure">Nog niet zeker</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-display text-xs tracking-[0.18em] uppercase text-ink-dim mb-2">
                      Bericht *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Vertel ons over uw bedrijf en wat u wilt automatiseren..."
                      className="w-full px-4 py-3 bg-surface border border-edge text-ink text-sm font-sans placeholder:text-ink-faint focus:border-gold focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gold text-void font-display font-bold text-sm tracking-[0.12em] uppercase transition-colors hover:bg-gold-bright"
                  >
                    Stuur bericht →
                  </button>

                  <p className="text-ink-faint text-xs pt-2">
                    Dit opent uw e-mailclient met het bericht ingevuld. Klik op verzenden om in te dienen.
                  </p>
                  <p className="text-ink-faint text-xs">
                    Wij reageren binnen 24 uur op werkdagen.
                  </p>
                </form>
              )}
            </motion.div>

            {/* Right: contact info + next steps */}
            <motion.div variants={fadeUp} className="lg:col-span-5 space-y-10">
              <div>
                <p className="text-gold text-xs tracking-widest uppercase font-display mb-6">
                  Direct contact
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <Mail size={16} className="text-gold mt-0.5 shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="text-ink-dim text-xs uppercase tracking-wide font-display mb-1">
                        E-mail
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
                        Reactietijd
                      </p>
                      <p className="text-ink text-sm">Binnen 24 uur</p>
                      <p className="text-ink-faint text-xs mt-0.5">
                        Vaak veel sneller
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-gold text-xs tracking-widest uppercase font-display mb-6">
                  Wat er daarna gebeurt
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

              <div className="pt-6 border-t border-edge">
                <p className="text-ink-faint text-sm">
                  Liever direct mailen?{' '}
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
