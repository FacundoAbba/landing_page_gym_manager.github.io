import { motion } from 'framer-motion'
import { Monitor, Cloud } from 'lucide-react'
import { appImages } from '../data/appImages'
import { AppScreenshot } from './AppScreenshot'
import { Container } from './Container'

export function Evolution() {
  return (
    <section
      id="evolucion"
      className="scroll-mt-24 border-y border-sky-100/80 bg-sky-50/50 py-16 dark:border-slate-800 dark:bg-slate-900/40 sm:py-24"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400">
            Evolución
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            De potencia desktop a ubicuidad web
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            Nacimos resolviendo operaciones complejas en puesto fijo. Hoy,
            Gym Manager es una aplicación web robusta: misma profundidad
            funcional, sin fricción de instalaciones ni límites geográficos.
            Tus datos y procesos, siempre accesibles con la fiabilidad que
            esperas de un sistema mission-critical.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2"
        >
          <div className="overflow-hidden rounded-2xl border border-white bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950/60">
            <div className="flex gap-4 p-6 pb-0">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900">
                <Monitor className="h-6 w-6" aria-hidden />
              </div>
              <div className="min-w-0 text-left">
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  Raíz desktop
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  Flujos exigentes, controles densos y rendimiento local para
                  clubes que no negocian la precisión.
                </p>
              </div>
            </div>
            <div className="mt-4 border-t border-slate-100 p-3 dark:border-slate-800">
              <AppScreenshot
                src={appImages.login}
                alt="Pantalla de acceso (login)"
                className="max-h-52"
              />
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-sky-200/90 bg-gradient-to-br from-white to-sky-50/80 shadow-sm dark:border-sky-500/25 dark:from-slate-950 dark:to-sky-950/20">
            <div className="flex gap-4 p-6 pb-0">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 text-white shadow-lg shadow-sky-500/30">
                <Cloud className="h-6 w-6" aria-hidden />
              </div>
              <div className="min-w-0 text-left">
                <h3 className="font-semibold text-slate-900 dark:text-white">
                  Plataforma web
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  Escalabilidad horizontal, despliegues continuos y experiencia
                  unificada para staff, entrenadores y dirección.
                </p>
              </div>
            </div>
            <div className="mt-4 border-t border-sky-100/80 p-3 dark:border-slate-800">
              <AppScreenshot
                src={appImages.pantallaPrincipal}
                alt="Pantalla principal en el navegador"
                className="max-h-52"
              />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
