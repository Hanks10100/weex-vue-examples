<template>
  <scroller class="scroller" scroll-direction="horizontal">
    <div class="example-box" v-for="(example, i) in examples" :key="i">
      <div class="title">
        <text class="title-text">{{i18n(example.title)}}</text>
      </div>
      <div style="align-items: center">
        <a :href="i18n(example.hash) | hashToURL">
          <image class="screenshot" :src="i18n(example.screenshot)" />
        </a>
        <a class="example-tips"
          :href="createSourceURL(example.hash)">
          <text class="example-tips-text">{{i18n(VIEW_SOURCE)}}</text>
        </a>
      </div>
    </div>
  </scroller>
</template>

<style scoped>
  .scroller {
    flex-direction: row;
    background-color: #FDFDFD;
    padding: 20px;
    height: 600px;
  }
  .example-box {
    justify-content: space-between;
    align-items: center;
    padding-left: 6px;
    padding-right: 6px;
    width: 310px;
  }
  .screenshot {
    width: 270px;
    height: 422px;
    border-width: 1px;
    border-color: #DDDDDD;
  }
  .title {
    height: 75px;
    justify-content: center;
  }
  .title-text {
    font-size: 32px;
    text-align: center;
    color: #606060;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .example-tips {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .example-tips-text {
    font-size: 28px;
    text-align: center;
    color: #A5A5A5;
  }
</style>

<script>
  export default {
    props: {
      language: {
        type: String,
        default: 'en'
      },
      examples: {
        type: Array,
        required: true
      }
    },
    data () {
      return {
        VIEW_SOURCE: {
          en: 'view source',
          zh: '查看源码'
        }
      }
    },
    methods: {
      createSourceURL (hash) {
        const hashString = this.i18n(hash)
        return this.createURL(`http://dotwe.org/source/${hashString}`, {
          language: this.language,
          title: this.i18n(this.VIEW_SOURCE)
        })
      }
    }
  }
</script>
