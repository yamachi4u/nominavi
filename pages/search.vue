<template>
  <v-container fluid>
    <Search />
    <div id="result">
      <v-container
        class="mt-8"
      >
        <p
          class="text-h6"
          v-show="pubs.length > 0"
        >
          <span class="font-weight-bold">{{ start + 1 }}～{{ end }}</span> 件を表示 ／ 全 <span class="font-weight-bold">{{ pubs.length }}</span> 件
        </p>
      </v-container>

      <template v-if="loading">
        <div class="text-center">
          <v-progress-circular
            indeterminate
            color="grey"
          />
        </div>
      </template>
      <template v-else>
        <v-list
          id="result"
          class="py-0"
        >
          <template v-if="pubs.length">
            <card
              v-for="(pub, i) in displayPubs"
              :key="i"
              :name="pub.fields.name"
              :id="pub.sys.id"
              :phone_number="pub.fields.phoneNumber"
              :link="pub.fields.link"
              :image="pub.fields.imgUrl"
            />
          </template>
          <template v-else>
            <v-list-item class="justify-center">
              <div class="text-center">
                <p class="text-h6">
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
        v-show="pubs.length > 0"
        v-model="page"
        :length="length"
        circle
        @input="pageChange"
      ></v-pagination>
    </div>
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
      start: 0,
      end: 0,
    }
  },

  computed: {
    isRequired() {
      return !!this.query &&
        (!/^\s+$/.test(this.query.area) || !/^\s+$/.test(this.query.genre) || !/^\s+$/.test(this.query.free))
    }
  },

  watch: {
    '$route.query': {
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
          "fields.tags.sys.contentType.sys.id": "tag",
          "fields.tags.fields.name": this.query.genre,
          query: this.query.free,
        })
          .then(({ items }) => {
            this.pubs = items.filter(item => {
              const nearestStation = item.fields.nearestStation
                || (item.fields.access && item.fields.access.match(/^.*駅/) && item.fields.access.match(/^.*駅/)[0])
              return this.areaMatch(this.query.area, nearestStation)
            })
          })
          .catch(console.error)
        this.loading = false

        this.length = Math.ceil(this.pubs.length / CONSTANTS.PUBS_PER_PAGE)

        this.displayPubs = this.pubs.slice(0, CONSTANTS.PUBS_PER_PAGE)

        this.start = Math.min(1, this.pubs.length) - 1
        this.end = Math.min(CONSTANTS.PUBS_PER_PAGE, this.pubs.length)
      }
    },

    /*
     * エリア・駅で選択されたものと店舗データの最寄り駅が一致するかどうか
     * エリア・駅が空だったらtrueを返す
     */
    areaMatch: function(area, nearestStation) {
      return !area
        || area === nearestStation
        || area === this.getAreaOf(nearestStation)
    },

    getAreaOf: function(station) {
      const areas = Object.keys(this.$store.state.areaStationMapping)
      return areas.filter(key => this.$store.state.areaStationMapping[key].includes(station))[0]
    },

    pageChange: function(pageNumber) {
      this.start = CONSTANTS.PUBS_PER_PAGE * (pageNumber - 1)
      this.end = Math.min(CONSTANTS.PUBS_PER_PAGE * pageNumber, this.pubs.length)
      this.displayPubs = this.pubs.slice(this.start, this.end)
      this.$vuetify.goTo("#result")
    },
  },
}
</script>

