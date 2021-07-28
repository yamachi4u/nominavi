<template>
  <v-app>
    <core-app-bar />

    <core-drawer />

    <v-main>
      <v-parallax
        height="300"
        :src="heroImage"
      ></v-parallax>
      <v-container
        class="my-n16"
      >
        <v-row>
          <v-col>
            <v-container>
              <Nuxt />
            </v-container>
          </v-col>
        </v-row>
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
    }
  }
}
</script>
