<template>
  <div class="example-panel">
    <section class="example-section" v-for="(category, i) in category.group" :key="`${category.type}-${i}`">
      <h2 class="title">{{category.name | i18n}}</h2>
      <p class="desc" v-if="category.desc">
        <span class="text">{{category.desc | i18n}}</span>
        <a class="link" target="_blank" :href="category.docLink | i18n">Read more</a>
      </p>
      <div class="example-list">
        <example-card :language="language" v-for="example in category.examples" :key="example.hash" :example="example"></example-card>
      </div>
    </section>
  </div>
</template>

<script>
  import ExampleCard from './ExampleCard.vue'
  export default {
    props: ['category', 'language'],
    components: { ExampleCard },
  }
</script>

<style scoped>
  .example-panel {
    padding: 20px 40px;
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
  .desc {
    max-width: 80%;
  }
</style>
