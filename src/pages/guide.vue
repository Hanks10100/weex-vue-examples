<template>
  <div class="wrapper">
    <slider class="slider" auto-play="true">
      <a class="center"
        v-for="item in sliders" :key="item.subject"
        :href="createLink(item.route, { subject: item.subject })"
        :style="{ backgroundColor: item.posterBg }">
        <div class="center size">
          <image resize="cover" :style="item.posterStyle" :src="item.poster"></image>
        </div>
        <text class="slider-title" :style="{ color: item.mainColor }">{{i18n(item.title)}}</text>
      </a>
      <indicator class="indicator"></indicator>
    </slider>
    <list>
      <cell class="center">
        <text class="title">{{i18n(title)}}</text>
      </cell>
      <cell class="center" v-for="(lesson, i) in lessons" :key="i">
        <div :class="['lesson', `lesson-${language}`]" @click="jumpTo(lesson.docLink)">
          <text :class="['lesson-index', `lesson-index-${language}`]">{{i + 1}}.</text>
          <text
            :class="['lesson-title', `lesson-title-${language}`]"
            :style="{ color: mainColor }"
            >{{i18n(lesson.title)}}</text>
        </div>
      </cell>
      <cell class="footer center">
        <text class="copyright">{{i18n(copyright)}}</text>
      </cell>
    </list>
  </div>
</template>

<script>
  const learnWeex = {
    mainColor: '#00B4FF',
    poster: 'https://gw.alicdn.com/tfs/TB17hlIdgoQMeJjy0FpXXcTxpXa-328-328.png',
    posterBg: '#E5F7FF',
    title: {
      zh: '学习 Weex',
      en: 'Learn Weex'
    },
    copyright: {
      zh: '来自 http://weex-project.io/cn/',
      en: 'From http://weex-project.io/'
    },
    lessons: [
      {
        title: {
          zh: '快速入门',
          en: 'Getting Started'
        },
        docLink: {
          zh: 'http://weex-project.io/cn/guide/index.html',
          en: 'http://weex-project.io/guide/index.html'
        }
      }, {
        title: {
          zh: '工作原理',
          en: 'How it Works'
        },
        docLink: {
          zh: 'http://weex-project.io/cn/wiki/index.html',
          en: 'http://weex-project.io/wiki/index.html'
        }
      }, {
        title: {
          zh: 'Weex 中的前端框架',
          en: 'Front-end Frameworks'
        },
        docLink: {
          zh: 'http://weex-project.io/cn/guide/front-end-frameworks.html',
          en: 'http://weex-project.io/guide/front-end-frameworks.html'
        }
      }, {
        title: {
          zh: '与 Web 平台的差异',
          en: 'Platform difference with Web'
        },
        docLink: {
          zh: 'http://weex-project.io/cn/wiki/platform-difference.html',
          en: 'http://weex-project.io/wiki/platform-difference.html'
        }
      }, {
        title: {
          zh: '集成 Weex 到已有应用',
          en: 'Integrate to Your App'
        },
        docLink: {
          zh: 'http://weex-project.io/cn/guide/integrate-to-your-app.html',
          en: 'http://weex-project.io/guide/integrate-to-your-app.html'
        }
      }, {
        title: {
          zh: '搭建开发环境',
          en: 'Set Up Dev Environment'
        },
        docLink: {
          zh: 'http://weex-project.io/cn/guide/set-up-env.html',
          en: 'http://weex-project.io/guide/set-up-env.html'
        }
      }, {
        title: {
          zh: '通用样式',
          en: 'Common Styles'
        },
        docLink: {
          zh: 'http://weex-project.io/cn/wiki/common-styles.html',
          en: 'http://weex-project.io/wiki/common-styles.html'
        }
      }, {
        title: {
          zh: '通用事件',
          en: 'Common Events'
        },
        docLink: {
          zh: 'http://weex-project.io/cn/wiki/common-events.html',
          en: 'http://weex-project.io/wiki/common-events.html'
        }
      }, {
        title: {
          zh: 'Weex 实例变量',
          en: 'The "weex" Variable'
        },
        docLink: {
          zh: 'http://weex-project.io/cn/references/weex-variable.html',
          en: 'http://weex-project.io/references/weex-variable.html'
        }
      }, {
        title: {
          zh: '内置组件',
          en: 'Built-in Components'
        },
        docLink: {
          zh: 'http://weex-project.io/cn/references/components/index.html',
          en: 'http://weex-project.io/references/components/index.html'
        }
      }, {
        title: {
          zh: '内置模块',
          en: 'Built-in Modules'
        },
        docLink: {
          zh: 'http://weex-project.io/cn/references/modules/index.html',
          en: 'http://weex-project.io/references/modules/index.html'
        }
      }, {
        title: {
          zh: 'Android 扩展',
          en: 'Extend Android'
        },
        docLink: {
          zh: 'http://weex-project.io/cn/guide/extend-android.html',
          en: 'http://weex-project.io/guide/extend-android.html'
        }
      }, {
        title: {
          zh: '扩展 iOS',
          en: 'Extend iOS'
        },
        docLink: {
          zh: 'http://weex-project.io/cn/guide/extend-ios.html',
          en: 'http://weex-project.io/guide/extend-ios.html'
        }
      }, {
        title: {
          zh: '使用 weex-toolkit',
          en: 'Using weex-toolkit'
        },
        docLink: {
          zh: 'http://weex-project.io/cn/tools/toolkit.html',
          en: 'http://weex-project.io/tools/toolkit.html'
        }
      }, {
        title: {
          zh: '如何参与贡献',
          en: 'How to Contribute'
        },
        docLink: {
          zh: 'http://weex-project.io/cn/contributing.html',
          en: 'http://weex-project.io/contributing.html'
        }
      }
    ]
  }
  export default {
    data () {
      return Object.assign({
        language: 'en',
        sliders: [{
          route: 'lesson',
          subject: 'vue',
          mainColor: '#42b983',
          title: { zh: '学习 Vue.js', en: 'Learn Vue.js' },
          poster: 'https://gw.alicdn.com/tfs/TB1J_uKcMMPMeJjy1XdXXasrXXa-400-400.png',
          posterBg: '#E7FBF2',
          posterStyle: {
            width: '300px',
            height: '300px'
          }
        }, {
          route: 'lesson',
          subject: 'javascript',
          mainColor: '#F7BD2A',
          title: { zh: '学习 Javascript', en: 'Learn Javascript' },
          poster: 'https://gw.alicdn.com/tfs/TB1bT98hMoQMeJjy0FpXXcTxpXa-1500-700.png',
          posterBg: '#FAF3EB',
          posterStyle: {
            width: '750px',
            height: '350px'
          }
        }, {
          route: 'lesson',
          subject: 'css',
          mainColor: '#FFFFFF',
          title: { zh: '学习 CSS', en: 'Learn CSS' },
          poster: 'https://gw.alicdn.com/tfs/TB1k6anhMMPMeJjy1XdXXasrXXa-427-190.jpg',
          posterBg: '#ffa2de',
          posterStyle: {
            width: '517px',
            height: '230px'
          }
        }]
      }, learnWeex)
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
  .title {
    font-size: 60px;
    text-align: center;
    margin-top: 60px;
    margin-bottom: 60px;
    color: #606060;
  }
  .lesson {
    /* height: 120px; */
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #EEEEEE;
    flex-direction: row;
    align-items: center;
  }
  .lesson-zh { width: 600px; }
  .lesson-en { width: 630px; }
  .lesson-index {
    color: #777777;
    text-align: right;
    padding-right: 30px;
  }
  .lesson-title {
    padding-top: 35px;
    padding-bottom: 35px;
  }
  .lesson-index-zh {
    font-size: 46px;
    width: 120px;
  }
  .lesson-title-zh {
    font-size: 42px;
    width: 480px;
  }
  .lesson-index-en {
    font-size: 42px;
    width: 100px;
  }
  .lesson-title-en {
    font-size: 38px;
    width: 530px;
  }
  .footer {
    height: 120px;
    padding-top: 40px;
  }
  .copyright {
    font-size: 22px;
    color: #A0A0A0;
    text-align: center;
  }
</style>
