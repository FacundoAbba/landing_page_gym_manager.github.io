import { Container } from './Container'

export function Footer() {
  return (
    <footer className="border-t border-sky-100/90 bg-sky-50/30 py-10 dark:border-slate-800 dark:bg-slate-900/30">
      <Container className="flex flex-col items-center justify-between gap-4 text-center text-sm text-slate-500 sm:flex-row sm:text-left dark:text-slate-500">
        <p>© {new Date().getFullYear()} Gym Manager. Todos los derechos reservados.</p>
        <p className="max-w-md sm:text-right">
          Landing optimizada: SVG y CSS, sin imágenes raster pesadas — carga
          rápida como carta de presentación.
        </p>
      </Container>
    </footer>
  )
}
