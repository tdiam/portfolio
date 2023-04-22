<script setup lang="ts">
import { initTooltips } from 'flowbite'

const props = defineProps(['tag'])

const { data } = useAsyncData(`tag:${props.tag}`, () => {
  return queryContent(`/tags/skills/${props.tag}`).findOne()
})

onMounted(initTooltips)
</script>

<template>
  <a
    :data-tooltip-target="data && `tag-${$.uid}-tooltip`"
    href=""
    :class="`
      inline-block px-2 bg-purple-900 border border-transparent
      text-sm font-bold text-white rounded-full transition
      hover:bg-transparent hover:text-purple-900 hover:border-purple-900
      `">
    {{ tag }}
  </a>
  <template v-if="data">
    <div
      role="tooltip"
      :id="`tag-${$.uid}-tooltip`"
      :class="`
        absolute z-10 inline-block px-4 py-2
        bg-white shadow rounded invisible opacity-0
        transition-opacity duration-300 tooltip
      `">
      <ContentRenderer :value="data" class="prose prose-sm prose-p:font-medium" />
    </div>
  </template>
</template>
