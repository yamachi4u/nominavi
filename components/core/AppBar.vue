<template>
  <v-app-bar
    app
    flat
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
          <v-menu
            offset-y
            open-on-hover
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                text
                v-bind="attrs"
                v-on="on"
              >
                エリア
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(area, index) in $store.state.areas"
                :key="index"
                :to="'/area/'+area.fields.slug"
              >
                <v-list-item-title>{{ area.fields.name }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-btn
            text
            to="/form"
          >
            情報提供
          </v-btn>
        </div>

        <v-spacer />

        <search-form />
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
.v-btn--active::before {
  opacity: 0 !important;
}

.v-btn--active:hover::before {
  opacity: 0.13 !important;
}
</style>
