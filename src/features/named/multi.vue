<template>
  <div v-if="level > 0" :class="['f1', level%2 === 0 ? 'V': 'H']">
    <div class="box ratio">
      <mesh :level="level - 1"></mesh>
    </div>
    <div class="box ratio">
      <mesh :level="level - 1"></mesh>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'mesh',
    props: {
      level: {
        type: Number,
        default: 4
      }
    }
  }
</script>

<style scoped>
  .ratio { flex: 4; }
  .box {
    justify-content: center;
    align-items: stretch;
    margin-top: 24px;
    margin-bottom: 24px;
    margin-left: 24px;
    margin-right: 24px;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(65, 184, 131);
    background-color: rgba(65, 184, 131, 0.2);
  }
  .f1 { flex: 1; }
  .H { flex-direction: row; }
  .V { flex-direction: column; }
</style>
s
