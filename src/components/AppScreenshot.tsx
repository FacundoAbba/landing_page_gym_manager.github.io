import { useLightbox } from '../lightbox/LightboxContext'

type AppScreenshotProps = {
  src: string
  alt: string
  className?: string
  /** Solo la primera imagen visible (p. ej. hero). */
  priority?: boolean
}

export function AppScreenshot({
  src,
  alt,
  className = '',
  priority = false,
}: AppScreenshotProps) {
  const { open } = useLightbox()

  return (
    <button
      type="button"
      onClick={() => open(src, alt)}
      className={`group block w-full cursor-zoom-in overflow-hidden rounded-xl border border-slate-200/90 bg-slate-100 text-left shadow-lg transition hover:border-sky-300/80 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 dark:border-slate-700 dark:bg-slate-900 dark:focus-visible:ring-offset-slate-950 ${className}`}
      aria-label={`Ampliar: ${alt}`}
    >
      <img
        src={src}
        alt=""
        role="presentation"
        decoding="async"
        loading={priority ? 'eager' : 'lazy'}
        className="pointer-events-none block w-full object-cover object-top"
      />
    </button>
  )
}
