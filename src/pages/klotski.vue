<template>
  <div class="screen">
    <div style="align-items:center">
      <text class="title">Klotski (华容道)</text>
      <text class="subtitle">A classic sliding pulzze game in China.</text>
    </div>
    <div style="position:relative">
      <div class="board" :style="wrapperStyle">
        <div v-for="(block, i) in blocks" :key="i"
          :class="['block', block.isBoss ? 'block-boss' : 'block-normal']"
          :style="blockStyle[i]"
          @swipe="move(block, $event)">
          <text class="name" v-once>{{block.name}}</text>
        </div>
        <div class="result" v-if="this.isWin">
          <text class="win">You Win !</text>
        </div>
      </div>
      <div class="stick" :style="stickStyle"></div>
      <div class="operations" :style="{ width: meshSize * 4 + gap * 2 + 'px' }">
        <text class="button label" @click="archive">Archive</text>
        <text class="button step">{{step}}</text>
        <text class="button label" @click="reset">Reset</text>
      </div>
    </div>
    <div style="margin-bottom:20px">
      <text class="tips">Slide the blocks, move the largest piece to the center bottom and you win!</text>
    </div>
  </div>
</template>

<script>
  const initialBlocks = [
    { origin: [0, 0], size: [1, 2], name: '张\n飞' },
    { origin: [1, 0], size: [2, 2], name: '曹操', isBoss: true },
    { origin: [3, 0], size: [1, 2], name: '马\n超' },
    { origin: [0, 2], size: [1, 2], name: '赵\n云' },
    { origin: [1, 2], size: [2, 1], name: '关羽' },
    { origin: [3, 2], size: [1, 2], name: '黄\n忠' },
    { origin: [1, 3], size: [1, 1], name: '卒' },
    { origin: [0, 4], size: [1, 1], name: '卒' },
    { origin: [2, 3], size: [1, 1], name: '卒' },
    { origin: [3, 4], size: [1, 1], name: '卒' },
  ]

  function clone (object) {
    return JSON.parse(JSON.stringify(object))
  }

  const modal = weex.requireModule('modal')
  const storage = weex.requireModule('storage')
  const storageKey = 'WEEX_KLOTSKI_GAME_STATE'
  export default {
    props: {
      meshSize: { type: Number, default: 150 },
      borderWidth:  { type: Number, default: 6 },
      gap: { type: Number, default: 5 }
    },
    data () {
      return {
        step: 0,
        blocks: clone(initialBlocks)
      }
    },
    created () {
      storage.getItem(storageKey, event => {
        if (event.result) {
          const state = JSON.parse(event.data)
          this.step = state.step
          this.blocks = state.blocks
          storage.removeItem(storageKey)
        }
      })
    },
    computed: {
      wrapperStyle () {
        return {
          padding: this.gap + 'px',
          borderWidth: this.borderWidth + 'px',
          width: this.meshSize * 4 + this.gap * 2 + 'px',
          height: this.meshSize * 5 + this.gap * 2 + 'px'
        }
      },
      blockStyle () {
        return this.blocks.map(block => ({
          borderWidth: this.borderWidth + 'px',
          left: block.origin[0] * this.meshSize + this.gap + 'px',
          top: block.origin[1] * this.meshSize + this.gap + 'px',
          width: block.size[0] * this.meshSize - this.gap * 2 + 'px',
          height: block.size[1] * this.meshSize - this.gap * 2 + 'px'
        }))
      },
      stickStyle () {
        return {
          width: this.meshSize * 2 + 'px',
          height: this.borderWidth + this.gap + 'px',
          left: this.meshSize + this.gap + 'px',
          top: this.meshSize * 5 + 'px',
        }
      },
      isWin () {
        const CaoCao = this.blocks.find(x => !!x.isBoss)
        return CaoCao.origin[0] === 1 && CaoCao.origin[1] === 3
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
      move (block, event) {
        if (this.isWin) return
        const target = block.origin.slice()
        switch (event.direction) {
          case 'left': target[0] = Math.max(target[0] - 1, 0); break
          case 'right': target[0] = Math.min(target[0] + 1, 4 - block.size[0]); break
          case 'up': target[1] = Math.max(target[1] - 1, 0); break
          case 'down': target[1] = Math.min(target[1] + 1, 5 - block.size[1]); break
        }
        // modal.toast({ message: `move ${event.direction}` })
        if (!this.isOverlap(block, target)) {
          this.step++
          block.origin = target
        } else {
          // modal.toast({ message: `Can't move to there!`, duration: 0.5 })
        }
      },
      archive () {
        const state = { step: this.step, blocks: this.blocks }
        storage.setItem(storageKey, JSON.stringify(state), event => {
          if (event.result) {
            modal.toast({ message: `Current game state is archived!` })
          }
        })
      },
      reset () {
        this.step = 0
        this.blocks = clone(initialBlocks)
        storage.removeItem(storageKey)
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
    color: rgb(214, 111, 30);
    text-align: center;
    font-weight: bold;
  }
  .subtitle {
    font-size: 26px;
    color: rgba(214, 111, 30, 0.8);
    text-align: center;
  }
  .tips {
    width: 600px;
    font-size: 30px;
    color: rgba(214, 111, 30, 0.8);
    text-align: center;
  }
  .board {
    position: relative;
    border-color: #B37E47;
    background-color: #EEDDCC;
  }
  .stick {
    position: absolute;
    background-color: #EEDDCC;
  }
  .result {
    position: absolute;
    background-color: rgba(26, 25, 31, 0.75);
    top: 0; bottom: 0;
    left: 0; right: 0;
    justify-content: center;
    align-items: center;
  }
  .win {
    font-size: 100px;
    font-weight: bold;
    color: #FF6666;
    text-align: center;
  }
  .block {
    position: absolute;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-style: solid;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    transition-property: top,left;
    transition-duration: 0.15s;
    transition-timing-function: ease-in-out;
  }
  .block-normal {
    border-color: #B37E47;
    background-color: #D5A471;
  }
  .block-boss {
    border-color: #BB3D3D;
    background-color: #DE6457;
  }
  .operations {
    flex-direction: row;
    justify-content: space-between;
  }
  .button {
    padding: 10px;
    margin: 10px;
    width: 140px;
    text-align: center;
  }
  .label {
    color: #FFF;
    font-size: 32px;
    border-width: 4px;
    border-radius: 8px;
    border-color: #DE6457;
    background-color: #EA7E72;
  }
  .step {
    font-size: 42px;
    color: #DE6457;
  }
  .name {
    text-align: center;
    font-size: 50px;
    color: #FFEFE0;
  }
</style>
