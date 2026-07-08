import { pexelsPhoto, type StillImage } from '../../media/koreanNightlifeMedia'

export interface MenuItem {
  id: string
  name: string
  price: string
  image: StillImage
}

export interface MenuSection {
  id: string
  title: string
  lead?: string
  showTopCta?: boolean
  items: MenuItem[]
}

export const HERO_COPY = {
  title: 'menú del restaurante',
}

export const INTRO_COPY = {
  title: 'menú de entradas karaoke.night',
  lead:
    'delicias inspiradas en corea para acompañar tu noche de karaoke. desde cortes premium hasta pastas con kimchi y mariscos salteados, cada platillo está pensado para compartir en tu sala privada con soju, cerveza o tu botella favorita.',
}

export const KOREAN_FAVORITES_LEAD =
  'platos clásicos para maridar con soju y cerveza coreana mientras cantas. perfectos para picar entre canción y canción.';

function dish(id: number, alt: string): StillImage {
  return pexelsPhoto(id, alt)
}

export const HERO_IMAGE = dish(
  9620885,
  'platillo coreano salteado servido en mesa de restaurante nocturno',
)

export const MENU_SECTIONS: MenuSection[] = [
  {
    id: 'entrees',
    title: 'platos principales',
    items: [
      {
        id: 'premium-steak',
        name: 'steak premium karaoke.night',
        price: '$45',
        image: dish(3535385, 'steak premium a la parrilla'),
      },
      {
        id: 'chopped-steak',
        name: 'bistec picado estilo coreano',
        price: '$45',
        image: dish(361184, 'bistec picado con guarnición'),
      },
      {
        id: 'kimchi-pasta',
        name: 'pasta kimchi con tocino',
        price: '$35',
        image: dish(539451, 'pasta con kimchi y tocino'),
      },
      {
        id: 'seafood-udon',
        name: 'udon de mariscos salteado',
        price: '$45',
        image: dish(1907244, 'udon de mariscos en salsa asiática'),
      },
      {
        id: 'brisket-sprouts',
        name: 'falda de res con brotes de soja',
        price: '$45',
        image: dish(769969, 'carne salteada estilo coreano con vegetales'),
      },
    ],
  },
  {
    id: 'korean-favorites',
    title: 'favoritos de comida coreana',
    lead: KOREAN_FAVORITES_LEAD,
    showTopCta: true,
    items: [
      {
        id: 'spicy-ramen',
        name: 'ramen picante',
        price: '$15',
        image: dish(2456435, 'ramen picante coreano en bol'),
      },
      {
        id: 'corn-cheese',
        name: 'corn cheese',
        price: '$35',
        image: dish(410648, 'elote con queso fundido estilo bar coreano'),
      },
      {
        id: 'tofu-kimchi',
        name: 'tofu-kimchi',
        price: '$35',
        image: dish(1199957, 'tofu con kimchi tradicional coreano'),
      },
      {
        id: 'pork-squid',
        name: 'panceta salteada con calamar',
        price: '$35',
        image: dish(1267320, 'mariscos y panceta salteados al estilo asiático'),
      },
    ],
  },
  {
    id: 'snacks',
    title: 'para compartir',
    items: [
      {
        id: 'egg-spam',
        name: 'huevo con spam',
        price: '$35',
        image: dish(1640777, 'huevo frito con spam estilo coreano'),
      },
      {
        id: 'fruit-platter',
        name: 'durazno y lichi',
        price: '$35',
        image: dish(1132048, 'fruta fresca de temporada en bandeja'),
      },
      {
        id: 'watermelon',
        name: 'sandía entera con fruta surtida',
        price: '$45',
        image: dish(1313267, 'sandía servida con frutas surtidas'),
      },
      {
        id: 'vegetables',
        name: 'vegetales surtidos',
        price: '$35',
        image: dish(1431335, 'vegetales frescos para compartir'),
      },
    ],
  },
]

export const FOOTER_COPY = {
  disclaimer: '*precios sujetos a cambio sin previo aviso.',
}
