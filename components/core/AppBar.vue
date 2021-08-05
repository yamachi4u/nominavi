<template>
  <section>
    <v-app-bar
      app
      flat
      dark
      class="hidden-md-and-up"
    >
      <v-app-bar-nav-icon
        @click="toggleDrawer"
      />
      <NuxtLink
        to="/"
      >
        <img
          :src="require('@/assets/logo/nominavi.png')"
          alt=""
          height="36"
          align="center"
          class="mr-4"
        >
      </NuxtLink>
      <span
        class="subtitle body-2"
      >
        お酒が飲めるお店が見つかる
      </span>
    </v-app-bar>
    <v-app-bar
      app
      flat
      dark
      height="88"
      class="hidden-sm-and-down mx-auto py-0"
    >
      <v-container>
        <v-row>
          <span class="subtitle body-2">お酒が飲めるお店が見つかる</span>
        </v-row>
        <v-row align="center">
          <NuxtLink to="/">
            <img
              :src="require('@/assets/logo/nominavi.png')"
              alt=""
              height="48"
              align="center"
              class="mx-3"
            >
          </NuxtLink>
          <v-btn
            text
            to="/about"
          >
            当サイトについて
          </v-btn>
          <v-btn
            text
            to="/form"
          >
            情報提供のお願い
          </v-btn>
        </v-row>
      </v-container>
    </v-app-bar>
  </section>
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

.subtitle {
  color: #DCDCDC;
}

.v-btn--active::before {
  opacity: 0 !important;
}

.v-btn--active:hover::before {
  opacity: 0.13 !important;
}
</style>
