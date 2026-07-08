<script setup lang="ts">
import PageLayout from '../layouts/PageLayout.vue'
</script>

<template>
  <PageLayout>
    <h1 class="page__title">blogs</h1>
    <p class="page__lead">
      noticias, consejos de canto, playlists y todo sobre la cultura karaoke nocturna.
    </p>

    <div class="page__grid">
      <article class="page__card">
        <h2 class="page__card-title">top 10 canciones para grupos</h2>
        <p class="page__card-text">las canciones que siempre encienden la sala.</p>
      </article>
      <article class="page__card">
        <h2 class="page__card-title">cómo elegir tu sala vip</h2>
        <p class="page__card-text">guía rápida según tamaño de grupo y ocasión.</p>
      </article>
      <article class="page__card">
        <h2 class="page__card-title">eventos corporativos en karaoke</h2>
        <p class="page__card-text">team building con un toque nocturno inolvidable.</p>
      </article>
    </div>
  </PageLayout>
</template>
