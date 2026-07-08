<script setup lang="ts">
import Navbar from '../components/Navbar/Navbar.vue'
import Footer from '../components/Footer/Footer.vue'
import LiquorsBeverages from '../components/LiquorsBeverages/LiquorsBeverages.vue'
</script>

<template>
  <div class="liquors-page">
    <Navbar variant="solid" />
    <LiquorsBeverages />
    <Footer />
  </div>
</template>

<style scoped>
.liquors-page {
  min-height: 100svh;
  background: #000;
}
</style>
