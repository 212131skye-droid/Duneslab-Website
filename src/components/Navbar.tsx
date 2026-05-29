'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Product', href: '/how-it-works' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <svg width="22" height="20" viewBox="0 0 22 20" fill="none" aria-hidden="true">
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

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div
        className="backdrop-blur-md border-b transition-colors duration-300"
        style={{
          background: scrolled ? 'rgba(17,17,17,0.95)' : 'rgba(17,17,17,0.80)',
          borderColor: scrolled ? '#232323' : 'transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-display tracking-wide transition-colors ${
                    isActive ? 'text-gold' : 'text-ink-dim hover:text-ink'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-gold text-void font-display font-semibold text-sm tracking-wide transition-colors hover:bg-gold-bright"
            >
              Book a demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden text-ink-dim hover:text-ink transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-edge"
            style={{ background: 'rgba(17,17,17,0.98)' }}
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-base font-display tracking-wide transition-colors ${
                      isActive ? 'text-gold' : 'text-ink-dim hover:text-ink'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
              <Link
                href="/contact"
                className="mt-2 inline-flex items-center justify-center px-6 py-3 bg-gold text-void font-display font-semibold text-sm tracking-wide hover:bg-gold-bright transition-colors"
              >
                Book a demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

