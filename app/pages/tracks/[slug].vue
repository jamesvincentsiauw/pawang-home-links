<script setup lang="ts">
import type { Track } from '~~/shared/types/catalog'

const route = useRoute()
const { data: tracks } = await useFetch<Track[]>('/api/tracks')
const track = computed(() => tracks.value?.find(t => t.slug === route.params.slug))

if (!track.value) {
  throw createError({ statusCode: 404, statusMessage: 'Jalur tidak ditemukan' })
}
</script>

<template>
  <main class="detail">
    <section>
      <NuxtLink to="/tracks" class="back">Balik ke daftar jalur</NuxtLink>
      <h1>{{ track!.title }}</h1>
      <p>{{ track!.description }}</p>
      <div class="meta">
        <span>{{ track!.courses }} kelas</span>
        <span>{{ track!.lessons }} lesson</span>
        <span>{{ track!.minutes }} menit</span>
      </div>
    </section>
  </main>
</template>
