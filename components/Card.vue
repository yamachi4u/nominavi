<template>
  <v-col
    cols="12"
    class="mb-4"
  >
    <v-card
      :to="'/pub/'+pub.sys.id"
    >
      <v-row
        class="mx-0"
      >
        <v-col
          md="4"
          class="hidden-sm-and-down"
        >
          <v-avatar
            height="200"
            width="100%"
            tile
          >
            <v-img :src="getImage(pub)"/>
          </v-avatar>
        </v-col>
        <v-col
          cols="12"
          md="8"
          class="pa-0"
        >
          <v-card-title
            class="font-weight-bold mb-2"
            v-text="pub.fields.name"
          >
          </v-card-title>
          <v-card-subtitle
            class="pb-2"
            v-text="getAccess(pub)"
          >
          </v-card-subtitle>
          <div class="px-3">
            <v-avatar
              height="200"
              width="100%"
              tile
              class="hidden-md-and-up text-center"
            >
              <v-img :src="getImage(pub)"/>
            </v-avatar>
            <v-chip-group
              class="py-1"
              column
            >
              <v-chip
                v-for="tag in getTags(pub)"
                color="primary"
                v-text="tag"
              >
              </v-chip>
            </v-chip-group>
            <v-card-text
              class="grey--text text--darken-2 pl-1 pr-0 pt-0 pb-2"
            >
              定休日：{{ pub.fields.holiday }}
            </v-card-text>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-col>
</template>
<script>
export default {
  props: {
    pub: {
      type: Object,
      default: ''
    },
  },

  methods: {
    getImage: pub => {
      if(pub.fields.image){
        return pub.image.fields.file.url
      } else {
        return pub.fields.imgUrl
      }
    },
    getAccess: pub => {
      const access = pub.fields.access
      const station = pub.fields.station

      return access || station
    },
    getTags: pub => {
      return pub.fields.tags.fields.name && [pub.fields.tags.fields.name]
    },
  },
}
</script>
