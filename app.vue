<script setup lang="ts">
import { computed } from 'vue'

const route = useRoute()
const isShowBackdrop = computed(() => {
  return route.path === '/' || route.path.match(/^\/projects\/./)
})
</script>

<template>
  <div :class="`min-h-screen ${isShowBackdrop ? 'bg-slate-50' : 'bg-slate-100'}`">
    <div
      v-if="isShowBackdrop"
      class="absolute bg-[hsl(268,80%,95.5%)] w-full h-[70vh]">
    </div>
    <div class="relative z-10 max-w-5xl mx-auto min-h-[70vh]">
      <LayoutHeader />
      <main class="py-20">
        <NuxtPage />
      </main>
    </div>
    <LayoutFooter />
  </div>
</template>
