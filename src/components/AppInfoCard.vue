<template>
  <div class="card">
    <div class="info">
      <text class="title">Weex SDK Version</text>
      <text class="version">{{version}}</text>
      <div class="group">
        <text class="label">JS Framework</text>
        <text class="value">{{jsfmVersion}}</text>
      </div>
      <div class="group">
        <text class="label">platform</text>
        <text class="value">{{platform}}</text>
      </div>
      <div class="group">
        <text class="label">osVersion</text>
        <text class="value">{{osVersion}}</text>
      </div>
      <div class="group">
        <text class="label">deviceModel</text>
        <text class="value">{{deviceModel}}</text>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .card {
    width: 650px;
    justify-content: center;
    border-width: 1px;
    border-color: #DDD;
    border-radius: 20px;
    padding: 50px;
    margin: 50px;
    background-color: #FFF;
  }
  .title {
    font-size: 34px;
    text-align: center;
    color: #808080;
    margin-bottom: 20px;
  }
  .version {
    font-size: 80px;
    text-align: center;
    margin-bottom: 30px;
    color: #323232;
  }
  .group {
    margin-top: 10px;
    flex-direction: row;
  }
  .label {
    width: 260px;
    font-size: 32px;
    text-align: right;
    color: #888888;
  }
  .value {
    width: 230px;
    padding-left: 50px;
    font-size: 32px;
    color: #414141;
  }
</style>

<script>
  const invalid = '- invalid -'
  const unknown = '- - -'
  export default {
    data () {
      return {
        version: invalid,
        jsfmVersion: invalid,
        platform: invalid,
        osVersion: invalid,
        deviceModel: invalid
      }
    },
    created () {
      try {
        this.jsfmVersion = getJSFMVersion()
      } catch (e) {
        this.jsfmVersion = '≤ 0.15.6'
      }
      if (typeof WXEnvironment === 'object') {
        this.version = WXEnvironment.weexVersion || unknown
        this.platform = WXEnvironment.platform || unknown
        this.osVersion = WXEnvironment.osVersion || unknown
        this.deviceModel = WXEnvironment.deviceModel || unknown
      }
    }
  }
</script>
