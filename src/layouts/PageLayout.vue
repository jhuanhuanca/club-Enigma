<script setup lang="ts">
import Navbar from '../components/Navbar/Navbar.vue'
import Footer from '../components/Footer/Footer.vue'
import '../styles/page.css'
</script>

<template>
  <div class="page">
    <Navbar variant="solid" />
    <main class="page__main">
      <slot />
    </main>
    <Footer />
  </div>
</template>
