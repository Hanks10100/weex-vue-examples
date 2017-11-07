<template>
  <recycle-list :list-data="longList" template-key="cid" alias="item" index="cellIndex">
    <cell-slot template-type="A">
      <div class="box box-a">
        <text class="text-index">{{cellIndex}}</text>
        <text class="text-type">{{item.type}}</text>
      </div>
    </cell-slot>
    <cell-slot template-type="B">
      <div class="box box-b">
        <text class="text-index">{{cellIndex}}</text>
        <text class="text-type">{{item.type}}</text>
      </div>
    </cell-slot>
  </recycle-list>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

