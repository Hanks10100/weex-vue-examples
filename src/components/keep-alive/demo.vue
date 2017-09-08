<template>
    <div class="root">
        <!-- 顶部切换tab -->
        <div class="tab">
            <div style="width: 194; height: 80;"></div>
            <div class="tab-item" @click="toggleTab('a')">
                <text class="tab-txt" :style="{ color: selected?'#933BFF':'#111111' }">商品</text>
                <div v-if="selected" class="sele-line"></div>
            </div>
            <div class="tab-item" @click="toggleTab('b')">
                <text class="tab-txt" :style="{ color: selected?'#111111':'#933BFF' }">笔记</text>
                <div v-if="!selected" class="sele-line"></div>
            </div>
            <div style="width: 194; height: 80;"></div>
        </div>

        <keep-alive>
        <!-- 商品数据列表 -->
            <list v-if="selected">
              <cell v-for="v in list">
                <text class="list-item">{{v}}</text>
              </cell>
            </list>
        
            <!-- 笔记数据列表 -->
            <list v-if="!selected">
              <cell v-for="item in arr">
                <text>{{item.a}}</text>
                <text>{{item.b}}</text>
              </cell>
            </list>
        </keep-alive>
    </div>
</template>
<style scoped>
    .root {
        background-color: #F4F4F4;
    }
    .tab {
        flex-direction: row;
        position: sticky;
        width: 750;
        height: 80;
        border-style: solid;
        border-color: #E8E8E8;
        border-top-width: 1;
        border-bottom-width: 1;
        background-color: #ffffff;
    }
    .tab-item {
        width: 181;
        height: 80;
        align-items: center;
        justify-content: center;
    }
    .tab-txt {
        font-size: 28;
        font-family: PingFangSC-Regular;
    }
    .sele-line {
        position: absolute;
        width: 100;
        height: 6;
        left: 40.5;
        bottom: 0;
        background-color: #933BFF;
    }
    .list-item {
      height: 90;
      width: 750;
      border-bottom: 1;
      border-style: solid;
      border-color: #999999;
      align-items: center; 
      justify-content: center;
    }
</style>
<script>
module.exports = {
    data: function () {
        return {
            selected: true,
            list: [],
            arr: []
        };
    },
    computed: {},
    init: function () {},
    created: function () {
    },
    mounted: function () {
      var _this = this;
      // setTimeout(function() {
        _this.list = ['123', '456', 'kkk', 'lskd', 'qer', 'r23', '23wfe', 'sdf23', 'sf23', 
            'r23wg', 'fsf23', 'wfwg', 'pske', 'ppppp', 'oooo', 'llll', 'uuuu', '1111',
            '33333', '444', '9999', '----', '====='];
        _this.arr = [{
              a: '灰度喂个饭灰度喂个饭但是',
              b: '大爷的da'
            }];
      // }, 1000)
    },
    methods: {
        toggleTab(tag) {
            if (tag == 'a' && this.selected || tag == 'b' && !this.selected) {
                return;
            } else if (tag == 'a' && !this.selected) {
                this.selected = true;
            } else if (tag == 'b' && this.selected) {
                this.selected = false;
            }
        }
    }
};
</script>