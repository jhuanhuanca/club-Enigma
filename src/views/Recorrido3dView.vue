<script setup lang="ts">
import Navbar from '../components/Navbar/Navbar.vue'
import Footer from '../components/Footer/Footer.vue'
import Tour3D from '../components/Tour3D/Tour3D.vue'
</script>

<template>
  <div class="tour-page">
    <Navbar variant="solid" />
    <Tour3D />
    <Footer />
  </div>
</template>

<style scoped>
.tour-page {
  min-height: 100svh;
  background: #000;
}
</style>
