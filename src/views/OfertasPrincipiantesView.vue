<script setup lang="ts">
import Navbar from '../components/Navbar/Navbar.vue'
import Footer from '../components/Footer/Footer.vue'
import StarterOffers from '../components/StarterOffers/StarterOffers.vue'
</script>

<template>
  <div class="starter-page">
    <Navbar variant="solid" />
    <StarterOffers />
    <Footer />
  </div>
</template>

<style scoped>
.starter-page {
  min-height: 100svh;
  background: #000;
}
</style>
