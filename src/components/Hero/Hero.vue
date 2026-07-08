<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import Navbar from '../Navbar/Navbar.vue'
import { HERO_HOTSPOTS } from './heroHotspots'
import { HERO_VIDEO } from './heroVideos'
import { useHero } from './useHero'
import { useHeroHotspots } from './useHeroHotspots'
import './hero.css'

const videoRef = ref<HTMLVideoElement | null>(null)
const centerRef = ref<HTMLElement | null>(null)
const hotspotsRef = ref<HTMLElement | null>(null)
const lineHovered = ref(false)
const linePinned = ref(false)

const {
  pinnedId: pinnedHotspotId,
  isActive: isHotspotActive,
  onHotspotEnter,
  onHotspotLeave,
  onHotspotClick,
  closePinnedHotspot,
} = useHeroHotspots()

const showLineInfo = computed(() => lineHovered.value || linePinned.value)

const {
  isMuted,
  videoSrc,
  toggleMute,
  onVideoLoaded,
} = useHero(videoRef)

const CENTER_INFO =
  'voz, luz y escenario sincronizados en tiempo real para cada canción.'

const onLineClick = () => {
  linePinned.value = !linePinned.value
}

const onDocumentClick = (event: MouseEvent) => {
  const target = event.target as Node

  if (linePinned.value && centerRef.value && !centerRef.value.contains(target)) {
    linePinned.value = false
  }

  if (pinnedHotspotId.value && hotspotsRef.value && !hotspotsRef.value.contains(target)) {
    closePinnedHotspot()
  }
}

onMounted(() => {
  document.addEventListener('click', onDocumentClick)
})

onUnmounted(() => {
  document.removeEventListener('click', onDocumentClick)
})
</script>

<template>
  <section class="hero" aria-label="karaoke nocturno">
    <!-- Video full-bleed como el boceto -->
    <div class="hero__media" aria-hidden="true">
      <video
        ref="videoRef"
        class="hero__video"
        :src="videoSrc"
        :poster="HERO_VIDEO.poster"
        muted
        loop
        playsinline
        autoplay
        preload="metadata"
        @loadeddata="onVideoLoaded"
      />
      <div class="hero__overlay" />
      <div class="hero__neon-glow" aria-hidden="true" />
    </div>

    <div class="hero__shell">
      <Navbar variant="overlay" />

      <main class="hero__main">
        <p class="hero__copy hero__copy--left">
          tu escenario, tu voz, tu noche.
        </p>

        <div
          ref="centerRef"
          class="hero__center"
          :class="{ 'hero__center--active': showLineInfo }"
          @mouseenter="lineHovered = true"
          @mouseleave="lineHovered = false"
        >
          <button
            type="button"
            class="hero__center-trigger"
            :aria-expanded="showLineInfo"
            aria-controls="hero-center-info"
            aria-label="información de la experiencia"
            @click.stop="onLineClick"
          >
            <span class="hero__center-line" />
          </button>

          <Transition name="hero-line-info">
            <p
              v-if="showLineInfo"
              id="hero-center-info"
              class="hero__center-info"
              role="tooltip"
            >
              {{ CENTER_INFO }}
            </p>
          </Transition>

        </div>

        <div ref="hotspotsRef" class="hero__hotspots" aria-label="selección de licores">
          <div
            v-for="spot in HERO_HOTSPOTS"
            :key="spot.id"
            class="hero__hotspot"
            :class="`hero__hotspot--${spot.id}`"
            :style="{ top: spot.top, left: spot.left, '--hotspot-accent': spot.accent }"
          >
            <button
              type="button"
              class="hero__hotspot-btn"
              :class="[
                `hero__hotspot-btn--${spot.id}`,
                { 'hero__hotspot-btn--active': isHotspotActive(spot.id) },
              ]"
              :style="{ '--hotspot-accent': spot.accent }"
              :aria-expanded="isHotspotActive(spot.id)"
              :aria-label="`ver ${spot.label}`"
              @mouseenter="onHotspotEnter(spot.id)"
              @mouseleave="onHotspotLeave"
              @click.stop="onHotspotClick(spot.id)"
            />

            <Transition name="hero-hotspot-card">
              <article
                v-if="isHotspotActive(spot.id)"
                class="hero__hotspot-card"
                :class="`hero__hotspot-card--${spot.cardSide}`"
              >
                <img
                  class="hero__hotspot-img"
                  :src="spot.image"
                  :alt="spot.label"
                  loading="lazy"
                  decoding="async"
                />
                <div class="hero__hotspot-meta">
                  <span class="hero__hotspot-label">{{ spot.label }}</span>
                  <span class="hero__hotspot-sub">{{ spot.subtitle }}</span>
                </div>
              </article>
            </Transition>
          </div>
        </div>

        <p class="hero__copy hero__copy--right">
          karaoke profesional con ambiente de estudio.
        </p>

        <button type="button" class="hero__unmute" @click="toggleMute">
          <span class="hero__unmute-icon" aria-hidden="true">
            <svg v-if="isMuted" width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M11 5L6 9H3v6h3l5 4V5z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
              <path d="M15.5 8.5a5 5 0 010 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
              <path d="M3 3l18 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            </svg>
            <svg v-else width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M11 5L6 9H3v6h3l5 4V5z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
              <path d="M15.5 8.5a5 5 0 010 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
              <path d="M19.5 5.5a8.5 8.5 0 010 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
            </svg>
          </span>
          {{ isMuted ? 'tap to unmute' : 'sonido activo' }}
        </button>
      </main>

      <footer class="hero__footer">
        <a href="#" class="hero__footer-link">contactar ventas</a>
        <button type="button" class="hero__signup">registrarse</button>
      </footer>
    </div>
  </section>
</template>
