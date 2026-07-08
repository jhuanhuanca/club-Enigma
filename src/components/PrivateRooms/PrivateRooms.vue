<script setup lang="ts">
import { RouterLink } from 'vue-router'
import {
  AMENITY_CARDS,
  EVENT_SPOTLIGHTS,
  HERO_FEATURES,
  PACKAGE_CARDS,
  PREVIEW_STRIP,
  ROOM_TIERS,
} from './privateRoomsData'
import { ROOMS_HERO, ROOMS_KARAOKE } from './privateRoomsMedia'
import { usePrivateRoomsVideo } from './usePrivateRoomsVideo'
import './privateRooms.css'

const { clipSrc, onVideoLoaded, prefersReducedMotion } = usePrivateRoomsVideo()
</script>

<template>
  <div class="rooms">
    <!-- Hero cinematográfico -->
    <section class="rooms-hero" aria-label="habitaciones privadas">
      <div class="rooms-hero__media" aria-hidden="true">
        <video
          class="rooms-hero__video"
          :src="clipSrc(ROOMS_HERO)"
          :poster="ROOMS_HERO.poster"
          muted
          loop
          playsinline
          autoplay
          preload="metadata"
          @loadeddata="onVideoLoaded"
        />
        <div class="rooms-hero__overlay" />
        <div class="rooms-hero__neon" aria-hidden="true" />
      </div>

      <div class="rooms-hero__shell">
        <div class="rooms-hero__content">
          <h1 class="rooms-hero__title">
            tu destino nocturno para noches épicas
          </h1>
          <p class="rooms-hero__lead">
            karaoke.night es el destino premium para noches inolvidables. disfruta
            habitaciones privadas con sonido profesional, iluminación neón y
            servicio vip en cada detalle.
          </p>

          <ul class="rooms-features">
            <li
              v-for="feature in HERO_FEATURES"
              :key="feature.label"
              class="rooms-features__item"
            >
              <span class="rooms-features__mark" aria-hidden="true">
                <svg viewBox="0 0 10 10" fill="none">
                  <path
                    d="M5 1L8.5 5 5 9 1.5 5Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              {{ feature.label }}
            </li>
          </ul>

          <p class="rooms-hero__cta-label">¿listo para tomar el micrófono?</p>
          <RouterLink to="/reserva-ahora" class="rooms-btn rooms-btn--primary">
            reservar ahora
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Tira de previews (estilo paneles del home) -->
    <section class="rooms-strip" aria-label="vista previa de salas">
      <article
        v-for="item in PREVIEW_STRIP"
        :key="item.id"
        class="rooms-strip__panel"
      >
        <video
          v-if="!prefersReducedMotion"
          class="rooms-strip__video"
          :src="clipSrc(item.media)"
          :poster="item.media.poster"
          muted
          loop
          playsinline
          autoplay
          preload="metadata"
          @loadeddata="onVideoLoaded"
        />
        <img
          v-else
          class="rooms-strip__video"
          :src="item.media.poster"
          alt=""
        />
        <div class="rooms-strip__overlay" />
        <span class="rooms-strip__label">{{ item.label }}</span>
      </article>
    </section>

    <!-- Amenity cards con video -->
    <section class="rooms-section" aria-label="amenidades">
      <div class="rooms-section__inner">
        <h2 class="rooms-section__title">todo lo que incluye tu sala</h2>

        <div class="rooms-cards">
          <article
            v-for="card in AMENITY_CARDS"
            :key="card.id"
            class="rooms-card"
            :style="{ '--card-accent': card.accent }"
          >
            <div class="rooms-card__media" aria-hidden="true">
              <video
                v-if="!prefersReducedMotion"
                class="rooms-card__video"
                :src="clipSrc(card.media)"
                :poster="card.media.poster"
                muted
                loop
                playsinline
                autoplay
                preload="metadata"
                @loadeddata="onVideoLoaded"
              />
              <img
                v-else
                class="rooms-card__video"
                :src="card.media.poster"
                alt=""
              />
              <div class="rooms-card__overlay" />
            </div>

            <div class="rooms-card__body">
              <div class="rooms-card__icon" :data-icon="card.icon" aria-hidden="true">
                <svg v-if="card.icon === 'sound'" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18V6l10-2v14l-10-2z" stroke="currentColor" stroke-width="1.5" />
                  <path d="M5 10v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                </svg>
                <svg v-else-if="card.icon === 'vip'" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7L12 16.8 5.7 21l2.3-7-6-4.6h7.6L12 2z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                </svg>
                <svg v-else-if="card.icon === 'food'" viewBox="0 0 24 24" fill="none">
                  <path d="M6 3v8a4 4 0 008 0V3M14 3v8a4 4 0 008 0V3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                  <path d="M4 21h16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                </svg>
                <svg v-else viewBox="0 0 24 24" fill="none">
                  <path d="M9 18V5l12-2v13" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                  <circle cx="7" cy="18" r="2" stroke="currentColor" stroke-width="1.5" />
                  <circle cx="19" cy="16" r="2" stroke="currentColor" stroke-width="1.5" />
                </svg>
              </div>
              <h3 class="rooms-card__title">{{ card.title }}</h3>
              <p class="rooms-card__text">{{ card.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Paquetes con video ambiente -->
    <section class="rooms-section rooms-section--packages" aria-label="paquetes">
      <div class="rooms-section__ambient" aria-hidden="true">
        <video
          v-if="!prefersReducedMotion"
          class="rooms-section__ambient-video"
          :src="clipSrc(ROOMS_KARAOKE)"
          :poster="ROOMS_KARAOKE.poster"
          muted
          loop
          playsinline
          autoplay
          preload="metadata"
          @loadeddata="onVideoLoaded"
        />
        <div class="rooms-section__ambient-overlay" />
      </div>

      <div class="rooms-section__inner rooms-section__inner--raised">
        <h2 class="rooms-section__title">elige tu experiencia</h2>

        <div class="rooms-packages">
          <article
            v-for="pkg in PACKAGE_CARDS"
            :key="pkg.id"
            class="rooms-package"
          >
            <div class="rooms-package__check" aria-hidden="true">✓</div>
            <h3 class="rooms-package__title">{{ pkg.title }}</h3>
            <ul class="rooms-package__list">
              <li
                v-for="item in pkg.items"
                :key="item"
                class="rooms-package__item"
              >
                <span class="rooms-package__mark" aria-hidden="true">
                  <svg viewBox="0 0 10 10" fill="none">
                    <path
                      d="M5 1L8.5 5 5 9 1.5 5Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                {{ item }}
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <!-- Room tiers con video -->
    <section class="rooms-section rooms-section--tiers" aria-label="tipos de habitación">
      <div
        v-for="room in ROOM_TIERS"
        :key="room.id"
        class="rooms-tier"
        :class="{ 'rooms-tier--reverse': room.reverse }"
        :style="{ '--tier-accent': room.accent }"
      >
        <div class="rooms-tier__media">
          <video
            v-if="!prefersReducedMotion"
            class="rooms-tier__video"
            :src="clipSrc(room.media)"
            :poster="room.media.poster"
            muted
            loop
            playsinline
            autoplay
            preload="metadata"
            :aria-label="room.imageAlt"
            @loadeddata="onVideoLoaded"
          />
          <img
            v-else
            class="rooms-tier__video"
            :src="room.media.poster"
            :alt="room.imageAlt"
          />
          <div class="rooms-tier__media-overlay" />
        </div>

        <div class="rooms-tier__content">
          <h2 class="rooms-tier__title">{{ room.title }}</h2>
          <ul class="rooms-tier__list">
            <li class="rooms-tier__item">
              <span class="rooms-tier__check" aria-hidden="true">✓</span>
              {{ room.guests }}
            </li>
            <li class="rooms-tier__item">
              <span class="rooms-tier__check" aria-hidden="true">✓</span>
              {{ room.hours }}
            </li>
          </ul>
          <RouterLink to="/reserva-ahora" class="rooms-btn rooms-btn--primary">
            reservar ahora
          </RouterLink>
          <p class="rooms-tier__fine">
            precios sujetos a impuestos y propina.
            <a href="#" class="rooms-tier__link">términos y política de reembolso</a>
          </p>
        </div>
      </div>
    </section>

    <!-- Event spotlights con video -->
    <section class="rooms-spotlights" aria-label="ocasiones especiales">
      <article
        v-for="spot in EVENT_SPOTLIGHTS"
        :key="spot.id"
        class="rooms-spotlight"
        :style="{ '--spot-accent': spot.accent }"
      >
        <div class="rooms-spotlight__media" aria-hidden="true">
          <video
            v-if="!prefersReducedMotion"
            class="rooms-spotlight__video"
            :src="clipSrc(spot.media)"
            :poster="spot.media.poster"
            muted
            loop
            playsinline
            autoplay
            preload="metadata"
            @loadeddata="onVideoLoaded"
          />
          <img
            v-else
            class="rooms-spotlight__video"
            :src="spot.media.poster"
            alt=""
          />
          <div class="rooms-spotlight__overlay" />
          <div class="rooms-spotlight__neon" aria-hidden="true" />
        </div>

        <div
          class="rooms-spotlight__panel"
          :class="`rooms-spotlight__panel--${spot.align}`"
        >
          <h2 class="rooms-spotlight__title">{{ spot.title }}</h2>
          <p class="rooms-spotlight__text">{{ spot.description }}</p>
          <RouterLink :to="spot.to" class="rooms-btn rooms-btn--outline">
            {{ spot.cta }}
          </RouterLink>
        </div>
      </article>
    </section>
  </div>
</template>
