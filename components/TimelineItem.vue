<script setup lang="ts">
defineProps(['data'])
</script>

<template>
  <div class="relative -ml-[.6rem] py-2">
    <Icon name="ic:baseline-circle" class="absolute my-2 text-slate-700" />
    <div class="pl-8">
      <header class="flex items-center space-x-8">
        <span class="text-xl font-bold text-slate-800">
          <template v-if="data.dateStart || data.dateEnd">
            {{ data.dateStart }}&ndash;{{ data.dateEnd }}
          </template>
          <template v-else-if="data.date">{{ data.date }}</template>
        </span>
        <div v-if="data.place">
          <Icon name="material-symbols:location-on" class="rotate-12 text-slate-500" />
          <span class="ml-1 text-sm font-medium italic text-slate-600">{{ data.place }}</span>
        </div>
        <div v-if="data.type">
          <Icon name="ion:ios-briefcase" class="rotate-12 text-slate-500" />
          <span class="ml-1 text-sm font-medium italic text-slate-600">{{ data.type }}</span>
        </div>
      </header>
      <h4 class="mt-1 text-2xl font-medium leading-relaxed">
        {{ data.title }}
      </h4>
      <hr class="mt-0.5 w-20 border-b border-slate-300" />
      <ContentRenderer
        v-if="data?.body?.children?.length"
        :value="data"
        class="mt-3 text-sm font-medium text-slate-800" />
      <slot name="actions"></slot>
    </div>
  </div>
</template>
