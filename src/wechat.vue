<template>
  <div class="wrapper">
    <list class="chat-list">
      <cell :class="['chat-cell', `chat-cell-${message.from}`]" v-for="(message, m) in chatMessages" :key="m">
        <image class="chat-icon" resize="cover" src="https://gw.alicdn.com/tfs/TB1qOlHdgMPMeJjy1XbXXcwxVXa-328-328.png"></image>
        <div :class="['message-box', `message-box-${message.from}`]" ref="messages">
          <text class="message-text">{{message.content}}</text>
        </div>
      </cell>
    </list>
    <div class="operations">
      <div class="input-bar">
        <div class="btn btn-voice">
          <image class="btn-icon" src="https://gw.alicdn.com/tfs/TB1LlQEewoQMeJjy0FoXXcShVXa-228-228.png"></image>
        </div>
        <input class="input" type="text" @focus="scrollToBottom" placeholder="type here" v-model="userInput" />
        <div class="btn btn-face" @click="handleUserInput">
          <image class="btn-icon" src="https://gw.alicdn.com/tfs/TB18royewMPMeJjy1XbXXcwxVXa-360-360.png"></image>
        </div>
        <div class="btn btn-send" v-if="userInput">
          <text class="btn-send-text">Send</text>
        </div>
        <div class="btn btn-plus" v-else>
          <image class="btn-icon" src="https://gw.alicdn.com/tfs/TB1DvQyewoQMeJjy0FpXXcTxpXa-96-96.png"></image>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .wrapper {
    justify-content: space-between;
  }
  .chat-list {
    background-color: #F3F3F3;
  }
  .chat-cell {
    align-items: flex-start;
    justify-content: flex-start;
  }
  .chat-cell-bot {
    flex-direction: row;
    padding-left: 15px;
  }
  .chat-cell-user {
    flex-direction: row-reverse;
    padding-right: 15px;
  }
  .chat-icon {
    width: 80px;
    height: 80px;
    margin-top: 18px;
    background-color: #DDD;
  }
  .message-box {
    width: auto;
    /* width: 600px; */
    margin-top: 15px;
    margin-bottom: 15px;
    padding-top: 22px;
    padding-bottom: 22px;
    padding-left: 25px;
    padding-right: 25px;
    border-radius: 12px;
    border-color: #DDD;
    border-width: 1px;
  }
  .message-box-bot {
    margin-left: 15px;
    background-color: #FFF;
  }
  .message-box-bot:active {
    background-color: #EEE;
  }
  .message-box-user {
    margin-right: 15px;
    background-color: #99E152;
  }
  .message-box-user:active {
    background-color: #71CA2D;
  }
  .message-text {
    max-width: 510px;
    font-size: 32px;
    color: #454545;
  }
  .operations {
    height: 200px;
    flex: 0;
    justify-content: flex-end;
    background-color: #F5F5F5;
  }
  .chat-options {
    flex-direction: row;
    align-items: center;
    height: 100px;
    padding-left: 10px;
    padding-right: 10px;
  }
  .btn-option {
    /* width: auto; */
    height: 75px;
    justify-content: center;
    border-width: 1px;
    border-color: #C5C5C5;
    background-color: #FFFFFF;
    border-radius: 10px;
    padding-left: 25px;
    padding-right: 25px;
    margin-left: 8px;
    margin-right: 8px;
  }
  .btn-option:active {
    background-color: #EEEEEE;
  }
  .btn-option-text {
    color: #808080;
    font-size: 34px;
  }
  .input-bar {
    height: 100px;
    border-top-width: 1px;
    border-top-color: #DDD;
    background-color: #FFFFFF;
    flex-direction: row;
    justify-content: space-around;
  }
  .input {
    width: 420px;
    height: 80px;
    margin-top: 6px;
    padding-left: 12px;
    font-size: 36px;
    color: #606060;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #DDD;
    background-color: #FFFFFF;
  }
  .input:focus {
    border-bottom-color: #71CA2D;
  }
  .btn {
    width: 110px;
    align-items: center;
    justify-content: center;
  }
  .btn-icon {
    width: 75px;
    height: 75px;
  }
  .btn-face,
  .btn-plus {
    width: 100px;
  }
  .btn-send {
    /* width: 140px; */
    justify-content: center;
    border-left-width: 2px;
    border-left-color: #DDD;
    background-color: #F5F5F5;
  }
  .btn-send:active {
    background-color: #E0E0E0;
  }
  .btn-send-text {
    text-align: center;
    color: #606060;
    font-size: 36px;
  }
</style>

<script>
  const dom = weex.requireModule('dom')
  const modal = weex.requireModule('modal')
  const ws = weex.requireModule('webSocket')
  export default {
    data () {
      return {
        userInput: '',
        chatMessages: [{
          from: 'bot',
          content: '弄啥嘞？'
        }, {
          from: 'user',
          content: 'Weex 支持 box-shadow 吗？'
        }, {
          from: 'bot',
          content: '支持的，iOS 支持的比较早，Android 上正在实现，下一个发布的版本里就有了。'
        }, {
          from: 'user',
          content: '目前最新版本是多少？'
        }, {
          from: 'bot',
          content: 'Weex SDK 最新的版本是 0.16.0'
        }],
        feedbackOptions: [
          { title: 'Android' },
          { title: 'iOS' },
          { title: 'Web (H5)' },
        ]
      }
    },
    created () {
    },
    methods: {
      handleUserInput () {
        if (this.userInput) {
          this.sendUserMessage(this.userInput)
          this.userInput = ''
        }
      },
      scrollToBottom () {
        const lastMessage = this.$refs.messages[this.$refs.messages.length - 1]
        setTimeout(() => {
          dom.scrollToElement(lastMessage, {
            offset: 0,
            animated: true
          })
        }, 0)
      },
      sendUserMessage (text) {
        if (text) {
          this.chatMessages.push({
            from: 'user',
            content: text
          })
          ws.send(text)
          modal.toast({ message: 'send: ' + text })
          this.scrollToBottom()
        }
      },
      fastReply (index) {
        const message = this.feedbackOptions[index]
        if (message) {
          this.sendUserMessage(message.title)
        }
      }
    }
  }
</script>
