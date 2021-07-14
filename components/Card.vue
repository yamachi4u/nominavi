<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <nuxt-link
      :to="'pub/'+id"
    >
      <v-img
        v-if="image"
        height="250"
        :src="image.fields.file.url"
      ></v-img>

      <v-card-title>{{ name }}</v-card-title>

      <v-card-text>
        <v-row
          align="center"
          class="mx-0"
        >
          <v-rating
            :value="4.5"
            color="amber"
            dense
            half-increments
            readonly
            size="14"
          ></v-rating>

          <div class="grey--text ms-4">
            4.5 (413)
          </div>
        </v-row>

        <div class="my-4 text-subtitle-1">
          $ • Italian, Cafe
        </div>

        <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
      </v-card-text>
    </nuxt-link>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <a :href="link">
        <v-btn
          color="deep-purple lighten-2"
          text
        >
          食べログリンク
        </v-btn>
      </a>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    phone_number: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    tags: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
a {
  color: black;
  text-decoration: none;
}
</style>
