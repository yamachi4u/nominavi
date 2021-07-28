<template>
 <div class="container">
   <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeLpGeKl_QLdY6lCSi4i27SfF7m89pLLmV-qCjjF91dOT_J1A/formResponse" target="dummy">

     <label>投稿タイプ<br>
       <input type="radio" name="entry.11364200" value="店舗情報提供">店舗情報提供<br>
       <input type="radio" name="entry.11364200" value="削除依頼">削除依頼<br>
       <input type="radio" name="entry.11364200" value="その他の問い合わせ">その他の問い合わせ<br>
     </label><br><br>
     <label>メールアドレス<br>
       <input type="email" name="entry.1089278763" placeholder="sample@mail.co.jp">
     </label><br><br>
     <label>店舗情報<br>
       <textarea name="entry.655204503" placeholder="店舗情報を記入してください。"></textarea>
     </label><br><br>
     <label>サイトURL<br>
       <textarea name="entry.1251532293" placeholder="sample@sample.co.jp"></textarea>
     </label><br><br>
     <label>自由記入欄<br>
       <textarea name="entry.725262329" placeholder="ああ自由にご記入ください"></textarea>
     </label><br><br>
     <button type="submit" name="button" value="送信" >送信！</button>
   </form><br>
   <iframe name="dummy" style="display:none;"></iframe>
 </div>
</template>

<script>
export default { }
</script>

<style lang="scss" scoped>
</style>

