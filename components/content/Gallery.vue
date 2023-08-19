<template>
  <div class="grid grid-flow-row items-center justify-center md:grid-flow-col md:space-x-12">
    <ContentSlot :use="$slots.default" unwrap="p" />
  </div>
</template>
