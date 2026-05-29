'use client'

import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
}

const testimonials = [
  {
    quote:
      "We went from spending half a day on each quotation to under a minute. Our sales team now closes two to three times as many deals in the same timeframe. The accuracy alone has saved us from several costly pricing mistakes.",
    name: 'Lars Hendriksen',
    title: 'Sales Director',
    company: 'TECHNOBUILD',
  },
  {
    quote:
      "Duneslab didn't just automate our quotes — they made us look more professional than competitors twice our size. Clients comment on the quality of our proposals every week. The ROI was visible within the first month.",
    name: 'Sophie Vermeer',
    title: 'Head of Operations',
    company: 'INFRACORE',
  },
  {
    quote:
      "The implementation was faster than I expected and the team was genuinely hands-on throughout. We had it connected to our ERP within a week. It has fundamentally changed how we operate.",
    name: 'Rens van Dijk',
    title: 'Managing Director',
    company: 'CELDEX',
  },
]

export default function Testimonials() {
  return (
    <section
      id="about"
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
              Results
            </p>
            <h2 className="font-display font-bold text-4xl lg:text-5xl xl:text-6xl text-ink leading-tight">
              Built for businesses that move fast.
            </h2>
          </motion.div>

          {/* Testimonial cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {testimonials.map(({ quote, name, title, company }) => (
              <motion.div
                key={name}
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className="relative flex flex-col p-8 border border-edge bg-surface group transition-colors duration-300 hover:border-gold"
              >
                {/* Large gold quote mark */}
                <div
                  className="font-display font-bold text-7xl lg:text-8xl text-gold leading-none mb-4 opacity-60 group-hover:opacity-90 transition-opacity duration-300"
                  aria-hidden="true"
                  style={{ lineHeight: '0.8' }}
                >
                  "
                </div>

                <blockquote className="text-ink text-base leading-relaxed flex-1 mb-8">
                  {quote}
                </blockquote>

                <div className="pt-6 border-t border-edge">
                  <p className="font-display font-bold text-sm text-ink">
                    {name}
                  </p>
                  <p className="text-ink-faint text-xs mt-0.5">
                    {title} ·{' '}
                    <span className="text-gold">{company}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
