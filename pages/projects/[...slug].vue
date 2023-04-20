<template>
  <ContentDoc v-slot="{ doc }">
    <h1 class="text-5xl text-center font-extrabold text-slate-900">
      {{ doc.title }}
    </h1>
    <p class="flex justify-center divide-x divide-slate-500 text-lg leading-none font-medium text-slate-600 mt-3">
      <span class="px-2">{{ doc.description }}</span>
      <span class="px-2" v-if="doc.dateStart || doc.dateEnd">
        {{ doc.dateStart }}&ndash;{{ doc.dateEnd }}
      </span>
    </p>
    <div class="pb-12">
      <img v-if="doc.image" :src="doc.image" class="w-[80%] mt-12 mx-auto project-image shadow-xl shadow-slate-800/40 rounded-xl" />
    </div>
    <h3 class="mt-12 mb-6 text-2xl font-bold text-slate-900">
      Project description
    </h3>
    <ContentRenderer :value="doc" class="prose-slate prose-lg" />
  </ContentDoc>
</template>

<style scoped>
.project-image {
  transform: perspective(1200px) rotateX(10deg);
}
</style>
