<template>
  <div class="wrapper">
    <list class="chat-list">
      <cell style="height:40px"></cell>
      <cell class="chat-cell" v-for="(message, m) in chatMessages" :key="m">
        <div :class="['message', `message-${message.from}`]" >
          <image class="chat-icon" resize="cover" v-if="message.from === 'bot'" src="https://gw.alicdn.com/tfs/TB1qOlHdgMPMeJjy1XbXXcwxVXa-328-328.png"></image>
          <div :class="['message-box', `message-box-${message.from}`]" ref="messages">
            <text class="message-text">{{message.content || message.title}}</text>
          </div>
        </div>
        <div class="chat-spliter" v-if="message.reset"></div>
      </cell>
      <cell style="height:50px"></cell>
    </list>
    <div class="operations">
      <scroller class="chat-options" scrollDirection="horizontal">
        <div class="btn-option" v-for="(option, i) in feedbackOptions" :key="i" @click="fastReply(i)">
          <text class="btn-option-text">{{option.title}}</text>
        </div>
      </scroller>
      <div class="input-bar">
        <input class="input" type="text" @focus="scrollToBottom" placeholder="type here" v-model="userInput" />
        <div class="btn-send" @click="handleUserInput">
          <text class="btn-send-text">Send</text>
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
    flex: 1;
    background-color: #F3F3F3;
  }
  .chat-spliter {
    height: 1px;
    margin: 80px;
    background-color: #CCC;
  }
  .message {
    flex-direction: row;
    align-items: flex-start;
  }
  .message-bot {
    justify-content: flex-start;
  }
  .message-user {
    justify-content: flex-end;
  }
  .chat-icon {
    width: 80px;
    height: 80px;
    margin-top: 18px;
    margin-left: 15px;
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
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: #E0E0E0;
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
    border-top-width: 2px;
    border-top-color: #DDD;
    background-color: #FFFFFF;
    flex-direction: row;
    justify-content: space-between;
  }
  .input {
    width: 610px;
    height: 100px;
    padding-left: 30px;
    color: #606060;
    background-color: #FFFFFF;
    font-size: 36px;
  }
  .btn-send {
    width: 140px;
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
  import { judge } from '../misc/chat'

  const dom = weex.requireModule('dom')
  const modal = weex.requireModule('modal')
  export default {
    data () {
      return {
        userInput: '',
        chatMessages: [],
        feedbackOptions: []
      }
    },
    created () {
      judge([]).then(result => {
        this.reply(result)
      })
    },
    methods: {
      reply (feedback) {
        const { content, options } = feedback
        if (content) {
          this.chatMessages.push({ from: 'bot', content })
          this.feedbackOptions = options || []
          // modal.toast({ message: 'reply: ' + content })
          this.scrollToBottom()
        }
      },
      handleUserInput () {
        if (this.userInput) {
          this.sendUserMessage({
            title: this.userInput,
            // content: this.userInput
          })
          this.userInput = ''
        }
      },
      scrollToBottom () {
        if (!this.$refs.messages) {
          return
        }
        const lastMessage = this.$refs.messages[this.$refs.messages.length - 1]
        setTimeout(() => {
          dom.scrollToElement(lastMessage, {
            offset: 0,
            animated: true
          })
        }, 0)
      },
      sendUserMessage (message) {
        if (message) {
          this.chatMessages.push(Object.assign({
            from: 'user'
          }, message))
          // modal.toast({ message: 'send: ' + text })
          this.scrollToBottom()
          judge(this.chatMessages)
            .then(result => {
              this.reply(result)
            })
        }
      },
      fastReply (index) {
        const message = this.feedbackOptions[index]
        if (message) {
          this.sendUserMessage(message)
        }
      }
    }
  }
</script>
