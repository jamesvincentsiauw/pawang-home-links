<script setup lang="ts">
defineProps<{ variant?: 'primary' | 'secondary' }>()
defineEmits<{ click: [] }>()
</script>

<template>
  <button type="button" class="btn" :class="variant ?? 'primary'" @click="$emit('click')">
    <slot />
  </button>
</template>
