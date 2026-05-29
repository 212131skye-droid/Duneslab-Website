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
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
}

const partners = ['CELDEX', 'TECHNOBUILD', 'INFRACORE', 'NORTHWIND']

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[680px] overflow-hidden"
      style={{
        background: '#050505',
        backgroundImage: "url('/hero-bg.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'right center',
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
            'linear-gradient(to right, #050505 38%, rgba(5,5,5,0.75) 65%, rgba(5,5,5,0.15) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full pt-20">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-[600px]"
          >
            {/* Eyebrow */}
            <motion.p
              variants={item}
              className="text-ink-faint text-xs tracking-[0.25em] uppercase font-display mb-8"
            >
              Premium AI Software · Netherlands
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
              Duneslab builds intelligent software that automates complex
              workflows and drives results.
            </motion.p>

            {/* CTAs — side by side */}
            <motion.div
              variants={item}
              className="flex flex-row gap-4 mb-14 flex-wrap"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-void font-display font-bold text-sm tracking-[0.12em] uppercase transition-colors hover:bg-gold-bright"
              >
                Book a demo →
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gold-muted text-ink font-display font-semibold text-sm tracking-[0.12em] uppercase transition-colors hover:bg-[rgba(231,208,95,0.07)]"
              >
                Explore platform
              </Link>
            </motion.div>

            {/* Social proof */}
            <motion.div variants={item}>
              <p className="text-ink-faint text-[10px] tracking-[0.25em] uppercase mb-4">
                Trusted by industry leaders
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
