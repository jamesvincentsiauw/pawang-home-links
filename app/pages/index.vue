<script setup lang="ts">
import type { Course, Track } from '~~/shared/types/catalog'

// Both requests run in parallel and are awaited on the server,
// so the HTML already carries the catalog.
const [
  { data: courses, status: coursesStatus, error: coursesError, refresh: refreshCourses },
  { data: tracks, status: tracksStatus, error: tracksError, refresh: refreshTracks },
] = await Promise.all([
  useFetch<Course[]>('/api/courses', { transform: list => list.slice(0, 3) }),
  useFetch<Track[]>('/api/tracks'),
])
</script>

<template>
  <main>
    <section class="hero">
      <h1>Pelajari, Praktikkan, dan Kuasai Prompting AI</h1>
      <p>
        Tempat belajar memakai ChatGPT dan AI lain yang sudah kamu punya,
        lewat kelas berbahasa Indonesia yang bisa diakses gratis.
      </p>
      <div class="actions">
        <AppButton to="/courses">Belajar Sekarang</AppButton>
        <AppButton variant="secondary" to="#jalur">Lihat Jalur Belajar</AppButton>
      </div>
    </section>

    <section id="kelas">
      <div class="section-head">
        <div>
          <h2>Pilih kelas sesuai kebutuhan kamu</h2>
          <p>Seluruh silabus terbuka sejak awal. Tinjau materinya lebih dulu sebelum memutuskan untuk mengikuti.</p>
        </div>
        <AppButton variant="secondary" to="/courses">Lihat Semua Kelas</AppButton>
      </div>
      <div v-if="coursesStatus === 'pending'" class="grid">
        <CardSkeleton v-for="i in 3" :key="i" />
      </div>
      <p v-else-if="coursesError" class="state">
        Daftar kelas gagal dimuat.
        <button type="button" class="link" @click="refreshCourses()">Coba lagi</button>
      </p>
      <p v-else-if="!courses?.length" class="state">Materinya lagi disiapkan. Cek lagi nanti ya.</p>
      <div v-else class="grid">
        <CourseCard v-for="course in courses" :key="course.slug" :course="course" />
      </div>
    </section>

    <section id="jalur">
      <div class="section-head">
        <div>
          <h2>Alur belajar terstruktur, dari langkah pertama sampai selesai</h2>
          <p>Beberapa kelas dirangkai menjadi satu urutan yang saling menyambung, sesuai tujuan dan latar belakang kamu.</p>
        </div>
        <AppButton variant="secondary" to="/tracks">Lihat Semua Jalur</AppButton>
      </div>
      <div v-if="tracksStatus === 'pending'" class="grid">
        <CardSkeleton v-for="i in 4" :key="i" />
      </div>
      <p v-else-if="tracksError" class="state">
        Jalur belajar gagal dimuat.
        <button type="button" class="link" @click="refreshTracks()">Coba lagi</button>
      </p>
      <p v-else-if="!tracks?.length" class="state">Jalur belajarnya lagi disiapkan. Cek lagi nanti ya.</p>
      <div v-else class="grid">
        <TrackCard v-for="track in tracks" :key="track.slug" :track="track" />
      </div>
    </section>
  </main>
</template>
