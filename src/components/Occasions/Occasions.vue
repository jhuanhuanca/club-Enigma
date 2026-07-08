<script setup lang="ts">
import { RouterLink } from 'vue-router'
import {
  BOTTLE_COPY,
  CLOSING_COPY,
  HERO_COPY,
  INTRO_COPY,
  OCCASION_ROWS,
} from './occasionsData'
import { BOTTLE_SPOTLIGHT, HERO_PANELS } from './occasionsMedia'
import { usePrivateRoomsVideo } from '../PrivateRooms/usePrivateRoomsVideo'
import './occasions.css'

const { clipSrc, onVideoLoaded, prefersReducedMotion } = usePrivateRoomsVideo()
</script>

<template>
  <div class="occasions">
    <!-- Hero tríptico -->
    <section class="occ-hero" aria-label="celebra cada ocasión">
      <div class="occ-hero__panels" aria-hidden="true">
        <article
          v-for="panel in HERO_PANELS"
          :key="panel.id"
          class="occ-hero__panel"
          :style="{ '--panel-tint': panel.tint }"
        >
          <video
            v-if="!prefersReducedMotion"
            class="occ-hero__video"
            :src="clipSrc(panel.media)"
            :poster="panel.media.poster"
            muted
            loop
            playsinline
            autoplay
            preload="metadata"
            @loadeddata="onVideoLoaded"
          />
          <img
            v-else
            class="occ-hero__video"
            :src="panel.media.poster"
            alt=""
          />
          <div class="occ-hero__panel-tint" />
        </article>
      </div>

      <div class="occ-hero__overlay" aria-hidden="true" />

      <div class="occ-hero__content">
        <h1 class="occ-hero__title">{{ HERO_COPY.title }}</h1>
        <p class="occ-hero__lead">{{ HERO_COPY.lead }}</p>
        <RouterLink to="/reserva-ahora" class="occ-btn occ-btn--primary">
          reservar ahora
        </RouterLink>
      </div>
    </section>

    <!-- Intro con patrón -->
    <section class="occ-intro" aria-label="karaoke para cada ocasión">
      <div class="occ-intro__inner">
        <h2 class="occ-intro__title">{{ INTRO_COPY.title }}</h2>
        <p class="occ-intro__lead">{{ INTRO_COPY.lead }}</p>
      </div>
    </section>

    <!-- Filas alternadas -->
    <section class="occ-rows" aria-label="tipos de celebración">
      <article
        v-for="row in OCCASION_ROWS"
        :key="row.id"
        class="occ-row"
        :class="{ 'occ-row--reverse': row.reverse }"
      >
        <div class="occ-row__media">
          <video
            v-if="row.visual.type === 'video' && !prefersReducedMotion"
            class="occ-row__video"
            :src="clipSrc(row.visual.clip)"
            :poster="row.visual.clip.poster"
            muted
            loop
            playsinline
            autoplay
            preload="metadata"
            :aria-label="row.visual.alt"
            @loadeddata="onVideoLoaded"
          />
          <img
            v-else
            class="occ-row__image"
            :src="row.visual.type === 'video' ? row.visual.clip.poster : row.visual.image.src"
            :alt="row.visual.type === 'video' ? row.visual.alt : row.visual.image.alt"
            loading="lazy"
          />
          <div class="occ-row__media-overlay" aria-hidden="true" />
        </div>

        <div class="occ-row__content">
          <div class="occ-row__inner">
            <h3 class="occ-row__title">{{ row.title }}</h3>
            <p
              v-for="(paragraph, index) in row.paragraphs"
              :key="index"
              class="occ-row__text"
              :class="{ 'occ-row__text--lead': index === 0 }"
            >
              {{ paragraph }}
            </p>
            <RouterLink
              v-if="row.showCta"
              to="/reserva-ahora"
              class="occ-btn occ-btn--primary occ-btn--compact"
            >
              reservar ahora
            </RouterLink>
          </div>
        </div>
      </article>
    </section>

    <!-- Cierre -->
    <section class="occ-closing" aria-label="resumen">
      <div class="occ-closing__inner">
        <p class="occ-closing__text">{{ CLOSING_COPY.text }}</p>
        <RouterLink to="/reserva-ahora" class="occ-btn occ-btn--primary">
          reservar ahora
        </RouterLink>
      </div>
    </section>

    <!-- Paquetes de botellas -->
    <section class="occ-bottles" aria-label="paquetes de botellas">
      <div class="occ-bottles__media" aria-hidden="true">
        <video
          v-if="!prefersReducedMotion"
          class="occ-bottles__video"
          :src="clipSrc(BOTTLE_SPOTLIGHT)"
          :poster="BOTTLE_SPOTLIGHT.poster"
          muted
          loop
          playsinline
          autoplay
          preload="metadata"
          @loadeddata="onVideoLoaded"
        />
        <img
          v-else
          class="occ-bottles__video"
          :src="BOTTLE_SPOTLIGHT.poster"
          alt=""
        />
        <div class="occ-bottles__overlay" />
      </div>

      <div class="occ-bottles__content">
        <div class="occ-bottles__inner">
          <h2 class="occ-bottles__title">{{ BOTTLE_COPY.title }}</h2>
          <p class="occ-bottles__subtitle">{{ BOTTLE_COPY.subtitle }}</p>
          <p class="occ-bottles__text">{{ BOTTLE_COPY.text }}</p>
          <RouterLink
            to="/servicios-comidas-y-botellas/ofertas-botellas"
            class="occ-btn occ-btn--primary"
          >
            reservar ahora
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>
