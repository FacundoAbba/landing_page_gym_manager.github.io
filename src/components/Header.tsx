import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from './Container'
import { ThemeToggle } from './ThemeToggle'

const links = [
  { href: '#evolucion', label: 'Evolución' },
  { href: '#features', label: 'Producto' },
  { href: '#analitica', label: 'Analítica' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-sky-100/90 bg-white/90 backdrop-blur-xl dark:border-slate-800/90 dark:bg-slate-950/90">
      <Container className="flex h-16 items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-2 text-left">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 text-sm font-bold text-white shadow-lg shadow-sky-500/30">
            GM
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
            Gym Manager
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-600 transition hover:text-sky-700 dark:text-slate-400 dark:hover:text-sky-300"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sky-100 bg-white text-slate-800 md:hidden dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-sky-100 dark:border-slate-800 md:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-sky-50 dark:text-slate-200 dark:hover:bg-slate-900"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
