<script setup lang="ts">
import type { Course } from '~~/shared/types/catalog'

defineProps<{ course: Course }>()
</script>

<template>
  <NuxtLink :to="`/courses/${course.slug}`" class="card">
    <h3>{{ course.title }}</h3>
    <p>{{ course.tagline }}</p>
    <div class="meta">
      <span class="badge">{{ course.level }}</span>
      <span>{{ course.minutes }} menit</span>
      <span>{{ course.lessons }} lesson</span>
    </div>
  </NuxtLink>
</template>
