<script setup lang="ts">
import AvatarImg from '~/assets/img/avatar.svg?component'
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

const projectsQuery: QueryBuilderParams = {
  path: '/projects',
  limit: 3,
}
</script>

<template>
  <div class="flex flex-col mt-20 items-center justify-between md:flex-row md:space-x-12">
    <div>
      <h2 class="text-2xl tracking-wider font-semibold text-slate-800">
        Hi, I'm Theodoros Diamantidis!
      </h2>
      <h1 :class="`
        -mt-2 text-5xl font-extrabold text-transparent leading-relaxed
        bg-clip-text bg-gradient-to-b from-purple-900 via-purple-900 to-black
      `">
        Web & Software Engineer
      </h1>
      <p class="mt-5 text-lg font-medium text-slate-700">
        I build elaborate applications for the modern world.
      </p>
      <div class="mt-9 flex flex-row space-x-4">
        <NuxtLink
          to="/"
          :class="`
            rounded border border-transparent bg-purple-900 px-4 py-1 text-lg
            font-semibold text-white uppercase transition
            hover:bg-transparent hover:border-black hover:text-black
          `">
          Browse projects
        </NuxtLink>
        <NuxtLink
          to="/"
          :class="`
            rounded border border-slate-700 px-4 py-1 text-lg
            font-semibold text-slate-700 uppercase transition
            hover:bg-purple-900 hover:text-white
          `">
          View resume
        </NuxtLink>
      </div>
    </div>
    <div>
      <AvatarImg
        class="drop-shadow-[0_24px_32px_hsla(244,100%,13%,.3)]" />
    </div>
  </div>
  <ContentList :query="projectsQuery" v-slot="{ list }">
    <div class="grid grid-cols-3 gap-4 mt-20 items-start justify-between">
      <ProjectItem
        v-for="project in list"
        :key="project._path"
        :project="project" />
    </div>
    <div class="flex justify-end mt-4">
      <NuxtLink
        to="/projects"
        :class="`
          py-2 text-lg font-semibold text-slate-700 hover:text-black
        `">
        VIEW ALL PROJECTS &raquo;
      </NuxtLink>
    </div>
  </ContentList>
</template>
