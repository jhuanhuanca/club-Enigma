<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import {
  MAIN_NAV_LINKS,
  RESERVA_CHILDREN,
  RESERVA_ROUTE,
  hasNavChildren,
  isDropdownOnly,
  isNavLinkActive,
  navAriaLabel,
  type NavLink,
} from '../../config/navLinks'
import './navbar.css'

withDefaults(
  defineProps<{
    variant?: 'overlay' | 'solid'
  }>(),
  { variant: 'solid' },
)

const route = useRoute()
const isMenuOpen = ref(false)
const openDropdownId = ref<string | null>(null)
const expandedMobileId = ref<string | null>(null)
const reservaOpen = ref(false)
const reservaMobileOpen = ref(false)

let closeTimer: ReturnType<typeof setTimeout> | null = null

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (!isMenuOpen.value) {
    expandedMobileId.value = null
    reservaMobileOpen.value = false
  }
}

const closeMenu = () => {
  isMenuOpen.value = false
  expandedMobileId.value = null
  reservaMobileOpen.value = false
}

const isActive = (link: NavLink) => isNavLinkActive(link, route.path)

const isChildActive = (to: string) =>
  route.path === to || route.path.startsWith(`${to}/`)

const linkStyle = (link: NavLink) =>
  link.accent ? { '--link-accent': link.accent } : undefined

const toggleDropdown = (link: NavLink) => {
  if (!hasNavChildren(link)) return

  if (closeTimer) {
    clearTimeout(closeTimer)
    closeTimer = null
  }

  openDropdownId.value = openDropdownId.value === link.id ? null : link.id
  reservaOpen.value = false
}

const closeDropdowns = () => {
  openDropdownId.value = null
  reservaOpen.value = false
}

const openDropdown = (link: NavLink) => {
  if (!hasNavChildren(link)) return

  if (closeTimer) {
    clearTimeout(closeTimer)
    closeTimer = null
  }
  openDropdownId.value = link.id
  reservaOpen.value = false
}

const scheduleCloseDropdown = () => {
  closeTimer = setTimeout(() => {
    openDropdownId.value = null
    reservaOpen.value = false
  }, 120)
}

const openReservaDropdown = () => {
  if (closeTimer) {
    clearTimeout(closeTimer)
    closeTimer = null
  }
  reservaOpen.value = true
  openDropdownId.value = null
}

const toggleMobileExpand = (link: NavLink) => {
  if (!hasNavChildren(link)) return
  expandedMobileId.value = expandedMobileId.value === link.id ? null : link.id
  reservaMobileOpen.value = false
}

const toggleReservaMobile = () => {
  reservaMobileOpen.value = !reservaMobileOpen.value
  expandedMobileId.value = null
}

const onDocumentClick = (event: MouseEvent) => {
  const target = event.target as Node
  const inNav = (target as Element).closest?.('.site-nav__item, .site-nav__cta-wrap')
  if (!inNav) {
    closeDropdowns()
  }
}

const onKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    closeMenu()
    closeDropdowns()
  }
}

watch(isMenuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
  window.addEventListener('keydown', onKeyDown)
  document.addEventListener('click', onDocumentClick)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeyDown)
  document.removeEventListener('click', onDocumentClick)
  document.body.style.overflow = ''
  if (closeTimer) clearTimeout(closeTimer)
})
</script>

<template>
  <header
    class="site-nav"
    :class="`site-nav--${variant}`"
  >
    <div class="site-nav__header">
      <RouterLink to="/" class="site-nav__logo" @click="closeMenu">
        <svg class="site-nav__logo-icon" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <rect x="1" y="1" width="7" height="7" stroke="currentColor" stroke-width="1.2" />
          <rect x="10" y="1" width="7" height="7" stroke="currentColor" stroke-width="1.2" />
          <rect x="1" y="10" width="7" height="7" stroke="currentColor" stroke-width="1.2" />
          <rect x="10" y="10" width="7" height="7" stroke="currentColor" stroke-width="1.2" opacity="0.5" />
        </svg>
        karaoke.night
      </RouterLink>

      <nav class="site-nav__links site-nav__links--desktop" aria-label="principal">
        <template v-for="link in MAIN_NAV_LINKS" :key="link.id">
          <div
            v-if="hasNavChildren(link)"
            class="site-nav__item"
            @mouseenter="openDropdown(link)"
            @mouseleave="scheduleCloseDropdown"
          >
            <button
              v-if="isDropdownOnly(link)"
              type="button"
              class="site-nav__link site-nav__link--trigger"
              :class="{ 'site-nav__link--active': isActive(link) }"
              :aria-label="navAriaLabel(link)"
              :aria-expanded="openDropdownId === link.id"
              aria-haspopup="true"
              :style="linkStyle(link)"
              @click="toggleDropdown(link)"
            >
              <span class="site-nav__link-lines">
                <span
                  v-for="line in link.lines"
                  :key="line"
                  class="site-nav__link-line"
                >{{ line }}</span>
              </span>
              <span class="site-nav__chevron" aria-hidden="true">▾</span>
            </button>

            <RouterLink
              v-else
              :to="link.to"
              class="site-nav__link"
              :class="{ 'site-nav__link--active': isActive(link) }"
              :aria-label="navAriaLabel(link)"
              :aria-expanded="openDropdownId === link.id"
              aria-haspopup="true"
              :style="linkStyle(link)"
            >
              <span class="site-nav__link-lines">
                <span
                  v-for="line in link.lines"
                  :key="line"
                  class="site-nav__link-line"
                >{{ line }}</span>
              </span>
              <span class="site-nav__chevron" aria-hidden="true">▾</span>
            </RouterLink>

            <div
              v-show="openDropdownId === link.id"
              class="site-nav__dropdown"
              :style="linkStyle(link)"
            >
              <RouterLink
                v-for="child in link.children"
                :key="child.id"
                :to="child.to"
                class="site-nav__dropdown-link"
                :class="{ 'site-nav__dropdown-link--active': isChildActive(child.to) }"
                @click="closeDropdowns"
              >
                {{ child.label }}
              </RouterLink>
            </div>
          </div>

          <RouterLink
            v-else
            :to="link.to"
            class="site-nav__link site-nav__link--plain"
            :class="{ 'site-nav__link--active': isActive(link) }"
            :aria-label="navAriaLabel(link)"
            :style="linkStyle(link)"
          >
            <span class="site-nav__link-lines">
              <span
                v-for="line in link.lines"
                :key="`${link.id}-${line}`"
                class="site-nav__link-line"
              >{{ line }}</span>
            </span>
          </RouterLink>
        </template>
      </nav>

      <div class="site-nav__actions">
        <a href="#" class="site-nav__login site-nav__login--desktop">login</a>

        <div
          class="site-nav__cta-wrap site-nav__cta-wrap--desktop"
          @mouseenter="openReservaDropdown"
          @mouseleave="scheduleCloseDropdown"
        >
          <RouterLink
            :to="RESERVA_ROUTE"
            class="site-nav__cta site-nav__cta--desktop"
            :class="{ 'site-nav__cta--active': route.path.startsWith(RESERVA_ROUTE) }"
            :aria-expanded="reservaOpen"
          >
            <span class="site-nav__cta-lines">
              <span class="site-nav__cta-line">reserva</span>
              <span class="site-nav__cta-line">ahora</span>
            </span>
            <span class="site-nav__chevron site-nav__chevron--cta" aria-hidden="true">▾</span>
          </RouterLink>

          <div v-show="reservaOpen" class="site-nav__dropdown site-nav__dropdown--cta">
            <RouterLink
              v-for="child in RESERVA_CHILDREN"
              :key="child.id"
              :to="child.to"
              class="site-nav__dropdown-link"
              :class="{ 'site-nav__dropdown-link--active': isChildActive(child.to) }"
            >
              {{ child.label }}
            </RouterLink>
          </div>
        </div>

        <button
          type="button"
          class="site-nav__burger"
          :class="{ 'site-nav__burger--open': isMenuOpen }"
          :aria-expanded="isMenuOpen"
          aria-controls="site-mobile-menu"
          aria-label="abrir menú"
          @click="toggleMenu"
        >
          <span class="site-nav__burger-line" />
          <span class="site-nav__burger-line" />
        </button>
      </div>
    </div>

    <Teleport to="body">
      <Transition name="site-nav-mobile">
        <div
          v-if="isMenuOpen"
          id="site-mobile-menu"
          class="site-nav__mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="menú de navegación"
        >
          <div class="site-nav__mobile-backdrop" @click="closeMenu" />

          <div class="site-nav__mobile-panel">
            <div class="site-nav__mobile-glow" aria-hidden="true" />

            <div class="site-nav__mobile-head">
              <div class="site-nav__mobile-brand">
                <span class="site-nav__mobile-eyebrow">navegación</span>
                <span class="site-nav__mobile-title">karaoke.night</span>
              </div>
              <button
                type="button"
                class="site-nav__mobile-close"
                aria-label="cerrar menú"
                @click="closeMenu"
              >
                ✕
              </button>
            </div>

            <nav class="site-nav__mobile-nav">
              <template
                v-for="(link, index) in MAIN_NAV_LINKS"
                :key="`mobile-${link.id}`"
              >
                <div
                  v-if="hasNavChildren(link)"
                  class="site-nav__mobile-group"
                  :style="{ ...linkStyle(link), '--item-index': index }"
                >
                  <button
                    type="button"
                    class="site-nav__mobile-link"
                    :class="{ 'site-nav__mobile-link--active': isActive(link) }"
                    :aria-expanded="expandedMobileId === link.id"
                    @click="toggleMobileExpand(link)"
                  >
                    <span class="site-nav__mobile-link-index" aria-hidden="true">
                      {{ String(index + 1).padStart(2, '0') }}
                    </span>
                    <span class="site-nav__mobile-link-lines">
                      <span
                        v-for="line in link.lines"
                        :key="`mobile-${link.id}-${line}`"
                        class="site-nav__mobile-link-line"
                      >{{ line }}</span>
                    </span>
                    <span
                      class="site-nav__mobile-chevron"
                      :class="{ 'site-nav__mobile-chevron--open': expandedMobileId === link.id }"
                      aria-hidden="true"
                    >▾</span>
                  </button>

                  <div
                    v-show="expandedMobileId === link.id"
                    class="site-nav__mobile-sub"
                  >
                    <RouterLink
                      v-if="!isDropdownOnly(link)"
                      :to="link.to"
                      class="site-nav__mobile-sub-link site-nav__mobile-sub-link--parent"
                      @click="closeMenu"
                    >
                      ver todo
                    </RouterLink>
                    <RouterLink
                      v-for="child in link.children"
                      :key="child.id"
                      :to="child.to"
                      class="site-nav__mobile-sub-link"
                      :class="{ 'site-nav__mobile-sub-link--active': isChildActive(child.to) }"
                      @click="closeMenu"
                    >
                      {{ child.label }}
                    </RouterLink>
                  </div>
                </div>

                <RouterLink
                  v-else
                  :to="link.to"
                  class="site-nav__mobile-link site-nav__mobile-link--direct"
                  :class="{ 'site-nav__mobile-link--active': isActive(link) }"
                  :style="{ ...linkStyle(link), '--item-index': index }"
                  @click="closeMenu"
                >
                  <span class="site-nav__mobile-link-index" aria-hidden="true">
                    {{ String(index + 1).padStart(2, '0') }}
                  </span>
                  <span class="site-nav__mobile-link-lines">
                    <span
                      v-for="line in link.lines"
                      :key="`mobile-${link.id}-${line}`"
                      class="site-nav__mobile-link-line"
                    >{{ line }}</span>
                  </span>
                </RouterLink>
              </template>
            </nav>

            <div class="site-nav__mobile-cta">
              <a href="#" class="site-nav__mobile-login" @click="closeMenu">login</a>

              <div class="site-nav__mobile-reserva-wrap">
                <button
                  type="button"
                  class="site-nav__mobile-reserva"
                  :class="{ 'site-nav__mobile-reserva--open': reservaMobileOpen }"
                  :aria-expanded="reservaMobileOpen"
                  @click="toggleReservaMobile"
                >
                  <span class="site-nav__mobile-reserva-lines">
                    <span>reserva</span>
                    <span>ahora</span>
                  </span>
                  <span
                    class="site-nav__mobile-chevron site-nav__mobile-chevron--light"
                    :class="{ 'site-nav__mobile-chevron--open': reservaMobileOpen }"
                    aria-hidden="true"
                  >▾</span>
                </button>

                <div v-show="reservaMobileOpen" class="site-nav__mobile-sub site-nav__mobile-sub--reserva">
                  <RouterLink
                    :to="RESERVA_ROUTE"
                    class="site-nav__mobile-sub-link site-nav__mobile-sub-link--parent"
                    @click="closeMenu"
                  >
                    reservar ahora
                  </RouterLink>
                  <RouterLink
                    v-for="child in RESERVA_CHILDREN"
                    :key="child.id"
                    :to="child.to"
                    class="site-nav__mobile-sub-link"
                    @click="closeMenu"
                  >
                    {{ child.label }}
                  </RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </header>
</template>
