import CONSTANTS from '~/lib/constants.js'
import { createClient } from '~/plugins/contentful.js'

export const state = () => ({
  drawer: false,
  areas: [],
  news: [],
})

export const mutations = {
  setDrawer: (state, payload) => (state.drawer = payload),
  toggleDrawer: state => state.drawer = !state.drawer,
}

export const actions = {
  async nuxtServerInit ({ state }) {
    const areas = (await createClient().
      getEntries({
      content_type: CONSTANTS.CTF_AREA_TYPE_ID,
      order: "-sys.createdAt",
    }))
      .items

    const news = (await createClient().
      getEntries({
      content_type: CONSTANTS.CTF_PUB_TYPE_ID,
      order: "-sys.createdAt",
      limit: 5,
    }))
      .items

    state.areas = areas
    state.news = news
  }
}

