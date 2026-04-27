import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'

type LightboxValue = {
  open: (src: string, alt: string) => void
  close: () => void
}

const LightboxContext = createContext<LightboxValue | null>(null)

export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<{ src: string; alt: string } | null>(null)

  const open = useCallback((src: string, alt: string) => {
    setState({ src, alt })
  }, [])

  const close = useCallback(() => {
    setState(null)
  }, [])

  useEffect(() => {
    if (!state) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [state, close])

  useEffect(() => {
    if (!state) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [state])

  const modal =
    state &&
    createPortal(
      <div
        className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-md"
        role="dialog"
        aria-modal="true"
        aria-label="Imagen ampliada"
        onClick={close}
      >
        <div
          className="relative max-h-[min(92vh,900px)] max-w-[min(96vw,1200px)]"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={close}
            className="absolute -right-1 -top-1 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-900/90 text-white shadow-lg transition hover:bg-slate-800 sm:-right-2 sm:-top-2 dark:bg-slate-800 dark:hover:bg-slate-700"
            aria-label="Cerrar"
          >
            <X className="h-5 w-5" strokeWidth={2} />
          </button>
          <img
            src={state.src}
            alt={state.alt}
            className="max-h-[min(92vh,900px)] w-auto max-w-full rounded-lg border border-white/10 object-contain shadow-2xl"
            decoding="async"
          />
        </div>
      </div>,
      document.body,
    )

  return (
    <LightboxContext.Provider value={{ open, close }}>
      {children}
      {modal}
    </LightboxContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components -- hook colocado junto al provider
export function useLightbox() {
  const ctx = useContext(LightboxContext)
  if (!ctx) throw new Error('useLightbox must be used within LightboxProvider')
  return ctx
}
