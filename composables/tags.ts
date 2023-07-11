export const useTagsWithCount = async (): Promise<{[tag: string]: number}> => {
  const { data: projectTags } = await useAsyncData('project-tags', () => {
    return queryContent('projects').only('tags').find()
  })

  if (!projectTags.value) {
    return {}
  }

  const tags: {[tag: string]: number} = {}
  for (const p of projectTags.value || []) {
    for (const t of p.tags) {
      if (!tags.hasOwnProperty(t)) {
        tags[t] = 0
      }
      ++tags[t]
    }
  }

  return tags
}

export const useSortedTagsWithCount = async (): Promise<[string, number][]> => {
  const tags = await useTagsWithCount()

  // primary sort: count
  // secondary sort: name
  const countedTags = [...Object.entries(tags)]
  countedTags.sort(([aTag, aCount], [bTag, bCount]) => aTag.localeCompare(bTag))
  countedTags.sort(([aTag, aCount], [bTag, bCount]) => bCount - aCount)

  return countedTags
}
