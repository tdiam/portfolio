<script setup lang="ts">
import { ref, computed } from 'vue'


const TAG_LIMIT = 10

const tags = await useSortedTagsWithCount()

const isShowAllTags = ref(false)
const visibleTags = computed(() => {
  if (isShowAllTags.value) {
    return tags
  } else {
    return tags.slice(0, TAG_LIMIT)
  }
})
</script>

<template>
  <ul class="mt-8 mx-auto max-w-3xl flex flex-row flex-wrap justify-center">
    <li v-for="([tag, count]) in visibleTags" class="mr-1 md:mr-2 mb-2">
      <Tag :tag="tag" :count="count" />
    </li>
    <li v-if="!isShowAllTags && tags.length > TAG_LIMIT">
      <button
        :class="`
          inline-block px-2 py-0.5 md:py-0
          text-xs md:text-sm font-bold rounded-full transition border
          bg-transparent text-purple-900 border-purple-900 hover:bg-purple-900
          hover:text-white hover:border-transparent
          `"
        @click="() => isShowAllTags = true">
        + {{ tags.length - TAG_LIMIT }} more tags
      </button>
    </li>
  </ul>
</template>
