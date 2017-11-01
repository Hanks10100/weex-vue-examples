<template>
  <div class="screen">
    <div style="align-items:center">
      <text class="title">Klotski (华容道)</text>
      <text class="subtitle">Ancient pulzze game in China.</text>
    </div>
    <div class="board" :style="wrapperStyle">
      <div class="block" v-for="(block, i) in blocks" :key="i" :style="blockLayouts[i]" @swipe="move(block, $event)">
        <div class="card" :style="cardSize[i]">
          <image class="profile" resize="cover" :style="imageSize[i]" :src="block.profile"></image>
          <text class="name">{{block.name}}</text>
        </div>
      </div>
      <div class="result" v-if="this.win">
        <text class="win">You Win !</text>
      </div>
    </div>
    <div style="margin-bottom:20px">
      <text class="tips">Move the biggest puzzle (曹操) from top to the bottom, you will win!</text>
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
      meshSize: { type: Number, default: 150 },
      borderWidth:  { type: Number, default: 6 },
      gap: { type: Number, default: 5 }
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
          borderWidth: this.borderWidth + 'px',
          width: block.size[0] * this.meshSize - this.gap * 2 + 'px',
          height: block.size[1] * this.meshSize - this.gap * 2 + 'px'
        }))
      },
      imageSize () {
        return this.blocks.map(block => ({
          width: block.size[0] * this.meshSize - (this.gap + this.borderWidth) * 2 + 'px',
          height: block.size[1] * this.meshSize - (this.gap + this.borderWidth) * 2 + 'px'
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
        if (this.win) return
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
    justify-content: space-around;
    align-items: center;
  }
  .title {
    font-size: 60px;
    color: rgb(255, 170, 102);
    text-align: center;
    font-weight: bold;
  }
  .subtitle {
    font-size: 26px;
    color: rgba(255, 170, 102, 0.8);
    text-align: center;
  }
  .tips {
    width: 500px;
    font-size: 30px;
    color: rgb(255, 170, 102);
    text-align: center;
  }
  .board {
    position: relative;
    border-color: #D5A471;
    background-color: #F5F5F5;
  }
  .block {
    position: absolute;
    transition-property: top,left;
    transition-duration: 0.15s;
    transition-timing-function: ease-in-out;
  }
  .result {
    position: absolute;
    background-color: rgba(26, 25, 31, 0.7);
    top: 0; bottom: 0;
    left: 0; right: 0;
    justify-content: center;
    align-items: center;
  }
  .win {
    font-size: 80px;
    font-weight: bold;
    color: #FF6666;
    text-align: center;
  }
  .card {
    position: relative;
    flex-direction: column;
    justify-content: flex-end;
    background-color: #D5A471;
    border-color: #D5A471;
    border-style: solid;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  }
  .profile {
    position: absolute;
    border-radius: 8px;
    top: 0; bottom: 0;
    left: 0; right: 0;
  }
  .name {
    text-align: center;
    font-size: 32px;
    padding: 10px;
    color: #FFF;
    /* color: #D5A471; */
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    background-color: rgba(0, 0, 0, 0.3);
  }
</style>
