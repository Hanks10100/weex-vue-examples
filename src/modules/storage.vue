<template>
  <div style="background-color:#F6F6F6;">
    <div class="search_view">
      <input class="search" placeholder="Please input" @change="change"/>
      <text class="btn" @click.native="search">Search</text>
    </div>
    <text class="item">History</text>
    <list>
      <cell v-for="(i, v) in items">
        <text class="item">{{v}}</text>
      </cell>
    </list>
  </div>
</template>

<style scoped>
  .search_view {
    height:70px;
    margin-top:20px;
    margin-left:10px;
    margin-right:10px;
    flex-direction:row;
  }
  .search{
    height:70px;
    border-width:1;
    border-color:#dddddd;
    padding-left:10px;
    font-size:28px;
    flex:1;
  }
  .btn{
    width:80px;
    text-align:center;
    justify-content:center;
    font-size:28px;
    background-color:#1A89EA;
    color:#ffffff;
  }
  .item{
    text-align:center;
    font-size:25px;
    height:50px;
    margin-top:10;
    color:#5E5E5E;
    border-bottom-width:1;
    border-bottom-color:#dddddd;
    justify-content:center;
  }
</style>

<script>
  const storage = weex.requireModule('storage')

  export default {
    data () {
      return {
        items: [],
        keywords:''
      }
    },
    created () {
      storage.getAllKeys(event => {
        if(event.result == 'success' && event.data.length) {
          event.data.forEach(item => {
            if (item.indexOf('search_') > -1) {
              this.items.push(item.split('search_')[1])
            }
          })
        }
      })
    },

    methods:{
      search: function(){
      	var that = this;
        console.log('search', this.keywords)
      	if(!this.keywords) return;
        storage.setItem('search_' + this.keywords, this.keywords, function(e) {
        	that.items.push(that.keywords);
		 });
      },
      change: function(e){
        console.log('input change', e)
        if(!e.target.value) return;
        this.keywords = e.target.value;
      }
    }
  };
</script>
