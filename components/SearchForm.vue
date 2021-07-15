<template>
  <div>
    <v-form
      @submit.prevent="submit"
    >
      <v-text-field
        ref="searchForm"
        v-model="query"
        placeholder="キーワードを入力"
        flat
        hide-details
        append-icon="mdi-magnify"
        clear-icon="mdi-close-circle"
        clearable
        @click:append="submit"
      />
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: this.$route.query.q
    }
  },
  methods: {
    submit() {
      this.$router.push({ path: '/search', query: { q: this.query } })
      this.$refs.searchForm.blur()
    },
  }
}
</script>
