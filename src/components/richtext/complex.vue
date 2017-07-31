<template>
  <scroller>
    <div class="panel">
      <richtext class="richtext">
        <span class="grey">图片也能加链接</span>
        <a href="https://m.taobao.com">
          <image style="width:172px;height:67px" src="http://img.alicdn.com/tps/i2/TB1bNE7LFXXXXaOXFXXwFSA1XXX-292-116.png" />
        </a>
        <a href="https://m.tmall.com">
          <image style="width:190px;height:100px" src="https://img.alicdn.com/tfs/TB1MaLKRXXXXXaWXFXXXXXXXXXX-480-260.png" />
        </a>
        <span style="font-size:36px">
          <span>。文字内容也可以是动态更新的，</span>
          <span style="font-weight:600">输入框里的字：</span>
        </span>
        <span class="type-text">{{userInput}}</span>
      </richtext>
    </div>
    <div class="panel" style="flex-direction: row;">
      <input type="text" class="input" v-model="userInput" />
    </div>
    <div class="panel" style="flex-direction: row;">
      <text class="button" @click="back">返回</text>
    </div>
  </scroller>
</template>

<script>
  const navigator = weex.requireModule('navigator')
  const modal = weex.requireModule('modal')
  export default {
    data () {
      return {
        userInput: ''
      }
    },
    methods: {
      back () {
        navigator.pop({
          animated: "true"
        }, event => {
          modal.toast({ message: '从前一个页面返回了' })
        })
      }
    }
  }
</script>

<style scoped>
  .panel {
    width: 650px;
    margin-top: 100px;
    margin-left: 50px;
    justify-content: center;
  }
  .richtext {
    border-width: 2px;
    border-style: solid;
    border-color: #DDDDDD;
    font-size: 26px;
  }
  .type-text {
    color: #41B883;
    font-size: 50px;
  }
  .input {
    font-size: 40px;
    width: 650px;
    margin-top: 50px;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    color: #666666;
    border-width: 1px;
    border-style: solid;
    border-color: #41B883;
  }
  .button {
    width: 280px;
    font-size: 66px;
    padding-top: 15px;
    padding-bottom: 15px;
    text-align: center;
    color: #666666;
    border-width: 2px;
    border-style: solid;
    border-color: #DDDDDD;
    background-color: #F5F5F5;
  }
</style>
