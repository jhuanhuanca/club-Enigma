/** Media — vida nocturna asiática, con foco en estética coreana (Seúl / noraebang) */

export interface MediaClip {
  hd: string
  sd: string
  poster: string
}

export interface StillImage {
  src: string
  alt: string
}

export const MOBILE_BREAKPOINT = 768

export function mixkitClip(id: number): MediaClip {
  const s = String(id)
  return {
    hd: `https://assets.mixkit.co/videos/${s}/${s}-1080.mp4`,
    sd: `https://assets.mixkit.co/videos/${s}/${s}-720.mp4`,
    poster: `https://assets.mixkit.co/videos/${s}/${s}-thumb-720-0.jpg`,
  }
}

export function pexelsPhoto(id: number, alt: string): StillImage {
  return {
    src: `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1260`,
    alt,
  }
}

/* ── Videos: salas neón / arcade asiático (estética noraebang) ── */

export const KR_NEON_ARCADE = mixkitClip(41906)
export const KR_NEON_BAR = mixkitClip(41907)
export const KR_NEON_GAME_ROOM = mixkitClip(41908)
export const KR_NEON_PORTRAIT = mixkitClip(41910)
export const KR_NEON_BILLIARDS = mixkitClip(41903)
export const KR_NEON_LOUNGE = mixkitClip(41923)

/* ── Fotos: calles y locales nocturnos en Seúl, Corea del Sur ── */

export const KR_SEOUL_NEON_STREET = pexelsPhoto(
  32536913,
  'calle de seúl de noche con letreros neón en corea del sur',
)

export const KR_SEOUL_SHOPFRONTS = pexelsPhoto(
  32536914,
  'escaparates iluminados en calle nocturna de seúl, corea',
)

export const KR_SEOUL_NARROW_ALLEY = pexelsPhoto(
  10276625,
  'calle estrecha de seúl con letreros de bares y vida nocturna coreana',
)

export const KR_SEOUL_SPOON_HOUSE = pexelsPhoto(
  31855380,
  'letreros neón de spoon house en seúl por la noche',
)

export const KR_SEOUL_CLUB_ENTRANCE = pexelsPhoto(
  28056069,
  'entrada de club nocturno con luces neón y ambiente premium',
)

export function pickClipSrc(clip: MediaClip, isMobile: boolean): string {
  return isMobile ? clip.sd : clip.hd
}

/* Alias usados en habitaciones privadas */
export const ROOMS_HERO = KR_NEON_PORTRAIT
export const ROOMS_AMBIENT = KR_NEON_BAR
export const ROOMS_VIP = KR_NEON_GAME_ROOM
export const ROOMS_KARAOKE = KR_NEON_ARCADE
