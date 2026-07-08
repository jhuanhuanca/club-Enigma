import { onMounted, onUnmounted, ref } from 'vue'
import { MOBILE_BREAKPOINT, type MediaClip, pickClip } from '../media'

export function usePromoVideo() {
  const isMobile = ref(false)
  const prefersReducedMotion = ref(false)

  const clipSrc = (clip: MediaClip) => pickClip(clip, isMobile.value)

  const playVideo = (el: HTMLVideoElement | null) => {
    if (!el || prefersReducedMotion.value) return
    el.muted = true
    el.loop = true
    el.playsInline = true
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

  return { clipSrc, onVideoLoaded, prefersReducedMotion, isMobile }
}
