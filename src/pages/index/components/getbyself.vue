<template>
  <div class="getbyself">
    <div class="istit">
      <span class="istitl">
        到店自取
      </span>
      <span class="istitr">
        极速取餐，同享优惠
      </span>
    </div>
    <div class="swipercont">
      <swiper :options="swiperOption" >
        <swiper-slide class="adswiperitem"  v-for="(item, index) in banner" :key="index">
          <div class="imgbanner">
            <img :src="item.src" alt="">
          </div>
          <div class="imgtxtc">
            <div class="title">{{item.name}}</div>
            <div class="meter">
              <div class="content">
                <div class="contleft">{{item.meter}}米</div>
                <div class="contright">省{{item.save}}元配送费</div>
              </div>
            </div>
            <div class="metb">
              <div class="items"  v-for="(itemc, index) in item.tags" :key="index">{{itemc}}</div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'getbyself',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 'auto'
      },
      banner: [{
        src: 'http://p0.meituan.net/0.84.63/xianfu/aa86bc1b9a218ea5e094b861c03b59b94873.jpg.webp',
        name: '上海麦当劳秣陵路餐厅',
        meter: '55',
        save: '3.3',
        tags: ['牌', '折', '新']
      },
      {
        src: 'http://p1.meituan.net/waimaipoi/f49c565f3c4d51fda6c40a29ca6ff05e16938.jpg.webp',
        name: '肯德基宅急送（南广场店）',
        meter: '155',
        save: '3.3',
        tags: ['牌']
      },
      {
        src: 'http://p0.meituan.net/business/b0b68569de993e8d57344de78e9a5ca0256141.png.webp',
        name: '红子鸡（澳门路店）',
        meter: '155',
        save: '7',
        tags: ['折', '新']
      },
      {
        src: 'http://p0.meituan.net/waimaipoi/d28266abdc3a2642f912f7f79ff3da9e73348.jpg.webp',
        name: '耳光馄饨（安远路店）',
        meter: '55',
        save: '3.3',
        tags: []
      },
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
.getbyself
 width: 100%
 height: 300px
 box-sizing: border-box
 margin: 0 auto
 overflow: hidden
 .istit
    width: 100%
    height: 75px
    font-size: 40px
    color: #000
    font-weight: bold
    line-height: 75px
    display:flex
    align-items: bottom
    box-sizing: border-box 
    padding: 0px 25px
    .istitr
      height: 75px
      line-height: 75px
      font-size: 20px
      color: #333
      display: block
      margin-left: 10px 
  .swipercont
    width: 100%
    height: 210px
    .adswiperitem
      width: 485px !important
      height: 210px 
      margin-right: 15px
      display: flex
      align-items: center 
      .imgbanner
        width: 138px
        height: 138px
        border: 1px solid #eee
        margin-left: 15px
        img 
          width: 100%
          height:100%
      .imgtxtc
        width: 300px
        height: 138px
        margin-left: 10px
        .title
          width: 100%
          height: 48px
          font-size: 35px
          white-space: nowrap
          overflow: hidden
          text-overflow: ellipsis
          font-weight: bold
          line-height: 48px
          color: #bbb
        .meter
          width: 100%
          height: 45px
          display: flex
          align-items: center
          .content
            width: 95%
            height: 30px
            display: flex
            .contleft
              width:35%
              height 30px
              box-size: border-box
              background-color: #ffd161
              line-height: 30px
              font-size: 12px
              text-align: center
              white-space: nowrap
              overflow: hidden
              text-overflow: ellipsis
            .contright
              width: 65%
              height: 30px
              box-sizing: border-box
              background-color: #fff6df
              border: 1px solid #ffc948
              color: #ffc948
              line-height: 28px
              text-align: center
              font-size: 12px
              white-space: nowrap
              overflow: hidden
              text-overflow: ellipsis
        .metb
          width: 100%
          height: 45px
          display: flex
          align-items: center
          .items
            width: 30px
            height: 30px
            font-size: 12px
            color: #ffffff
            font-weight: bold
            line-height: 30px
            margin-right: 8px    
            background-color: #c182e2
            text-align: center
          .items:first-child
            background-color: #fa6359

</style>
