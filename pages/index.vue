<template>
  <section class="index">
    <Search />
    <v-container>
      <h1>
        ABOUT
      </h1>
      <div v-html="toHtmlString(about)"></div>
    </v-container>
    <RandomPickup />
    <v-container>
      <div v-html="toHtmlString(seeking)"></div>
    </v-container>
  </section>
</template>

<script>
import CONSTANTS from '~/lib/constants.js'
import { createClient } from '~/plugins/contentful.js'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

export default {
  layout: 'hero-image',

  async asyncData({ store }) {
    return await createClient()
      .getEntries({
        content_type: CONSTANTS.CTF_TOP_PAGE_TYPE_ID,
      })
      .then(entries => {
        const topPage = entries.items[0]
        const heroImage = topPage.fields.heroImage.fields.file.url

        store.commit('setHeroImage', heroImage)

        return {
          heroImage: heroImage,
          about: topPage.fields.about,
          seeking: topPage.fields.seeking,
        }
      })
      .catch(console.error)
  },

  methods: {
    toHtmlString(obj) {
      return documentToHtmlString(obj)
    }
  },
}
</script>
