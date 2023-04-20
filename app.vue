<template>
  <div class="bg-slate-50 min-h-screen">
    <div class="absolute bg-[hsl(268,80%,95.5%)] w-full h-[70vh]"></div>
    <div class="relative z-10 max-w-5xl mx-auto min-h-[70vh]">
      <LayoutHeader />
      <main>
        <NuxtPage />
      </main>
    </div>
    <LayoutFooter />
  </div>
</template>
