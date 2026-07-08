import type { MediaClip } from './privateRoomsMedia'
import {
  ROOMS_AMBIENT,
  ROOMS_HERO,
  ROOMS_KARAOKE,
  ROOMS_VIP,
} from './privateRoomsMedia'

export interface RoomFeature {
  label: string
}

export interface RoomTier {
  id: string
  title: string
  guests: string
  hours: string
  media: MediaClip
  imageAlt: string
  accent: string
  reverse?: boolean
}

export interface AmenityCard {
  id: string
  icon: 'sound' | 'vip' | 'food' | 'songs'
  title: string
  description: string
  media: MediaClip
  accent: string
}

export interface PackageCard {
  id: string
  title: string
  items: string[]
}

export interface EventSpotlight {
  id: string
  title: string
  description: string
  cta: string
  to: string
  media: MediaClip
  align: 'left' | 'right'
  accent: string
}

export interface PreviewStrip {
  id: string
  label: string
  media: MediaClip
}

export const HERO_FEATURES: RoomFeature[] = [
  { label: 'habitaciones karaoke privadas' },
  { label: 'lujo vip' },
  { label: 'catálogo de canciones sin límite' },
  { label: 'servicio de comida y botellas' },
  { label: 'sonido de estudio' },
  { label: 'iluminación neón inmersiva' },
]

export const PREVIEW_STRIP: PreviewStrip[] = [
  { id: 'neon', label: 'luces de neón', media: ROOMS_AMBIENT },
  { id: 'vip', label: 'salas vip', media: ROOMS_VIP },
  { id: 'stage', label: 'escenario nocturno', media: ROOMS_KARAOKE },
]

export const AMENITY_CARDS: AmenityCard[] = [
  {
    id: 'sound',
    icon: 'sound',
    title: 'sonido tipo concierto',
    description:
      'micrófonos inalámbricos premium, mezcla en vivo y acústica calibrada para que cada nota se escuche con claridad.',
    media: ROOMS_KARAOKE,
    accent: '#22d3ee',
  },
  {
    id: 'vip',
    icon: 'vip',
    title: 'experiencia vip',
    description:
      'salas privadas con pantallas 4k, sofás premium y ambiente diseñado para celebraciones exclusivas.',
    media: ROOMS_VIP,
    accent: '#a855f7',
  },
  {
    id: 'food',
    icon: 'food',
    title: 'comida y coctelería',
    description:
      'menú para compartir, licores premium y servicio directo a tu habitación durante toda la noche.',
    media: ROOMS_HERO,
    accent: '#ff2d95',
  },
  {
    id: 'songs',
    icon: 'songs',
    title: 'canciones sin fin',
    description:
      'miles de temas en español, inglés y asiático, actualizados cada semana para tu repertorio favorito.',
    media: ROOMS_AMBIENT,
    accent: '#2b4dff',
  },
]

export const PACKAGE_CARDS: PackageCard[] = [
  {
    id: 'starter-s',
    title: 'paquete especial s',
    items: [
      '1–4 invitados (habitación pequeña)',
      'tarifa desde $50 / hr',
      'bebida de bienvenida incluida',
    ],
  },
  {
    id: 'starter-m',
    title: 'paquete especial m',
    items: [
      '5–10 invitados (habitación mediana)',
      'tarifa desde $80 / hr',
      'snack bar incluido',
    ],
  },
  {
    id: 'starter-l',
    title: 'paquete especial l',
    items: [
      '11–20 invitados (habitación grande)',
      'tarifa desde $120 / hr',
      'servicio de botellas premium',
    ],
  },
  {
    id: 'starter-xl',
    title: 'paquete especial xl',
    items: [
      '21+ invitados (suite vip)',
      'tarifa personalizada',
      'anfitrión dedicado y menú chef',
    ],
  },
]

export const ROOM_TIERS: RoomTier[] = [
  {
    id: 'small',
    title: 'habitaciones pequeñas',
    guests: '1 – 4 invitados',
    hours: 'disponible 7pm – 12am',
    media: ROOMS_AMBIENT,
    imageAlt: 'sala karaoke íntima con luces neón asiáticas',
    accent: '#ff2d95',
  },
  {
    id: 'medium',
    title: 'habitaciones medianas',
    guests: '5 – 10 invitados',
    hours: 'disponible 7pm – 2am',
    media: ROOMS_VIP,
    imageAlt: 'lounge karaoke vip con ambiente nocturno',
    accent: '#a855f7',
    reverse: true,
  },
  {
    id: 'large',
    title: 'habitaciones grandes',
    guests: '11 – 20 invitados',
    hours: 'disponible 7pm – 3am',
    media: ROOMS_KARAOKE,
    imageAlt: 'habitación karaoke grande estilo club nocturno',
    accent: '#22d3ee',
  },
]

export const EVENT_SPOTLIGHTS: EventSpotlight[] = [
  {
    id: 'corporate',
    title: 'eventos corporativos',
    description:
      'team building, lanzamientos y celebraciones de empresa con salas privadas, catering y producción de audio profesional.',
    cta: 'saber más',
    to: '/reserva-ahora/evento',
    media: ROOMS_VIP,
    align: 'left',
    accent: '#2b4dff',
  },
  {
    id: 'celebrations',
    title: 'fiestas y celebraciones',
    description:
      'cumpleaños, despedidas y aniversarios con decoración neón, pastel, botellas premium y playlist personalizada.',
    cta: 'saber más',
    to: '/habitaciones-privadas/ocasiones',
    media: ROOMS_HERO,
    align: 'right',
    accent: '#ff2d95',
  },
]
