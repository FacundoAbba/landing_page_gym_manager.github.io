import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Container } from './Container'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24 dark:bg-slate-950">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
      >
        <div className="gm-mesh-glow absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-b from-sky-300/35 via-cyan-200/20 to-transparent blur-3xl dark:from-sky-500/25 dark:via-cyan-500/10" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-300/50 to-transparent dark:via-sky-500/35" />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            La transformación digital que tu gimnasio{' '}
            <span className="bg-gradient-to-r from-sky-600 via-cyan-500 to-sky-600 bg-clip-text text-transparent dark:from-sky-300 dark:via-cyan-300 dark:to-sky-200">
              ya merecía
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-400">
            Gym Manager evoluciona contigo: de la potencia de escritorio a una
            plataforma web escalable. Opera con la misma seriedad, desde
            cualquier lugar.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="#evolucion"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/35 transition hover:brightness-105 sm:w-auto"
            >
              Ver evolución
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href="#features"
              className="inline-flex w-full items-center justify-center rounded-full border border-sky-200/90 bg-white px-8 py-3.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-sky-400 hover:bg-sky-50/80 hover:text-sky-900 dark:border-slate-600 dark:bg-slate-900/80 dark:text-white dark:hover:border-sky-500/50 dark:hover:bg-slate-800 sm:w-auto"
            >
              Ver producto
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
