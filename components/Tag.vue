<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps(['tag', 'type', 'count'])

const normalizedTag = computed(() => props.tag.toLowerCase().replace(/\s/g, '-'))

const { data } = useAsyncData(`tag:${normalizedTag.value}`, () => {
  return queryContent(`/tags/skills/${normalizedTag.value}`).findOne()
})

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
  <template v-if="data">
    <tippy
      theme="light-border"
      interactive
      animation="shift-away"
      trigger="mouseenter focusin"
      :duration="[300, 50]"
      :offset="[0, 15]">
      <a
        :href="`/projects/tag/${normalizedTag}`"
        :class="`
          inline-block px-2
          text-sm font-bold rounded-full transition border
          ${typeStyles}
          `"
        v-bind="$attrs">
        {{ tag }}
        <span v-if="typeof count !== 'undefined'" class="font-normal">
          &times; {{ count }}
        </span>
      </a>
      <template #content>
        <div class="p-2">
          <ContentRenderer :value="data" class="prose prose-sm prose-p:font-medium" />
        </div>
      </template>
    </tippy>
  </template>
  <template v-else>
    <a
      :href="`/projects/tag/${normalizedTag}`"
      :class="`
        inline-block px-2
        text-sm font-bold rounded-full transition border
        ${typeStyles}
        `"
      v-bind="$attrs">
      {{ tag }}
      <span v-if="typeof count !== 'undefined'" class="font-normal">
        &times; {{ count }}
      </span>
    </a>
  </template>
</template>
