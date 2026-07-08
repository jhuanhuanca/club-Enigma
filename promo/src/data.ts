import { DRINK_IMAGES } from './media'

export interface DrinkItem {
  id: string
  name: string
  tag: string
  detail: string
  image: string
  accent: string
}

export interface RoomItem {
  id: string
  title: string
  availability: string
  capacity: string
  accent: string
}

/** Tres cocteles destacados para la landing (carta completa en el grupo de WhatsApp). */
export const FEATURED_DRINKS: DrinkItem[] = [
  {
    id: 'mocochinchi',
    name: 'mocochinchi sour',
    tag: 'firma de la casa',
    detail:
      'singani premium · durazno boliviano deshidratado · limón de los yungas · clara de huevo · espuma de canela',
    image: DRINK_IMAGES.mocochinchi,
    accent: '#ff2d95',
  },
  {
    id: 'chuflay',
    name: 'chuflay artesanal',
    tag: 'nacional por excelencia',
    detail:
      'gran singani · ginger ale premium · hielo artesanal · rodaja de limón · micro hierbas frescas',
    image: DRINK_IMAGES.vaso,
    accent: '#22d3ee',
  },
  {
    id: 'whisky',
    name: 'whisky smoked andino',
    tag: 'premium importado',
    detail:
      'scotch whisky 12 años · ahumado con palo santo boliviano · piedra de hielo tallada · naranja expresada',
    image: DRINK_IMAGES.whisky,
    accent: '#a855f7',
  },
]

export const DRINK_CATALOG_TOTAL = 12

export const ROOM_CATALOG: RoomItem[] = [
  {
    id: 'duo',
    title: 'salas lounge dúo',
    availability: '2 salas disponibles',
    capacity: '2 a 4 personas',
    accent: '#ff2d95',
  },
  {
    id: 'club',
    title: 'salas club enigma',
    availability: '6 salas disponibles',
    capacity: 'hasta 5 personas',
    accent: '#a855f7',
  },
  {
    id: 'vip',
    title: 'mega sala vip celebridades',
    availability: '1 sala premium',
    capacity: '12 a 15 personas',
    accent: '#22d3ee',
  },
]
