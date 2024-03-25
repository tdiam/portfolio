<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

defineProps(['limit'])

const query: QueryBuilderParams = {
  path: '/cv/education',
  sort: { _file: -1, $numeric: true },
}
</script>

<template>
  <ContentList :query="{ ...query, limit }" v-slot="{ list }">
    <Timeline>
      <TimelineItem
        v-for="item in list"
        :key="item._path"
        :data="item" />
    </Timeline>
  </ContentList>
</template>
