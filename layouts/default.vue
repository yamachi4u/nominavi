<template>
  <v-app>
    <core-app-bar />

    <core-drawer />

    <v-main>
      <v-container>
        <v-row>
          <v-col>
            <v-container>
              <Nuxt />
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <core-footer />
  </v-app>
</template>

