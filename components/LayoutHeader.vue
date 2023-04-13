<script setup>
const menu = [
  {
    title: 'Home',
    active: true,
  },
  {
    title: 'About',
  },
  {
    title: 'Work',
  },
  {
    title: 'Side quests',
  },
  {
    title: 'Contact',
  },
]
</script>

<template>
  <nav class="container flex flex-wrap items-center justify-between md:py-12">
    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      <ul class="flex flex-col mt-4 md:flex-row md:space-x-12 md:mt-0 md:font-semibold">
        <li v-for="item in menu">
          <NuxtLink
            to="/"
            :class="`
              block py-2 pl-3 pr-4 md:p-0 border-purple-900
              hover:text-purple-900 hover:border-b-4
              ${item.active ? 'text-purple-900 border-b-4' : 'text-slate-800'}
            `"
            :aria-current="item.active ? 'page' : false">
            {{ item.title.toUpperCase() }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
