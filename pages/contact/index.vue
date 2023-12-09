<script setup lang="ts">
useHead({
  title: 'Contact',
})
</script>

<template>
  <div :class="`
      ${''/* 100vh - footer height - nav height - main y padding - contact info height */}
      mt-[calc((100dvh-14.75rem-(3.25rem+2px)-5rem-13.5rem)/2)] md:mt-0
      leading-loose text-xl text-center
    `">
    <h2 class="text-2xl tracking-wider font-semibold text-slate-800">
      Theo Diamantidis
    </h2>
    <p class="mt-2">
      Greece
    </p>
    <ul class="mt-8 flex flex-col">
      <li>
        <a href="mailto:tdiam@posteo.net" class="group group-hover:text-black">
          <Icon name="uil:envelope" size="1.25em" class="-mt-0.5 mr-0.5 text-slate-700 group-hover:text-black" />
          e-mail
        </a>
      </li>
      <li>
        <a href="https://github.com/tdiam" class="group group-hover:text-black">
          <Icon name="uil:github" size="1.25em" class="-mt-0.5 mr-0.5 text-slate-700 group-hover:text-black" />
          GitHub
        </a>
      </li>
      <li>
        <a href="https://linkedin.com/in/tdiam" class="group group-hover:text-black">
          <Icon name="uil:linkedin" size="1.25em" class="-mt-0.5 mr-0.5 text-slate-700 group-hover:text-black" />
          LinkedIn
        </a>
      </li>
    </ul>
  </div>
</template>
