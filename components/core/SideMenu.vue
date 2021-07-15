<template>
  <v-container>
    <areas />
    <news />
  </v-container>
</template>

<script>
export default {
  name: 'App',

  components: {
    News: () => import('@/components/core/News'),
    Areas: () => import('@/components/core/Areas'),

  },
}
</script>

