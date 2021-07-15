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

      <v-list-group
        no-action
      >
        <template v-slot:activator>
          <v-list-item-title>エリア</v-list-item-title>
        </template>

        <v-list-item
          v-for="(area, index) in $store.state.areas"
          :key="index"
          :to="'/area/'+area.fields.slug"
        >
          <v-list-item-title>{{ area.fields.name }}</v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-item
        to="/form"
      >
        <v-list-item-title>
          情報提供
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
