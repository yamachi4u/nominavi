<template>
  <v-container
    tag="section"
  >
    <v-banner
      color="orange"
    >
      エリア
    </v-banner>

    <v-list>
      <v-list-item
        v-for="(area, i) in $store.state.areas"
        :key="i"
        :to="'/area/'+area.fields.slug"
      >
        <v-list-item-content>
          <v-list-item-title v-text="area.fields.name"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

  </v-container>
</template>

