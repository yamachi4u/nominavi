<template>
  <section>
    <v-container>
      <h1>
        ランダムピックアップ
      </h1>
      <v-row dense>
        <card
          v-for="(pub, i) in pubs"
          :key="i"
          :name="pub.fields.name"
          :id="pub.sys.id"
          :phone_number="pub.fields.phoneNumber"
          :link="pub.fields.link"
          :image="pub.fields.imgUrl"
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
    random.map((item)=> {
      if(item.fields.image){
        item.fields.imgUrl = image.fields.file.url
      }
    })
    return {
      pubs: random
    }
  }
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

