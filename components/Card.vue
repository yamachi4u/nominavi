<template>
  <nuxt-link
    :to="'pub/'+id"
    class="wrapper"
  >
    <article class="card">
      <h1 class="card_title">{{ name }}</h1>
      <p class="tags">{{ tags }}</p>
      <p class="phone_number">{{ phone_number }}</p>
      <p class="link">{{ link }}</p>
    </article>
  </nuxt-link>
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
    }
  }
}
</script>

