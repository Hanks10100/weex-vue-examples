<template>
  <list class="group">
    <cell v-for="name in lists">
      <text :data-name="name" class="text">{{name}}</text>
    </cell>
  </list>
</template>

<script>
  module.exports = {
    data: function () {
      return { lists: ['A', 'B'] }
    }
  }
</script>
