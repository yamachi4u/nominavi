<template>
  <section class="index">
    <card
      v-for="(pub, i) in pubs"
      :key="i"
      :name="pub.fields.name"
      :id="pub.sys.id"
      :phone_number="pub.fields.phoneNumber"
      :link="pub.fields.link"
    />
  </section>
</template>

<script>
import Card from '~/components/Card.vue'
import client from '~/plugins/contentful.js'
import CONSTANTS from '~/lib/constants.js'

export default {
  transition: 'slide-left',
  components: {
    Card
  },
  asyncData() {
    return client
      .getEntries(CONSTANTS.CTF_PUB_TYPE_ID)
      .then(entries => {
        return {
          pubs: entries.items
        }
      })
      .catch(console.error)
  }
}
</script>

