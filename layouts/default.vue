<template>
  <v-app>
    <core-app-bar />

    <core-drawer />

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <core-footer />
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
    CoreAppBar: () => import('@/components/core/AppBar'),
    CoreSideMenu: () => import('@/components/core/SideMenu'),

    CoreDrawer: () => import('@/components/core/Drawer'),
    CoreFooter: () => import('@/components/core/Footer'),
  },
}
</script>
