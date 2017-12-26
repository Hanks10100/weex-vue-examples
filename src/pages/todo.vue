<template>
  <div>
    <web class="webview" :src="link"></web>
    <div class="tools">
      <div class="button" v-if="source && showCopyCode" @click="copyCode">
        <text class="button-text">Copy Code</text>
      </div>
      <div class="button" @click="copyLink">
        <text class="button-text">Copy Link</text>
      </div>
      <div class="button" @click="goBack">
        <text class="button-text">Back</text>
      </div>
    </div>
  </div>
</template>

<script>
  const storage = weex.requireModule('storage')
  const clipboard = weex.requireModule('clipboard')
  const navigator = weex.requireModule('navigator')
  const stream = weex.requireModule('stream')
  const modal = weex.requireModule('modal')
  export default {
    data () {
      return {
        hash: 'ca84e4bd6b72b9f90783c690bc6522d9',
        showCopyCode: true,
        source: ''
      }
    },
    computed: {
      link () {
        return `http://dotwe.org/source/${this.hash}`
      }
    },
    watch: {
      hash () {
        stream.fetch({
          method: 'GET',
          type: 'text',
          url: `http://dotwe.org/raw/src/${this.hash}_source.schema`
        }, response => {
          if (response.ok && response.data) {
            this.showCopyCode = false
          }
        })
        stream.fetch({
          method: 'GET',
          type: 'text',
          url: `http://dotwe.org/raw/src/${this.hash}.vue`
        }, response => {
          if (response.ok && response.data) {
            this.source = response.data
          }
        })
      }
    },
    beforeCreate () {
      storage.getItem('CURRENT_SOURCE_HASH', event => {
        if (event.result === 'success') {
          // storage.removeItem('CURRENT_SOURCE_HASH')
          this.hash = event.data
        }
      })
    },
    methods: {
      copyCode () {
        clipboard.setString(this.source)
        modal.toast({ message: 'Code is copied', duration: 0.3 })
      },
      copyLink () {
        clipboard.setString(`http://dotwe.org/vue/${this.hash}`)
        modal.toast({ message: 'Link address is copied', duration: 0.3 })
      },
      goBack () {
        storage.removeItem('CURRENT_SOURCE_HASH')
        navigator.pop()
      }
    },
    beforeDestroy () {
      storage.removeItem('CURRENT_SOURCE_HASH')
    }
  }
</script>

<style scoped>
  .webview {
    position: absolute;
    width: 750px;
    overflow: hidden;
    top: 0;
    bottom: 120px;
    background-color: #333333;
  }
  .tools {
    position: fixed;
    bottom: 0;
    width: 750px;
    height: 121px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #282C34;
  }
  .button {
    width: 210px;
    height: 80px;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.1);
    justify-content: center;
  }
  .button-text {
    text-align: center;
    font-size: 34px;
    color: #DDD;
  }
</style>
