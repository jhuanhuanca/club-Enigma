<script setup lang="ts">
import Navbar from '../components/Navbar/Navbar.vue'
import Footer from '../components/Footer/Footer.vue'
import Occasions from '../components/Occasions/Occasions.vue'
</script>

<template>
  <div class="occasions-page">
    <Navbar variant="solid" />
    <Occasions />
    <Footer />
  </div>
</template>

<style scoped>
.occasions-page {
  min-height: 100svh;
  background: #000;
}
</style>
