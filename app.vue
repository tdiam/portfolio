<script setup lang="ts">
import { computed } from 'vue'

useHead({
  titleTemplate: title => {
    const base = 'Theodoros Diamantidis | Web & Software Engineer'
    return title ? `${title} | ${base}` : base
  },
  htmlAttrs: {
    lang: 'en',
  },
})

const route = useRoute()
const isShowBackdrop = computed(() => {
  return route.path === '/' || route.path.match(/^\/projects\/(?!tag\/)./)
})
</script>

<template>
  <div
    :class="`
      min-h-screen pb-[calc(3.25rem+2px)] md:pb-0
      ${isShowBackdrop ? 'bg-slate-50' : 'bg-slate-100'}
    `"
    >
    <div
      v-if="isShowBackdrop"
      class="absolute bg-[hsl(268,80%,95.5%)] w-full h-[70vh]">
    </div>
    <div class="relative z-10 max-w-5xl mx-auto min-h-[70vh]">
      <LayoutHeader />
      <main class="px-3 py-10 md:px-0 md:py-20">
        <NuxtPage />
      </main>
    </div>
    <LayoutFooter />
  </div>
</template>
