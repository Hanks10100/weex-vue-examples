<template>
  <mask>
    <div class="mask">
      <slot></slot>
    </div>
  </mask>
</template>

<style scoped>
  .mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, .3);
  }
</style>
