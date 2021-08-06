import CONSTANTS from '~/lib/constants.js'
import { createClient } from '~/plugins/contentful.js'
import areaTree from '~/assets/area-tree.json'

export const state = () => ({
  drawer: false,
  areas: [],
  stations: [],
  pubs: [],
  genres: [],
  areaStationMapping: {},
  subArea: {},
  heroImage: '',
})

export const mutations = {
  setDrawer: (state, payload) => (state.drawer = payload),
  closeDrawer: state => state.drawer = false,
  openDrawer: state => state.drawer = true,
  setHeroImage: (state, heroImage) => state.heroImage = heroImage,
}

export const actions = {
  async nuxtServerInit ({ state }) {
    const pubs = (await createClient().
      getEntries({
        content_type: CONSTANTS.CTF_PUB_TYPE_ID,
    }))
    .items
    state.pubs = pubs

    const genres = (await createClient().
      getEntries({
        content_type: CONSTANTS.CTF_GENRE_TYPE_ID,
    }))
    .items
    state.genres = genres

    state.areaStationMapping = {}
    for (let area of Object.keys(areaTree)) {
      state.areas.push(area)

      let stations = []
      for (let subArea of Object.keys(areaTree[area])) {
        stations = stations.concat(areaTree[area][subArea])
      }
      state.stations = state.stations.concat(stations)

      state.areaStationMapping[area] = stations
    }
  }
}

export const getters = {
  getHeroImage: (state) => state.heroImage,
}

