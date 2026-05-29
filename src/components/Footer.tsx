'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <svg width="18" height="16" viewBox="0 0 22 20" fill="none" aria-hidden="true">
        <polygon points="11,1 21,19 1,19" fill="#E7D05F" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-display font-bold text-sm tracking-[0.22em] text-ink uppercase">
          DUNES
        </span>
        <span className="font-display font-semibold text-[10px] tracking-[0.3em] text-gold uppercase">
          LABS
        </span>
      </div>
    </Link>
  )
}

const columns = [
  {
    label: 'Product',
    links: [
      { label: 'AI Quotation Tool', href: '/how-it-works' },
      { label: 'Features', href: '/solutions' },
      { label: 'How it works', href: '/how-it-works' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  {
    label: 'Company',
    links: [
      { label: 'About Duneslab', href: '/about' },
      { label: 'AI Consultancy', href: '/solutions' },
      { label: 'Web Design', href: '/solutions' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    label: 'Contact',
    links: [
      { label: 'marijn@duneslab.nl', href: 'mailto:marijn@duneslab.nl', external: true },
      { label: 'Book a demo', href: '/contact' },
      { label: 'Netherlands', href: '#', external: true },
    ],
  },
]

export default function Footer() {
  return (
    <footer
      className="border-t border-edge"
      style={{ background: 'rgba(8,8,8,0.97)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main footer content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] as const }}
          className="py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12"
        >
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Logo />
            <p className="text-ink-faint text-sm leading-relaxed mt-5 max-w-xs">
              AI Software For Modern Business Workflows. Built in the Netherlands
              for B2B enterprises that demand precision and speed.
            </p>
            <p className="text-ink-faint text-xs mt-6">
              <a
                href="mailto:marijn@duneslab.nl"
                className="hover:text-gold transition-colors"
              >
                marijn@duneslab.nl
              </a>
            </p>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-10">
            {columns.map((col) => (
              <div key={col.label}>
                <p className="font-display font-bold text-xs tracking-[0.2em] uppercase text-ink-dim mb-5">
                  {col.label}
                </p>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      {link.external ? (
                        <a
                          href={link.href}
                          className="text-ink-faint text-sm hover:text-ink transition-colors"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-ink-faint text-sm hover:text-ink transition-colors"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-edge flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: '#6A6A6A' }}>
            Â© 2026 Duneslab. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: '#6A6A6A' }}>
            Built by{' '}
            <a
              href="mailto:marijn@duneslab.nl"
              className="text-gold-muted hover:text-gold transition-colors"
            >
              Marijn van der Heijden
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

