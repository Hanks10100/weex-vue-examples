<template>
  <scroller class="wrapper">
    <div class="header" @click="openURL('https://www.w3.org/TR/css-flexbox-1/#order-property')">
      <text class="title">order</text>
    </div>
    <div class="example-panel">
      <text class="tips">A:_ B:_ C:_ D:_ E:_</text>
      <div class="container border row">
        <div class="box A"><text class="label">A</text></div>
        <div class="box B"><text class="label">B</text></div>
        <div class="box C"><text class="label">C</text></div>
        <div class="box D"><text class="label">D</text></div>
        <div class="box E"><text class="label">E</text></div>
      </div>
    </div>
    <div class="example-panel">
      <text class="tips">A:1 B:2 C:3 D:_ E:_</text>
      <div class="container border row">
        <div class="box A" style="order:1"><text class="label">A</text></div>
        <div class="box B" style="order:2"><text class="label">B</text></div>
        <div class="box C" style="order:3"><text class="label">C</text></div>
        <div class="box D"><text class="label">D</text></div>
        <div class="box E"><text class="label">E</text></div>
      </div>
    </div>
    <div class="example-panel">
      <text class="tips">A:4 B:1 C:2 D:1 E:_</text>
      <div class="container border row">
        <div class="box A" style="order:4"><text class="label">A</text></div>
        <div class="box B" style="order:1"><text class="label">B</text></div>
        <div class="box C" style="order:2"><text class="label">C</text></div>
        <div class="box D" style="order:1"><text class="label">D</text></div>
        <div class="box E"><text class="label">E</text></div>
      </div>
    </div>
    <div class="example-panel">
      <text class="tips">A:_ B:-1 C:-2 D:1 E:2</text>
      <div class="container border row">
        <div class="box A"><text class="label">A</text></div>
        <div class="box B" style="order:-1"><text class="label">B</text></div>
        <div class="box C" style="order:-2"><text class="label">C</text></div>
        <div class="box D" style="order:1"><text class="label">D</text></div>
        <div class="box E" style="order:2"><text class="label">E</text></div>
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
  }
  .example-panel {
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
  }
  .tips {
    font-size: 30px;
    color: #888888;
    padding-bottom: 10px;
    font-family: monospace;
  }
  .border {
    border-width: 2px;
    border-style: solid;
    border-color: #888888;
  }
  .container {
    width: 600px;
    height: 160px;
  }
  .vertical-container {
    width: 300px;
    height: 450px;
  }
  .box {
    height: 120px;
    justify-content: center;
    align-items: center;
  }
  .A {
    width: 120px;
    background-color: #ff7070;
  }
  .B {
    width: 80px;
    background-color: #66b966;
  }
  .C {
    width: 160px;
    background-color: #519fff;
  }
  .D {
    width: 120px;
    background-color: #ffb37d;
  }
  .E {
    width: 100px;
    background-color: #c477ff;
  }
  .label {
    font-size: 66px;
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
