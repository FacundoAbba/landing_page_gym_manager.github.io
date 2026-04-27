import { Container } from './Container'

export function Footer() {
  return (
    <footer className="border-t border-sky-100/90 bg-sky-50/30 py-10 dark:border-slate-800 dark:bg-slate-900/30">
      <Container className="text-center text-sm text-slate-500 dark:text-slate-500">
        <p>© {new Date().getFullYear()} Gym Manager. Todos los derechos reservados.</p>
      </Container>
    </footer>
  )
}
