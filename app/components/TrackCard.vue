<script setup lang="ts">
import type { Track } from '~~/shared/types/catalog'

defineProps<{ track: Track }>()
</script>

<template>
  <NuxtLink :to="`/tracks/${track.slug}`" class="card">
    <h3>{{ track.title }}</h3>
    <p>{{ track.description }}</p>
    <div class="meta">
      <span>{{ track.courses }} kelas</span>
      <span>{{ track.lessons }} lesson</span>
      <span>{{ track.minutes }} menit</span>
    </div>
  </NuxtLink>
</template>
