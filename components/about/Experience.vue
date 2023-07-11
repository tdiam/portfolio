<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

defineProps(['limit'])

const query: QueryBuilderParams = {
  path: '/cv/experience',
}
</script>

<template>
  <ContentList :query="{ ...query, limit }" v-slot="{ list }">
    <Timeline>
      <TimelineItem
        v-for="item in list"
        :key="item._path"
        :data="item">
        <template #actions>
          <NuxtLink
            :to="`/projects/tag/${item.tag}`"
            :class="`
              mt-3 inline-block rounded border border-slate-700 px-3 py-1
              text-xs font-semibold text-slate-700 uppercase transition
              hover:border-black hover:ring-1 hover:ring-black hover:ring-inset hover:text-black
            `">
            Browse projects
          </NuxtLink>
        </template>
      </TimelineItem>
    </Timeline>
  </ContentList>
</template>
