import { pexelsPhoto, type MediaClip, type StillImage } from '../../media/koreanNightlifeMedia'
import { KR_NEON_ARCADE, KR_NEON_BAR, KR_NEON_GAME_ROOM } from '../../media/koreanNightlifeMedia'

export type PackageVisual =
  | { type: 'video'; clip: MediaClip; alt: string }
  | { type: 'image'; image: StillImage }

export interface StarterPackage {
  id: string
  title: string
  weekdayPrice: string
  weekendPrice?: string
  includes: string[]
  finePrint?: string
  visual: PackageVisual
  reverse?: boolean
}

export const HERO_COPY = {
  title: 'ofertas especiales para principiantes',
}

export const HERO_IMAGE = pexelsPhoto(
  1283219,
  'botellas de soju, cerveza terra y licores premium en barra karaoke',
)

export const HERO_VIDEO = KR_NEON_BAR

export const SOMEEK_COPY = {
  title: 'especiales so-mek',
  lead:
    'so-mek es la combinación clásica de soju y maekju (cerveza) que define las noches de karaoke en corea. en karaoke.night preparamos el ritual perfecto para tu primera experiencia noraebang con bebidas coreanas y servicio vip en sala privada.',
}

export const MINIMUM_REQUIREMENTS = [
  '1 – 4 invitados (sala pequeña) · special s',
  '5 – 8 invitados (sala mediana 1) · special m1',
  '9 – 10 invitados (sala mediana 2) · special m2',
  '11 – 12 invitados (sala grande 1) · special l1',
  '13 – 20 invitados (sala grande 2) · special l2',
]

export const STARTER_PACKAGES: StarterPackage[] = [
  {
    id: 'duo',
    title: 'paquete duo',
    weekdayPrice: 'entre semana: $99 + impuestos',
    includes: [
      '1 soju',
      '3 cervezas terra o cass',
      '1 entrada del menú',
      '1 hora de karaoke privado',
    ],
    visual: {
      type: 'video',
      clip: KR_NEON_BAR,
      alt: 'soju jinro y cerveza terra en mesa de lounge neón',
    },
  },
  {
    id: 'special-s',
    title: 'special s',
    weekdayPrice: 'entre semana: $180 + impuestos',
    weekendPrice: 'fin de semana y festivos: $220 + impuestos',
    includes: [
      '2 soju',
      '4 cervezas',
      '1 entrada del menú',
      '2 horas de karaoke privado',
      'sala pequeña · 1 – 4 invitados',
    ],
    finePrint: 'propina del 20% y cargos adicionales aplican según ocupación.',
    visual: {
      type: 'image',
      image: pexelsPhoto(616836, 'botellas de licor y cerveza en barra iluminada'),
    },
    reverse: true,
  },
  {
    id: 'special-m1',
    title: 'special m1',
    weekdayPrice: 'entre semana: $260 + impuestos',
    weekendPrice: 'fin de semana y festivos: $310 + impuestos',
    includes: [
      '4 soju',
      '6 cervezas',
      '2 entradas del menú',
      '2 horas de karaoke privado',
      'sala mediana · 5 – 8 invitados',
    ],
    visual: {
      type: 'video',
      clip: KR_NEON_GAME_ROOM,
      alt: 'fila de cervezas terra y soju en lounge con neón rosa',
    },
  },
  {
    id: 'special-l1',
    title: 'special l1',
    weekdayPrice: 'entre semana: $360 + impuestos',
    weekendPrice: 'fin de semana y festivos: $440 + impuestos',
    includes: [
      '3 horas de karaoke privado',
      '7 soju',
      '12 cervezas',
      '5 aguas y 5 refrescos',
      '4 entradas del menú',
      'sala grande · 11 – 12 invitados',
    ],
    finePrint: 'propina del 20% y cargos adicionales aplican según ocupación.',
    visual: {
      type: 'image',
      image: pexelsPhoto(1283219, 'bebidas coreanas alineadas en mesa reflectante'),
    },
    reverse: true,
  },
  {
    id: 'special-l2',
    title: 'special l2',
    weekdayPrice: 'entre semana: $450 + impuestos',
    weekendPrice: 'fin de semana y festivos: $550 + impuestos',
    includes: [
      '3 horas de karaoke privado',
      '8 soju',
      '15 cervezas',
      '6 aguas y 6 refrescos',
      '4 entradas del menú',
      'sala x-large · 13 – 20 invitados',
    ],
    finePrint: 'propina del 20% y cargos adicionales aplican según ocupación.',
    visual: {
      type: 'video',
      clip: KR_NEON_ARCADE,
      alt: 'lounge karaoke con bebidas coreanas y luces neón',
    },
  },
]

export const ROOM_CHARGES = {
  title: 'cargos adicionales por hora de sala',
  rates: [
    { label: 'pequeña', price: '$50/hr' },
    { label: 'mediana', price: '$70/hr' },
    { label: 'grande', price: '$100/hr' },
    { label: 'x-large', price: '$150/hr' },
  ],
  visual: {
    type: 'video',
    clip: KR_NEON_ARCADE,
    alt: 'interior de sala karaoke privada con sofá y luces neón',
  } satisfies PackageVisual,
}

export const TERMS_TITLE = 'términos y condiciones'

export const TERMS_ITEMS = [
  'debes ser mayor de 21 años para consumir alcohol en las instalaciones.',
  'todos los precios están sujetos a impuestos locales. se aplica propina automática del 20% en grupos de 6 o más.',
  'no se permiten mascotas, grabaciones no autorizadas ni fumar/vapear dentro de las salas.',
  'no se permite comida ni bebida del exterior.',
  'nos reservamos el derecho de admisión para mantener un ambiente seguro y respetuoso.',
]

export const FOOTER_COPY = {
  disclaimer: '*precios sujetos a cambio sin previo aviso.',
  responsible: 'por favor bebe con responsabilidad.',
}
