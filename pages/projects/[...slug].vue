<template>
  <ContentDoc v-slot="{ doc }">
    <h1 class="mt-16 md:mt-0 text-3xl md:text-5xl text-center font-extrabold text-slate-900">
      {{ doc.title }}
    </h1>
    <p class="flex justify-center divide-x divide-slate-500 text-sm md:text-lg leading-none font-medium text-slate-600 mt-2 md:mt-3">
      <span class="px-2">{{ doc.description }}</span>
      <span class="px-2" v-if="doc.dateStart || doc.dateEnd">
        {{ doc.dateStart }}&ndash;{{ doc.dateEnd }}
      </span>
    </p>
    <ul class="flex flex-row justify-center flex-wrap mt-8 space-x-1 md:space-x-2">
      <li v-for="tag in doc.tags">
        <Tag :tag="tag" />
      </li>
    </ul>
    <div class="pb-8 md:pb-12">
      <nuxt-img
        v-if="doc.image"
        :src="doc.image"
        loading="lazy"
        sizes="md:100vw lg:1600px"
        width="1600"
        height="900"
        :alt="`Screenshot or cover image from ${doc.title}`"
        :class="`
          project-image w-full md:w-[80%]
          mt-20 md:mt-12 mx-auto shadow-xl shadow-slate-800/40 rounded-xl
        `" />
    </div>
    <template v-if="doc.links?.length">
      <ul class="flex flex-col md:flex-row flex-wrap items-center justify-center md:text-lg">
        <li v-for="(link, idx) in doc.links" class="mr-2 mb-1">
          <span v-if="idx > 0" class="hidden md:inline mr-2" aria-hidden="true">&bull;</span>
          <template v-if="link.upon_request">
            <ProseA href="mailto:diamaltho@gmail.com">
              {{ link.title }}
              (available upon request)
            </ProseA>
          </template>
          <template v-else>
            <ProseA :href="link.url">{{ link.title }}</ProseA>
          </template>
        </li>
      </ul>
    </template>
    <h3 class="mt-12 mb-6 text-xl md:text-2xl font-bold text-slate-900" id="project-description">
      <a href="#project-description">Project description</a>
    </h3>
    <ContentRenderer
      :value="doc"
      :class="`
        text-justify prose-slate prose-sm md:prose-lg
        prose-strong:font-semibold
        prose-headings:font-bold prose-headings:text-slate-900
        prose-headings:text-xl md:prose-headings:text-2xl
        prose-headings:mb-6
        prose-ul:list-disc
      `" />
    <div class="mt-12">
      <NuxtLink
        to="/projects"
        :class="`
          block text-center text-base/loose md:text-lg/loose font-semibold
          text-slate-700 hover:text-black
        `">
        <span aria-hidden="true">&laquo;</span> BACK TO PROJECTS
      </NuxtLink>
    </div>
  </ContentDoc>
</template>

<style scoped>
.project-image {
  transform: perspective(1200px) rotateX(10deg);
}
</style>
