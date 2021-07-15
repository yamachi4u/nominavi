<template>
  <section class="slug">
    <v-img
      :lazy-src="item.fields.image.fields.file.url"
    ></v-img>
    <v-card
      outlined
    >
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title class="text-h5 mb-1">
            {{ item.fields.name }}
          </v-list-item-title>
          <div>
            営業時間: {{}}
          </div>
          <div>
            最寄り駅: {{}}
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
        </v-list-item-content>

        <v-btn
          :href="item.fields.link"
          color="orange"
          target="_blank"
          dark
        >
          外部サイト
        </v-btn>
        <p>{{ item.fields.phone_number }}</p>
      </v-list-item>
    </v-card>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12959.97919598098!2d139.741117!3d35.7017456!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc4ace4ad40b6bd3e!2z57-U5bGx5LqtIOelnualveWdguacrOmkqA!5e0!3m2!1sja!2sjp!4v1626346983531!5m2!1sja!2sjp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    <v-card>
      <p>{{ item.fields.phone_number }}</p>
    </v-card>
  </section>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'

export default {
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  async asyncData({ params }) {
    return await createClient()
      .getEntry(params.slug)
      .then(entry => {
        return {
          item: entry
        }
      })
      .catch(console.error)
  }
}
</script>

