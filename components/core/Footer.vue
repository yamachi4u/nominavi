<template>
  <v-footer
    color="background"
  >
    <v-container>
      <v-row>
        <v-btn
          text
          to="/"
        >
          ホーム
        </v-btn>
        <v-btn
          text
          to="/privacy-policy"
        >
          プライバシーポリシー
        </v-btn>
        <v-btn
          text
          to="twitter"
        >
          twitterアカウント
        </v-btn>
        <v-btn
          text
          to="/for-owners"
        >
          店舗運営者の方へ
        </v-btn>
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

<style scoped>
.v-btn--active::before {
  opacity: 0 !important;
}

.v-btn--active:hover::before {
  opacity: 0.13 !important;
}
</style>
