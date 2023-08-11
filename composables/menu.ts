export const useMenu = () => {
  const route = useRoute()

  return computed(() => [
    {
      title: 'Home',
      path: '/',
      active: route.path === '/',
      iconName: 'carbon:grid',
    },
    {
      title: 'About',
      path: '/about',
      active: route.path === '/about',
      iconName: 'solar:info-circle-outline',
    },
    {
      title: 'Work',
      path: '/projects',
      active: route.path.startsWith('/projects'),
      iconName: 'ph:briefcase-simple',
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
      iconName: 'carbon:email',
    },
  ])
}
