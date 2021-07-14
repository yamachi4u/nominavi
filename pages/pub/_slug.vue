<template>
  <section class="slug">
    <h1>
      {{ item.fields.name }}
    </h1>
    <p>{{ item.fields.phone_number }}</p>
    <div>
      {{ item.fields.link }}
    </div>
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
  transition: 'slide-right',
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

