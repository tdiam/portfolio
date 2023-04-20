<script setup>
const menu = useMenu()
</script>

<template>
  <nav class="container flex flex-wrap items-center justify-between md:py-12">
    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      <ul class="flex flex-col mt-4 md:flex-row md:space-x-12 md:mt-0 md:font-semibold">
        <li v-for="item in menu">
          <NuxtLink
            :to="item.path"
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
    <NuxtLink
      to="/projects"
      :class="`
        ml-auto md:order-2 rounded border border-slate-700 -mt-2 px-4 py-1
        font-semibold text-slate-700 uppercase transition
        hover:border-black hover:ring-1 hover:ring-black hover:ring-inset hover:text-black
      `">
      Browse projects
    </NuxtLink>
  </nav>
</template>
