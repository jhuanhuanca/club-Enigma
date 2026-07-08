<script setup lang="ts">
import Navbar from '../components/Navbar/Navbar.vue'
import Footer from '../components/Footer/Footer.vue'
import RestaurantMenu from '../components/RestaurantMenu/RestaurantMenu.vue'
</script>

<template>
  <div class="menu-restaurante-page">
    <Navbar variant="solid" />
    <RestaurantMenu />
    <Footer />
  </div>
</template>

<style scoped>
.menu-restaurante-page {
  min-height: 100svh;
  background: #000;
}
</style>
