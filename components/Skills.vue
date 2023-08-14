<script setup lang="ts">
const { data: skills } = await useAsyncData('skills', async () => {
  return queryContent('/tags/skills/').find()
})

const tagCounts = await useTagsWithCount()

const skillsByLevel = computed(() => {
  const res: {[level: string]: any[]} = {
    'Senior': [],
    'Advanced': [],
    'Familiar': [],
  }

  for (const tag of unref(skills) || []) {
    if (res.hasOwnProperty(tag.level)) {
      tag.name = tag._path?.split('/').pop()
      res[tag.level].push(tag)
    }
  }

  for (const level of Object.keys(res)) {
    res[level].sort((a, b) => tagCounts[b.name] - tagCounts[a.name])
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
      v-for="(tags, level) in skillsByLevel"
      class="py-4 border-b-2 border-slate-300">
      <h4 class="font-bold text-slate-800">
        {{ level }}
      </h4>
      <ul class="mt-1 flex flex-row flex-wrap">
        <li v-for="tag in tags" class="mr-1 md:mr-2 mb-2">
          <Tag :tag="tag.name" />
        </li>
      </ul>
    </div>
  </div>
</template>
