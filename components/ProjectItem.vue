<script setup lang="ts">
defineProps(['project'])
</script>

<template>
  <div class="flex flex-col rounded-lg shadow-lg bg-white">
    <NuxtLink :to="project._path">
      <img v-if="project.image" :src="project.image" class="rounded-t-lg" />
    </NuxtLink>
    <div class="p-6">
      <ul class="flex flex-row flex-wrap">
        <li v-for="tag in project.tags" class="mr-2">
          <Tag :tag="tag" />
        </li>
      </ul>
      <h4 class="font-bold mt-3">
        <NuxtLink :to="project._path">
          {{ project.title }}
        </NuxtLink>
      </h4>
      <ContentRenderer :value="project" :excerpt="true" class="mt-3" />
    </div>
  </div>
</template>
