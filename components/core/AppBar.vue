<template>
  <v-app-bar
    app
    flat
  >
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click="toggleDrawer"
    />

    <v-container class="mx-auto py-0">
      <v-row align="center">
        <div
          class="hidden-sm-and-down"
        >
          <v-btn
            text
            to="/"
          >
            ホーム
          </v-btn>
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
      onClick (e, item) {
        e.stopPropagation()

        if (item.to || !item.href) return

        this.$vuetify.goTo(item.href.endsWith('!') ? 0 : item.href)
      },
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
