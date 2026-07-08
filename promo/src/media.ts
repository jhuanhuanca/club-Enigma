import mocochinchiImg from './images/mocochinchi.jpg'
import vasoImg from './images/vaso.jpg'
import whiskyImg from './images/wihsky.jfif'

export interface MediaClip {
  hd: string
  sd: string
  poster: string
}

export const MOBILE_BREAKPOINT = 768

export function pickClip(clip: MediaClip, isMobile: boolean): string {
  return isMobile ? clip.sd : clip.hd
}

export const HERO_VIDEO: MediaClip = {
  hd: 'https://assets.mixkit.co/videos/41910/41910-1080.mp4',
  sd: 'https://assets.mixkit.co/videos/41910/41910-720.mp4',
  poster: 'https://assets.mixkit.co/videos/41910/41910-thumb-720-0.jpg',
}

export const ROOM_CLIPS = {
  duo: {
    hd: 'https://assets.mixkit.co/videos/41907/41907-1080.mp4',
    sd: 'https://assets.mixkit.co/videos/41907/41907-720.mp4',
    poster: 'https://assets.mixkit.co/videos/41907/41907-thumb-720-0.jpg',
  },
  club: {
    hd: 'https://assets.mixkit.co/videos/41908/41908-1080.mp4',
    sd: 'https://assets.mixkit.co/videos/41908/41908-720.mp4',
    poster: 'https://assets.mixkit.co/videos/41908/41908-thumb-720-0.jpg',
  },
  vip: {
    hd: 'https://assets.mixkit.co/videos/41906/41906-1080.mp4',
    sd: 'https://assets.mixkit.co/videos/41906/41906-720.mp4',
    poster: 'https://assets.mixkit.co/videos/41906/41906-thumb-720-0.jpg',
  },
} satisfies Record<string, MediaClip>

export const DRINK_IMAGES = {
  mocochinchi: mocochinchiImg,
  vaso: vasoImg,
  whisky: whiskyImg,
}
