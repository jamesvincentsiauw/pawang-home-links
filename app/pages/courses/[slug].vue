<script setup lang="ts">
import type { Course } from '~~/shared/types/catalog'

const route = useRoute()
const { data: courses } = await useFetch<Course[]>('/api/courses')
const course = computed(() => courses.value?.find(c => c.slug === route.params.slug))

if (!course.value) {
  throw createError({ statusCode: 404, statusMessage: 'Kelas tidak ditemukan' })
}
</script>

<template>
  <main class="detail">
    <section>
      <NuxtLink to="/courses" class="back">Balik ke daftar kelas</NuxtLink>
      <h1>{{ course!.title }}</h1>
      <p>{{ course!.tagline }}</p>
      <div class="meta">
        <span class="badge">{{ course!.level }}</span>
        <span>{{ course!.minutes }} menit</span>
        <span>{{ course!.lessons }} lesson</span>
      </div>
    </section>
  </main>
</template>
