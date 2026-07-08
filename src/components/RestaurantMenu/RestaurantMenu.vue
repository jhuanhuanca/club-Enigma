<script setup lang="ts">
import { RouterLink } from 'vue-router'
import {
  FOOTER_COPY,
  HERO_COPY,
  HERO_IMAGE,
  INTRO_COPY,
  MENU_SECTIONS,
} from './restaurantMenuData'
import './restaurantMenu.css'
</script>

<template>
  <div class="menu-page">
    <!-- Hero -->
    <section class="menu-hero" aria-label="menú del restaurante">
      <img
        class="menu-hero__image"
        :src="HERO_IMAGE.src"
        :alt="HERO_IMAGE.alt"
      />
      <div class="menu-hero__overlay" aria-hidden="true" />
      <h1 class="menu-hero__title">{{ HERO_COPY.title }}</h1>
    </section>

    <!-- Intro -->
    <section class="menu-intro" aria-label="menú de entradas">
      <div class="menu-intro__inner">
        <h2 class="menu-intro__title">{{ INTRO_COPY.title }}</h2>
        <p class="menu-intro__lead">{{ INTRO_COPY.lead }}</p>
      </div>
    </section>

    <!-- Secciones de menú -->
    <div class="menu-sections">
      <section
        v-for="section in MENU_SECTIONS"
        :key="section.id"
        class="menu-section"
        :aria-label="section.title"
      >
        <div class="menu-section__head">
          <RouterLink
            v-if="section.showTopCta"
            to="/reserva-ahora"
            class="menu-btn menu-btn--primary menu-btn--section"
          >
            reservar ahora
          </RouterLink>

          <h2 class="menu-section__title">{{ section.title }}</h2>
          <p v-if="section.lead" class="menu-section__lead">{{ section.lead }}</p>
        </div>

        <div class="menu-card">
          <article
            v-for="(item, index) in section.items"
            :key="item.id"
            class="menu-item"
            :class="{ 'menu-item--last': index === section.items.length - 1 }"
          >
            <img
              class="menu-item__thumb"
              :src="item.image.src"
              :alt="item.image.alt"
              loading="lazy"
            />

            <div class="menu-item__body">
              <h3 class="menu-item__name">{{ item.name }}</h3>
            </div>

            <div class="menu-item__aside">
              <span class="menu-item__price">{{ item.price }}</span>
              <RouterLink
                to="/reserva-ahora"
                class="menu-btn menu-btn--primary menu-btn--item"
              >
                reservar ahora
              </RouterLink>
            </div>
          </article>
        </div>
      </section>
    </div>

    <!-- Cierre -->
    <section class="menu-footer" aria-label="reservar mesa">
      <RouterLink to="/reserva-ahora" class="menu-btn menu-btn--primary menu-btn--large">
        reservar ahora
      </RouterLink>
      <p class="menu-footer__note">{{ FOOTER_COPY.disclaimer }}</p>
    </section>
  </div>
</template>
