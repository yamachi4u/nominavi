<template>
  <section>
    <v-card
      elevation="10"
      class="rounded-lg"
    >
      <v-form>
        <v-row
          dense
          class="pt-5"
        >
          <v-col
            class="
              px-5 col-12
              pl-sm-8 pr-sm-1 col-sm-4"
          >
            <v-text-field
              label="エリア・駅"
              outlined
              hide-details
              v-model="area_station"
              prepend-inner-icon="mdi-map-marker-outline"
              clearable
              clear-icon="mdi-close-circle"
            ></v-text-field>
          </v-col>
          <v-col
            class="
              px-5 col-12
              px-sm-1 col-sm-4"
          >
            <v-text-field
              label="ジャンル"
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
              pl-sm-1 pr-sm-8 col-sm-4"
          >
            <v-text-field
              label="店名"
              outlined
              hide-details
              v-model="free_word"
              prepend-inner-icon="mdi-store"
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
      </v-form>
    </v-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      area_station: '',
      genre: '',
      free_word: '',
    }
  },
  methods: {
    submit() {
      const query = [this.area_station, this.genre, this.free_word].join(' ')
      this.$router.push({ path: '/search', query: { q: query } })
    },
  }
}
</script>
