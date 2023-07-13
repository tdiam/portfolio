<script setup lang="ts">
useHead({
  title: 'Contact',
})
</script>

<template>
  <div class="leading-loose text-xl text-center">
    <h2 class="text-2xl tracking-wider font-semibold text-slate-800">
      Theodoros Diamantidis
    </h2>
    <p class="mt-2">
      Mytilene, Greece
    </p>
    <ul class="mt-8 flex flex-col">
      <li>
        <a href="mailto:diamaltho@gmail.com" class="group group-hover:text-black">
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
