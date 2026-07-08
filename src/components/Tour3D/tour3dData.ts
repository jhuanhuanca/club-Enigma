import type { MediaClip } from '../../media/koreanNightlifeMedia'
import {
  KR_NEON_ARCADE,
  KR_NEON_GAME_ROOM,
  KR_NEON_LOUNGE,
} from '../../media/koreanNightlifeMedia'

export interface TourRoom {
  id: string
  label: string
  description: string
  preview: MediaClip
  /** Sustituir con el ID Matterport real del cliente */
  matterportModelId: string
}

export const HERO_COPY = {
  title: 'el noraebang privado favorito de la noche',
}

export const INTRO_COPY = {
  title: 'elige tu sala karaoke privada',
  lead:
    'recorre virtualmente nuestro bar de neón y entra en salas privadas de lujo, cada una con temática propia. diseñamos la experiencia definitiva para cantar, brindar y vivir momentos inolvidables al estilo de seúl.',
}

/**
 * Modelos Matterport de demostración (espacios comerciales públicos).
 * Reemplazar `matterportModelId` con los tours reales de karaoke.night.
 */
export const TOUR_ROOMS: TourRoom[] = [
  {
    id: 'lounge',
    label: 'lounge principal',
    description: 'bar central, neveras premium y luces de neón concéntricas.',
    preview: KR_NEON_GAME_ROOM,
    matterportModelId: 'Zh14WDNfzHP',
  },
  {
    id: 'small',
    label: 'sala pequeña',
    description: '2 – 6 invitados · ambiente íntimo noraebang.',
    preview: KR_NEON_ARCADE,
    matterportModelId: 'Zh14WDNfzHP',
  },
  {
    id: 'large',
    label: 'sala grande',
    description: '11 – 20 invitados · ideal para fiestas y corporativos.',
    preview: KR_NEON_LOUNGE,
    matterportModelId: 'Zh14WDNfzHP',
  },
]

export function matterportEmbedUrl(modelId: string): string {
  return `https://my.matterport.com/show/?m=${modelId}&play=1&qs=1&brand=0`
}
