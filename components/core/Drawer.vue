<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    temporary
  >
    <v-list>

      <v-list-item
        to="/"
      >
        <v-list-item-title>
          ホーム
        </v-list-item-title>
      </v-list-item>

      <v-list-item
        to="/about"
      >
        <v-list-item-title>
          当サイトについて
        </v-list-item-title>
      </v-list-item>

      <v-list-item
        to="/form"
      >
        <v-list-item-title>
          情報提供のお願い
        </v-list-item-title>
      </v-list-item>

    </v-list>
  </v-navigation-drawer>
</template>

<script>
import {
  mapMutations,
} from 'vuex'

export default {
  computed: {
    drawer: {
      get () {
        return this.$store.state.drawer
      },
      set (val) {
        this.setDrawer(val)
      },
    },
  },

  methods: {
    ...mapMutations(['setDrawer']),
  },
}
</script>

<style scoped>
.v-list-group--no-action > .v-list-group__items > .v-list-item {
  padding-left: 36px;
}
</style>
