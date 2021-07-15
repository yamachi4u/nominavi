<template>
  <v-app>
    <core-app-bar />

    <core-drawer />

    <v-main>
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="4"
            order-lg=first
            order-md=first
          >
            <core-side-menu />
          </v-col>

          <v-col
            cols="12"
            md="8"
            order=first
            order-sm=first
          >
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

