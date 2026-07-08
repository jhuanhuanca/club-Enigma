export interface ShowcaseItem {
  id: string
  label: string
  description: string
  hd: string
  sd: string
  poster: string
  accent?: string
}

/** Videos con movimiento — servicios Synkai Soft */
export const SHOWCASE_VIDEOS: ShowcaseItem[] = [
  {
    id: 'business-dashboard',
    label: 'análisis y sistemas',
    description:
      'Synkai Soft centraliza tus datos en dashboards empresariales con métricas, KPIs y reportes en tiempo real.',
    hd: 'https://assets.mixkit.co/videos/5461/5461-720.mp4',
    sd: 'https://assets.mixkit.co/videos/5461/5461-720.mp4',
    poster: 'https://assets.mixkit.co/videos/5461/5461-thumb-720-0.jpg',
    accent: '#2dd4bf',
  },
  {
    id: 'ai-technology',
    label: 'inteligencia artificial',
    description:
      'Bots y soluciones de IA de Synkai Soft que automatizan procesos y aceleran la innovación digital.',
    hd: 'https://assets.mixkit.co/videos/40200/40200-1080.mp4',
    sd: 'https://assets.mixkit.co/videos/40200/40200-720.mp4',
    poster: 'https://assets.mixkit.co/videos/40200/40200-thumb-720-0.jpg',
    accent: '#a78bfa',
  },
  {
    id: 'dev-team',
    label: 'equipo de desarrollo',
    description:
      'Ingenieros de Synkai Soft construyen software robusto, escalable y pensado para tu negocio.',
    hd: 'https://assets.mixkit.co/videos/4811/4811-1080.mp4',
    sd: 'https://assets.mixkit.co/videos/4811/4811-720.mp4',
    poster: 'https://assets.mixkit.co/videos/4811/4811-thumb-720-0.jpg',
    accent: '#60a5fa',
  },
  {
    id: 'web-design',
    label: 'diseño web',
    description:
      'Synkai Soft diseña experiencias web modernas, rápidas y orientadas a conversión.',
    hd: 'https://assets.mixkit.co/active_storage/video_items/100321/1722990968/100321-video-1080.mp4',
    sd: 'https://assets.mixkit.co/active_storage/video_items/100321/1722990968/100321-video-720.mp4',
    poster:
      'https://assets.mixkit.co/active_storage/video_items/100321/1722990968/100321-video-thumb-720-0.jpg',
    accent: '#f472b6',
  },
]

export const MOBILE_BREAKPOINT = 768

export function pickShowcaseSrc(item: ShowcaseItem, isMobile: boolean): string {
  return isMobile ? item.sd : item.hd
}
