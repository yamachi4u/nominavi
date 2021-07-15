<template>
  <section class="index">
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
  asyncData() {
    return createClient()
      .getEntries({
        content_type: CONSTANTS.CTF_PUB_TYPE_ID
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

