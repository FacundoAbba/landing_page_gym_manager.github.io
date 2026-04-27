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
  return (
    <img
      src={src}
      alt={alt}
      decoding="async"
      loading={priority ? 'eager' : 'lazy'}
      className={`block w-full rounded-xl border border-slate-200/90 bg-slate-100 object-cover object-top shadow-lg dark:border-slate-700 dark:bg-slate-900 ${className}`}
    />
  )
}
