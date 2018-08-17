<template>
  <div class="adswiper">
    <swiper :options="swiperOption" class="adswiperin" >
      <swiper-slide class="adswiperitem" v-for="(item,index) in swiperlength" :key="index">
        <div class="adone" v-for="(img,index) in item" :key="index" >
          <div class="zwimg">
            <img :src="img.src" />
          </div>
          <div class="zwtxt">
             {{img.txt}}
          </div> 
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper> 
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'adphoto',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
        },
      },
      swiperitem: [
        {
          src: 'http://p1.meituan.net/jungle/8b5e1702d4145ccf058ba5fb31008c5310912.png',
          go: '1',
          txt:'美食'
        },
        {
          src: 'http://p0.meituan.net/jungle/45ff2f098a20a77122bff8385192f0ec10547.png',
          go: '2',
          txt:'美团超市'
        },
        {
          src: 'http://p1.meituan.net/jungle/12a9834827909fa55f54bce96e67470711250.png',
          go: '3',
          txt:'生鲜果蔬'
        },
        {
          src: 'http://p1.meituan.net/jungle/da9181f93dd2e11c5d74cf685470408f10016.png',
          go: '4',
          txt:'美团专送'
        },
        {
          src: 'http://p1.meituan.net/jungle/8b635825ef28dd85f3d3f070de4e64ed9366.png',
          go: '5',
          txt:'午餐优选'
        },
        {
          src: 'http://p1.meituan.net/jungle/e54f1fe77b0588d2dfe82a12e424108a9450.png',
          go: '6',
          txt:'甜点饮品'
        },
        {
          src: 'http://p0.meituan.net/jungle/2ec76f8f4f21a4ec163adc7fccfa1a399428.png',
          go: '7',
          txt:'小吃馆'
        },
        {
          src: 'http://p0.meituan.net/jungle/2eee7747fd143249b100b9fa5ee5e31d9873.png',
          go: '8',
          txt:'家常菜'
        },
        {
          src: 'http://p1.meituan.net/jungle/8b5e1702d4145ccf058ba5fb31008c5310912.png',
          go: '9',
          txt:'美食'
        },
        {
          src: 'http://p1.meituan.net/jungle/8b5e1702d4145ccf058ba5fb31008c5310912.png',
          go: '10',
          txt:'美食'
        }
      ]
    }
  },
  computed: {
   swiperlength: function(){
     let array=[]
     let length = Math.floor(this.swiperitem.length/8)+1
     for(let i = 0; i<length; i++) {
       if((i+1)==length){
        array.push([...this.swiperitem.slice(i*8)])     
       }else{
         array.push([...this.swiperitem.slice(i*8,i+8)])
       }
     }
     return array
   }
  },
  mounted(){
  },
  methods: {
  }
}
// 这里做了扩展，会根据传过来的数据的多少先判断有几个swiper-slide，再进行数据渲染
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.adswiper
  width: 100%
  padding-top: 50%
  position:relative
  .adswiperin
    position: absolute
    width: 100%
    height: 100%
    left: 0
    top: 0
    .adswiperitem
      display: flex
      flex-wrap: wrap 
      .adone
        width: 25%
        height: 45%
        position: relative
        .zwimg
          width: 90px
          height: 90px
          position:absolute
          left: 0
          right: 0
          top: 0
          bottom: 0
          margin: auto
          img
            display: block
            width: 100%
            height: 100%
        .zwtxt
          width: 100%
          height: 35px
          line-height: 35px
          font-size: 18px
          text-align: center
          position: absolute
          bottom: 0px     
.adswiper >>> .swiper-pagination-bullet
    width: 25px
    height: 5px
    border-radius:5px
.adswiper >>> .swiper-pagination-bullet-active    
    background-color:#ffc642    
</style>
