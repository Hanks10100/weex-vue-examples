<template>
  <div class="screen">
    <div class="tips">
      <text class="txt">Ancient pulzze game in China.</text>
      <text class="button" @click="reset">Reset</text>
    </div>
    <div class="board" :style="wrapperStyle">
      <div class="block" v-for="(block, i) in blocks" :key="i" :style="blockLayouts[i]" @swipe="move(block, $event)">
        <div class="card" :style="cardSize[i]">
          <image class="profile" resize="cover" :style="cardSize[i]" :src="block.profile"></image>
          <text class="name">{{block.name}}</text>
        </div>
      </div>
    </div>
    <div class="tips">
      <text class="txt">Move the biggest card("曹操") to the bottom, you will win!</text>
    </div>
  </div>
</template>

<script>
  const initialBlocks = [
    { origin: [0, 0], size: [1, 2], name: '张飞' },
    { origin: [1, 0], size: [2, 2], name: '曹操', profile: 'http://a3.att.hudong.com/55/53/19300380059651133082532732641.jpg' },
    { origin: [3, 0], size: [1, 2], name: '赵云' },
    { origin: [0, 2], size: [1, 2], name: '马超' },
    { origin: [1, 2], size: [2, 1], name: '关羽' },
    { origin: [3, 2], size: [1, 2], name: '黄忠' },
    { origin: [1, 3], size: [1, 1], name: '卒' },
    { origin: [0, 4], size: [1, 1], name: '卒' },
    { origin: [2, 3], size: [1, 1], name: '卒' },
    { origin: [3, 4], size: [1, 1], name: '卒' },
  ]

  function clone (object) {
    return JSON.parse(JSON.stringify(object))
  }

  const modal = weex.requireModule('modal')
  export default {
    props: {
      meshSize: { type: Number, default: 160 },
      gap: { type: Number, default: 4 }
    },
    data () {
      return {
        win: false,
        blocks: clone(initialBlocks)
      }
    },
    computed: {
      wrapperStyle () {
        return {
          padding: this.gap + 'px',
          borderWidth: this.gap + 'px',
          width: this.meshSize * 4 + this.gap * 2 + 'px',
          height: this.meshSize * 5 + this.gap * 2 + 'px'
        }
      },
      blockLayouts () {
        return this.blocks.map(block => ({
          padding: this.gap + 'px',
          left: block.origin[0] * this.meshSize + 'px',
          top: block.origin[1] * this.meshSize + 'px',
          width: block.size[0] * this.meshSize + 'px',
          height: block.size[1] * this.meshSize + 'px'
        }))
      },
      cardSize () {
        return this.blocks.map(block => ({
          width: block.size[0] * this.meshSize - this.gap * 2 + 'px',
          height: block.size[1] * this.meshSize - this.gap * 2 + 'px'
        }))
      }
    },
    methods: {
      isOverlap (block, target) {
        // return false;
        return this.blocks.some(other => {
          if (other === block) return false
          const spanX = Math.max(other.origin[0] + other.size[0], target[0] + block.size[0]) - Math.min(other.origin[0], target[0])
          const spanY = Math.max(other.origin[1] + other.size[1], target[1] + block.size[1]) - Math.min(other.origin[1], target[1])
          return spanX < (other.size[0] + block.size[0]) && spanY < (other.size[1] + block.size[1])
        })
      },
      isDone () {
        const CaoCao = this.blocks.find(x => x.name === '曹操')
        return CaoCao.origin[0] === 1 && CaoCao.origin[1] === 3
      },
      move (block, event) {
        const target = block.origin.slice()
        switch (event.direction) {
          case 'left': target[0] = Math.max(target[0] - 1, 0); break
          case 'right': target[0] = Math.min(target[0] + 1, 4 - block.size[0]); break
          case 'up': target[1] = Math.max(target[1] - 1, 0); break
          case 'down': target[1] = Math.min(target[1] + 1, 5 - block.size[1]); break
        }
        // modal.toast({ message: `move ${event.direction}` })
        if (!this.isOverlap(block, target)) {
          block.origin = target
          if (this.isDone() && !this.win) {
            this.win = true
            modal.toast({ message: 'You Win!' })
          }
        } else {
          // modal.toast({ message: `Can't move to there!`, duration: 0.1 })
        }
      },
      reset () {
        this.blocks = clone(initialBlocks)
      }
    }
  }
</script>

<style scoped>
  .screen {
    justify-content: center;
    align-items: center;
  }
  .board {
    position: relative;
    border-color: #FF6600;
    background-color: #F5F5F5;
  }
  .block {
    position: absolute;
    transition-property: top,left;
    transition-duration: 0.15s;
    transition-timing-function: ease-in-out;
  }
  .card {
    position: relative;
    flex-direction: column;
    justify-content: flex-end;
    background-color: #BBB;
    /* border-width: 3px;
    border-color: #DDD; */
  }
  .profile {
    position: absolute;
    top: 0; bottom: 0;
    left: 0; right: 0;
  }
  .name {
    text-align: center;
    font-size: 32px;
    padding: 10px;
    color: #FFF;
    background-color: rgba(0, 0, 0, 0.4);
  }
</style>
