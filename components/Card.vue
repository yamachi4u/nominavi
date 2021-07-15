<template>
  <v-col cols="12">
    <v-card
      elevation="5"
      class="my-6"
      :to="'/pub/'+id"
    >
      <div class="d-flex">
        <v-avatar
          class="ma-3"
          size="200"
          tile
        >
          <v-img :src="image.fields.file.url"></v-img>
        </v-avatar>
        <div>
          <v-card-title
            class="text-h5"
            v-text="name"
          ></v-card-title>
          <div>
            営業時間: {{}}
          </div>
          <div>
            ジャンル:
            <v-chip
              class="ma-2"
            >
              居酒屋
            </v-chip>
            <v-chip
              class="ma-2"
            >
              海鮮
            </v-chip>
          </div>
        </div>

      </div>
    </v-card>
  </v-col>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    phone_number: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    tags: {
      type: String,
      default: ''
    },
    image: {
      type: Object,
      default: ''
    }
  }
}
</script>

