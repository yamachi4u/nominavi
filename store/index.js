export const state = () => ({
  items: [
    {
      text: 'Home',
      href: '/',
    },
    {
      text: 'About',
      href: '#about',
    },
  ],
})

export const mutations = {
  setDrawer: (state, payload) => (state.drawer = payload),
  toggleDrawer: state => (state.drawer = !state.drawer),
}

export const getters = {
  links: (state, getters) => {
    return state.items
  },
}

