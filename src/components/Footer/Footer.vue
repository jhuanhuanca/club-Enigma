<script setup lang="ts">
import './footer.css'

const columns = [
  {
    title: 'producto',
    links: ['canciones', 'salas vip', 'eventos', 'precios'],
  },
  {
    title: 'empresa',
    links: ['nosotros', 'prensa', 'carreras', 'contacto'],
  },
  {
    title: 'legal',
    links: ['privacidad', 'términos', 'cookies'],
  },
]
</script>

<template>
  <footer class="site-footer">
    <div class="site-footer__inner">
      <div class="site-footer__top">
        <div class="site-footer__brand">
          <a href="#" class="site-footer__logo">
            <svg class="site-footer__logo-icon" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <rect x="1" y="1" width="7" height="7" stroke="currentColor" stroke-width="1.2" />
              <rect x="10" y="1" width="7" height="7" stroke="currentColor" stroke-width="1.2" />
              <rect x="1" y="10" width="7" height="7" stroke="currentColor" stroke-width="1.2" />
              <rect x="10" y="10" width="7" height="7" stroke="currentColor" stroke-width="1.2" opacity="0.5" />
            </svg>
            karaoke.night
          </a>
          <p class="site-footer__tagline">
            la experiencia karaoke nocturna más inmersiva del mundo.
          </p>
        </div>

        <nav
          v-for="col in columns"
          :key="col.title"
          class="site-footer__col"
          :aria-label="col.title"
        >
          <h4 class="site-footer__col-title">{{ col.title }}</h4>
          <ul class="site-footer__links">
            <li v-for="link in col.links" :key="link">
              <a href="#" class="site-footer__link">{{ link }}</a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="site-footer__bottom">
        <p class="site-footer__copy">© 2026 karaoke.night. todos los derechos reservados.</p>
        <div class="site-footer__social">
          <a href="#" class="site-footer__social-link" aria-label="instagram">ig</a>
          <a href="#" class="site-footer__social-link" aria-label="tiktok">tk</a>
          <a href="#" class="site-footer__social-link" aria-label="youtube">yt</a>
        </div>
      </div>
    </div>
  </footer>
</template>
