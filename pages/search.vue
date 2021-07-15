<template>
  <v-container fluid>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>
          検索結果{{ pubs.length }}件
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-pagination
      class="mx-auto"
      v-model="page"
      :length="length"
      circle
      @input="pageChange"
    ></v-pagination>

    <template v-if="loading">
      <div class="text-center">
        <v-progress-circular
          indeterminate
          color="grey"
        />
      </div>
    </template>
    <template v-else>
      <v-list class="py-0">
        <template v-if="pubs.length">
          <card
            v-for="(pub, i) in displayPubs"
            :key="i"
            :name="pub.fields.name"
            :id="pub.sys.id"
            :phone_number="pub.fields.phoneNumber"
            :link="pub.fields.link"
            :image="pub.fields.image"
          />
        </template>
        <template v-else>
          <v-list-item class="justify-center">
            <div class="text-center">
              <p>
                キーワードに一致する投稿がありません。
              </p>
              <v-icon>
                mdi-emoticon-cry-outline
              </v-icon>
            </div>
          </v-list-item>
        </template>
      </v-list>
    </template>
    <v-pagination
      class="mx-auto"
      v-model="page"
      :length="length"
      circle
      @input="pageChange"
    ></v-pagination>
  </v-container>
</template>

<script>
import CONSTANTS from '~/lib/constants.js'
import { createClient } from '~/plugins/contentful.js'

export default {
  data() {
    return {
      query: '',
      pubs: [],
      displayPubs: [],
      loading: false,
      page: 1,
      length: 0,
    }
  },
  computed: {
    isRequired() {
      return !!this.query && !/^\s+$/.test(this.query)
    }
  },
  watch: {
    '$route.query.q': {
      handler(newVal) {
        this.query = newVal
        this.getPubs()
      },
      immediate: true
    }
  },
  methods: {
    async getPubs() {
      if (this.isRequired) {
        this.loading = true
        await createClient().getEntries({
          content_type: CONSTANTS.CTF_PUB_TYPE_ID,
          query: this.query
        })
          .then(({ items }) => (this.pubs = items))
          .catch(console.error)
        this.loading = false

        this.length = Math.ceil(this.pubs.length / CONSTANTS.PUBS_PER_PAGE)

        this.displayPubs = this.pubs.slice(0, CONSTANTS.PUBS_PER_PAGE)
      }
    },
    pageChange: function(pageNumber) {
      this.displayPubs = this.pubs.slice(
        CONSTANTS.PUBS_PER_PAGE * (pageNumber - 1),
        CONSTANTS.PUBS_PER_PAGE * pageNumber
      )
    }
  },
}
</script>

