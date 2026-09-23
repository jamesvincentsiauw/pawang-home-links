<script setup lang="ts">
import type { Course } from '~~/shared/types/catalog'

const { data: courses } = await useFetch<Course[]>('/api/courses')
</script>

<template>
  <main>
    <section>
      <div class="section-head">
        <div>
          <h1>Katalog kelas</h1>
          <p>Mulai dari yang paling dasar, atau langsung ke yang lagi kamu butuhin sekarang.</p>
        </div>
      </div>
      <div class="grid">
        <CourseCard v-for="course in courses ?? []" :key="course.slug" :course="course" />
      </div>
    </section>
  </main>
</template>
