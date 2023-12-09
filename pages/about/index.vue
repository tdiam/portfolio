<script setup lang="ts">
useHead({
  title: 'About',
})
</script>

<template>
  <div>
    <h1 class="text-center text-3xl font-bold tracking-wider">
      About me
    </h1>
    <h2 class="mt-16 text-center text-xl lg:text-2xl tracking-wider font-medium text-slate-800">
      Hi, I'm Theo Diamantidis!
    </h2>
    <p class="mt-2 text-center text-lg md:text-xl font-light">Web & Software Engineer</p>
    <div class="mt-4 flex justify-center">
      <a
        href="/resume/Theodoros%20Diamantidis%20-%20Resume.pdf"
        :class="`
          inline-block mx-auto rounded border border-slate-700 px-4 py-1 md:text-lg
          font-semibold text-slate-700 uppercase transition
          hover:bg-purple-900 hover:text-white
        `">
        View resume
      </a>
    </div>
    <div class="mt-12 md:mt-16 grid md:grid-cols-[minmax(0,2fr),minmax(0,1fr)] gap-x-8 gap-y-16 justify-between items-start">
      <AboutIntro class="container mx-auto text-center md:mx-0 md:text-left"/>
      <AboutProfiles />
      <AboutTimelines />
      <Skills />
    </div>
  </div>
</template>
