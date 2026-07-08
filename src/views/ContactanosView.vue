<script setup lang="ts">
import PageLayout from '../layouts/PageLayout.vue'
</script>

<template>
  <PageLayout>
    <h1 class="page__title">contáctanos</h1>
    <p class="page__lead">
      escríbenos para reservas, eventos corporativos o cualquier consulta sobre karaoke.night.
    </p>

    <form class="page__form" @submit.prevent>
      <div class="page__field">
        <label class="page__label" for="contact-name">nombre</label>
        <input id="contact-name" class="page__input" type="text" placeholder="tu nombre" />
      </div>
      <div class="page__field">
        <label class="page__label" for="contact-email">correo</label>
        <input id="contact-email" class="page__input" type="email" placeholder="hola@ejemplo.com" />
      </div>
      <div class="page__field">
        <label class="page__label" for="contact-message">mensaje</label>
        <textarea
          id="contact-message"
          class="page__textarea"
          placeholder="cuéntanos qué necesitas..."
        />
      </div>
      <button type="submit" class="page__cta">enviar mensaje</button>
    </form>
  </PageLayout>
</template>
