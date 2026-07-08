import { onMounted, onUnmounted, ref, watch, type Ref } from 'vue'

/** Carga un asset pesado solo cuando el elemento entra al viewport. */
export function useLazyAsset(
  target: Ref<HTMLElement | null>,
  loader: () => Promise<string>,
  options?: { rootMargin?: string; enabled?: Ref<boolean> },
) {
  const src = ref<string | null>(null)
  const isLoading = ref(false)
  let observer: IntersectionObserver | null = null

  const loadAsset = () => {
    if (src.value || isLoading.value) return
    if (options?.enabled?.value === false) return

    isLoading.value = true
    void loader()
      .then((url) => {
        src.value = url
      })
      .finally(() => {
        isLoading.value = false
        observer?.disconnect()
        observer = null
      })
  }

  const startObserving = () => {
    if (options?.enabled?.value === false) return
    const el = target.value
    if (!el || src.value) return

    observer?.disconnect()
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) loadAsset()
      },
      { rootMargin: options?.rootMargin ?? '280px' },
    )
    observer.observe(el)
  }

  onMounted(() => {
    startObserving()
    if (options?.enabled) {
      watch(options.enabled, startObserving)
    }
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return { src, isLoading }
}
