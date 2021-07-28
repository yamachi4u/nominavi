<template>
  <section>
    <v-row dense>
      <card
        v-for="(pub, i) in displayPubs"
        :key="i"
        :name="pub.fields.name"
        :id="pub.sys.id"
        :phone_number="pub.fields.phoneNumber"
        :link="pub.fields.link"
        :image="pub.fields.imgUrl"
      />
      <v-pagination
        class="mx-auto"
        v-model="page"
        :length="length"
        circle
        @input="pageChange"
      ></v-pagination>
    </v-row>
  </section>
</template>

<script>
import CONSTANTS from '~/lib/constants.js'
import { createClient } from '~/plugins/contentful.js'

export default {
  async asyncData({ params, route }) {
    const pubs = (await createClient()
      .getEntries({
        content_type: CONSTANTS.CTF_PUB_TYPE_ID,
        "fields.area.sys.contentType.sys.id": "area",
        "fields.area.fields.slug": params.slug
      })
    ).items.map((item)=> {
              if(item.fields.image){
                console.log(item.fields.image)
                item.fields.imgUrl = item.fields.image.fields.file.url
              }
              return item;
            });

    const length = Math.ceil(pubs.length / CONSTANTS.PUBS_PER_PAGE)

    const displayPubs = pubs.slice(0, CONSTANTS.PUBS_PER_PAGE)

    return {
      page: 1,
      pubs: pubs,
      length: length,
      displayPubs: displayPubs,
    }
  },

  methods: {
    pageChange: function(pageNumber) {
      this.displayPubs = this.pubs.slice(
        CONSTANTS.PUBS_PER_PAGE * (pageNumber - 1),
        CONSTANTS.PUBS_PER_PAGE * pageNumber
      )
    }
  },
}
</script>

