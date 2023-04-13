<template>
  <p class="flex justify-center divide-x divide-slate-500 text-lg leading-none font-medium text-slate-600 mt-3">
    <span class="px-2">
      <ContentSlot :use="$slots.default" unwrap="p" />
    </span>
    <span class="px-2">
      <ContentSlot :use="$slots['date-start']" unwrap="p" />&ndash;<ContentSlot :use="$slots['date-end']" unwrap="p" />
    </span>
  </p>
</template>
