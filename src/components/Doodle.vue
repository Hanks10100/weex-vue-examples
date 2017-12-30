<template>
  <div>
    <embed style="flex:1" :src="src" />
  </div>
</template>

<script>
  export default {
    data () {
      return {
        md5: '2d8da136e33f63a0bfe4b1e42362405b'
      }
    },
    computed: {
      src () {
        const md5 = this.md5
        if (WXEnvironment.platform === 'Web') {
          return `http://dotwe.org/raw/htmlVue/${md5}`
        }
        const url = `http://dotwe.org/raw/dist/${md5}.bundle.wx`
        return `${url}?_wx_tpl=${url}`
      }
    }
  }
</script>

