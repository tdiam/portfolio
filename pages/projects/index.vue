<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

const projectsQuery: QueryBuilderParams = {
  path: '/projects',
}
</script>

<template>
  <h1 class="text-center text-3xl font-bold tracking-wider">
    Projects
  </h1>
  <ContentList :query="projectsQuery" v-slot="{ list }">
    <div class="grid grid-cols-3 gap-4 mt-12 justify-between">
      <ProjectItem
        v-for="project in list"
        :key="project._path"
        :project="project" />
    </div>
  </ContentList>
</template>
