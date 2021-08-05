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
              />
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
    const areas = this.$store.state.areas.map(x => x.fields.name)

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
  }
}
</script>
