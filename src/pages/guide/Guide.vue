<template>
  <scroller class="wrapper">
    <slider class="slider" auto-play="true">
      <div class="center"
        v-for="(item, i) in guideLessons"
        :key="item.subject"
        :style="{ backgroundColor: item.posterBg }"
        @click="lenssonIndex = i">
        <div class="center size">
          <image resize="cover" :style="item.posterStyle" :src="item.poster"/>
        </div>
        <text class="slider-title"
          :style="{ color: item.titleColor || item.mainColor }"
          >{{i18n(item.title)}}</text>
      </div>
      <indicator class="indicator"></indicator>
    </slider>
    <lesson
      :main-color="chosenLesson.mainColor"
      :title="chosenLesson.title"
      :lessons="chosenLesson.lessons"
      :copyright="chosenLesson.copyright" />
  </scroller>
</template>

<script>
  import Lesson from '../../components/Lesson.vue'
  export default {
    components: { Lesson },
    computed: {
      chosenLesson () {
        return this.guideLessons[this.lenssonIndex]
      }
    },
    watch: {
      lenssonIndex () {
        this.navigationBarOptions.backgroundColor = this.chosenLesson.mainColor
        this.navigationBarOptions.title = this.chosenLesson.title
      }
    }
  }
</script>

<style scoped>
  .size {
    width: 750px;
    height: 320px;
  }
  .center {
    align-items: center;
    justify-content: center;
  }
  .slider {
    width: 750px;
    height: 400px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    margin-bottom: 10px;
  }
  .slider-title {
    width: 750px;
    padding: 30px;
    padding-top: 0;
    font-size: 46px;
    text-align: center;
    color: #FFFFFF;
  }
  .indicator {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: 750px;
    height: 30px;
    itemSize: 12px;
    itemColor: #DDDDDD;
    itemSelectedColor: rgb(0, 180, 255);
  }
</style>
