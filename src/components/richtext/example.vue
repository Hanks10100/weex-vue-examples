<template>
  <scroller>
    <div class="panel">
      <richtext class="richtext">
        <span class="label">图片：</span>
        <image style="width:222px;height:81px" src="http://img.alicdn.com/tps/TB1wXN_PpXXXXbgapXXXXXXXXXX-222-81.png" />
        <span style="font-size:35px">
          <span class="grey">这是一段很长的文字，虽然很长但是并没什么卵用，只是用来测试能不能换行。</span>
          <span>
            <span>如果这些字会</span>
            <span class="text-bold">变大变粗</span>
            <span class="text-thin">变小变细</span>
            <span style="color:#FF6600">还能变颜色</span>
            <span>，就说明富文本组件能用。</span>
          </span>
        </span>
      </richtext>
    </div>
    <div class="panel">
      <richtext class="richtext" style="font-size:35px">
        <span>富文本里的内容可以是动态获取的，</span>
        <span style="color:#41B883">
          <span>例如 Vue.js 的 start 数是：</span>
          <span class="star-count">{{starCount}}</span>
          <span>。</span>
        </span>
        <span>而且还可以添加链接：</span>
        <a class="link" :href="url">
          <span>点击这行字能看到另一个例子</span>
        </a>
        <span>，点击其他字就跳转不了。</span>
      </richtext>
    </div>
  </scroller>
</template>

<script>
  const stream = weex.requireModule('stream')
  function createURL (hash) {
    const url = `http://dotwe.org/raw/dist/${hash}.bundle.wx`
    return `${url}?_wx_tpl=${url}`
  }
  export default {
    data () {
      return {
        starCount: 'fetching...',
        url: createURL('8e3c274f5cae4a391a14ac81c890325f')
      }
    },
    created () {
      stream.fetch({
        method: 'GET',
        type: 'json',
        url: 'https://api.github.com/repos/vuejs/vue'
      }, ({ ok, data }) => {
        this.starCount = ok ? data.stargazers_count : '(network error)'
      })
    }
  }
</script>

<style scoped>
  .panel {
    width: 650px;
    margin-top: 200px;
    margin-left: 50px;
    justify-content: center;
  }
  .richtext {
    border-width: 2px;
    border-style: solid;
    border-color: #DDDDDD;
  }
  .grey {
    color: #888888;
    font-size: 24px;
  }
  .label {
    color: blue;
    font-size: 48px;
  }
  .text-bold {
    font-size: 50px;
    font-weight: 700;
  }
  .text-thin {
    font-size: 18px;
    font-weight: 100;
  }
  .link {
    color: rgb(0, 180, 255);
    font-size: 40px;
    text-decoration: underline;
  }
  .star-count {
    font-size: 48px;
    font-weight: 700;
  }
</style>
