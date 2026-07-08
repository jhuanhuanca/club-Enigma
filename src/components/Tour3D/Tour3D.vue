<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import {
  HERO_COPY,
  INTRO_COPY,
  TOUR_ROOMS,
  matterportEmbedUrl,
} from './tour3dData'
import { KR_NEON_GAME_ROOM } from '../../media/koreanNightlifeMedia'
import { usePrivateRoomsVideo } from '../PrivateRooms/usePrivateRoomsVideo'
import './tour3d.css'

const { clipSrc, onVideoLoaded, prefersReducedMotion } = usePrivateRoomsVideo()

const activeRoomId = ref(TOUR_ROOMS[0].id)
const tourOpen = ref(false)

const activeRoom = computed(
  () => TOUR_ROOMS.find((room) => room.id === activeRoomId.value) ?? TOUR_ROOMS[0],
)

const embedSrc = computed(() =>
  matterportEmbedUrl(activeRoom.value.matterportModelId),
)

function selectRoom(id: string) {
  activeRoomId.value = id
  tourOpen.value = false
}

function openTour() {
  tourOpen.value = true
}

function closeTour() {
  tourOpen.value = false
}
</script>

<template>
  <div class="tour3d">
    <!-- Hero full-bleed -->
    <section class="tour-hero" aria-label="recorrido virtual">
      <div class="tour-hero__media" aria-hidden="true">
        <video
          v-if="!prefersReducedMotion"
          class="tour-hero__video"
          :src="clipSrc(KR_NEON_GAME_ROOM)"
          :poster="KR_NEON_GAME_ROOM.poster"
          muted
          loop
          playsinline
          autoplay
          preload="metadata"
          @loadeddata="onVideoLoaded"
        />
        <img
          v-else
          class="tour-hero__video"
          :src="KR_NEON_GAME_ROOM.poster"
          alt=""
        />
        <div class="tour-hero__overlay" />
        <div class="tour-hero__neon" />
      </div>

      <h1 class="tour-hero__title">{{ HERO_COPY.title }}</h1>
    </section>

    <!-- Selector + visor 3D -->
    <section class="tour-main" aria-label="tour virtual 3d">
      <div class="tour-main__inner">
        <h2 class="tour-main__title">{{ INTRO_COPY.title }}</h2>
        <p class="tour-main__lead">{{ INTRO_COPY.lead }}</p>

        <div class="tour-rooms" role="tablist" aria-label="salas disponibles">
          <button
            v-for="room in TOUR_ROOMS"
            :key="room.id"
            type="button"
            class="tour-rooms__tab"
            :class="{ 'tour-rooms__tab--active': room.id === activeRoomId }"
            role="tab"
            :aria-selected="room.id === activeRoomId"
            @click="selectRoom(room.id)"
          >
            <span class="tour-rooms__tab-label">{{ room.label }}</span>
            <span class="tour-rooms__tab-desc">{{ room.description }}</span>
          </button>
        </div>

        <div
          class="tour-player"
          :class="{ 'tour-player--open': tourOpen }"
        >
          <div v-if="!tourOpen" class="tour-player__preview">
            <video
              v-if="!prefersReducedMotion"
              class="tour-player__media"
              :src="clipSrc(activeRoom.preview)"
              :poster="activeRoom.preview.poster"
              muted
              loop
              playsinline
              autoplay
              preload="metadata"
              @loadeddata="onVideoLoaded"
            />
            <img
              v-else
              class="tour-player__media"
              :src="activeRoom.preview.poster"
              :alt="`vista previa ${activeRoom.label}`"
            />

            <div class="tour-player__shade" aria-hidden="true" />

            <div class="tour-player__brand">karaoke.night</div>

            <button
              type="button"
              class="tour-player__launch"
              @click="openTour"
            >
              <span class="tour-player__play" aria-hidden="true">
                <svg viewBox="0 0 48 48" fill="none">
                  <circle cx="24" cy="24" r="23" stroke="currentColor" stroke-width="1.5" />
                  <path d="M20 16.5v15l12-7.5-12-7.5z" fill="currentColor" />
                </svg>
              </span>
              <span class="tour-player__launch-text">explorar el espacio 3d</span>
            </button>

            <p class="tour-player__powered">
              recorrido virtual · powered by matterport
            </p>
          </div>

          <div v-else class="tour-player__embed">
            <button
              type="button"
              class="tour-player__close"
              aria-label="cerrar recorrido 3d"
              @click="closeTour"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
              </svg>
            </button>
            <iframe
              class="tour-player__iframe"
              :src="embedSrc"
              :title="`recorrido 3d — ${activeRoom.label}`"
              allow="fullscreen; xr-spatial-tracking"
              allowfullscreen
            />
          </div>
        </div>

        <div class="tour-cta">
          <RouterLink to="/reserva-ahora" class="tour-btn tour-btn--primary">
            reservar ahora
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>
