<template>
  <v-container
    id="about"
    tag="section"
  >
    <v-banner
      color="orange"
    >
      新着店舗
    </v-banner>
    <v-list>
      <v-list-item
        v-for="(pub, i) in pubs"
        :key="i"
      >
        <v-list-item-content>
          <v-list-item-title v-text="pub.fields.name">xxx</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <base-subheading>About Us</base-subheading>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut tortor tellus. Donec maximus curs us pulvinar.
      Proin vehicula eros mauris, sit amet rutrum libero vestibulum ac. Morbi ullamcorper eu lacus vulputate consect.
      Etur vivamus sagittis accumsan quam eu malesuada. Proin et ante vel libero ultrices cursus. Donec felis leo, cu
      rsus eget hendrerit at, congue nec enim.
    </p>
  </v-container>
</template>

<script>
import CONSTANTS from '~/lib/constants.js'
import { createClient } from '~/plugins/contentful.js'

export default {
  transition: 'slide-left',
  asyncData() {
    return createClient()
      .getEntries({
        content_type: CONSTANTS.CTF_PUB_TYPE_ID,
        order: "-sys.createdAt",
        limit: "1"
      })
      .then(entries => {
        return {
          pubs: entries.items
        }
      })
      .catch(console.error)
  },
  data() {
    return {
      pubs: [
        {
          fields: {
            name: "なまえ1"
          }
        },
        {
          fields: {
            name: "なまえ2"
          }
        }
      ]
    }
  }
}
</script>

