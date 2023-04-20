<script setup>
const menu = useMenu()
</script>

<template>
  <div class="flex py-16 bg-purple-900 text-white">
    <footer class="w-full max-w-5xl mx-auto">
      <h4 class="text-3xl font-medium tracking-wide">
        Get in touch
      </h4>
      <div class="block mt-3">
        <a
          href="mailto:diamaltho@gmail.com"
          :class="`
            text-6xl font-bold tracking-wide
            hover:border-b-4 hover:border-white
          `">
          diamaltho@gmail.com
        </a>
      </div>
      <div class="flex mt-12">
        <ul class="flex flex-col md:flex-row md:space-x-12 md:font-semibold">
          <li v-for="item in menu">
            <NuxtLink
              :to="item.path"
              :aria-current="item.active ? 'page' : false"
              class="opacity-75 hover:opacity-100">
              {{ item.title.toUpperCase() }}
            </NuxtLink>
          </li>
        </ul>
        <p class="ml-auto opacity-75 font-medium">
          &copy; {{ new Date().getFullYear() }} &middot; All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>
