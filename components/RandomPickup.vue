<template>
  <section>
    <h2>
      ピックアップ
    </h2>
    <v-container
      class="px-0"
    >
      <v-row>
        <card
          v-for="(pub, i) in pubs"
          :key="i"
          :pub="pub"
        />
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  data() {
    const pubs = this.$store.state.pubs
    const random = shuffle(pubs).slice(0, 3)

    return {
      pubs: random
    }
  },
}

/*
 * 配列をシャッフルする
 * （参考：https://www.nxworld.net/js-array-shuffle.html）
 */
const shuffle = ([...array]) => {
  for (let i = array.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
</script>

