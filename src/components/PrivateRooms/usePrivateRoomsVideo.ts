import { onMounted, onUnmounted, ref } from 'vue'
import type { MediaClip } from '../../media/koreanNightlifeMedia'
import { MOBILE_BREAKPOINT, pickClipSrc } from '../../media/koreanNightlifeMedia'

export function usePrivateRoomsVideo() {
  const isMobile = ref(false)
  const prefersReducedMotion = ref(false)

  const clipSrc = (clip: MediaClip) => pickClipSrc(clip, isMobile.value)

  const playVideo = (el: HTMLVideoElement | null) => {
    if (!el || prefersReducedMotion.value) return
    el.muted = true
    el.loop = true
    el.playsInline = true
    el.preload = isMobile.value ? 'metadata' : 'auto'
    void el.play().catch(() => {})
  }

  const onVideoLoaded = (event: Event) => {
    playVideo(event.target as HTMLVideoElement)
  }

  const updateViewport = () => {
    isMobile.value = window.innerWidth < MOBILE_BREAKPOINT
    prefersReducedMotion.value = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
  }

  onMounted(() => {
    updateViewport()
    window.addEventListener('resize', updateViewport)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateViewport)
  })

  return {
    isMobile,
    prefersReducedMotion,
    clipSrc,
    playVideo,
    onVideoLoaded,
  }
}
