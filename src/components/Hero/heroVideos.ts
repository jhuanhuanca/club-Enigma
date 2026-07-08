/** Video royalty-free — estética noraebang asiática, neón */
import { KR_NEON_PORTRAIT, MOBILE_BREAKPOINT, pickClipSrc } from '../../media/koreanNightlifeMedia'

export const HERO_VIDEO = {
  hd: KR_NEON_PORTRAIT.hd,
  sd: KR_NEON_PORTRAIT.sd,
  poster: KR_NEON_PORTRAIT.poster,
  credit: 'Mixkit — retrato elegante en sala neón asiática',
}

export { MOBILE_BREAKPOINT }

export function pickVideoSrc(isMobile: boolean): string {
  return pickClipSrc(KR_NEON_PORTRAIT, isMobile)
}
