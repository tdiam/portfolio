<script setup lang="ts">
useHead({
  title: 'About',
})

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
    <h1 class="text-center text-3xl font-bold tracking-wider">
      About me
    </h1>
    <h2 class="mt-16 text-center text-2xl tracking-wider font-medium text-slate-800">
      Hi, I'm Theodoros Diamantidis!
    </h2>
    <p class="mt-2 text-center text-xl font-light">Web & Software Engineer</p>
    <div class="mt-4 flex justify-center">
      <NuxtLink
        to="/"
        :class="`
          inline-block mx-auto rounded border border-slate-700 px-4 py-1 text-lg
          font-semibold text-slate-700 uppercase transition
          hover:bg-purple-900 hover:text-white
        `">
        View resume
      </NuxtLink>
    </div>
    <div class="mt-16 grid grid-cols-[minmax(0,2fr),minmax(0,1fr)] gap-8 justify-between">
      <div>
        <div class="text-xl leading-relaxed text-slate-800">
          <p>
            I&#39;ve been coding for more than ten years for fun, and lately in professional
            and volunteering environments.
          </p>
          <p class="mt-4">
            Currently in Mytilene, Greece.
          </p>
        </div>
        <ul class="mt-8 flex space-x-12 text-xl font-bold text-slate-600">
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
        <div class="mt-8">
          <div v-show="aboutTab === 'experience'">
            <AboutExperience />
          </div>
          <div v-show="aboutTab === 'education'">
            <AboutEducation />
          </div>
          <div v-show="aboutTab === 'awards'">
            <AboutAwards />
          </div>
        </div>
      </div>
      <div>
        <ul class="text-xl text-slate-800 align-middle space-y-2 pb-4 border-b-2 border-gray-300">
          <li>
            <a href="https://github.com/tdiam" class="group group-hover:text-black">
              <Icon name="uil:github" size="1.25em" class="-mt-0.5 mr-0.5 text-slate-700 group-hover:text-black" />
              github.com/tdiam
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/tdiam" class="group group-hover:text-black">
              <Icon name="uil:linkedin" size="1.25em" class="-mt-0.5 mr-0.5 text-slate-700 group-hover:text-black" />
              linkedin.com/in/tdiam
            </a>
          </li>
        </ul>
        <div class="mt-16">
          <Skills />
        </div>
      </div>
    </div>
  </div>
</template>
