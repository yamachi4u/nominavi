<template>
  <v-app-bar
    app
    flat
    dark
  >
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click="toggleDrawer"
    />

    <NuxtLink
      class="hidden-md-and-up"
      to="/"
    >
      <img
        :src="require('@/assets/logo/nominavi.png')"
        alt=""
        height="28"
        align="center"
      >
    </NuxtLink>

    <v-container class="mx-auto py-0">
      <v-row align="center">
        <div
          class="hidden-sm-and-down"
        >
          <NuxtLink to="/">
            <img
              :src="require('@/assets/logo/nominavi.png')"
              alt=""
              height="28"
              align="center"
            >
          </NuxtLink>
          <v-btn
            text
            to="/#about"
          >
            当サイトについて
          </v-btn>
          <v-btn
            text
            to="/form"
          >
            情報提供
          </v-btn>
        </div>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
import {
  mapMutations,
} from 'vuex'

export default {
  methods: {
    ...mapMutations(['toggleDrawer']),
  },
}
</script>

<style scoped>
header {
  background-color: rgba(0, 0, 0, 0.7) !important;
}

.v-btn--active::before {
  opacity: 0 !important;
}

.v-btn--active:hover::before {
  opacity: 0.13 !important;
}
</style>
