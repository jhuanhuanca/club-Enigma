export interface HeroHotspot {
  id: string
  label: string
  subtitle: string
  image: string
  top: string
  left: string
  cardSide: 'left' | 'right'
  accent: string
}

/** Hotspots de bar — imágenes Pexels royalty-free */
export const HERO_HOTSPOTS: HeroHotspot[] = [
  {
    id: 'whisky',
    label: 'whisky premium',
    subtitle: 'añejado 18 años',
    image:
      'https://images.pexels.com/photos/340508/pexels-photo-340508.jpeg?auto=compress&cs=tinysrgb&w=320&h=220&fit=crop',
    top: '20%',
    left: '36%',
    cardSide: 'left',
    accent: '#f59e0b',
  },
  {
    id: 'cocktail',
    label: 'cóctel signature',
    subtitle: 'mezcla de la casa',
    image:
      'https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg?auto=compress&cs=tinysrgb&w=320&h=220&fit=crop',
    top: '34%',
    left: '41%',
    cardSide: 'left',
    accent: '#ff2d95',
  },
  {
    id: 'wine',
    label: 'vino de reserva',
    subtitle: 'cosecha seleccionada',
    image:
      'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=320&h=220&fit=crop',
    top: '22%',
    left: '57%',
    cardSide: 'right',
    accent: '#a855f7',
  },
  {
    id: 'champagne',
    label: 'champagne brut',
    subtitle: 'edición nocturna',
    image:
      'https://images.pexels.com/photos/951420/pexels-photo-951420.jpeg?auto=compress&cs=tinysrgb&w=320&h=220&fit=crop',
    top: '47%',
    left: '61%',
    cardSide: 'right',
    accent: '#22d3ee',
  },
]
