<script setup lang="ts">
import { initTooltips } from 'flowbite'
import { computed } from 'vue'

const props = defineProps(['tag', 'type'])

const { data } = useAsyncData(`tag:${props.tag}`, () => {
  return queryContent(`/tags/skills/${props.tag}`).findOne()
})

const typeStyles = computed(() => {
  if (!props.type || props.type === 'primary') {
    return 'bg-purple-900 text-white border-transparent hover:bg-transparent hover:text-purple-900 hover:border-purple-900'
  } else if (props.type === 'outline') {
    return 'bg-transparent text-purple-900 border-purple-900 hover:bg-purple-900 hover:text-white hover:border-transparent'
  }
  return ''
})

onMounted(initTooltips)
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<template>
  <a
    :data-tooltip-target="data && `tag-${$.uid}-tooltip`"
    href=""
    :class="`
      inline-block px-2
      text-sm font-bold rounded-full transition border
      ${typeStyles}
      `"
    v-bind="$attrs">
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
