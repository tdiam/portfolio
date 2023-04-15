<template>
  <div>
    <ContentDoc v-slot="{ doc }">
      <h1 class="text-5xl text-center font-extrabold text-slate-900 mt-12">
        {{ doc.title }}
      </h1>
      <p class="flex justify-center divide-x divide-slate-500 text-lg leading-none font-medium text-slate-600 mt-3">
        <span class="px-2">{{ doc.description }}</span>
        <span class="px-2" v-if="doc.dateStart || doc.dateEnd">
          {{ doc.dateStart }}&ndash;{{ doc.dateEnd }}
        </span>
      </p>
    </ContentDoc>
  </div>
</template>
