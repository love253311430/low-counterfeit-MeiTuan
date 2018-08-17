<template>
  <div class="isforyou">
    <div class="istit">
      <span class="istitl">
        为你优选
      </span>
      <span class="istitr">
        更多
        <i class="iconfont">&#xe602;</i>
      </span>
    </div>
    <div class="isdpwrap">
      <div class="iscont"  v-for="(item, index) in banner" :key="index">
        <div class="isimg">
          <img class="isimgt" :src="item.src" alt=""/>
          <div class="isimgbanner">
            <img  :src="item.bansrc" alt=""/>
          </div>
        </div>
        <div class="istxt">{{item.name}}</div>
        <div class="istxtn">{{item.desc}}</div>
      </div> 
    </div>
    <div class="onlyimg">
      <img :src="item" alt=""  v-for="(item, index) in onlyimg" :key="index">
    </div>
  </div>
</template>

<script>


export default {
  name: 'isforyou',
  data () {
    return {
     banner: [
      {src:'https://img.meituan.net/100.100.90/wmproduct/7571c60d46e37f25e901fdbc901f10c9331506.jpg',
       bansrc:'http://p0.meituan.net/0.84.63/xianfu/aa86bc1b9a218ea5e094b861c03b59b94873.jpg.webp',
       name:'水煮鱼',
       desc:'根据你看过的店铺推荐'
      },
      {src:'https://img.meituan.net/100.100.90/wmproduct/aafc67f839e8ef472a442ce7724b79c2399495.jpg',
       bansrc:'http://p0.meituan.net/waimaipoi/e791777e0dff217ca2bb597fce794a5b39675.jpg.webp',
       name:'水煮鱼',
       desc:'根据你看过的店铺推荐'
      },
      {src:'https://img.meituan.net/100.100.90/xianfu/f2e6e98b8b7aa8c6e492a4c9d8505bfc160893.jpg',
       bansrc:'http://p0.meituan.net/waimaipoi/bb32aca6f2814e3e9feae427dd366d0c128370.jpg.webp',
       name:'水煮鱼',
       desc:'根据你看过的店铺推荐'
      },
      {src:'https://img.meituan.net/100.100.90/xianfu/95adb3d2ba041df9fad7c897471b9ce3193626.jpg',
       bansrc:'http://p1.meituan.net/waimaipoi/11a4c4e2b96353909757e8da8724f1a723623.jpg.webp',
       name:'水煮鱼',
       desc:'明星李大宝曾经光顾过'
      }
     ],
     onlyimg: [
       'http://p1.meituan.net/msmerchant/908f12f7a575c462ce2f80bbf4c4e5672277015.jpg@368w_208h_1e_1c',
       'http://p0.meituan.net/msmerchant/3aaff07b539c19a9a9dbca1094d7ec4578338.jpg@368w_208h_1e_1c'
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
.isforyou
 width: 100%
 height: 915px
 box-sizing: border-box
 margin: 0 auto
 padding: 25px 25px
 .istit
    width: 100%
    height: 75px
    font-size: 40px
    color: #000
    font-weight: bold
    line-height: 75px
    display:flex
    justify-content: space-between
    align-items: bottom 
    .istitr
      height: 75px
      line-height: 75px
      font-size: 20px
      display: block
  .isdpwrap
    width: 100%
    height: 560px
    display: flex
    justify-content: space-between
    flex-wrap: wrap
    .iscont
      width: 340px
      height: 280px
      .isimg
        width: 340px
        height: 165px
        position: relative
        .isimgt
          width: 100%
          height: 100%
          display: block
        .isimgbanner
          position:absolute
          width: 88px
          height: 88px
          border-radius: 5px
          left: 18px
          bottom: -45px
          overflow: hidden
          img 
            display:block
            width: 100%
            height: 100%
      .istxt
        widows: 320px
        height: 45px
        text-align: left 
        line-height: 45px
        color: #333
        font-size: 25px
        white-space: nowrap
        overflow: hidden
        text-overflow: ellipsis
        font-weight: bold
        text-indent: 110px
      .istxtn
        widows: 320px
        height: 70px
        text-align: left 
        line-height: 70px
        color: #777
        font-size: 20px
        white-space: nowrap
        overflow: hidden
        text-overflow: ellipsis
        text-indent:18px  
  .onlyimg
    width: 100%
    height: 230px
    display: flex
    justify-content: space-between
    flex-wrap: wrap                         
    img
      display: block
      width: 340px
      height: 230px 



</style>
