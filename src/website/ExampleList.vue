<template>
  <main ref="container" class="example-panel">
    <section class="example-section" v-for="(category, i) in category.group" :key="`${category.type}-${i}`">
      <h2 :ref="category.type" class="title" @click="scrollTo(category.type)">{{category.name | i18n}}</h2>
      <p class="desc" v-if="category.desc">
        <span class="text">{{category.desc | i18n}}</span>
        <a class="link" target="_blank" :href="category.docLink | i18n">Read more</a>
      </p>
      <div class="example-list">
        <div class="example-card" v-for="example in category.examples" :key="example.hash">
          <a class="preview" target="_blank" :href="url(example.hash)">
            <img class="screenshot" :src="example.screenshot">
          </a>
          <section class="message">
            <div>{{example.title | i18n}}</div>
          </section>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
  export default {
    props: ['type', 'category', 'language'],
    methods: {
      url (hash) {
        return `http://dotwe.org/vue/${hash}`
      },
      scrollTo (hash) {
        if (!hash) {
          hash = this.parseHash().hash
        }
        const $container = this.$refs.container
        const $tabs = this.$refs[hash]
        if ($tabs && $tabs.length) {
          // TODO: smooth scroll
          $container.scrollTop = $tabs[0].offsetTop
          if (typeof location !== 'undefined') {
            location.hash = `#${this.type}/${hash}`
          }
        } else {
          $container.scrollTop = 0
        }
      }
    },
    mounted () { this.scrollTo() },
    updated () { this.scrollTo() }
  }
</script>

<style scoped>
  .example-panel {
    padding: 20px 20px 40px 30px;
  }
  .example-section {
    margin: 20px 0 60px;
  }
  .example-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .title {
    height: 50px;
    line-height: 50px;
    font-size: 36px;
    color: rgb(0, 180, 255);
    cursor: pointer;
  }
  .desc {
    width: 80%;
    max-width: 800px;
    color: #888;
  }
  .desc a, .desc a:link {
    color: rgba(0, 180, 255, 0.8);
  }
  .desc a:hover, .desc a:active {
    color: rgb(0, 180, 255);
  }
  .example-card {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 15px 35px;
    color: #666;
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
