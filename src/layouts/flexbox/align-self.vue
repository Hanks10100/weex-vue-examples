<template>
  <scroller class="wrapper">
    <div class="header" @click="openURL('https://www.w3.org/TR/css-flexbox-1/#align-self-property')">
      <text class="title">align-self</text>
    </div>
    <div class="example-panel">
      <text class="tips">align-self:</text>
      <div class="container row">
        <div class="box A" style="align-self:flex-start">
          <text class="label">auto</text>
        </div>
        <div class="box B" style="align-self:flex-start">
          <text class="label">flex-start</text>
        </div>
        <div class="box C" style="align-self:flex-end">
          <text class="label">flex-end</text>
        </div>
        <div class="box D" style="align-self:center">
          <text class="label">center</text>
        </div>
        <div class="box E" style="align-self:stretch">
          <text class="label">stretch</text>
        </div>
      </div>
    </div>
    <div class="example-panel">
      <text class="tips">align-self: baseline;</text>
      <div class="container row">
        <div class="box A" style="align-self:flex-start">
          <text class="label">auto</text>
        </div>
        <div class="box B" style="align-self:baseline">
          <text class="label" style="font-size:66px">baseline</text>
        </div>
        <div class="box C" style="align-self:baseline">
          <text class="label" style="font-size:22px">baseline</text>
        </div>
        <div class="box D" style="align-self:baseline">
          <text class="label" style="font-size:33px">baseline</text>
        </div>
      </div>
    </div>
  </scroller>
</template>

<style scoped>
  .header {
    height: 120px;
    background-color: #00B4FF;
    justify-content: center;
    margin-bottom: 60px;
  }
  .title {
    font-size: 50px;
    text-align: center;
    color: #ffffff;
    font-family: monospace;
  }
  .row {
    flex-direction: row;
    align-items: flex-start;
  }
  .example-panel {
    align-items: center;
    margin-bottom: 50px;
  }
  .tips {
    font-size: 30px;
    color: #888888;
    padding-bottom: 10px;
    font-family: monospace;
  }
  .container {
    border-width: 2px;
    border-style: solid;
    border-color: #888888;
    width: 600px;
    height: 250px;
  }
  .box {
    justify-content: center;
    align-items: center;
  }
  .A {
    background-color: #ff7070;
  }
  .B {
    background-color: #66b966;
  }
  .C {
    background-color: #519fff;
  }
  .D {
    background-color: #ffb37d;
  }
  .E {
    background-color: #c477ff;
  }
  .F {
    background-color: #67d9fb;
  }
  .G {
    background-color: #dcde64;
  }
  .label {
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 28px;
    color: #FFF;
  }
</style>

<script>
  const navigator = weex.requireModule('navigator')
  const storage = weex.requireModule('storage')
  export default {
    methods: {
      openURL (url) {
        const hash = 'ab57ab447248c35115144736ba38521a'
        const link = WXEnvironment.platform === 'Web'
          ? `http://dotwe.org/raw/htmlVue/${hash}`
          : `http://dotwe.org/raw/dist/${hash}.bundle.wx`
        storage.setItem('CURRENT_DOCUMENT_URL', url)
        navigator.push({ url: `${link}?_wx_tpl=${link}` })
      }
    }
  }
</script>
