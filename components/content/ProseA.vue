<script setup lang="ts">
defineProps({
  href: {
    type: String,
    default: '',
  },
  target: {
    type: String,
    default: undefined,
    required: false,
  },
})
</script>

<template>
  <NuxtLink
    :href="href"
    :target="target"
    class="border-b-2 border-transparent text-purple-900 font-semibold hover:border-purple-900">
    <slot />
  </NuxtLink>
</template>
