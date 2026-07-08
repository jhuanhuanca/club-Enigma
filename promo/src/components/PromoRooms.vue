<script setup lang="ts">
import { ref } from 'vue'
import { ROOM_CATALOG } from '../data'
import { whatsappLink } from '../config'
import { usePromoVideo } from '../composables/usePromoVideo'
import enigmaLogo from '../images/enigma.png'
import clubVideo from '../videos/club.mp4'

const videoRef = ref<HTMLVideoElement | null>(null)
const { onVideoLoaded, prefersReducedMotion } = usePromoVideo()
</script>

<template>
  <section id="salas" class="promo-section promo-section--rooms" aria-label="salas de karaoke">
    <div class="promo-section__inner">
      <h2 class="promo-section__title">Nuestras 9 salas exclusivas</h2>
      <p class="promo-section__lead">
        9 salas privadas para cantar, brindar y vivir la noche como se debe.
        Los del grupo reservan primero.
      </p>

      <div class="promo-rooms-reveal">
        <div class="promo-rooms-reveal__media" aria-hidden="true">
          <video
            v-if="!prefersReducedMotion"
            ref="videoRef"
            class="promo-rooms-reveal__video"
            :src="clubVideo"
            muted
            loop
            playsinline
            autoplay
            preload="metadata"
            @loadeddata="onVideoLoaded"
          />
          <div v-else class="promo-rooms-reveal__fallback" />
          <div class="promo-rooms-reveal__blur" />
          <div class="promo-rooms-reveal__veil" />
          <div class="promo-rooms-reveal__glow" />
        </div>

        <div class="promo-rooms-reveal__content">
          <img
            class="promo-rooms-reveal__logo"
            :src="enigmaLogo"
            alt="Enigma"
          />
          <p class="promo-rooms-reveal__hint">No todo el mundo entra.</p>
          <p class="promo-rooms-reveal__teaser">
            Karaoke, privacidad y un ambiente que solo conocen los del grupo.
            <span>Escríbenos y te contamos qué sala te conviene hoy.</span>
          </p>
        </div>
      </div>

      <div class="promo-rooms">
        <article
          v-for="room in ROOM_CATALOG"
          :key="room.id"
          class="promo-room"
          :style="{ '--room-accent': room.accent }"
        >
          <span class="promo-room__badge">{{ room.availability }}</span>
          <h3 class="promo-room__title">{{ room.title }}</h3>
          <p class="promo-room__capacity">
            <span class="promo-room__label">Capacidad</span>
            {{ room.capacity }}
          </p>
        </article>
      </div>

      <div class="promo-section__footer-cta">
        <a
          :href="whatsappLink('Hola, quiero descubrir las salas de Enigma')"
          class="promo-wa-btn promo-wa-btn--large"
          target="_blank"
          rel="noopener noreferrer"
        >
          Quiero mi lugar en el grupo
        </a>
      </div>
    </div>
  </section>
</template>
