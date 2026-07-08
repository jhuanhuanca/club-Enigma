import { computed, onMounted, onUnmounted, ref, type Ref } from 'vue'
import { MOBILE_BREAKPOINT, pickVideoSrc } from './heroVideos'

export function useHero(videoRef: Ref<HTMLVideoElement | null>) {
  const isMuted = ref(true)
  const isMobile = ref(false)
  const prefersReducedMotion = ref(false)

  const videoSrc = computed(() => pickVideoSrc(isMobile.value))

  const applyMuteState = () => {
    const video = videoRef.value
    if (!video) return
    video.muted = isMuted.value
    if (!isMuted.value) {
      void video.play().catch(() => {})
    }
  }

  const toggleMute = () => {
    isMuted.value = !isMuted.value
    applyMuteState()
  }

  const setupVideo = () => {
    const video = videoRef.value
    if (!video) return

    video.muted = true
    video.playsInline = true
    video.loop = true
    video.preload = isMobile.value ? 'metadata' : 'auto'

    if (prefersReducedMotion.value) return

    void video.play().catch(() => {})
  }

  const onVideoLoaded = () => {
    setupVideo()
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
    isMuted,
    videoSrc,
    toggleMute,
    onVideoLoaded,
  }
}
