'use client'

import { motion } from 'framer-motion'
import { Zap, Target, Lightbulb } from 'lucide-react'
import PageHero from '@/components/PageHero'
import CTAStrip from '@/components/CTAStrip'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const values = [
  {
    icon: Zap,
    title: 'Speed',
    description:
      'Every tool we build is optimised for speed — both in how fast it runs and how fast it ships. We believe time is the most valuable thing a business can save.',
  },
  {
    icon: Target,
    title: 'Precision',
    description:
      'Software that produces wrong output is worse than no software at all. We build for 100% accuracy every time — no approximations, no rounding errors, no excuses.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'We constantly push the boundary of what business software can do. AI is not a buzzword here — it is the core of everything we build.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Duneslab"
        heading="Built Different."
        subtext="A software company built on results, not promises."
      />

      {/* Story */}
      <section
        className="py-24 lg:py-32 border-b border-edge"
        style={{ background: 'rgba(5,5,5,0.92)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-4"
            >
              <p className="text-gold text-xs tracking-[0.25em] uppercase font-display mb-5">
                Our story
              </p>
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-ink leading-tight">
                Built by someone who has seen the problem first-hand.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="lg:col-span-8 space-y-6"
            >
              <p className="text-ink-dim text-lg leading-relaxed">
                Duneslab was founded by Marijn van der Heijden — a mechanical engineering
                student at the Amsterdam University of Applied Sciences (HvA) who started
                building software for real businesses while still studying.
              </p>
              <p className="text-ink-dim text-base leading-relaxed">
                It started with web design: clean, fast sites for small businesses that
                needed a better online presence. But after working with several B2B
                companies, a pattern became clear — the biggest time loss wasn't in
                marketing, it was in operations. Sales teams spending half their day
                manually building quotations. Pricing errors costing thousands. Proposals
                taking days that should take minutes.
              </p>
              <p className="text-ink-dim text-base leading-relaxed">
                That insight led to the first Duneslab AI quotation tool — built for a
                single client, then refined into a product. Today, Duneslab builds
                intelligent software and automation systems for B2B enterprises across
                the Netherlands and beyond.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section
        className="py-24 lg:py-32 border-b border-edge"
        style={{ background: 'rgba(5,5,5,0.92)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-gold text-xs tracking-[0.25em] uppercase font-display mb-8">
              Our mission
            </p>
            <blockquote className="font-display font-bold text-3xl lg:text-4xl xl:text-5xl text-ink leading-tight max-w-4xl mx-auto">
              "We believe business software should be fast, intelligent,
              and actually work."
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Values */}
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
            <motion.div variants={fadeUp} className="max-w-xl mb-14">
              <p className="text-gold text-xs tracking-[0.25em] uppercase font-display mb-5">
                Our values
              </p>
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-ink leading-tight">
                What drives every decision we make.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {values.map(({ icon: Icon, title, description }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  className="group relative p-8 border border-edge bg-surface transition-colors duration-300 hover:border-gold"
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="w-10 h-10 flex items-center justify-center mb-6">
                    <Icon size={22} className="text-gold" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-ink mb-3">{title}</h3>
                  <p className="text-ink-dim text-sm leading-relaxed">{description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder */}
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
            <motion.div variants={fadeUp} className="max-w-xl mb-14">
              <p className="text-gold text-xs tracking-[0.25em] uppercase font-display mb-5">
                The team
              </p>
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-ink leading-tight">
                The person behind Duneslab.
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-8 max-w-xl p-8 border border-edge bg-surface"
            >
              {/* Photo placeholder */}
              <div
                className="w-20 h-20 shrink-0 flex items-center justify-center border border-gold"
                style={{ background: 'rgba(231,208,95,0.07)' }}
              >
                <span className="font-display font-bold text-xl text-gold tracking-widest">
                  MH
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-xl text-ink mb-1">
                  Marijn van der Heijden
                </h3>
                <p className="text-gold text-xs tracking-[0.2em] uppercase font-display mb-4">
                  Founder & Developer
                </p>
                <p className="text-ink-dim text-sm leading-relaxed">
                  Mechanical engineering student at HvA Amsterdam. Builds AI software
                  and automation tools for B2B enterprises. Started with web design,
                  evolved into full AI software products. Based in the Netherlands.
                </p>
                <a
                  href="mailto:marijn@duneslab.nl"
                  className="inline-block mt-4 text-gold-muted text-xs hover:text-gold transition-colors"
                >
                  marijn@duneslab.nl
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CTAStrip
        heading="Want to work with us?"
        subtext="Book a free 30-minute call and let's talk about what we can build together."
        buttonLabel="Get in touch →"
        buttonHref="/contact"
      />
    </>
  )
}
