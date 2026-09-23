<script setup lang="ts">
import type { Track } from '~~/shared/types/catalog'

const { data: tracks } = await useFetch<Track[]>('/api/tracks')
</script>

<template>
  <main>
    <section>
      <div class="section-head">
        <div>
          <h1>Jalur belajar</h1>
          <p>Nggak usah bingung mulai dari mana. Tiap jalur isinya beberapa kelas, urut dari dasar.</p>
        </div>
      </div>
      <div class="grid">
        <TrackCard v-for="track in tracks ?? []" :key="track.slug" :track="track" />
      </div>
    </section>
  </main>
</template>
