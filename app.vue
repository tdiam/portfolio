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
const isHome = computed(() => {
  return route.path === '/'
})
const isProjectPage = computed(() => {
  return route.path.match(/^\/projects\/(?!tag\/)./)
})
</script>

<template>
  <div
    :class="`
      min-h-screen pb-[calc(3.25rem+2px)] md:pb-0
      ${(isHome || isProjectPage) ? 'bg-slate-50' : 'bg-slate-100'}
    `"
    >
    <div
      v-if="isHome || isProjectPage"
      :class="`absolute bg-[hsl(268,80%,95.5%)] w-full ${isHome ? 'h-[32rem]' : 'h-[28rem]'} md:h-[70vh]`">
    </div>
    <div
      :class="`
        relative z-10 max-w-5xl mx-auto
        ${''/* 100vh - footer height - nav height */}
        min-h-[calc(100vh-14.75rem-(3.25rem+2px))] md:min-h-[70vh]
      `">
      <LayoutHeader />
      <main class="px-3 py-10 md:px-0 md:py-20">
        <NuxtPage />
      </main>
    </div>
    <LayoutFooter />
  </div>
</template>
