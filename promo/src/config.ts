/**
 * Reemplaza con el enlace de invitación de tu grupo de WhatsApp.
 * Ejemplo: https://chat.whatsapp.com/AbCdEfGhIjKlMnOp
 */
export const WHATSAPP_GROUP_URL =
  'https://chat.whatsapp.com/TU_ENLACE_DE_GRUPO_AQUI'

export const SITE_NAME = 'Enigma'
export const CLUB_TAGLINE = 'Karaoke club exclusivo · El Alto, Bolivia'

export function whatsappLink(message?: string): string {
  if (!message) return WHATSAPP_GROUP_URL
  const text = encodeURIComponent(message)
  return `${WHATSAPP_GROUP_URL}${WHATSAPP_GROUP_URL.includes('?') ? '&' : '?'}text=${text}`
}
