<template>
  <div>
    <recycle-list class="list" :list-data="longList" alias="item" template-key="type" append="tree">
      <cell-slot template-type="tab" class="tab-cell row">
        <div class="tab" v-for="(tab, t) in item.tabs" :key="t">
          <image class="tab-icon" :src="tab.icon"></image>
          <text class="tab-title">{{tab.title}}</text>
        </div>
      </cell-slot>
      <cell-slot template-type="banner" class="banner-cell">
        <image class="banner-image" :src="item.src"></image>
      </cell-slot>
      <cell-slot template-type="apps" class="app-cell row">
        <div class="app-box"  v-for="(app, a) in item.apps" :key="a">
          <image class="app-icon" :src="app.icon"></image>
          <text class="app-title">{{app.title}}</text>
        </div>
      </cell-slot>
      <cell-slot template-type="card" class="card-cell">
        <div class="card">
          <div style="height:60px;padding-left:30">
            <image class="card-banner" src="//img.alicdn.com/tfs/TB1moeURFXXXXasXXXXXXXXXXXX-390-105.png"></image>
          </div>
          <div class="row" style="padding-bottom:18px">
            <div class="card-side">
              <image class="card-poster" :src="item.poster"></image>
            </div>
            <div class="card-message">
              <text class="card-title">{{item.title}}</text>
              <div class="card-line row">
                <image class="card-icon" src="//ossgw.alicdn.com/img/upload/0a4946e164acd1f81e97ddbc048afcc5/Group13-69-69.png@22w_22h_80Q.png"></image>
                <text class="card-subtitle">{{item.subtitle1}}</text>
              </div>
              <div class="card-line row">
                <image class="card-icon" src="//ossgw.alicdn.com/img/upload/0a4946e164acd1f81e97ddbc048afcc5/Group13-69-69.png@22w_22h_80Q.png"></image>
                <text class="card-subtitle">{{item.subtitle2}}</text>
              </div>
              <div class="card-progress row">
                <div class="card-progress-inner"></div>
                <text class="card-got">已抢 {{item.got}} 件</text>
                <text class="card-remain">{{item.progress}} %</text>
              </div>
              <div class="card-info row">
                <text class="card-price">¥ {{item.price.real}}</text>
                <text class="card-sale-price">¥ {{item.price.sale}}</text>
                <div class="card-btn">
                  <text class="card-btn-text">马上抢</text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </cell-slot>
      <cell-slot template-type="floor" class="floor-cell">
        <div class="floor">
          <text class="floor-title">{{item.title}}</text>
          <text class="floor-desc" lines="2">{{item.desc}}</text>
          <div class="floor-image-box row">
            <image class="floor-image" :src="source" v-for="(source, x) in item.pictures" :key="x" />
          </div>
          <text class="floor-comment" v-if="item.count">{{item.count}} 人说好</text>
        </div>
      </cell-slot>
    </recycle-list>
  </div>
</template>

<script>
  const dataset = {
    apps: [{
      type: 'apps',
      apps: [
        { title: '热门搭配', icon: 'https://gw.alicdn.com/tfs/TB1wKS.h8fH8KJjy1XbXXbLdXXa-140-140.png_150x10000.jpg' },
        { title: '网红大衣', icon: 'https://gw.alicdn.com/tfs/TB1oM1qaMvD8KJjy0FlXXagBFXa-140-140.png_150x10000.jpg' },
        { title: '四件套', icon: 'https://gw.alicdn.com/tfs/TB1Oiz0b22H8KJjy0FcXXaDlFXa-140-140.png_150x10000.jpg' },
        { title: '人气彩妆', icon: 'https://gw.alicdn.com/tfs/TB1LhJzQFXXXXabXXXXXXXXXXXX-140-140.png_150x10000.jpg' }
      ]
    }, {
      type: 'apps',
      apps: [
        { title: '红人新品', icon: 'https://gw.alicdn.com/tfs/TB1L5upaH_I8KJjy1XaXXbsxpXa-140-140.png_150x10000.jpg' },
        { title: '网红拖鞋', icon: 'https://gw.alicdn.com/tfs/TB1w.ocb3DD8KJjy0FdXXcjvXXa-140-140.png_150x10000.jpg' },
        { title: '腔调掌柜', icon: 'https://img.alicdn.com/tfs/TB1sWLoRVXXXXbdXXXXXXXXXXXX-140-140.png' },
        { title: '时尚新品', icon: 'https://gw.alicdn.com/tfs/TB10.R_SpXXXXbtXXXXXXXXXXXX-140-140.png' }
      ]
    }, {
      type: 'apps',
      apps: [
        { title: '潮流穿搭', icon: 'https://img.alicdn.com/tfs/TB1fRVASpXXXXXdXXXXXXXXXXXX-140-140.png' },
        { title: '暖心好物', icon: 'https://img.alicdn.com/tfs/TB1_TkdPVXXXXcJXXXXXXXXXXXX-140-140.png' },
        { title: '明星面膜', icon: 'https://img.alicdn.com/tps/TB1goZhPXXXXXXfXpXXXXXXXXXX-118-118.png_170x120Q50s50.jpg' },
        { title: '彩妆香氛', icon: 'https://img.alicdn.com/tps/TB1zUTQPXXXXXaZaXXXXXXXXXXX-118-118.png_170x120Q50s50.jpg' }
      ]
    }],
    tab: [{
      type: 'tab',
      tabs: [
        { title: '首页', icon: 'https://gw.alicdn.com/tfs/TB19YESOVXXXXaNaXXXXXXXXXXX-45-45.png' },
        { title: '耍帅', icon: 'https://gw.alicdn.com/tfs/TB1I2E9OVXXXXbFXVXXXXXXXXXX-45-45.png' },
        { title: '旅行', icon: 'https://gw.alicdn.com/tfs/TB1gUhyPXXXXXX5XXXXXXXXXXXX-45-45.png' },
        { title: '潮玩', icon: 'https://img.alicdn.com/tfs/TB1D4RzQFXXXXcoXpXXXXXXXXXX-45-45.png' },
        { title: '穿搭', icon: 'https://gw.alicdn.com/tfs/TB1N1.6OVXXXXXqaXXXXXXXXXXX-45-45.png' }
      ]
    }],
    banner: [
      { type: 'banner', src: 'https://img.alicdn.com/imgextra/i4/184/TB2LPjVhMLD8KJjSszeXXaGRpXa_!!184-0-luban.jpg_q50.jpg' },
      { type: 'banner', src: 'https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg' },
      { type: 'banner', src: 'https://aecpm.alicdn.com/simba/img/TB14ab1KpXXXXclXFXXSutbFXXX.jpg_q50.jpg' },
      { type: 'banner', src: 'https://img.alicdn.com/imgextra/i4/61/TB24IbTh3fH8KJjy1zcXXcTzpXa_!!61-0-yamato.jpg_q50.jpg' },
      { type: 'banner', src: 'https://gw.alicdn.com/imgextra/i2/145/TB24D30cMjN8KJjSZFkXXaboXXa_!!145-0-lubanu.jpg_q50.jpg' },
      { type: 'banner', src: 'https://gw.alicdn.com/imgextra/i3/161/TB2syUXcJLO8KJjSZPcXXaV0FXa_!!161-0-lubanu.jpg_q50.jpg' },
      { type: 'banner', src: 'https://gw.alicdn.com/imgextra/i4/167/TB2wrL8h26H8KJjSspmXXb2WXXa_!!167-0-lubanu.jpg_q50.jpg' },
      { type: 'banner', src: 'https://gw.alicdn.com/imgextra/i2/25/TB2GgAmhS_I8KJjy0FoXXaFnVXa_!!25-0-lubanu.jpg_q50.jpg' },
      { type: 'banner', src: 'https://gw.alicdn.com/imgextra/TB2uQAFhb_I8KJjy1XaXXbsxpXa_!!89-0-lubanu.jpg_q50.jpg' },
      { type: 'banner', src: 'https://img.alicdn.com/simba/img/TB19heYdwn.PuJjSZFkSuw_lpXa.jpg_q50.jpg' },
      { type: 'banner', src: 'https://aecpm.alicdn.com/simba/img/TB14ab1KpXXXXclXFXXSutbFXXX.jpg_q50.jpg' },
      { type: 'banner', src: 'https://img.alicdn.com/imgextra/i1/174/TB2xzb0eOqAXuNjy1XdXXaYcVXa_!!174-0-luban.jpg_q50.jpg' },
      { type: 'banner', src: 'https://gw.alicdn.com/imgextra/TB27XSvg6nD8KJjSspbXXbbEXXa_!!12-0-lubanu.jpg_q50.jpg' },
      { type: 'banner', src: 'https://gw.alicdn.com/imgextra/TB2cF.xfTnI8KJjSszbXXb4KFXa_!!112-0-lubanu.jpg_q50.jpg' },
      { type: 'banner', src: 'https://gw.alicdn.com/imgextra/TB2ZweVg9_I8KJjy0FoXXaFnVXa_!!158-0-lubanu.jpg_q50.jpg' },
      { type: 'banner', src: 'https://gw.alicdn.com/imgextra/TB2O_AKctHO8KJjSZFtXXchfXXa_!!53-0-lubanu.jpg_q50.jpg' }
    ],
    floor: [
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
      }, {
        type: 'floor',
        title: '提高品质生活，从用好水开始',
        desc: '我们生活中每天都要喝水、用水，可是你真的喝到、用到好水了么？为了得到更高品质的生活，我们需要更多的好东西让我们的生活更有档次，那不如就从改变你每天都要亲密接触的水开始吧',
        pictures: [
          'https://gw.alicdn.com/imgextra/i2/1904229646/TB2dRg4dgoQMeJjy0FpXXcTxpXa_!!1904229646-2-daren.png_250x250.jpg',
          'https://gw.alicdn.com/imgextra/i1/1904229646/TB2JtOjfOAKL1JjSZFoXXagCFXa_!!1904229646-2-daren.png_250x250.jpg',
          'https://gw.alicdn.com/imgextra/i1/1904229646/TB2BSXjdwsSMeJjSspeXXa77VXa_!!1904229646-2-daren.png_250x250.jpg'
        ],
        count: 74,
      }, {
        type: 'floor',
        title: '酒鬼到了意大利，收不住的红酒心',
        desc: '意大利是一个集古典与艺术于一身的国度，这里是艺术的发源地之一，也是欧洲最早种植葡萄的国家之一。意大利的酿酒历史超过4000年，本地葡萄品种过千不止，古希腊人称其为“葡萄酒之国”',
        pictures: [
          'https://gw.alicdn.com/imgextra/i1/2872639756/TB21lwtXjihSKJjy0FiXXcuiFXa_!!2872639756-0-daren.jpg_250x250q90s200.jpg',
          'https://gw.alicdn.com/imgextra/i1/2872639756/TB2zgRJdwMPMeJjy1XdXXasrXXa_!!2872639756-0-daren.jpg_250x250q90s200.jpg',
          'https://gw.alicdn.com/imgextra/i2/2872639756/TB2Ki0NdBUSMeJjSspfXXX0VFXa_!!2872639756-0-daren.jpg_250x250q90s200.jpg'
        ],
        count: 182,
      }
    ],
    card: [
      {
        type: 'card',
        poster: 'http://gw.alicdn.com/tps/i4/1611893164/TB2t4mtXJqUQKJjSZFIXXcOkFXa_!!0-juitemmedia.jpg_320x320q80s150.jpg',
        title: '澳洲牛排10份装送刀叉酱料黄油',
        subtitle1: '送平底锅前3000仅78',
        subtitle2: '私厨经典 镇店套餐',
        got: 173,
        progress: 35,
        price: { real: 108, sale: 240.00 }
      }, {
        type: 'card',
        poster: 'http://gw.alicdn.com/tps/i2/2838892713/TB2ma39aqmgSKJjSsphXXcy1VXa_!!0-juitemmedia.jpg_320x320q80s150.jpg',
        title: 'HUAWEI P10',
        subtitle1: '买赠好礼6期免息',
        subtitle2: '6期免息',
        got: 996,
        progress: 89,
        price: { real: 3488, sale: 3488.00 }
      }, {
        type: 'card',
        poster: 'http://gw.alicdn.com/tps/i3/902257410/TB2pzypfU3IL1JjSZFMXXajrFXa_!!0-juitemmedia.jpg_320x320q80s150.jpg',
        title: '海宁真皮皮衣男绵羊皮夹克外套',
        subtitle1: '店内领券下单438',
        subtitle2: '限送500双皮手套',
        got: 296,
        progress: 16,
        price: { real: 538, sale: 3080.00 }
      }, {
        type: 'card',
        poster: 'https://gw.alicdn.com/tps/i4/0/TB2Mx3Jg4TI8KJjSspiXXbM4FXa_!!0-juitemmedia.jpg_320x320q80s150.jpg',
        title: '玛丽黛佳元气风动三色腮红正品',
        subtitle1: '满108领券立减10元',
        subtitle2: '宛若天生粉红好气色',
        got: 1457,
        progress: 61,
        price: { real: 49, sale: 69.80 }
      }, {
        type: 'card',
        poster: 'https://gw.alicdn.com/tps/i2/0/TB2i25DgN6I8KJjSszfXXaZVXXa_!!0-juitemmedia.jpg_320x320q80s150.jpg',
        title: '王小二高山脐橙，酸甜如初恋',
        subtitle1: '前3分钟半价',
        subtitle2: 'VC仓库，酸甜如初恋',
        got: 598,
        progress: 42,
        price: { real: 29.8, sale: 56.10 }
      }
    ]
  }

  // generate list data
  function createListData (order) {
    var array = []
    var list = order.split(/[\s,]+/)
    for (var i = 0; i < list.length; ++i) {
      var candidates = dataset[list[i]]
      if (candidates) {
        var idx = Math.floor(Math.random() * candidates.length)
        array.push(candidates[idx])
      }
    }
    return array
  }

  export default {
    data () {
      const order = 'tab,banner,apps,apps,banner,card,floor,floor'
        + ',tab,apps,apps,banner,card,card,banner,floor,floor,floor'
        + ',tab,banner,card,apps,banner,card,floor,floor,floor,floor,floor'
        + ',tab,apps,banner,card,banner,floor,floor,floor'
        + ',tab,apps,apps,card,floor,card,banner,floor,floor'
        + ',tab,banner,card,apps,banner,card,floor,floor,floor,floor'
        + ',tab,apps,banner,card,card,apps,floor,floor,floor'
      return {
        longList: createListData(order)
      }
    }
  }
</script>

<style scoped>
  .list {
    width: 750px;
    background-color: #EFEFEF;
  }
  .row {
    flex-direction: row;
  }

  .tab-cell {
    justify-content: stretch;
    background-color: #f51438;
  }
  .tab {
    height: 120px;
    width: 150px;
    justify-content: center;
    align-items: center;
  }
  .tab-icon {
    width: 45px;
    height: 45px;
  }
  .tab-title {
    font-size: 28px;
    color: #FFF;
    margin-top: 10px;
  }

  .banner-image {
    width: 750px;
    height: 235px;
  }

  .app-cell { background-color: #FFF; }
  .app-box {
    width: 180px;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 15px;
    padding-right: 15px;
  }
  .app-title {
    width: 180px;
    font-size: 30px;
    text-align: center;
    padding-top: 15px;
    color: #999999;
  }
  .app-icon {
    width: 140px;
    height: 140px;
    margin-left: 20px;
  }

  .card {
    width: 710px;
    margin: 20px;
    background-color: #FFFFFF;
    border-radius: 15px;
  }
  .card-banner {
    width: 222px;
    height: 60px;
  }
  .card-side {
    padding: 20px;
  }
  .card-poster {
    width: 230px;
    height: 230px;
    margin-right: 20px;
  }
  .card-title {
    font-size: 26px;
    color: #666666;
    margin-top: 10px;
    padding-bottom: 6px;
  }
  .card-line {
    align-items: center;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .card-icon {
    width: 36px;
    height: 36px;
    margin-right: 8px;
  }
  .card-subtitle {
    font-size: 28px;
    color: #07152a;
  }
  .card-progress {
    flex-direction: row;
    align-items: center;
    width: 230px;
    height: 30px;
    background-color: #FEC1C1;
    border-radius: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .card-progress-inner {
    position: absolute;
    height: 30px;
    left: 0;
    border-radius: 20px;
    background-color: #ff3c32;
  }
  .card-got {
    position: absolute;
    left: 8px;
    line-height: 30px;
    color: #FFFFFF;
    font-size: 22px
  }
  .card-remain {
    position: absolute;
    right: 8px;
    line-height: 30px;
    color: #FFFFFF;
    font-size: 22px;
  }
  .card-info {
    width: 400px;
    flex-direction: row;
    align-items: flex-end;
  }
  .card-price {
    font-size: 52px;
    color: #ff3c32;
    margin-bottom: -10px;
    margin-top: 10px;
    margin-right: 8px;
  }
  .card-sale-price {
    font-size: 28px;
    color: #999999;
    text-decoration: line-through;
  }
  .card-btn {
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: #ff5d62;
    border-radius: 8px;
    width: 125px;
    height: 52px;
    justify-content: center;
  }
  .card-btn-text {
    color: #FFFFFF;
    font-size: 32px;
    text-align: center;
  }

  .floor {
    margin-bottom: 15px;
    background-color: #FFF;
  }
  .floor-title {
    font-size: 40px;
    text-align: center;
    padding-top: 35px;
    padding-bottom: 25px;
  }
  .floor-desc {
    lines: 2;
    color: #999;
    font-size: 30px;
    padding-left: 30px;
    padding-right: 30px;
  }
  .floor-image-box {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
  }
  .floor-image {
    width: 245px;
    height: 245px;
  }
  .floor-comment {
    color: #52bfe6;
    font-size: 32px;
    text-align: right;
    padding-right: 50px;
    margin-top: 25px;
    margin-bottom: 20px;
  }
</style>
