<script setup lang="ts">
defineProps(['type'])
</script>

<template>
  <Tag class="m-0" :type="type || 'outline'" />
</template>
