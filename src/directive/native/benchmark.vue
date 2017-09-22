<template>
  <list append="tree" style="background-color:#F5F5F5">
    <cell v-for="(item, index) in listData" :key="index">
      <line v-if="item.type === 'A'" :name="item.name" :kind="item.kind"></line>
      <floor v-if="item.type === 'floor'" :floor="item"></floor>
      <app-list v-if="item.type === 'app-list'" :apps="item.apps"></app-list>
    </cell>
  </list>
</template>

<style scoped>
  .line {
    font-size: 50px;
    text-align: center;
    padding-top: 15px;
    padding-bottom: 15px;
    color: #666666;
    background-color: #EEEEEE;
    margin-bottom: 10px;
  }
</style>

<script>
  import Line from './Line.vue'
  import Floor from './Floor.vue'
  import AppList from './AppList.vue'

  var lineData = [
    { type: 'A', name: 'Tom', kind: 'cat' },
    { type: 'A', name: 'Jerry', kind: 'mouse' }
  ]
  var floorData = [
    {
      type: 'floor',
      title: '就造专属感，给孩子寻个座椅好玩伴',
      desc: '犹记得儿时的风筝带着斑斓的色彩在天空飘过；那小河里躲迷藏的鱼虾，还待着小伙伴们一起去捕捉，如今的孩童没有了这些简单且纯粹的娱乐项目，生活在高楼城市中的他们，该当怎样度过自己的童年才是美好的？',
      pictures: [
        'https://gw.alicdn.com/tfscom/i3/48292642/TB29OtIakz_F1JjSZFkXXcCaXXa_!!48292642.jpg_250x250q90s200.jpg',
        'https://gw.alicdn.com/imgextra/i4/706778912/TB2hvwSXBvBIuJjy1zeXXbGBpXa_!!706778912-0-beehive-scenes.jpg_250x250q90s200.jpg',
        'https://gw.alicdn.com/imgextra/i3/706778912/TB2wX.fcxz9F1JjSZFsXXaCGVXa_!!706778912-0-beehive-scenes.jpg_250x250q90s200.jpg'
      ],
      count: 237,
    }, {
      type: 'floor',
      title: '睡袍穿不对，脱光也不媚！',
      desc: '“Ihatemynightgown（我讨厌我的睡袍）.”经典电影《罗马假日》中，赫本饰演的安妮公主躺在梦幻的宫廷大床上，抱怨她身上那华丽的大睡袍臃肿不便，为公主的浪漫逃逸埋下伏笔。想象一下，男朋友刚刚',
      pictures: [
        'https://gw.alicdn.com/imgextra/i3/3044653839/TB2a_nAXgsSMeJjSspdXXXZ4pXa_!!3044653839-0-daren.jpg_250x250q90s200.jpg',
        'https://gw.alicdn.com/imgextra/i1/3044653839/TB2qrPCXiERMeJjSspiXXbZLFXa_!!3044653839-0-daren.jpg_250x250q90s200.jpg',
        'https://gw.alicdn.com/imgextra/i1/3044653839/TB2ySjuXgsSMeJjSspeXXa77VXa_!!3044653839-0-beehive-scenes.jpg_250x250q90s200.jpg'
      ],
      count: 876,
    }, {
      type: 'floor',
      title: '上天入海？运动相机帮你搞定',
      desc: '现如今相机好像成为了我们每个人必不可少的装备，不管是专业的相机还是我们可拍照的手机，我们使用到它的频率也越来越高。为了追求更好的拍摄质量，人们似乎也愿意花更多的钱去购买好的拍摄装备',
      pictures: [
        'https://gw.alicdn.com/tfscom/i3/462856946/TB2VzQswB4lpuFjy1zjXXcAKpXa_!!462856946.jpg_250x250q90s200.jpg',
        'https://gw.alicdn.com/tfscom/i2/2811920170/TB2rCqHpVXXXXcZXpXXXXXXXXXX_!!2811920170.png_250x250.jpg',
        'https://gw.alicdn.com/imgextra/i4/836552381/TB2c1q3aZSfF1JjSsplXXbrKFXa_!!836552381-0-beehive-scenes.jpg_250x250q90s200.jpg'
      ],
      count: 59,
    }, {
      type: 'floor',
      title: '关于培根的那些事，教你吃得门清',
      desc: '培根一直被认为是早餐的头盘，早上烤两片面包，平底锅煎一片培根、一个鸡蛋，和生菜一起夹在面包中，有荤有素，就是一顿丰富美味的西式早餐。培根的英文名是“Bacon”，原意是烟熏的猪肋条肉，或烟熏背脊肉',
      pictures: [
        'https://gw.alicdn.com/imgextra/i2/603964020/TB24zFbarwTMeJjSszfXXXbtFXa_!!603964020-0-daren.jpg_250x250q90s200.jpg',
        'https://gw.alicdn.com/imgextra/i2/603964020/TB2txtdarsTMeJjy1zcXXXAgXXa_!!603964020-0-daren.jpg_250x250q90s200.jpg',
        'https://gw.alicdn.com/tfscom/i3/1635378022/TB2plKDbFXXXXaTXpXXXXXXXXXX-1635378022.jpg_250x250q90s200.jpg'
      ],
      count: 3576,
    }, {
      type: 'floor',
      title: '轻奢风来袭，皮艺床打造典雅居室',
      desc: '对于追求生活高品质感的小伙伴来说，皮艺家具是展现其高格调的途径之一。想要营造出奢华质感的卧室环境，大气庄重的皮床当然是不错的选择。特别是简欧风或是美式古典风格的家居环境，如果配以皮艺床简直就是点睛之笔',
      pictures: [
        'https://gw.alicdn.com/imgextra/i2/787557947/TB2erNKawoQMeJjy0FoXXcShVXa_!!787557947-0-beehive-scenes.jpg_250x250q90s200.jpg',
        'https://gw.alicdn.com/imgextra/i1/787557947/TB2KANyaBUSMeJjy1zkXXaWmpXa_!!787557947-0-beehive-scenes.jpg_250x250q90s200.jpg',
        'https://gw.alicdn.com/imgextra/i3/787557947/TB2lwdGayERMeJjy0FcXXc7opXa_!!787557947-0-beehive-scenes.jpg_250x250q90s200.jpg'
      ],
      count: 36,
    }
  ]
  var appListData = [
    {
      type: 'app-list',
      apps: [
        {
          title: 'AAAA',
          icon: 'http://img.alicdn.com/tfs/TB1sWLoRVXXXXbdXXXXXXXXXXXX-140-140.png',
        }, {
          title: 'BBBB',
          icon: 'http://gw.alicdn.com/tfs/TB10.R_SpXXXXbtXXXXXXXXXXXX-140-140.png',
        }, {
          title: 'CCCC',
          icon: 'http://img.alicdn.com/tfs/TB1fRVASpXXXXXdXXXXXXXXXXXX-140-140.png',
        }, {
          title: 'DDDD',
          icon: 'http://img.alicdn.com/tfs/TB1_TkdPVXXXXcJXXXXXXXXXXXX-140-140.png',
        }
      ]
    }
  ]
  // generate list data
  function createListData (count) {
    var array = []
    var candidates = [lineData, floorData, appListData]
    while (count--) {
      candidates.forEach(dataType => {
        var i = Math.floor(Math.random() * dataType.length)
        array.push(dataType[i])
      })
    }
    return array
  }

  export default {
    components: { Line, Floor, AppList },
    data () {
      return {
        listData: createListData(80)
      }
    }
  }
</script>
