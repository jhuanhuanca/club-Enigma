<script setup lang="ts">
import { pickShowcaseSrc, SHOWCASE_VIDEOS } from './showcaseVideos'
import { useShowcase } from './useShowcase'
import './showcase.css'

const { isMobile, activeId, setVideoRef, onVideoLoaded, togglePlay } = useShowcase()
</script>

<template>
  <section class="showcase" aria-label="servicios Synkai Soft">
    <div class="showcase__inner">
      <ul class="showcase__list">
        <li
          v-for="item in SHOWCASE_VIDEOS"
          :key="item.id"
          class="showcase__item"
        >
          <article
            class="showcase__card"
            :style="item.accent ? { '--showcase-accent': item.accent } : undefined"
          >
            <video
              :ref="(el) => setVideoRef(item.id, el as HTMLVideoElement | null)"
              class="showcase__video"
              :src="pickShowcaseSrc(item, isMobile)"
              :poster="item.poster"
              muted
              loop
              playsinline
              autoplay
              preload="metadata"
              @loadeddata="onVideoLoaded(item.id)"
            />
            <div class="showcase__card-overlay" />

            <div class="showcase__copy">
              <h3 class="showcase__label">{{ item.label }}</h3>
              <p class="showcase__description">{{ item.description }}</p>
            </div>

            <button
              type="button"
              class="showcase__play"
              :class="{ 'showcase__play--active': activeId === item.id }"
              :aria-label="`reproducir ${item.label}`"
              @click="togglePlay(item.id)"
            >
              <svg
                v-if="activeId !== item.id"
                width="10"
                height="12"
                viewBox="0 0 10 12"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M0 0v12l10-6L0 0z" />
              </svg>
              <svg
                v-else
                width="10"
                height="12"
                viewBox="0 0 10 12"
                fill="currentColor"
                aria-hidden="true"
              >
                <rect x="0" y="0" width="3" height="12" rx="0.5" />
                <rect x="7" y="0" width="3" height="12" rx="0.5" />
              </svg>
            </button>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>
