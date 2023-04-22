<script setup lang="ts">
const { data } = await useAsyncData('skills', async () => {
  return queryContent('/tags/skills/').find()
})

const skillsByLevel = computed(() => {
  const res = {
    'Senior': [],
    'Advanced': [],
    'Familiar': [],
  }

  for (const tag of unref(data) || []) {
    if (res.hasOwnProperty(tag.level)) {
      res[tag.level].push(tag)
    }
  }

  return res
})
</script>

<template>
  <h3 class="text-xl font-bold text-slate-800 mb-4">
    Skills
  </h3>
  <div
    v-for="(tags, level) in skillsByLevel"
    class="py-4 border-b-2 border-slate-300">
    <h4 class="font-bold text-slate-800">
      {{ level }}
    </h4>
    <ul class="mt-1 flex flex-row flex-wrap">
      <li v-for="tag in tags" class="mr-2">
        <Tag :tag="tag._path.split('/').pop()" />
      </li>
    </ul>
  </div>
</template>
