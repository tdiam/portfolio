<script setup lang="ts">
defineProps(['project'])

const TAG_LIMIT = 5
</script>

<template>
  <div class="flex flex-col rounded-lg shadow-lg bg-white">
    <NuxtLink :to="project._path">
      <img v-if="project.image" :src="project.image" class="rounded-t-lg shadow-inner" />
    </NuxtLink>
    <div class="pt-3 pb-5 px-5 md:p-6">
      <ul class="flex flex-row flex-wrap">
        <li v-for="tag in project.tags.slice(0, TAG_LIMIT)" class="mr-1 mb-1 md:mr-2">
          <Tag :tag="tag" />
        </li>
      </ul>
      <h4 class="font-bold mt-3">
        <NuxtLink :to="project._path">
          {{ project.title }}
        </NuxtLink>
      </h4>
      <ContentRenderer :value="project" :excerpt="true" class="mt-3 prose-sm md:prose-base" />
    </div>
  </div>
</template>
