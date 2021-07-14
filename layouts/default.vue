<template>
  <v-app>
    <core-app-bar />

    <core-drawer />

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <core-view />

    <core-footer />
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
    CoreAppBar: () => import('@/components/core/AppBar'),
    CoreDrawer: () => import('@/components/core/Drawer'),
    CoreFooter: () => import('@/components/core/Footer'),
  },
}
</script>
