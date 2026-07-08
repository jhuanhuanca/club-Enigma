import { ref } from 'vue'

export function useHeroHotspots() {
  const hoveredId = ref<string | null>(null)
  const pinnedId = ref<string | null>(null)

  const isActive = (id: string) =>
    hoveredId.value === id || pinnedId.value === id

  const onHotspotEnter = (id: string) => {
    hoveredId.value = id
  }

  const onHotspotLeave = () => {
    hoveredId.value = null
  }

  const onHotspotClick = (id: string) => {
    pinnedId.value = pinnedId.value === id ? null : id
  }

  const closePinnedHotspot = () => {
    pinnedId.value = null
  }

  return {
    hoveredId,
    pinnedId,
    isActive,
    onHotspotEnter,
    onHotspotLeave,
    onHotspotClick,
    closePinnedHotspot,
  }
}
