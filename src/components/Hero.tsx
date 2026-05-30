'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.4 },
  },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const } },
}

const partners = ['CELDEX']

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[680px] overflow-hidden"
      style={{
        background: '#050505',
        backgroundImage: "url('/hero-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'calc(100% + 100px) center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Atmospheric glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 80% 50%, rgba(231,208,95,0.06) 0%, transparent 55%)',
        }}
      />

      {/* Text legibility gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, #050505 50%, transparent 80%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto pl-16 lg:pl-24 xl:pl-32 pr-6 lg:pr-12 w-full pt-20">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-lg"
          >
            {/* Eyebrow */}
            <motion.p
              variants={item}
              className="text-ink-faint text-xs tracking-widest uppercase font-display mb-8"
            >
              Premium AI Software · Nederland
            </motion.p>

            {/* Headline */}
            <motion.h1
              variants={item}
              className="font-display font-bold uppercase leading-[0.9] tracking-tight mb-8 text-5xl md:text-6xl lg:text-7xl"
            >
              <span className="block text-ink">AI SOFTWARE</span>
              <span className="block text-ink">FOR MODERN</span>
              <span className="block text-ink">BUSINESS</span>
              <span className="block text-gold">WORKFLOWS.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={item}
              className="text-ink-dim text-lg lg:text-xl max-w-[480px] mb-10 leading-relaxed"
            >
              Uw offerte in 8 seconden. Uw concurrent doet er nog 3 uur over.
            </motion.p>

            {/* CTAs — side by side */}
            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-4 mb-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-void font-display font-bold text-sm tracking-[0.12em] uppercase transition-colors hover:bg-gold-bright"
              >
                Plan een demo →
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gold-muted text-ink font-display font-semibold text-sm tracking-[0.12em] uppercase transition-colors hover:bg-[rgba(231,208,95,0.07)]"
              >
                Bekijk platform
              </Link>
            </motion.div>

            {/* Scarcity */}
            <motion.p
              variants={item}
              className="text-sm italic mb-10 max-w-[420px]"
              style={{ color: '#9A9A9A' }}
            >
              Wij begeleiden maximaal 5 nieuwe klanten per kwartaal om kwaliteit te garanderen. Momenteel zijn er 2 plekken beschikbaar.
            </motion.p>

            {/* Social proof */}
            <motion.div variants={item}>
              <p className="text-ink-faint text-[10px] tracking-widest uppercase mb-4">
                Huidige pilot partners
              </p>
              <div className="flex flex-wrap gap-6 sm:gap-10">
                {partners.map((p) => (
                  <span
                    key={p}
                    className="font-display font-semibold text-xs tracking-[0.18em] text-ink-faint"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


