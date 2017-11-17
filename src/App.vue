<template>
  <div>
    <text class="text">123</text>
  </div>
</template>
<style>

</style>
<script>
  for(var i in global){
    try{
      global[i] = function(){console.log(i)};
    }
    catch(e){
      console.log(e);
    }
  }

</script>
