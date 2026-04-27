/**
 * Capturas JPEG en `public/images/`.
 * Rutas absolutas desde la raíz del sitio (Vite sirve `public/` en `/`).
 */
export const appImages = {
  login: '/images/login.jpeg',
  pantallaPrincipal: '/images/pantalla_principal.jpeg',
  miembros: '/images/miembros.jpeg',
  misPagos: '/images/mis_pagos.jpeg',
  misRutinas: '/images/mis_rutinas.jpeg',
  generarRutinas: '/images/generar_rutinas.jpeg',
  membresiasVencidas: '/images/membresias_vencidas.jpeg',
} as const
