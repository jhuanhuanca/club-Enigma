import type { MediaClip, StillImage } from '../../media/koreanNightlifeMedia'
import {
  KR_NEON_ARCADE,
  KR_NEON_BAR,
  KR_NEON_BILLIARDS,
  KR_NEON_LOUNGE,
  KR_NEON_PORTRAIT,
  KR_SEOUL_NEON_STREET,
  KR_SEOUL_SPOON_HOUSE,
} from '../../media/koreanNightlifeMedia'

export interface HeroPanel {
  id: string
  media: MediaClip
  tint: string
}

export type OccasionVisual =
  | { type: 'video'; clip: MediaClip; alt: string }
  | { type: 'image'; image: StillImage }

export const HERO_PANELS: HeroPanel[] = [
  {
    id: 'drinks',
    media: KR_NEON_BAR,
    tint: 'rgba(34, 197, 94, 0.42)',
  },
  {
    id: 'sing',
    media: KR_NEON_ARCADE,
    tint: 'rgba(255, 45, 149, 0.45)',
  },
  {
    id: 'dining',
    media: KR_NEON_LOUNGE,
    tint: 'rgba(220, 38, 38, 0.35)',
  },
]

export const BOTTLE_SPOTLIGHT: MediaClip = KR_NEON_BILLIARDS

export const OCCASION_VISUALS = {
  birthdays: {
    type: 'video',
    clip: KR_NEON_ARCADE,
    alt: 'jóvenes en sala arcade neón estilo noraebang coreano',
  },
  anniversaries: {
    type: 'image',
    image: KR_SEOUL_SPOON_HOUSE,
  },
  bachelor: {
    type: 'video',
    clip: KR_NEON_PORTRAIT,
    alt: 'despedida en ambiente nocturno asiático con luces neón',
  },
  graduation: {
    type: 'image',
    image: KR_SEOUL_NEON_STREET,
  },
  corporate: {
    type: 'video',
    clip: KR_NEON_BILLIARDS,
    alt: 'equipo en sala de juegos neón estilo club nocturno asiático',
  },
} satisfies Record<string, OccasionVisual>
