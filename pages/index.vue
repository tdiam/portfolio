<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

const projectsQuery: QueryBuilderParams = {
  path: '/projects',
  limit: 3,
}
</script>

<template>
  <div>
    <div class="flex flex-col items-center justify-between md:flex-row md:space-x-12">
      <div class="text-center md:text-left">
        <h2 class="text-md md:text-2xl tracking-wider font-semibold text-slate-800">
          Hi, I'm Theodoros Diamantidis!
        </h2>
        <h1 :class="`
          md:-mt-2 text-2xl/relaxed md:text-5xl/relaxed font-extrabold text-transparent
          bg-clip-text bg-gradient-to-b from-purple-900 via-purple-900 to-black
        `">
          Web & Software Engineer
        </h1>
        <div class="md:hidden mt-4">
          <AvatarImg class="w-56 mx-auto drop-shadow-[0_12px_16px_hsla(244,100%,13%,.3)]" />
        </div>
        <p class="mt-12 md:mt-5 text-sm md:text-lg font-medium text-slate-700">
          I build elaborate applications for the modern world.
        </p>
        <div class="mt-4 md:mt-9 flex flex-row justify-center md:justify-start space-x-2 md:space-x-4">
          <NuxtLink
            to="/projects"
            :class="`
              rounded border border-transparent bg-purple-900 px-4 py-1
              text-sm md:text-lg font-semibold text-white uppercase transition
              hover:bg-transparent hover:border-black hover:text-black
            `">
            Browse projects
          </NuxtLink>
          <NuxtLink
            to="/"
            :class="`
              rounded border border-slate-700 px-4 py-1
              text-sm md:text-lg font-semibold text-slate-700 uppercase transition
              hover:bg-purple-900 hover:text-white
            `">
            View resume
          </NuxtLink>
        </div>
      </div>
      <div class="hidden md:block">
        <AvatarImg class="drop-shadow-[0_24px_32px_hsla(244,100%,13%,.3)]" />
      </div>
    </div>
    <ContentList :query="projectsQuery" v-slot="{ list }">
      <div class="grid md:grid-cols-3 gap-4 mt-20 items-start justify-between">
        <ProjectItem
          v-for="project in list"
          :key="project._path"
          :project="project" />
      </div>
      <div class="flex justify-center md:justify-end mt-4">
        <NuxtLink
          to="/projects"
          :class="`
            py-2 text-lg font-semibold text-slate-700 hover:text-black
          `">
          VIEW ALL PROJECTS <span aria-hidden="true">&raquo;</span>
        </NuxtLink>
      </div>
    </ContentList>
    <h3 class="mt-24 mb-6 text-2xl tracking-wider font-bold text-slate-800">
      About me
    </h3>
    <div class="md:mt-16 grid md:grid-cols-[minmax(0,2fr),minmax(0,1fr)] gap-x-8 gap-y-12 md:gap-y-16 justify-between items-start">
      <AboutIntro />
      <AboutProfiles />
      <AboutTimelines :limit="3" />
      <Skills />
    </div>
  </div>
</template>
