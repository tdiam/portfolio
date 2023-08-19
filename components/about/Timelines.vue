<script setup lang="ts">
defineProps(['limit'])

const aboutTabs = {
  experience: {
    title: 'Experience',
    active: true,
  },
  education: {
    title: 'Education',
    active: false,
  },
  awards: {
    title: 'Awards',
    active: false,
  },
}

const aboutTab = ref('experience')
function setAboutTab(tab: string) {
  aboutTab.value = tab
}
</script>

<template>
  <div>
    <ul class="flex space-x-6 md:space-x-12 text-xl font-bold text-slate-600">
      <li
        v-for="(tab, key) in aboutTabs">
        <button
          :class="`
            transition hover:text-purple-900 hover:border-b-4 hover:border-purple-900
            ${aboutTab === key ? 'text-purple-900 border-b-4 border-purple-900' : ''}
            `"
          @click="() => setAboutTab(key)">
          {{ tab.title }}
        </button>
      </li>
    </ul>
    <div class="mt-4 md:mt-8">
      <div v-show="aboutTab === 'experience'">
        <AboutExperience :limit="limit" />
      </div>
      <div v-show="aboutTab === 'education'">
        <AboutEducation :limit="limit" />
      </div>
      <div v-show="aboutTab === 'awards'">
        <AboutAwards :limit="limit" />
      </div>
      <NuxtLink
        v-if="limit > 0"
        to="/about"
        :class="`
          block ml-10 text-lg font-semibold text-slate-700 hover:text-black
        `">
        READ MORE <span aria-hidden="true">&raquo;</span>
      </NuxtLink>
    </div>
  </div>
</template>
