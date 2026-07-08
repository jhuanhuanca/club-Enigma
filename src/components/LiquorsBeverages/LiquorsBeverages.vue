<script setup lang="ts">
import { RouterLink } from 'vue-router'
import {
  BEVERAGE_LINES,
  BEVERAGES_TITLE,
  FOOTER_COPY,
  HERO_COPY,
  HERO_IMAGE,
  LIQUOR_CATEGORIES,
  LIQUOR_INTRO,
} from './liquorsData'
import { KR_NEON_BAR } from '../../media/koreanNightlifeMedia'
import { usePrivateRoomsVideo } from '../PrivateRooms/usePrivateRoomsVideo'
import './liquors.css'

const { clipSrc, onVideoLoaded, prefersReducedMotion } = usePrivateRoomsVideo()
</script>

<template>
  <div class="liquors">
    <!-- Hero -->
    <section class="liquors-hero" aria-label="licores y bebidas">
      <video
        v-if="!prefersReducedMotion"
        class="liquors-hero__media"
        :src="clipSrc(KR_NEON_BAR)"
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
        class="liquors-hero__media"
        :src="HERO_IMAGE.src"
        :alt="HERO_IMAGE.alt"
      />
      <div class="liquors-hero__overlay" aria-hidden="true" />
      <h1 class="liquors-hero__title">{{ HERO_COPY.title }}</h1>
    </section>

    <!-- Bebidas con precios -->
    <section class="liquors-beverages" aria-label="bebidas">
      <div class="liquors-beverages__inner">
        <h2 class="liquors-section__title">{{ BEVERAGES_TITLE }}</h2>

        <ul class="liquors-priced">
          <li
            v-for="item in BEVERAGE_LINES"
            :key="item.id"
            class="liquors-priced__row"
          >
            <span class="liquors-priced__label">{{ item.label }}</span>
            <span class="liquors-priced__dots" aria-hidden="true" />
            <span class="liquors-priced__price">{{ item.price }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- Carta de licores -->
    <section class="liquors-menu" aria-label="carta de licores">
      <div class="liquors-menu__inner">
        <h2 class="liquors-menu__title">{{ LIQUOR_INTRO.title }}</h2>
        <p class="liquors-menu__lead">{{ LIQUOR_INTRO.lead }}</p>

        <div class="liquors-grid">
          <article
            v-for="category in LIQUOR_CATEGORIES"
            :key="category.id"
            class="liquors-card"
          >
            <header class="liquors-card__head">
              <span class="liquors-card__icon" aria-hidden="true">
                <svg v-if="category.icon === 'whisky'" viewBox="0 0 24 24" fill="none">
                  <path d="M8 4h8v3l-1 13H9L8 7V4z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" />
                  <path d="M9 10h6" stroke="currentColor" stroke-width="1.4" />
                </svg>
                <svg v-else-if="category.icon === 'champagne'" viewBox="0 0 24 24" fill="none">
                  <path d="M9 3h6v5l-2 14h-2L9 8V3z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" />
                  <path d="M8 21h8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" />
                </svg>
                <svg v-else-if="category.icon === 'tequila'" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3c2 2 3 5 3 8v10H9V11c0-3 1-6 3-8z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" />
                  <path d="M9 21h6" stroke="currentColor" stroke-width="1.4" />
                </svg>
                <svg v-else-if="category.icon === 'vodka'" viewBox="0 0 24 24" fill="none">
                  <path d="M10 3h4v4l-1 14h-2L10 7V3z" stroke="currentColor" stroke-width="1.4" />
                  <path d="M9 8h6" stroke="currentColor" stroke-width="1.4" />
                </svg>
                <svg v-else viewBox="0 0 24 24" fill="none">
                  <path d="M8 5h8l-1 14H9L8 5z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" />
                  <ellipse cx="12" cy="5" rx="4" ry="1.5" stroke="currentColor" stroke-width="1.4" />
                </svg>
              </span>
              <div>
                <h3 class="liquors-card__title">{{ category.title }}</h3>
                <p class="liquors-card__subtitle">{{ category.subtitle }}</p>
              </div>
            </header>

            <ul class="liquors-card__list">
              <li
                v-for="(name, index) in category.items"
                :key="index"
                class="liquors-card__item"
              >
                <span class="liquors-card__mark" aria-hidden="true">
                  <svg viewBox="0 0 10 10" fill="none">
                    <path d="M5 1L8.5 5 5 9 1.5 5Z" fill="currentColor" />
                  </svg>
                </span>
                {{ name }}
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <!-- Cierre -->
    <section class="liquors-footer" aria-label="reservar botellas">
      <RouterLink to="/reserva-ahora" class="liquors-btn liquors-btn--primary liquors-btn--large">
        reservar ahora
      </RouterLink>
      <p class="liquors-footer__note">{{ FOOTER_COPY.disclaimer }}</p>
      <p class="liquors-footer__note liquors-footer__note--muted">
        {{ FOOTER_COPY.responsible }}
      </p>
    </section>
  </div>
</template>
