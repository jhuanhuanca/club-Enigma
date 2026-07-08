<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import PageLayout from '../layouts/PageLayout.vue'

const route = useRoute()

const title = computed(() => (route.meta.title as string) ?? '')
const description = computed(() => (route.meta.description as string) ?? '')
const parentLabel = computed(() => ((route.meta.parentLabel as string[]) ?? []).join(' '))
const parentTo = computed(() => (route.meta.parentTo as string) ?? '/')
</script>

<template>
  <PageLayout>
    <h1 class="page__title">{{ title }}</h1>
    <p class="page__lead">{{ description }}</p>
    <RouterLink :to="parentTo" class="page__cta">volver a {{ parentLabel }}</RouterLink>
  </PageLayout>
</template>
