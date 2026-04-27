/**
 * Capturas JPEG en `public/images/`.
 * Usa BASE_URL para GitHub Pages (subruta /nombre-repo/).
 */
function publicImage(pathFromPublic: string): string {
  const rel = pathFromPublic.replace(/^\/+/, '')
  const b = import.meta.env.BASE_URL
  return b.endsWith('/') ? `${b}${rel}` : `${b}/${rel}`
}

export const appImages = {
  login: publicImage('images/login.jpeg'),
  pantallaPrincipal: publicImage('images/pantalla_principal.jpeg'),
  miembros: publicImage('images/miembros.jpeg'),
  misPagos: publicImage('images/mis_pagos.jpeg'),
  misRutinas: publicImage('images/mis_rutinas.jpeg'),
  generarRutinas: publicImage('images/generar_rutinas.jpeg'),
  membresiasVencidas: publicImage('images/membresias_vencidas.jpeg'),
} as const
