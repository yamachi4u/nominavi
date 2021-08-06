<template>
  <section>
    <v-card
      elevation="5"
      class="rounded-lg"
    >
      <v-form>
        <v-container>
          <v-row
            dense
            class="pt-3"
          >
            <v-col
              class="
                px-5 col-12
                pl-sm-5 pr-sm-1 col-sm-4"
            >
              <v-autocomplete
                label="エリア・駅"
                :items="areas"
                outlined
                hide-details
                v-model="area_station"
                prepend-inner-icon="mdi-map-marker-outline"
                clearable
                clear-icon="mdi-close-circle"
                item-text="name"
                item-value="name"
              >
                <template v-slot:item="data">
                  <v-list-item-content>
                    <v-list-item-title v-html="data.item.name"></v-list-item-title>
                    <v-list-item-subtitle v-html="data.item.group"></v-list-item-subtitle>
                  </v-list-item-content>
                </template>
              </v-autocomplete>
            </v-col>
            <v-col
              class="
                px-5 col-12
                px-sm-1 col-sm-4"
            >
              <v-autocomplete
                label="ジャンル"
                :items="genres"
                outlined
                hide-details
                v-model="genre"
                prepend-inner-icon="mdi-food-variant"
                clear-icon="mdi-close-circle"
                clearable
              />
            </v-col>
            <v-col
              class="
                px-5 col-12
                pl-sm-1 pr-sm-5 col-sm-4"
            >
              <v-text-field
                label="キーワード"
                outlined
                hide-details
                v-model="free_word"
                prepend-inner-icon="mdi-text"
                clear-icon="mdi-close-circle"
                clearable
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col
              align="center"
              class="mb-3"
            >
              <v-btn
                x-large
                color="primary"
                width="300px"
                class="font-weight-bold text-h6"
                @click="submit"
              >
                検索する
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </section>
</template>

<script>
export default {
  data() {
    const genres = this.$store.state.genres.map(x => x.fields.name)
    const areas = (function(state) {
      let candidates = state.areas.map(area => ({ name: area, group: 'エリア' }))

      candidates.push({ divider: true })

      candidates = candidates.concat(state.stations.map(station => ({ name: station })))

      return candidates
    })(this.$store.state)

    return {
      area_station: this.$route.query.area,
      genre: this.$route.query.genre,
      free_word: this.$route.query.free,
      genres: genres,
      areas: areas,
    }
  },
  methods: {
    submit() {
      this.$router.push({ path: '/search', query: { area: this.area_station, genre: this.genre, free: this.free_word } })
    },
  },
}
</script>
