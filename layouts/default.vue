<template>
  <v-app>
    <core-app-bar />

    <core-drawer />

    <v-main
      v-bind:style="{ paddingTop: paddingTop }"
    >
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <core-footer />
  </v-app>
</template>

<script>
export default {
  computed: {
    paddingTop () {
      if (this.$vuetify.breakpoint.smAndDown) {
        return "56px"
      } else {
        return "88px"
      }
    },
  }
}
</script>

