<script setup lang="ts">
const { data: skills } = await useAsyncData('skills', async () => {
  return queryContent('/tags/').find()
})

const tagCounts = await useTagsWithCount()

const skillsByCategory = computed(() => {
  const res: {[category: string]: any[]} = {
    'Coding': [],
    'Libraries & Frameworks': [],
    'Environments': [],
  }

  for (const tag of unref(skills) || []) {
    if (res.hasOwnProperty(tag.skill)) {
      tag.name = tag._path?.split('/').pop()
      res[tag.skill].push(tag)
    }
  }

  for (const category of Object.keys(res)) {
    res[category].sort((a, b) => tagCounts[b.name] - tagCounts[a.name])
  }

  return res
})
</script>

<template>
  <div>
    <h3 class="text-xl font-bold text-slate-800 mb-4">
      Skills
    </h3>
    <div
      v-for="(tags, category) in skillsByCategory"
      class="py-4 border-b-2 border-slate-300">
      <h4 class="font-bold text-slate-800">
        {{ category }}
      </h4>
      <ul class="mt-2 flex flex-row flex-wrap">
        <li v-for="tag in tags" class="mr-1 md:mr-2 mb-2">
          <Tag :tag="tag.name" />
        </li>
      </ul>
    </div>
    <div
      class="py-4 border-b-2 border-slate-300">
      <h4 class="font-bold text-slate-800">
        Languages
      </h4>
      <ul class="mt-2 flex flex-col">
        <li class="mb-2">
          English (Proficient), Greek (Native)
        </li>
      </ul>
    </div>
  </div>
</template>
