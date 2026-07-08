<script setup lang="ts">
import PageLayout from '../layouts/PageLayout.vue'
</script>

<template>
  <PageLayout>
    <h1 class="page__title">sobre nosotros</h1>
    <p class="page__lead">
      somos el destino nocturno donde la tecnología, el diseño y la música se encuentran
      para crear la experiencia karaoke más inmersiva.
    </p>

    <div class="page__grid">
      <article class="page__card">
        <h2 class="page__card-title">nuestra misión</h2>
        <p class="page__card-text">
          elevar cada noche con escenarios profesionales, servicio excepcional y ambiente único.
        </p>
      </article>
      <article class="page__card">
        <h2 class="page__card-title">nuestra visión</h2>
        <p class="page__card-text">
          ser la referencia en entretenimiento nocturno con salas privadas de clase mundial.
        </p>
      </article>
      <article class="page__card">
        <h2 class="page__card-title">nuestro equipo</h2>
        <p class="page__card-text">
          especialistas en audio, hospitalidad y experiencia de usuario a tu servicio.
        </p>
      </article>
    </div>
  </PageLayout>
</template>
