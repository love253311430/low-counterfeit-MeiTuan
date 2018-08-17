<template>
  <div class="bigbrand">
    <img :src="bigbrand" alt="">
    <div class="tabcont">
      <div class="tab" v-for="(item, index) in inner" :key="index">
        <div class="circle">
          <img :src="item.src" alt=""/>
          <div class="cirtitle">{{item.desc}}</div>
        </div>
        <div class="tabtit">{{item.tit}}</div>
        <div class="tabmoney">{{item.salse}}</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'bigbrand',
  data () {
    return {
      bigbrand: 'https://img.meituan.net/msmerchant/adec1bb8eea70f5a897b198fc76f945b4790795.jpg@380w_214h_1e_1c',
      inner: [
        {
          src: 'http://p1.meituan.net/xianfu/ffc4bbd8f2333b8b40cbb2dff621fa0155618.jpg@130w_130h_1e_1c',
          desc: '热卖推荐',
          tit: '新品美式至尊四拼比萨',
          salse: '¥100.23'
        },
        {
          src: 'http://p1.meituan.net/xianfu/baf364b5d9919aab0b0b633909f0c1e653368.jpg@130w_130h_1e_1c',
          desc: '新品上市',
          tit: '新诱惑十八鲜小龙虾焗饭',
          salse: '¥150.23'
        },
        {
          src: 'http://p1.meituan.net/xianfu/01e3126b69f7db26cf5ddfb012bec9d145810.jpg@130w_130h_1e_1c',
          desc: '热卖推荐',
          tit: '北京潮鸭比萨',
          salse: '¥79'
        }
      ]
    }
  },
  mounted(){
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.bigbrand
  width: 100%
  height: 480px
  margin: 0 auto
  position: relative
  overflow: hidden
  img
    display: block
    position: absolute
    width: 100%
    height: 480px
    z-index: -1
  .tabcont
    width: 710px
    height: 245px
    margin: 0 auto
    margin-top: 210px
    background-color: #fff
    display: flex
    justify-content: space-between
    .tab
      width: 33%
      height: 245px
      overflow: hidden
      position: relative
      z-index:1
      .circle
        width: 138px
        height: 138px
        margin: 0 auto
        margin-top: 20px
        img
          display: block
          width: 138px
          height: 138px
          border-radius:50%
        .cirtitle
          position: absolute
          width: 100px
          height: 30px
          border: 4px solid #fff790
          color: #fff790
          font-size: 12px
          background-color: #fff
          line-height: 30px
          text-align:center
          overflow: hidden
          text-overflow: ellipsis
          white-space: nowrap
          left: 0
          right: 0
          margin: 0 auto
          top: 130px 
      .tabtit
        width: 100%
        height: 25px
        margin: 0 auto
        text-align: center
        font-size: 18px
        color: #333
        line-height: 25px
        text-align:center
        overflow: hidden
        text-overflow: ellipsis
        white-space: nowrap
        margin-top: 15px
      .tabmoney
        width: 100%
        height: 50px
        margin: 0 auto
        text-align: center
        font-size: 20px
        color: red
        line-height: 50px
        text-align:center
        overflow: hidden
        text-overflow: ellipsis
        white-space: nowrap               
</style>
