<template>
  <section class="index">
    <Search />
    <section
      id="about"
      class="my-10"
    >
      <h2>
        当サイトについて
      </h2>
      <div v-html="toHtmlString(about)"></div>
    </section>
    <RandomPickup />
    <section>
      <div v-html="toHtmlString(seeking)"></div>
    </section>
  </section>
</template>

<script>
import CONSTANTS from '~/lib/constants.js'
import { createClient } from '~/plugins/contentful.js'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

export default {
  layout: 'hero-image',

  head() {
    return {
      title: '飲みナビ - お酒が飲めるお店が見つかる',
      titleTemplate: '',
    }
  },

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
