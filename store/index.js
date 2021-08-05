import CONSTANTS from '~/lib/constants.js'
import { createClient } from '~/plugins/contentful.js'

export const state = () => ({
  drawer: false,
  areas: [],
  pubs: [],
  genres: [],
  heroImage: '',
})

export const mutations = {
  setDrawer: (state, payload) => (state.drawer = payload),
  toggleDrawer: state => state.drawer = !state.drawer,
  setHeroImage: (state, heroImage) => state.heroImage = heroImage,
}

export const actions = {
  async nuxtServerInit ({ state }) {
    const areas = (await createClient().
      getEntries({
        content_type: CONSTANTS.CTF_AREA_TYPE_ID,
        order: "-sys.createdAt",
    }))
    .items

    const pubs = (await createClient().
      getEntries({
        content_type: CONSTANTS.CTF_PUB_TYPE_ID,
    }))
    .items

    const genres = (await createClient().
      getEntries({
        content_type: CONSTANTS.CTF_GENRE_TYPE_ID,
    }))
    .items

    state.areas = areas
    state.pubs = pubs
    state.genres = genres
  }
}

export const getters = {
  getHeroImage: (state) => state.heroImage,
}

