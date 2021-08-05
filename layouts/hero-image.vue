<template>
  <v-app>
    <core-app-bar />

    <core-drawer />

    <v-main
      class="py-0"
    >
      <v-img
        height="360"
        :src="heroImage"
      ></v-img>
      <v-container
        v-bind:style="{ marginTop: margin, marginBottom: margin }"
      >
        <Nuxt />
      </v-container>
    </v-main>

    <core-footer />
  </v-app>
</template>

<script>
export default {
  computed: {
    heroImage() {
      return this.$store.getters['getHeroImage']
    },
    margin () {
      if (this.$vuetify.breakpoint.smAndDown) {
        return "-128px"
      } else {
        return "-64px"
      }
    },
  }
}
</script>

