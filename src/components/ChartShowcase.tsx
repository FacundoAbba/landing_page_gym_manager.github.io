import { motion } from 'framer-motion'
import { appImages } from '../data/appImages'
import { AppScreenshot } from './AppScreenshot'
import { Container } from './Container'

export function ChartShowcase() {
  return (
    <section
      id="analitica"
      className="scroll-mt-24 border-y border-sky-100/80 bg-sky-50/40 py-16 dark:border-slate-800 dark:bg-slate-900/30 sm:py-24"
      aria-labelledby="analitica-heading"
    >
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45 }}
          >
            <p
              id="analitica-heading"
              className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400"
            >
              Analítica
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Gráficos interactivos para analítica
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-400">
              El objetivo es que dirección y operaciones exploren tendencias y
              KPIs con interacción clara (zoom, detalle al pasar el cursor,
              exportación cuando aplique), según cómo esté montado cada
              despliegue.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                Comparar vistas por criterios que defináis (sede, plan,
                franja, etc.).
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                Pasar de totales agregados al detalle cuando el modelo de datos
                lo permita.
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="relative overflow-hidden rounded-2xl border border-sky-100/90 bg-white p-4 shadow-xl shadow-sky-900/5 dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-black/30 sm:p-5"
          >
            <div className="mb-3">
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Captura del sistema
              </p>
              <p className="text-lg font-semibold text-slate-900 dark:text-white">
                Membresías vencidas
              </p>
            </div>
            <AppScreenshot
              src={appImages.membresiasVencidas}
              alt="Pantalla de membresías vencidas en Gym Manager"
              className="max-h-[min(72vh,520px)]"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
