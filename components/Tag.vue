<script setup lang="ts">
import { FetchError } from 'ofetch'
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import type { Instance } from 'tippy.js'
import { computed, nextTick } from 'vue'

const props = defineProps(['tag', 'data', 'type', 'count'])

const normalizedTag = computed(() => props.tag.toLowerCase().replace(/\s/g, '-'))

const tagData = ref<ParsedContent | string |null>(props.data ?? null)
async function onTrigger(instance: Instance) {
  instance.disable()
  if (tagData.value === null) {
    try {
      const data = await queryContent(`/tags/${normalizedTag.value}`).findOne()
      tagData.value = data
    } catch (err) {
      if (err instanceof FetchError && err.statusCode === 404) {
        // ignore
        return
      }
      console.error(`Error while fetching tag "${normalizedTag.value}" data`, err)
    }
  }
  instance.enable()
  nextTick(() => instance.show())
}

const typeStyles = computed(() => {
  if (!props.type || props.type === 'primary') {
    return 'bg-purple-900 text-white border-transparent hover:bg-transparent hover:text-purple-900 hover:border-purple-900'
  } else if (props.type === 'outline') {
    return 'bg-transparent text-purple-900 border-purple-900 hover:bg-purple-900 hover:text-white hover:border-transparent'
  }
  return ''
})
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<template>
  <tippy
    theme="light-border"
    interactive
    animation="shift-away"
    trigger="mouseenter focusin"
    :touch="false"
    :duration="[300, 50]"
    :offset="[0, 15]"
    :on-trigger="onTrigger">
    <a
      :href="`/projects/tag/${normalizedTag}`"
      :class="`
        inline-block px-2 py-0.5 md:py-0
        text-xs md:text-sm font-bold rounded-full transition border
        ${typeStyles}
        `"
      v-bind="$attrs">
      {{ tag }}
      <span v-if="typeof count !== 'undefined'" class="font-normal">
        &times; {{ count }}
      </span>
    </a>
    <template #content>
      <div v-if="tagData" class="p-2">
        <ContentRenderer :value="tagData" class="prose prose-sm prose-p:font-medium" />
      </div>
    </template>
  </tippy>
</template>
