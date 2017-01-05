<template>
  <div>
    <scroller>
      <div class="item" v-for="item in items">
        <div class="item-content">
          <div class="item-imgbox">
            <img class="item-img" :src="item.img">
          </div>
          <div class="item-info">
            <div class="item-info-detail">
              <text class="title">{{item.title}}</text>
              <div class="detail-info">
                <text class="desc">{{item.desc}}</text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </scroller>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        items: [
          {
            img: 'https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg',
            title: 'Who is Alan Mathison Turing?Who is Alan Mathison Turing?',
            desc: 'Alan Mathison Turing ( 23 June 1912 – 7 June 1954) was an English computer scientist, mathematician, logician, cryptanalyst and theoretical biologist. He was highly influential in the development of theoretical computer science, providing a formalisation of the concepts of algorithm and computation with the Turing machine, which can be considered a model of a general purpose computer.Turing is widely considered to be the father of theoretical computer science and artificial intelligence.'
          },{
            img: 'https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg',
            title: 'Who is Alan Mathison Turing?',
            desc: 'Alan Mathison Turing ( 23 June 1912 – 7 June 1954) was an English computer scientist, mathematician, logician, cryptanalyst and theoretical biologist. He was highly influential in the development of theoretical computer science, providing a formalisation of the concepts of algorithm and computation with the Turing machine, which can be considered a model of a general purpose computer.Turing is widely considered to be the father of theoretical computer science and artificial intelligence.'
          },{
            img: 'https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg',
            title: 'Who is Alan Mathison Turing?',
            desc: 'Alan Mathison Turing ( 23 June 1912 – 7 June 1954) was an English computer scientist, mathematician, logician, cryptanalyst and theoretical biologist. He was highly influential in the development of theoretical computer science, providing a formalisation of the concepts of algorithm and computation with the Turing machine, which can be considered a model of a general purpose computer.Turing is widely considered to be the father of theoretical computer science and artificial intelligence.'
          },{
            img: 'https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg',
            title: 'Who is Alan Mathison Turing?',
            desc: 'Alan Mathison Turing ( 23 June 1912 – 7 June 1954) was an English computer scientist, mathematician, logician, cryptanalyst and theoretical biologist. He was highly influential in the development of theoretical computer science, providing a formalisation of the concepts of algorithm and computation with the Turing machine, which can be considered a model of a general purpose computer.Turing is widely considered to be the father of theoretical computer science and artificial intelligence.'
          },{
            img: 'https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg',
            title: 'Who is Alan Mathison Turing?',
            desc: 'Alan Mathison Turing ( 23 June 1912 – 7 June 1954) was an English computer scientist, mathematician, logician, cryptanalyst and theoretical biologist. He was highly influential in the development of theoretical computer science, providing a formalisation of the concepts of algorithm and computation with the Turing machine, which can be considered a model of a general purpose computer.Turing is widely considered to be the father of theoretical computer science and artificial intelligence.'
          },{
            img: 'https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg',
            title: 'Who is Alan Mathison Turing?',
            desc: 'Alan Mathison Turing ( 23 June 1912 – 7 June 1954) was an English computer scientist, mathematician, logician, cryptanalyst and theoretical biologist. He was highly influential in the development of theoretical computer science, providing a formalisation of the concepts of algorithm and computation with the Turing machine, which can be considered a model of a general purpose computer.Turing is widely considered to be the father of theoretical computer science and artificial intelligence.'
          },{
            img: 'https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg',
            title: 'Who is Alan Mathison Turing?',
            desc: 'Alan Mathison Turing ( 23 June 1912 – 7 June 1954) was an English computer scientist, mathematician, logician, cryptanalyst and theoretical biologist. He was highly influential in the development of theoretical computer science, providing a formalisation of the concepts of algorithm and computation with the Turing machine, which can be considered a model of a general purpose computer.Turing is widely considered to be the father of theoretical computer science and artificial intelligence.'
          },{
            img: 'https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg',
            title: 'Who is Alan Mathison Turing?',
            desc: 'Alan Mathison Turing ( 23 June 1912 – 7 June 1954) was an English computer scientist, mathematician, logician, cryptanalyst and theoretical biologist. He was highly influential in the development of theoretical computer science, providing a formalisation of the concepts of algorithm and computation with the Turing machine, which can be considered a model of a general purpose computer.Turing is widely considered to be the father of theoretical computer science and artificial intelligence.'
          },{
            img: 'https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg',
            title: 'Who is Alan Mathison Turing?',
            desc: 'Alan Mathison Turing ( 23 June 1912 – 7 June 1954) was an English computer scientist, mathematician, logician, cryptanalyst and theoretical biologist. He was highly influential in the development of theoretical computer science, providing a formalisation of the concepts of algorithm and computation with the Turing machine, which can be considered a model of a general purpose computer.Turing is widely considered to be the father of theoretical computer science and artificial intelligence.'
          },{
            img: 'https://img.alicdn.com/tps/TB1z.55OFXXXXcLXXXXXXXXXXXX-560-560.jpg',
            title: 'Who is Alan Mathison Turing?',
            desc: 'Alan Mathison Turing ( 23 June 1912 – 7 June 1954) was an English computer scientist, mathematician, logician, cryptanalyst and theoretical biologist. He was highly influential in the development of theoretical computer science, providing a formalisation of the concepts of algorithm and computation with the Turing machine, which can be considered a model of a general purpose computer.Turing is widely considered to be the father of theoretical computer science and artificial intelligence.'
          }
        ]
      }
    }
  }
</script>

<style scoped>
.item {
  padding: 20px;
  height: 220px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #efefef;
}
.item-content {
  flex-direction: row;
  width: 710px;
  background-color: #ffffff;
}
.item-imgbox {
  height: 180px;
  width: 180px;
  margin-right: 20px;
}
.item-img {
  width: 180px;
  height: 180px;
}
.item-info {
  height: 180px;
  width: 510px;
  justify-content: center;
  position: relative;
}
.item-info-detail {
  position: relative;
  color: #A2A2A2;
}
.desc {
  lines: 4;
  text-overflow: ellipsis;
  font-size: 26px;
  line-height: 30px;
  color: #A2A2A2;
}
.title {
  lines: 1;
  text-overflow: ellipsis;
  font-size: 32px;
  color: #2D2D2D;
  line-height: 40px;
}
.detail-info {
  margin-top: 15px;
}
.up {
  width: 70px;
  height: 70px;
  position: fixed;
  right: 20px;
  bottom: 20px;
}
.img {
  width: 70px;
  height: 70px;
}
</style>
