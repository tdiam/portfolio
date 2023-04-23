export const useMenu = () => {
  const route = useRoute()

  return computed(() => [
    {
      title: 'Home',
      path: '/',
      active: route.path === '/',
    },
    {
      title: 'About',
      path: '/about',
      active: route.path === '/about',
    },
    {
      title: 'Work',
      path: '/projects',
      active: route.path.startsWith('/projects'),
    },
    // {
    //   title: 'Side quests',
    //   path: '/side-quests',
    //   active: route.path.startsWith('/side-quests'),
    // },
    {
      title: 'Contact',
      path: '/contact',
      active: route.path === '/contact',
    },
  ])
}
