<template>
  <list class="list" @loadmore="loadmore" loadmoreoffset="10">
    <refresh class="refresh" @refresh="refresh" :display="refreshing ? 'show' : 'hide'">
      <text class="indicator-text">{{i18n(refreshNote)}}</text>
    </refresh>
    <cell class="cell" v-for="(item, i) in visibleNews" :key="i">
      <div class="message-time" v-if="item.time">
        <text class="time-text">{{i18n(item.time)}}</text>
      </div>
      <div class="message-box" v-if="item.type === 'article'">
        <div class="article">
          <image class="poster" resize="cover" :src="item.poster" />
          <text class="title">{{item.title}}</text>
          <text class="summary" :lines="3" v-if="item.summary">{{item.summary}}</text>
          <div class="related">
            <div class="related-article"
              v-for="sub in item.related" :key="sub.title">
              <text class="subtitle">{{sub.title}}</text>
              <image class="shortcut" resize="cover" :src="sub.poster" />
            </div>
          </div>
        </div>
      </div>
    </cell>
  </list>
</template>

<script>
  import { i18n } from '../../utils/index'
  const modal = weex.requireModule('modal')
  export default {
    computed: {
      visibleNews () {
        return this.news.slice(0, this.visibleCount)
      }
    },
    created () {
      console.log(` => news in created: (${JSON.stringify(this.news)}).`)
    },
    methods: {
      i18n,
      refresh () {
        this.refreshing = true
        this.refreshNote = this.dict.REFRESHING
        this.$page.$emit('updateNews', true)
        this.$page.$on('newsUpdated', () => {
          this.refreshing = false
          modal.toast({ message: this.i18n(this.dict.UPDATED) })
          setTimeout(() => {
            this.refreshNote = this.dict.REFRESH
          }, 500)
        })
      },
      loadmore () {
        const step = 4
        const currentCount = this.visibleCount
        this.visibleCount = Math.min(currentCount + step, this.news.length)
        modal.toast({
          message: this.visibleCount > currentCount
            ? this.i18n(this.dict.LOAD_MERE)
            : this.i18n(this.dict.NO_MORE_NEWS)
        })
      }
    }
  }
</script>

<style scoped>
  .list {
    background-color: #F1F1F1;
  }
  .refresh {
    width: 750px;
    align-items: center;
    background-color: #808080;
  }
  .indicator-text {
    color: #C5C5C5;
    font-size: 34px;
    padding: 50px;
    text-align: center;
  }
  .cell {
    align-items: center;
  }
  .message-time {
    margin-top: 25px;
    justify-content: center;
  }
  .time-text {
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 18px;
    padding-right: 18px;
    background-color: rgba(0, 0, 0, 0.1);
    font-size: 25px;
    border-radius: 8px;
    color: #FEFEFE;
  }
  .message-box {
    border-width: 1px;
    border-color: #DDDDDD;
    border-radius: 15px;
    background-color: #FFFFFF;
    margin-top: 25px;
    margin-bottom: 35px;
  }
  .message-box:active {
    background-color: #F8F8F8;
  }
  .related-article {
    border-top-width: 1px;
    border-top-color: #E6E6E6;
    flex-direction: row;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 15px;
    padding-left: 30px;
    padding-right: 20px;
    background-color: #FEFEFE;
  }
  .poster {
    width: 680px;
    height: 340px;
    background-color: #D2D2D2;
  }
  .title {
    width: 680px;
    padding: 30px;
    font-size: 38px;
    color: #323232;
  }
  .shortcut {
    width: 80px;
    height: 80px;
  }
  .subtitle {
    width: 550px;
    padding-right: 25px;
    font-size: 34px;
    color: #454545;
  }
  .summary {
    width: 680px;
    margin-top: -20px;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 30px;
    font-size: 28px;
    color: #929292;
    lines: 3;
  }
</style>
