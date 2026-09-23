<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

// Pass `to` for navigation so the control renders as a real link:
// it works before hydration, opens in a new tab, and crawlers can follow it.
defineProps<{
  to?: RouteLocationRaw
  variant?: 'primary' | 'secondary'
}>()
</script>

<template>
  <NuxtLink v-if="to" :to="to" class="btn" :class="variant ?? 'primary'">
    <slot />
  </NuxtLink>
  <button v-else type="button" class="btn" :class="variant ?? 'primary'">
    <slot />
  </button>
</template>
