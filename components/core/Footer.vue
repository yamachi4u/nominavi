<template>
  <v-footer
    color="background"
  >
    <v-container>
      <v-row
        justify="center"
      >
        <NuxtLink to="/privacypolicy">プライバシーポリシー</NuxtLink>
        <a href="twitter">twitterアカウント</a>
      </v-row>
      <v-btn
        fab
        class="float-right"
        color="primary"
        @click="$vuetify.goTo(0)"
      >
        <v-icon>mdi-chevron-up</v-icon>
      </v-btn>
    </v-container>
  </v-footer>
</template>

