<template>
  <div class="example-panel">
    <section class="example-section" v-for="(category, i) in category.group" :key="`${category.type}-${i}`">
      <h3 class="title">{{category.name | i18n}}</h3>
      <p class="des" v-if="category.desc">
        <span class="text">{{category.desc | i18n}}</span>
        <a class="link" target="_blank" :href="category.docLink | i18n">Read more</a>
      </p>
      <div class="example-list">
        <example-card class="example-box"  v-for="example in category.examples" :key="example.hash" :example="example"></example-card>
      </div>
    </section>
  </div>
</template>

<script>
  import ExampleCard from './ExampleCard.vue'
  export default {
    props: ['category'],
    components: { ExampleCard },
  }
</script>

<style scoped>
  /* .example-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
  } */
  .example-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
</style>
