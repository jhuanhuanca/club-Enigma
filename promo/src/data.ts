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
    name: 'Mocochinchi Sour',
    tag: 'Firma de la casa',
    detail:
      'Singani Premium · durazno boliviano deshidratado · limón de Los Yungas · clara de huevo · espuma de canela',
    image: DRINK_IMAGES.mocochinchi,
    accent: '#ff2d95',
  },
  {
    id: 'chuflay',
    name: 'Chuflay Artesanal',
    tag: 'Nacional por excelencia',
    detail:
      'Gran Singani · ginger ale premium · hielo artesanal · rodaja de limón · micro hierbas frescas',
    image: DRINK_IMAGES.vaso,
    accent: '#22d3ee',
  },
  {
    id: 'whisky',
    name: 'Whisky Smoked Andino',
    tag: 'Premium importado',
    detail:
      'Scotch Whisky 12 años · ahumado con palo santo boliviano · piedra de hielo tallada · naranja expresada',
    image: DRINK_IMAGES.whisky,
    accent: '#a855f7',
  },
]

export const DRINK_CATALOG_TOTAL = 12

export const ROOM_CATALOG: RoomItem[] = [
  {
    id: 'duo',
    title: 'Salas Lounge Dúo',
    availability: '2 salas disponibles',
    capacity: '2 a 4 personas',
    accent: '#ff2d95',
  },
  {
    id: 'club',
    title: 'Salas Club Enigma',
    availability: '6 salas disponibles',
    capacity: 'Hasta 5 personas',
    accent: '#a855f7',
  },
  {
    id: 'vip',
    title: 'Mega Sala VIP Celebridades',
    availability: '1 sala premium',
    capacity: '12 a 15 personas',
    accent: '#22d3ee',
  },
]
