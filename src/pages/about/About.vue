<template>
  <list class="list">
    <cell><app-info-card /></cell>
    <cell>
      <div class="copyright">
        <text class="copyright-text">Copyright(c) 2017 The Apache Software Foundation.</text>
        <text class="copyright-text">Licensed under the Apache License, Version 2.0</text>
      </div>
    </cell>
  </list>
</template>

<script>
  import AppInfoCard from '../../components/AppInfoCard.vue'
  export default {
    components: { AppInfoCard },
    data () {
      return {}
    }
  }
</script>

<style scoped>
  .list {
    background-color: #F5F5F5;
  }
  .item {
    padding-top: 30px;
    padding-bottom: 30px;
    padding-left: 60px;
    padding-right: 40px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #E6E6E6;
    background-color: #FFFFFF;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .item-1 {
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: #E6E6E6;
  }
  .item-title {
    font-size: 42px;
    color: #606060;
  }
  .item-value {
    font-size: 36px;
    color: #999999;
  }
  .arrow-icon {
    width: 22px;
    height: 36px;
  }
  .copyright {
    margin-top: 50px;
    padding-bottom: 20px;
  }
  .copyright-text {
    font-size: 22px;
    color: #A0A0A0;
    text-align: center;
  }
</style>
