<template>
  <v-container
    tag="section"
  >
    <v-banner
      color="orange"
    >
      新着店舗
    </v-banner>

    <v-list>
      <v-list-item
        v-for="(pub, i) in $store.state.news"
        :key="i"
        :to="'/pub/'+pub.sys.id"
      >
        <v-list-item-content>
          <v-list-item-title v-text="pub.fields.name">xxx</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

  </v-container>
</template>

