<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { PackageVisual } from './starterOffersData'
import {
  FOOTER_COPY,
  HERO_COPY,
  HERO_IMAGE,
  HERO_VIDEO,
  MINIMUM_REQUIREMENTS,
  ROOM_CHARGES,
  SOMEEK_COPY,
  STARTER_PACKAGES,
  TERMS_ITEMS,
  TERMS_TITLE,
} from './starterOffersData'
import { usePrivateRoomsVideo } from '../PrivateRooms/usePrivateRoomsVideo'
import './starterOffers.css'

const { clipSrc, onVideoLoaded, prefersReducedMotion } = usePrivateRoomsVideo()

function visualSrc(visual: PackageVisual): string {
  return visual.type === 'video' ? visual.clip.poster : visual.image.src
}

function visualAlt(visual: PackageVisual): string {
  return visual.type === 'video' ? visual.alt : visual.image.alt
}
</script>

<template>
  <div class="starter">
    <!-- Hero -->
    <section class="starter-hero" aria-label="ofertas para principiantes">
      <video
        v-if="!prefersReducedMotion"
        class="starter-hero__media"
        :src="clipSrc(HERO_VIDEO)"
        :poster="HERO_IMAGE.src"
        muted
        loop
        playsinline
        autoplay
        preload="metadata"
        @loadeddata="onVideoLoaded"
      />
      <img
        v-else
        class="starter-hero__media"
        :src="HERO_IMAGE.src"
        :alt="HERO_IMAGE.alt"
      />
      <div class="starter-hero__overlay" aria-hidden="true" />
      <h1 class="starter-hero__title">{{ HERO_COPY.title }}</h1>
    </section>

    <!-- So-mek -->
    <section class="starter-intro" aria-label="especiales so-mek">
      <div class="starter-intro__inner">
        <h2 class="starter-intro__title">{{ SOMEEK_COPY.title }}</h2>
        <p class="starter-intro__lead">{{ SOMEEK_COPY.lead }}</p>

        <div class="starter-requirements">
          <h3 class="starter-requirements__label">compra mínima requerida:</h3>
          <ul class="starter-requirements__list">
            <li
              v-for="item in MINIMUM_REQUIREMENTS"
              :key="item"
              class="starter-requirements__item"
            >
              <span class="starter-mark" aria-hidden="true">
                <svg viewBox="0 0 10 10" fill="none">
                  <path d="M5 1L8.5 5 5 9 1.5 5Z" fill="currentColor" />
                </svg>
              </span>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Paquetes alternados -->
    <section class="starter-packages" aria-label="paquetes especiales">
      <article
        v-for="pkg in STARTER_PACKAGES"
        :key="pkg.id"
        class="starter-pkg"
        :class="{ 'starter-pkg--reverse': pkg.reverse }"
      >
        <div class="starter-pkg__panel">
          <h2 class="starter-pkg__title">{{ pkg.title }}</h2>
          <p class="starter-pkg__price">{{ pkg.weekdayPrice }}</p>
          <p v-if="pkg.weekendPrice" class="starter-pkg__price starter-pkg__price--alt">
            {{ pkg.weekendPrice }}
          </p>

          <ul class="starter-pkg__list">
            <li
              v-for="(line, index) in pkg.includes"
              :key="index"
              class="starter-pkg__item"
            >
              <span class="starter-mark" aria-hidden="true">
                <svg viewBox="0 0 10 10" fill="none">
                  <path d="M5 1L8.5 5 5 9 1.5 5Z" fill="currentColor" />
                </svg>
              </span>
              {{ line }}
            </li>
          </ul>

          <p v-if="pkg.finePrint" class="starter-pkg__fine">{{ pkg.finePrint }}</p>

          <RouterLink to="/reserva-ahora" class="starter-btn starter-btn--primary">
            reservar ahora
          </RouterLink>
        </div>

        <div class="starter-pkg__media">
          <video
            v-if="pkg.visual.type === 'video' && !prefersReducedMotion"
            class="starter-pkg__visual"
            :src="clipSrc(pkg.visual.clip)"
            :poster="pkg.visual.clip.poster"
            muted
            loop
            playsinline
            autoplay
            preload="metadata"
            :aria-label="pkg.visual.alt"
            @loadeddata="onVideoLoaded"
          />
          <img
            v-else
            class="starter-pkg__visual"
            :src="visualSrc(pkg.visual)"
            :alt="visualAlt(pkg.visual)"
            loading="lazy"
          />
          <div class="starter-pkg__media-overlay" aria-hidden="true" />
        </div>
      </article>
    </section>

    <!-- Cargos por hora -->
    <section class="starter-charges" aria-label="cargos adicionales">
      <article class="starter-pkg starter-pkg--reverse starter-pkg--charges">
        <div class="starter-pkg__panel starter-pkg__panel--bordered">
          <h2 class="starter-pkg__title">{{ ROOM_CHARGES.title }}</h2>
          <ul class="starter-charges__list">
            <li
              v-for="rate in ROOM_CHARGES.rates"
              :key="rate.label"
              class="starter-charges__item"
            >
              <span class="starter-mark" aria-hidden="true">
                <svg viewBox="0 0 10 10" fill="none">
                  <path d="M5 1L8.5 5 5 9 1.5 5Z" fill="currentColor" />
                </svg>
              </span>
              <span>{{ rate.label }}</span>
              <span class="starter-charges__price">{{ rate.price }}</span>
            </li>
          </ul>
        </div>

        <div class="starter-pkg__media">
          <video
            v-if="ROOM_CHARGES.visual.type === 'video' && !prefersReducedMotion"
            class="starter-pkg__visual"
            :src="clipSrc(ROOM_CHARGES.visual.clip)"
            :poster="ROOM_CHARGES.visual.clip.poster"
            muted
            loop
            playsinline
            autoplay
            preload="metadata"
            :aria-label="ROOM_CHARGES.visual.alt"
            @loadeddata="onVideoLoaded"
          />
          <img
            v-else
            class="starter-pkg__visual"
            :src="visualSrc(ROOM_CHARGES.visual)"
            :alt="visualAlt(ROOM_CHARGES.visual)"
            loading="lazy"
          />
          <div class="starter-pkg__media-overlay" aria-hidden="true" />
        </div>
      </article>
    </section>

    <!-- Términos -->
    <section class="starter-terms" aria-label="términos y condiciones">
      <h2 class="starter-terms__title">{{ TERMS_TITLE }}</h2>
      <ul class="starter-terms__list">
        <li
          v-for="(term, index) in TERMS_ITEMS"
          :key="index"
          class="starter-terms__item"
        >
          <span class="starter-mark" aria-hidden="true">
            <svg viewBox="0 0 10 10" fill="none">
              <path d="M5 1L8.5 5 5 9 1.5 5Z" fill="currentColor" />
            </svg>
          </span>
          {{ term }}
        </li>
      </ul>
    </section>

    <!-- Cierre -->
    <section class="starter-footer" aria-label="reservar">
      <RouterLink to="/reserva-ahora" class="starter-btn starter-btn--primary starter-btn--large">
        reservar ahora
      </RouterLink>
      <p class="starter-footer__note">{{ FOOTER_COPY.disclaimer }}</p>
      <p class="starter-footer__note starter-footer__note--muted">
        {{ FOOTER_COPY.responsible }}
      </p>
    </section>
  </div>
</template>
