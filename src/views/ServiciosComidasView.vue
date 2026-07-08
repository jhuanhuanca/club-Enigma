<script setup lang="ts">
import PageLayout from '../layouts/PageLayout.vue'
</script>

<template>
  <PageLayout>
    <h1 class="page__title">servicios de comidas y botellas</h1>
    <p class="page__lead">
      menú gourmet, coctelería y botellas premium servidas directamente en tu sala.
    </p>

    <div class="page__grid">
      <article class="page__card">
        <h2 class="page__card-title">coctelería</h2>
        <p class="page__card-text">clásicos y creaciones de la casa con presentación de autor.</p>
      </article>
      <article class="page__card">
        <h2 class="page__card-title">botellas premium</h2>
        <p class="page__card-text">whisky, champagne, vinos y licores seleccionados.</p>
      </article>
      <article class="page__card">
        <h2 class="page__card-title">menú para compartir</h2>
        <p class="page__card-text">entradas, platillos y postres pensados para grupos.</p>
      </article>
    </div>
  </PageLayout>
</template>
