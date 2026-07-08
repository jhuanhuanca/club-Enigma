import { onMounted, onUnmounted, ref } from 'vue'
import { MOBILE_BREAKPOINT } from './showcaseVideos'

export function useShowcase() {
  const isMobile = ref(false)
  const activeId = ref<string | null>(null)
  const videoRefs = ref<Map<string, HTMLVideoElement>>(new Map())

  const setVideoRef = (id: string, el: HTMLVideoElement | null) => {
    if (el) {
      videoRefs.value.set(id, el)
    } else {
      videoRefs.value.delete(id)
    }
  }

  const setupVideo = (video: HTMLVideoElement) => {
    video.muted = true
    video.playsInline = true
    video.loop = true
    video.preload = isMobile.value ? 'metadata' : 'auto'
    void video.play().catch(() => {})
  }

  const onVideoLoaded = (id: string) => {
    const video = videoRefs.value.get(id)
    if (video) setupVideo(video)
  }

  const pauseAllExcept = (exceptId: string | null) => {
    videoRefs.value.forEach((video, id) => {
      if (id !== exceptId) {
        video.muted = true
        void video.play().catch(() => {})
      }
    })
  }

  const togglePlay = (id: string) => {
    const video = videoRefs.value.get(id)
    if (!video) return

    if (activeId.value === id && !video.muted) {
      video.muted = true
      activeId.value = null
      return
    }

    pauseAllExcept(id)
    video.muted = false
    activeId.value = id
    void video.play().catch(() => {})
  }

  const updateViewport = () => {
    isMobile.value = window.innerWidth < MOBILE_BREAKPOINT
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
    activeId,
    setVideoRef,
    onVideoLoaded,
    togglePlay,
  }
}
