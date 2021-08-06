<template>
  <section>
    <div v-html="toHtmlString(richText)"></div>
  </section>
</template>

<script>
import CONSTANTS from '~/lib/constants.js'
import { createClient } from '~/plugins/contentful.js'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

export default {
  async asyncData({ params }) {
    return await createClient()
      .getEntries({
        content_type: CONSTANTS.CTF_SIMPLE_PAGE_TYPE_ID,
        "fields.slug": params.slug,
      })
      .then(entries => {
        return {
          richText: entries.items[0].fields.text
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
