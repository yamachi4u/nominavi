<template>
  <section>
    <v-row dense>
      <card
        v-for="(pub, i) in pubs"
        :key="i"
        :name="pub.fields.name"
        :id="pub.sys.id"
        :phone_number="pub.fields.phoneNumber"
        :link="pub.fields.link"
        :image="pub.fields.image"
      />
    </v-row>
  </section>
</template>

<script>
import CONSTANTS from '~/lib/constants.js'
import { createClient } from '~/plugins/contentful.js'

export default {
  async asyncData({ params }) {
    return await createClient()
      .getEntries({
        content_type: CONSTANTS.CTF_PUB_TYPE_ID,
        "fields.area.sys.contentType.sys.id": "area",
        "fields.area.fields.slug": params.slug
      })
      .then(entries => {
        return {
          pubs: entries.items
        }
      })
      .catch(console.error)
  }
}
</script>

