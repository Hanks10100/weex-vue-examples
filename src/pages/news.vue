<template>
  <list class="list">
    <cell class="cell" v-for="(item, i) in visibleNews" :key="i">
      <div class="message-time" v-if="item.time">
        <text class="time-text">{{item.time}}</text>
      </div>
      <div class="message-box" v-if="item.type === 'article'">
        <div class="article" @click="jumpTo(item.link)">
          <image class="poster" resize="cover" :src="item.poster"></image>
          <text class="title">{{item.title}}</text>
          <text class="summary" :lines="3" v-if="item.summary">{{item.summary}}</text>
          <div class="related">
            <div class="related-article"
              v-for="sub in item.related" :key="sub.title"
              @click="jumpTo(sub.link)">
              <text class="subtitle">{{sub.title}}</text>
              <image class="shortcut" resize="cover" :src="sub.poster"></image>
            </div>
          </div>
        </div>
      </div>
    </cell>
  </list>
</template>

<script>
  import { fetchNews } from '../shared/utils'
  export default {
    data () {
      return {
        visibleCount: 8,
        news: []
      }
    },
    computed: {
      visibleNews () {
        return this.news.slice(0, this.visibleCount)
      }
    },
    beforeCreate () {
      fetchNews(res => {
        if (Array.isArray(res.news)) {
          this.news = res.news
        }
      })
    }
  }
</script>

<style scoped>
  .list {
    background-color: #F1F1F1;
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
    border-color: #DDD;
    border-radius: 15px;
    background-color: #FFF;
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
