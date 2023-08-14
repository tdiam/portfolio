<script setup>
const menu = useMenu()
</script>

<template>
  <nav
    :class="`
      fixed bottom-0 z-30 md:static min-w-full md:min-w-none bg-white md:bg-transparent
      shadow-[0_-2px_6px_2px_rgb(0_0_0_/_0.1)] md:shadow-none
      container flex flex-wrap items-center justify-between md:px-6 md:py-12
    `">
    <div class="items-center justify-between w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      <ul class="grid grid-flow-col font-semibold md:flex md:flex-row md:space-x-12 md:mt-0">
        <li class="hidden md:block">
          <NuxtLink to="/">
            <tippy theme="light-border" placement="bottom-start" :offset="[0, 20]">
              <AvatarImg sizes="md:64px" class="w-8 -mt-1 drop-shadow" />
              <template #content>
                <div class="p-2 text-lg">
                  <h4 class="font-semibold">Theodoros Diamantidis</h4>
                  <p>Web & Software Engineer</p>
                </div>
              </template>
            </tippy>
          </NuxtLink>
        </li>
        <li v-for="item in menu">
          <NuxtLink
            :to="item.path"
            :class="`
              block pt-2 pb-1 md:p-0 text-center text-xs md:text-base
              border-purple-900 hover:text-purple-900 hover:border-b-2 hover:md:border-b-4
              ${item.active ? 'text-purple-900 border-b-2 md:border-b-4' : 'text-slate-800'}
            `"
            :aria-current="item.active ? 'page' : false">
            <div class="block md:hidden">
              <Icon
                :name="item.iconName"
                class="mb-1 text-xl"
                />
            </div>
            {{ item.title.toUpperCase() }}
          </NuxtLink>
        </li>
      </ul>
    </div>
    <NuxtLink
      to="/projects"
      :class="`
        hidden md:block ml-auto order-2 rounded border border-slate-700 -mt-2 px-4 py-1
        font-semibold text-slate-700 uppercase transition
        hover:border-black hover:ring-1 hover:ring-black hover:ring-inset hover:text-black
      `">
      Browse projects
    </NuxtLink>
  </nav>
</template>
