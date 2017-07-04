<template>
  <div>
    <text>richtext</text>
    <richtext @click="listener">
      <span>link</span>
      <a href="http://t.cn?_wx_tpl=http://g.tbcdn.cn/ali-wireless-h5/res/0.0.16/hello.js">
        <image style="width:150px; height:150px" src="https://img.alicdn.com/tps/i2/TB1hRb1IXXXXXX3XVXXXQaP.pXX-87-87.jpeg" pseudo-ref="22"></image>
        <span style="font-size:42;color:#FF5400;">TAOBAO</span>
      </a>
      <image style="width:300px; height:300px" src="http://www.fresher.ru/manager_content/images2/kadry-veka/big/2-1.jpg" pseudo-ref="23"></image>
    </richtext>
  </div>
</template>

<script>
  const modal = weex.requireModule('modal');
  export default {
    methods: {
      listener (foo) {
        modal.toast({
        'message': 'My pseudoRef is'+foo.pseudoRef,
        'duration': 3
        });
      }
    }
  }
</script>

<style scoped>
  .logo {
    width: 50px;
    height: 50px;
  }
  .title {
    font-size:42px;
    color: #FF5400;
  }
</style>
