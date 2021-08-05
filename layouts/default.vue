<template>
  <v-app>
    <core-app-bar />

    <core-drawer />

    <v-main
      class="py-0"
    >
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <core-footer />
  </v-app>
</template>

