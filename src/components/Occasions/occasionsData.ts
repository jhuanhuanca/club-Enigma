import type { OccasionVisual } from './occasionsMedia'
import { OCCASION_VISUALS } from './occasionsMedia'

export interface OccasionRow {
  id: string
  title: string
  visual: OccasionVisual
  paragraphs: string[]
  reverse?: boolean
  showCta?: boolean
}

export const HERO_COPY = {
  title: 'celebra cada ocasión en karaoke.night',
  lead:
    'salas noraebang privadas en ambiente coreano: cumpleaños, aniversarios, graduaciones, despedidas y eventos corporativos con neón, soju y servicio vip.',
}

export const INTRO_COPY = {
  title: 'karaoke para cada ocasión',
  lead:
    'inspirados en la vida nocturna de seúl — hongdae, gangnam e itaewon — transformamos cada celebración en una experiencia inmersiva con sonido profesional, iluminación neón y servicio vip.',
}

export const OCCASION_ROWS: OccasionRow[] = [
  {
    id: 'birthdays',
    title: 'cumpleaños',
    visual: OCCASION_VISUALS.birthdays,
    paragraphs: [
      'los cumpleaños merecen más que una cena tranquila. en karaoke.night tu grupo canta, brinda con soju y celebra en una sala privada al estilo noraebang coreano, con decoración neón, pastel y catálogo ilimitado de k-pop y hits internacionales.',
      'ideal para grupos de amigos, familias y celebraciones sorpresa con servicio de comida y botellas incluido en nuestros paquetes especiales.',
    ],
    showCta: true,
  },
  {
    id: 'anniversaries',
    title: 'aniversarios',
    visual: OCCASION_VISUALS.anniversaries,
    paragraphs: [
      'celebra tu aniversario en un espacio íntimo con luces de neón al estilo de las calles de seúl, cocteles de autor y la banda sonora que define vuestra historia.',
      'reserva con anticipación y personaliza la experiencia con playlist dedicada, decoración y servicio de botellas premium.',
    ],
    reverse: true,
  },
  {
    id: 'bachelor',
    title: 'despedidas de soltero/a',
    visual: OCCASION_VISUALS.bachelor,
    paragraphs: [
      'las despedidas de soltero y soltera se viven a lo grande en karaoke.night. micrófonos, luces de neón, bebidas y la energía de un club nocturno privado con estética asiática.',
      'paquetes especiales para grupos grandes con catering, botellas y horario extendido hasta las 3am.',
    ],
  },
  {
    id: 'graduation',
    title: 'graduaciones',
    visual: OCCASION_VISUALS.graduation,
    paragraphs: [
      'cierra un capítulo importante cantando con quienes estuvieron contigo en el camino. graduaciones universitarias o secundaria: nuestras salas grandes acomodan a todo tu grupo con la vibra festiva de las noches en seúl.',
      'menús para compartir, promociones en botellas y un ambiente que convierte la noche en leyenda.',
    ],
    reverse: true,
  },
  {
    id: 'corporate',
    title: 'eventos corporativos',
    visual: OCCASION_VISUALS.corporate,
    paragraphs: [
      'los eventos corporativos no tienen que limitarse a salas de conferencias. en karaoke.night tu equipo desconecta, canta y conecta en un entorno premium inspirado en los lounges nocturnos de gangnam.',
      'team building, fiestas de fin de año, lanzamientos y celebraciones de empresa con facturación y coordinación dedicada.',
    ],
    showCta: true,
  },
]

export const CLOSING_COPY = {
  text:
    'sin importar la ocasión, karaoke.night ofrece un lugar memorable al estilo de la vida nocturna coreana, donde las personas se reúnen, celebran y crean experiencias que recordarán mucho después de que termine la noche. desde cumpleaños y aniversarios hasta eventos corporativos y fiestas de graduación, nuestras salas privadas son el destino ideal para cada celebración.',
}

export const BOTTLE_COPY = {
  title: 'paquetes de botellas',
  subtitle: 'ofertas premium pensadas para celebraciones y buenas vibras.',
  text:
    'eleva tu noche con paquetes de servicio de botellas al estilo de los bares de seúl: soju, whisky, champagne y cocteles de autor con servicio vip en tu sala privada.',
}
