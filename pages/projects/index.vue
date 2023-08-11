<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

useHead({
  title: 'Projects',
})

const projectsQuery: QueryBuilderParams = {
  path: '/projects',
}
</script>

<template>
  <div>
    <h1 class="text-center text-3xl font-bold tracking-wider">
      Projects
    </h1>
    <AllTags />
    <ContentList :query="projectsQuery" v-slot="{ list }">
      <div class="grid md:grid-cols-3 gap-4 mt-8 md:mt-16 justify-between">
        <ProjectItem
          v-for="project in list"
          :key="project._path"
          :project="project" />
      </div>
    </ContentList>
  </div>
</template>
