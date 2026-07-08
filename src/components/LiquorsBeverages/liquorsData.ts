import { pexelsPhoto } from '../../media/koreanNightlifeMedia'

export interface PricedItem {
  id: string
  label: string
  price: string
}

export interface LiquorCategory {
  id: string
  icon: 'whisky' | 'champagne' | 'tequila' | 'vodka' | 'cognac'
  title: string
  subtitle: string
  items: string[]
}

export const HERO_COPY = {
  title: 'licores y bebidas',
}

export const HERO_IMAGE = pexelsPhoto(
  1283219,
  'barra con botellas premium, cerveza coreana y bebidas en sala karaoke',
)

export const BEVERAGES_TITLE = 'bebidas'

export const BEVERAGE_LINES: PricedItem[] = [
  {
    id: 'beer',
    label: 'cerveza — cass, terra, hite',
    price: '$8',
  },
  {
    id: 'soju',
    label: 'soju — jinro, original, fresh, grapefruit, grape, plum, strawberry',
    price: '$25',
  },
  {
    id: 'water-soda',
    label: 'agua y refrescos — agua, coca-cola, coca zero, sprite',
    price: '$2',
  },
  {
    id: 'specialty',
    label: 'especiales — red bull, agua con gas',
    price: '$5',
  },
  {
    id: 'juice',
    label: 'jugos — naranja, arándano',
    price: '$8',
  },
]

export const LIQUOR_INTRO = {
  title: 'carta de licores karaoke.night',
  lead: 'selección premium curada para cada celebración en tu sala privada.',
}

export const LIQUOR_CATEGORIES: LiquorCategory[] = [
  {
    id: 'whisky',
    icon: 'whisky',
    title: 'whisky & scotch',
    subtitle: 'single malts y blends',
    items: [
      'johnnie walker black',
      'johnnie walker gold',
      'johnnie walker blue',
      'macallan 12 años',
      'macallan 18 años',
      'ballantine\'s 17 años',
      'glenfiddich 15 años',
      'glenfiddich 18 años',
      'glenfiddich 21 años',
      'glenfiddich 30 años',
      'royal salute 21 años',
    ],
  },
  {
    id: 'champagne',
    icon: 'champagne',
    title: 'champagne & vino',
    subtitle: 'celebra con burbujas',
    items: [
      'armand de brignac (ace of spades)',
      'dom pérignon',
      'dom pérignon rosé',
      'veuve clicquot',
      'raymond',
      'opus one wine',
    ],
  },
  {
    id: 'tequila',
    icon: 'tequila',
    title: 'tequila & mezcal',
    subtitle: 'reposado y añejo',
    items: [
      'patrón silver',
      'clase azul reposado',
      'don julio 1942',
      'cincoro añejo',
      'cincoro reposado',
      'jose cuervo añejo',
      'jose cuervo reposado',
      'maestro dobel cristalino',
    ],
  },
  {
    id: 'vodka',
    icon: 'vodka',
    title: 'vodka & spirits',
    subtitle: 'pours limpios y premium',
    items: ['tito\'s', 'grey goose'],
  },
  {
    id: 'cognac',
    icon: 'cognac',
    title: 'cognac & brandy',
    subtitle: 'selección de lujo',
    items: ['hennessy vsop', 'hennessy xo', 'rémy xo', 'louis xiii'],
  },
]

export const FOOTER_COPY = {
  disclaimer: '*precios sujetos a cambio sin previo aviso.',
  responsible: 'por favor bebe con responsabilidad.',
}
