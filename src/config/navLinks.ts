export interface NavChild {
  id: string
  label: string
  to: string
  description?: string
  /** Ruta con vista propia (no NavSubView genérica) */
  customView?: 'habitacion-privada' | 'ocasiones' | 'recorrido-3d' | 'menu-restaurante' | 'licores-bebidas' | 'ofertas-principiantes'
}

export interface NavLink {
  id: string
  to: string
  lines: string[]
  accent?: string
  children: NavChild[]
  /** El ítem padre solo abre el desplegable, no navega */
  dropdownOnly?: boolean
}

export const MAIN_NAV_LINKS: NavLink[] = [
  {
    id: 'home',
    to: '/',
    lines: ['home'],
    accent: '#ff2d95',
    children: [],
  },
  {
    id: 'habitaciones',
    to: '/habitaciones-privadas',
    lines: ['habitaciones', 'privadas'],
    accent: '#a855f7',
    dropdownOnly: true,
    children: [
      {
        id: 'habitacion-privada',
        label: 'habitación privada',
        to: '/habitaciones-privadas/habitacion-privada',
        customView: 'habitacion-privada',
      },
      {
        id: 'habitaciones-ocasiones',
        label: 'ocasiones',
        to: '/habitaciones-privadas/ocasiones',
        description: 'cumpleaños, despedidas, aniversarios y celebraciones especiales.',
        customView: 'ocasiones',
      },
      {
        id: 'habitaciones-recorrido',
        label: 'recorrido 3d',
        to: '/habitaciones-privadas/recorrido-3d',
        description: 'explora nuestras habitaciones en un tour virtual interactivo.',
        customView: 'recorrido-3d',
      },
    ],
  },
  {
    id: 'servicios',
    to: '/servicios-comidas-y-botellas',
    lines: ['servicios de', 'comidas y botellas'],
    accent: '#22d3ee',
    dropdownOnly: true,
    children: [
      {
        id: 'servicios-menu',
        label: 'menú del restaurante',
        to: '/servicios-comidas-y-botellas/menu-restaurante',
        description: 'platillos gourmet para compartir en tu sala privada.',
        customView: 'menu-restaurante',
      },
      {
        id: 'servicios-licores',
        label: 'licores y bebidas',
        to: '/servicios-comidas-y-botellas/licores-y-bebidas',
        description: 'whisky, champagne, vinos y cocteles de autor.',
        customView: 'licores-bebidas',
      },
      {
        id: 'servicios-ofertas-principiantes',
        label: 'ofertas especiales para principiantes',
        to: '/servicios-comidas-y-botellas/ofertas-principiantes',
        description: 'paquetes ideales para tu primera noche de karaoke.',
        customView: 'ofertas-principiantes',
      },
      {
        id: 'servicios-ofertas-botellas',
        label: 'ofertas especiales de servicio de botellas',
        to: '/servicios-comidas-y-botellas/ofertas-botellas',
        description: 'promociones exclusivas en botellas premium y servicio vip.',
      },
    ],
  },
  {
    id: 'confirmar',
    to: '/confirmar-asistencia',
    lines: ['confirmar', 'asistencia'],
    accent: '#2b4dff',
    dropdownOnly: true,
    children: [
      {
        id: 'confirmar-reserva',
        label: 'confirmar reserva',
        to: '/confirmar-asistencia/confirmar-reserva',
        description: 'valida tu reserva con código y asegura tu lugar.',
      },
      {
        id: 'confirmar-codigo',
        label: 'código de invitación',
        to: '/confirmar-asistencia/codigo-invitacion',
        description: 'ingresa el código que recibiste para un evento privado.',
      },
      {
        id: 'confirmar-invitados',
        label: 'lista de invitados',
        to: '/confirmar-asistencia/lista-invitados',
        description: 'registra y confirma la asistencia de tu grupo.',
      },
    ],
  },
  {
    id: 'nosotros',
    to: '/sobre-nosotros',
    lines: ['sobre', 'nosotros'],
    accent: '#f472b6',
    dropdownOnly: true,
    children: [
      {
        id: 'nosotros-historia',
        label: 'nuestra historia',
        to: '/sobre-nosotros/nuestra-historia',
        description: 'cómo nació karaoke.night y nuestra pasión por la música nocturna.',
      },
      {
        id: 'nosotros-experiencia',
        label: 'experiencia nocturna',
        to: '/sobre-nosotros/experiencia-nocturna',
        description: 'descubre la experiencia karaoke más inmersiva de karaoke.night.',
      },
      {
        id: 'nosotros-canciones',
        label: 'catálogo de canciones',
        to: '/sobre-nosotros/catalogo-canciones',
        description: 'miles de canciones en español, inglés y asiático para tu noche.',
      },
      {
        id: 'nosotros-galeria',
        label: 'galería',
        to: '/sobre-nosotros/galeria',
        description: 'imágenes y videos de nuestras salas, eventos y ambiente nocturno.',
      },
    ],
  },
  {
    id: 'contacto',
    to: '/contactanos',
    lines: ['contáctanos'],
    accent: '#34d399',
    children: [],
  },
  {
    id: 'blogs',
    to: '/blogs',
    lines: ['blogs'],
    accent: '#fbbf24',
    children: [],
  },
]

export const RESERVA_ROUTE = '/reserva-ahora'

export const RESERVA_CHILDREN: NavChild[] = [
  {
    id: 'reserva-sala',
    label: 'reservar sala',
    to: '/reserva-ahora/sala',
    description: 'elige fecha, hora y tipo de habitación.',
  },
  {
    id: 'reserva-evento',
    label: 'reservar evento',
    to: '/reserva-ahora/evento',
    description: 'organiza fiestas, corporativos y celebraciones.',
  },
  {
    id: 'reserva-paquete',
    label: 'paquetes especiales',
    to: '/reserva-ahora/paquetes',
    description: 'combos con comida, botellas y experiencia premium.',
  },
]

export function navAriaLabel(link: NavLink): string {
  return link.lines.join(' ')
}

export function hasNavChildren(link: NavLink): boolean {
  return link.children.length > 0
}

export function isDropdownOnly(link: NavLink): boolean {
  return Boolean(link.dropdownOnly && hasNavChildren(link))
}

export function isNavLinkActive(link: NavLink, path: string): boolean {
  if (link.to === '/') {
    return path === '/'
  }

  if (!hasNavChildren(link)) {
    return path === link.to
  }

  if (link.dropdownOnly) {
    return link.children.some(
      (child) => path === child.to || path.startsWith(`${child.to}/`),
    )
  }

  return (
    path === link.to ||
    path.startsWith(`${link.to}/`) ||
    link.children.some((child) => path === child.to || path.startsWith(`${child.to}/`))
  )
}

export function buildSubRoutes() {
  const fromNav = MAIN_NAV_LINKS.flatMap((link) =>
    link.children
      .filter((child) => !child.customView)
      .map((child) => ({
      path: child.to,
      name: child.id,
      component: () => import('../views/NavSubView.vue'),
      meta: {
        title: child.label,
        description: child.description ?? '',
        parentLabel: link.lines,
        parentTo: link.to,
      },
    })),
  )

  const fromReserva = RESERVA_CHILDREN.map((child) => ({
    path: child.to,
    name: child.id,
    component: () => import('../views/NavSubView.vue'),
    meta: {
      title: child.label,
      description: child.description ?? '',
      parentLabel: ['reserva', 'ahora'],
      parentTo: RESERVA_ROUTE,
    },
  }))

  return [...fromNav, ...fromReserva]
}
