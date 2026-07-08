<script setup lang="ts">
import PageLayout from '../layouts/PageLayout.vue'
</script>

<template>
  <PageLayout>
    <h1 class="page__title">confirmar asistencia</h1>
    <p class="page__lead">
      confirma tu reserva o evento para asegurar tu lugar y personalizar tu experiencia.
    </p>

    <form class="page__form" @submit.prevent>
      <div class="page__field">
        <label class="page__label" for="confirm-name">nombre completo</label>
        <input id="confirm-name" class="page__input" type="text" placeholder="tu nombre" />
      </div>
      <div class="page__field">
        <label class="page__label" for="confirm-code">código de reserva</label>
        <input id="confirm-code" class="page__input" type="text" placeholder="ej. kn-2026-001" />
      </div>
      <div class="page__field">
        <label class="page__label" for="confirm-guests">número de invitados</label>
        <input id="confirm-guests" class="page__input" type="number" min="1" placeholder="4" />
      </div>
      <button type="submit" class="page__cta">confirmar asistencia</button>
    </form>
  </PageLayout>
</template>
