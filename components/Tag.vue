<script setup lang="ts">
defineProps(['tag'])
</script>

<template>
  <a
    href=""
    :class="`
      inline-block px-2 bg-purple-900 border border-transparent
      text-sm font-bold text-white rounded-full
      hover:bg-transparent hover:text-purple-900 hover:border-purple-900
      `">
    {{ tag }}
  </a>
</template>
