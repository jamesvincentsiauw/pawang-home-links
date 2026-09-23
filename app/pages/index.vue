<script setup lang="ts">
import type { Course, Track } from '~~/shared/types/catalog'

const courses = ref<Course[]>([])
const tracks = ref<Track[]>([])
const pending = ref(true)

onMounted(async () => {
  const [allCourses, allTracks] = await Promise.all([
    $fetch<Course[]>('/api/courses'),
    $fetch<Track[]>('/api/tracks'),
  ])
  courses.value = allCourses.slice(0, 3)
  tracks.value = allTracks
  pending.value = false
})

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
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
        <AppButton @click="navigateTo('/courses')">Belajar Sekarang</AppButton>
        <AppButton variant="secondary" @click="scrollToSection('jalur')">Lihat Jalur Belajar</AppButton>
      </div>
    </section>

    <section id="kelas">
      <div class="section-head">
        <div>
          <h2>Pilih kelas sesuai kebutuhan kamu</h2>
          <p>Seluruh silabus terbuka sejak awal. Tinjau materinya lebih dulu sebelum memutuskan untuk mengikuti.</p>
        </div>
        <AppButton variant="secondary" @click="navigateTo('/courses')">Lihat Semua Kelas</AppButton>
      </div>
      <div v-if="pending" class="grid">
        <CardSkeleton v-for="i in 3" :key="i" />
      </div>
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
        <AppButton variant="secondary" @click="navigateTo('/tracks')">Lihat Semua Jalur</AppButton>
      </div>
      <div v-if="pending" class="grid">
        <CardSkeleton v-for="i in 4" :key="i" />
      </div>
      <div v-else class="grid">
        <TrackCard v-for="track in tracks" :key="track.slug" :track="track" />
      </div>
    </section>
  </main>
</template>
