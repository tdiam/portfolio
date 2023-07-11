<script setup lang="ts">
import { ref, computed } from 'vue'


const TAG_LIMIT = 10

const projectTags = await queryContent('projects').only('tags').find()

const tags: {[tag: string]: number} = {}
for (const p of projectTags) {
  for (const t of p.tags) {
    if (!tags.hasOwnProperty(t)) {
      tags[t] = 0
    }
    ++tags[t]
  }
}

// primary sort: count
// secondary sort: name
const countedTags = [...Object.entries(tags)]
countedTags.sort(([aTag, aCount], [bTag, bCount]) => aTag.localeCompare(bTag))
countedTags.sort(([aTag, aCount], [bTag, bCount]) => bCount - aCount)

const isShowAllTags = ref(false)
const visibleTags = computed(() => {
  if (isShowAllTags.value) {
    return countedTags
  } else {
    return countedTags.slice(0, TAG_LIMIT)
  }
})
</script>

<template>
  <ul class="mt-8 mx-auto max-w-3xl flex flex-row flex-wrap justify-center">
    <li v-for="([tag, count]) in visibleTags" class="mr-2 mb-2">
      <Tag :tag="tag" :count="count" />
    </li>
    <li v-if="!isShowAllTags && countedTags.length > TAG_LIMIT">
      <button
        :class="`
          inline-block px-2
          text-sm font-bold rounded-full transition border
          bg-transparent text-purple-900 border-purple-900 hover:bg-purple-900
          hover:text-white hover:border-transparent
          `"
        @click="() => isShowAllTags = true">
        + {{ countedTags.length - TAG_LIMIT }} more tags
      </button>
    </li>
  </ul>
</template>
