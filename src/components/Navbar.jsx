import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Parcours', href: '/#journey' },
  { label: 'Plateforme', href: '/#platform' },
  { label: 'Fonctionnalités', href: '/#features' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-white/8 bg-[#111111]/85 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-2.5 text-white font-bold tracking-[0.16em] uppercase"
          aria-label="Ardoiz — accueil"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-[#00E0E8]/30 bg-[#00E0E8]/10">
            <img src="/ardoiz-logo.png" alt="" className="h-5 w-5 object-contain" />
          </span>
          <span className="text-sm">Ardoiz</span>
        </a>

        <nav className="hidden md:flex items-center gap-7 rounded-full border border-white/8 bg-white/[0.025] px-6 py-2.5">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-[#9BA5A2] hover:text-white text-xs transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>

        <Link
          to="/connexion"
          className="hidden md:inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-xs font-bold text-[#041011] bg-[#00E0E8] hover:bg-[#62F5F8] transition-colors duration-200"
        >
          Se connecter
          <ArrowUpRight size={14} />
        </Link>

        <button
          type="button"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden rounded-lg border border-white/10 p-2 text-[#B6BFBC]"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-t border-white/8 bg-[#111111]/95 backdrop-blur-xl"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="text-[#B6BFBC] hover:text-white text-sm transition-colors"
                >
                  {label}
                </a>
              ))}
              <Link
                to="/connexion"
                onClick={() => setOpen(false)}
                className="inline-flex justify-center rounded-lg px-4 py-3 text-xs font-bold text-[#041011] bg-[#00E0E8]"
              >
                Se connecter
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
