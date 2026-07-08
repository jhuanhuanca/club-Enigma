<script setup lang="ts">
import PageLayout from '../layouts/PageLayout.vue'
</script>

<template>
  <PageLayout>
    <h1 class="page__title">reserva ahora</h1>
    <p class="page__lead">
      elige fecha, sala y servicios. confirma tu noche en minutos.
    </p>

    <form class="page__form" @submit.prevent>
      <div class="page__field">
        <label class="page__label" for="reserve-date">fecha</label>
        <input id="reserve-date" class="page__input" type="date" />
      </div>
      <div class="page__field">
        <label class="page__label" for="reserve-room">tipo de habitación</label>
        <select id="reserve-room" class="page__input">
          <option value="suite">suite neón</option>
          <option value="lounge">lounge premium</option>
          <option value="estudio">estudio íntimo</option>
        </select>
      </div>
      <div class="page__field">
        <label class="page__label" for="reserve-guests">invitados</label>
        <input id="reserve-guests" class="page__input" type="number" min="1" max="12" placeholder="4" />
      </div>
      <div class="page__field">
        <label class="page__label" for="reserve-phone">teléfono</label>
        <input id="reserve-phone" class="page__input" type="tel" placeholder="+52 ..." />
      </div>
      <button type="submit" class="page__cta">confirmar reserva</button>
    </form>
  </PageLayout>
</template>
