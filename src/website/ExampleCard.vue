<template>
  <div class="example-card">
    <a class="preview" target="_blank" :href="url">
      <img class="screenshot" :src="example.screenshot">
    </a>
    <section class="message">
      <div>{{example.title | i18n}}</div>
    </section>
  </div>
</template>

<script>
  export default {
    props: ['language', 'example'],
    computed: {
      url () {
        return `http://dotwe.org/vue/${this.example.hash}`
      }
    }
  }
</script>

<style scoped>
  .example-card {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 15px 35px;
  }
  .preview {
    display: block;
    width: 182px;
    height: 329px;
    position: relative;
    background: url("https://gw.alicdn.com/tfs/TB1rRl8bwnD8KJjy1XdXXaZsVXa-661-1195.png") 0 0 no-repeat;
    background-size: 182px 329px;
  }
  .screenshot {
    position: absolute;
    width: 145px;
    height: 228px;
    top: 42px;
    left: 18px;
  }
  .message {
    flex: 1;
    text-align: center;
  }
  .tag {
    border: 1px solid #DDD;
    margin: 0 12px;
  }
</style>

