import { motion } from 'framer-motion'
import { Users, Wallet, Dumbbell, LineChart } from 'lucide-react'
import { appImages } from '../data/appImages'
import { AppScreenshot } from './AppScreenshot'
import { Container } from './Container'

const features = [
  {
    icon: Users,
    title: 'Gestión de miembros',
    description:
      'Registro con fotos, perfiles completos e historial unificado para cada socio.',
    image: appImages.miembros,
    imageAlt: 'Listado y ficha de miembros',
  },
  {
    icon: Wallet,
    title: 'Pagos y facturación',
    description:
      'Automatización financiera, conciliación y reportes de ingresos listos para dirección.',
    image: appImages.misPagos,
    imageAlt: 'Vista de mis pagos',
  },
  {
    icon: Dumbbell,
    title: 'Entrenamiento inteligente',
    description:
      'Generación de rutinas, plantillas y seguimiento de progreso conectado al perfil.',
    image: appImages.generarRutinas,
    imageAlt: 'Generación de rutinas',
    secondaryImage: appImages.misRutinas,
    secondaryAlt: 'Mis rutinas',
  },
  {
    icon: LineChart,
    title: 'Analítica avanzada',
    description:
      'Gráficos interactivos para analítica y reporting, según el alcance de cada despliegue.',
    image: appImages.membresiasVencidas,
    imageAlt: 'Membresías vencidas',
  },
] as const

export function FeatureGrid() {
  return (
    <section
      id="features"
      className="scroll-mt-24 bg-white py-16 dark:bg-slate-950 sm:py-24"
      aria-labelledby="features-heading"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p
            id="features-heading"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-400"
          >
            Producto
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Todo lo que un gimnasio moderno necesita
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
            Módulos pensados para equipos reales: recepción, finanzas,
            sala y dirección en un solo ecosistema.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-5 sm:grid-cols-2">
          {features.map((f, i) => (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                delay: i * 0.06,
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-sky-100/90 bg-white text-left shadow-sm transition hover:border-sky-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/50 dark:hover:border-sky-500/35"
            >
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-sky-400/15 blur-2xl transition group-hover:bg-sky-400/25 dark:bg-sky-500/10"
                aria-hidden
              />
              <div className="relative border-b border-slate-100 bg-slate-50/50 p-3 dark:border-slate-800 dark:bg-slate-900/80">
                {'secondaryImage' in f && f.secondaryImage ? (
                  <div className="grid grid-cols-2 gap-2">
                    <AppScreenshot
                      src={f.image}
                      alt={f.imageAlt}
                      className="max-h-44"
                    />
                    <AppScreenshot
                      src={f.secondaryImage}
                      alt={f.secondaryAlt}
                      className="max-h-44"
                    />
                  </div>
                ) : (
                  <AppScreenshot src={f.image} alt={f.imageAlt} className="max-h-48" />
                )}
              </div>
              <div className="relative flex flex-1 flex-col p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-100 text-sky-700 dark:bg-sky-500/20 dark:text-sky-300">
                  <f.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {f.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  )
}
