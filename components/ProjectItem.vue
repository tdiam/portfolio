<script setup lang="ts">
defineProps(['project'])
</script>

<template>
  <div class="flex flex-col rounded-lg shadow-lg bg-white">
    <div class="px-6 py-4">
      <h4 class="font-bold">{{ project.title }}</h4>
      <ContentRenderer :value="project" :excerpt="true" />
    </div>
  </div>
</template>
