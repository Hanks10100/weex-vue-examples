<template>
  <div>
    <text>    测试1，直接放置头尾用空白的文本    </text>
    <text>{{message}}</text>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        message: '    测试2，使用数据绑定     '
      }
    }
  }
</script>
