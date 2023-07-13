<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

const route = useRoute()
const tagFilter = route.params.tag

useHead({
  title: `Projects with ${tagFilter}`,
})

const projectsQuery: QueryBuilderParams = {
  path: '/projects',
  where: [
    {
      tags: {
        $contains: [tagFilter],
      },
    },
  ],
}
</script>

<template>
  <h1 class="text-center text-3xl font-bold tracking-wider">
    Projects with tag
  </h1>
  <div class="mt-2 flex justify-center">
    <Tag :tag="tagFilter" />
  </div>
  <ContentList :query="projectsQuery">
    <template #default="{ list }">
      <div class="grid grid-cols-3 gap-4 mt-12 justify-between">
        <ProjectItem
          v-for="project in list"
          :key="project._path"
          :project="project" />
      </div>
    </template>
    <template #not-found>
      <p class="mt-12 text-lg text-center">
        No projects found.
      </p>
      <div class="mt-4 flex justify-center">
        <NuxtLink
          to="/projects"
          :class="`
            rounded border border-purple-900 bg-transparent
            px-4 py-1 text-lg font-semibold text-purple-900 uppercase transition
            hover:bg-purple-900 hover:border-transparent hover:text-white
          `">
          Browse all projects
        </NuxtLink>
      </div>
    </template>
  </ContentList>
</template>
