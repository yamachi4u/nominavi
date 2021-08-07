<template>

  <validation-observer
    ref="observer"
    v-slot="{ invalid }"
  >
    <form name="postForm" @submit.prevent="submit" target="dummy"
    action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeLpGeKl_QLdY6lCSi4i27SfF7m89pLLmV-qCjjF91dOT_J1A/formResponse"　method="POST" >

    <validation-provider
      v-slot="{ errors }"
      name="投稿タイプ"
      rules="required"
    >
      <v-select
        v-model="type"
        :items="items"
        :error-messages="errors"
        label="投稿タイプ"
        data-vv-name="type"
        required
        name="entry.11364200"
      ></v-select>
    </validation-provider>

    <validation-provider
      v-slot="{ errors }"
      name="お名前"
      rules="required"
    >
      <v-text-field
        v-model="namae"
        :error-messages="errors"
        label="お名前"
        required
        name="entry.838135061"
      ></v-text-field>
    </validation-provider>


      <validation-provider
        v-slot="{ errors }"
        name="メールアドレス"
        rules="required|email"
      >
        <v-text-field
          v-model="email"
          :error-messages="errors"
          label="E-mail"
          required
          name="entry.1089278763"
        ></v-text-field>
      </validation-provider>

      <validation-provider
        v-slot="{ errors }"
        name="店舗情報"
        rules="required"
      >
        <v-text-field
          v-model="shopInfo"
          :error-messages="errors"
          label="店舗情報"
          required
          name="entry.655204503"
        ></v-text-field>
      </validation-provider>

      <validation-provider
        v-slot="{ errors }"
        name="サイトURL"
        rules="required"
      >
        <v-text-field
          v-model="siteUrl"
          :error-messages="errors"
          label="サイトURL"
          required
          name="entry.1251532293"
        ></v-text-field>
      </validation-provider>

      <validation-provider
        v-slot="{ errors }"
        name="other"
      >
        <v-text-field
          v-model="other"
          :error-messages="errors"
          label="その他の情報"
          required
          name="entry.725262329"
        ></v-text-field>
      </validation-provider>


      <v-btn
        class="mr-4"
        type="submit"
        :disabled="invalid"
      >
        投稿する
      </v-btn>

      <v-btn @click="clear">
        書き直す
      </v-btn>
      <p>投稿が完了しますとメールアドレス宛てに確認メールが届きます。（仮テキスト）</p>
    </form>

    <iframe id="dummyiframe" name="dummy" style="display:none;"  ></iframe>

  </validation-observer>


</template>

<script>

  import { required, digits, email, max, regex } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'
  setInteractionMode('eager')
  extend('digits', {
    ...digits,
    message: '{_field_} needs to be {length} digits. ({_value_})',
  })
  extend('required', {
    ...required,
    message: '{_field_} は必ず入力して下さい。',
  })
  extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
  })
  extend('regex', {
    ...regex,
    message: '{_field_} {_value_} does not match {regex}',
  })
  extend('email', {
    ...email,
    message: 'Email must be valid',
  })
  export default {
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      email: '',
      type: null,
      items: [
        '店舗情報提供(店舗関係者)',
        '店舗情報提供(一般)',
        '削除依頼',
        'その他の問い合わせ',
      ],
      checkbox: null,
      shopInfo: null,
      siteUrl:null,
      name:null,
    }),
    methods: {
      submit () {
        this.$refs.observer.validate()
        document.postForm.submit();
        alert("送信完了しました！");
        location.href = './';
      },
      clear () {
        this.name=null
        this.email = ''
        this.type = null
        this.shopInfo = null
        this.siteUrl = null
        this.other = null
        this.$refs.observer.reset()
      },

    },
  }

  const wait = (sec) => {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, sec*1000);
      //setTimeout(() => {reject(new Error("エラー！"))}, sec*1000);
    });
  };

</script>

<style>


</style>
