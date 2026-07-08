<script setup lang="ts">
import Navbar from '../components/Navbar/Navbar.vue'
import Footer from '../components/Footer/Footer.vue'
import PrivateRooms from '../components/PrivateRooms/PrivateRooms.vue'
</script>

<template>
  <div class="rooms-page">
    <Navbar variant="solid" />
    <PrivateRooms />
    <Footer />
  </div>
</template>

<style scoped>
.rooms-page {
  min-height: 100svh;
  background: #000;
}
</style>
