<template>
  <div class="wrapper">
    <div class="center">
      <text class="title">{{i18n(title)}}</text>
    </div>
    <div class="center" v-for="(lesson, i) in lessons" :key="i">
      <div :class="['lesson', `lesson-${language}`]" @click="jumpTo(lesson.docLink)">
        <text :class="['lesson-index', `lesson-index-${language}`]">{{i + 1}}.</text>
        <text
          :class="['lesson-title', `lesson-title-${language}`]"
          :style="{ color: mainColor }"
          >{{i18n(lesson.title)}}</text>
      </div>
    </div>
    <div class="footer center">
      <text class="copyright">{{i18n(copyright)}}</text>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['mainColor', 'title', 'copyright', 'lessons'],
    data () {
      return {
        language: 'en'
      }
    }
  }
</script>

<style scoped>
  .center {
    align-items: center;
    justify-content: center;
  }
  .title {
    font-size: 60px;
    text-align: center;
    margin-top: 60px;
    margin-bottom: 60px;
    color: #606060;
  }
  .lesson {
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #EEEEEE;
    flex-direction: row;
    align-items: center;
  }
  .lesson-zh { width: 600px; }
  .lesson-en { width: 630px; }
  .lesson-index {
    color: #777777;
    text-align: right;
    padding-right: 30px;
  }
  .lesson-title {
    padding-top: 35px;
    padding-bottom: 35px;
  }
  .lesson-index-zh {
    font-size: 46px;
    width: 120px;
  }
  .lesson-title-zh {
    font-size: 42px;
    width: 480px;
  }
  .lesson-index-en {
    font-size: 42px;
    width: 100px;
  }
  .lesson-title-en {
    font-size: 38px;
    width: 530px;
  }
  .footer {
    height: 120px;
    padding-top: 40px;
  }
  .copyright {
    font-size: 22px;
    color: #A0A0A0;
    text-align: center;
  }
</style>
