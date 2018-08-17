<template>
  <div class="near">
    <div class="istit">
      <span class="istitl">
        附近商家
      </span>
    </div>
    <div class="sort">
      <div class="left">
        <div class="leftnav active">综合排序<i class="iconfont down">&#xe614;</i></div>
        <div class="leftnav">销量</div>
        <div class="leftnav">距离</div>
      </div>
      <div class="right">
        筛选
        <i class="iconfont">&#xe60d;</i>
      </div>
    </div>
    <div class="neartabs">
      <div class="tab">满减优惠</div>
      <div class="tab">美团专送</div>
      <div class="tab">点评高分</div>
      <div class="tab">新商家</div>
    </div>
    <ul ref="ulwrap">
      <li v-for="(item, index) in datalist" :key="index" >
        <div class="lileft">
          <img :src="item.brandimg" alt="">
          <span v-if="item.isbanrd">品牌</span>
        </div>
        <div class="liright">
          <div class="lrtopw">
            <div class="wrapleft">{{item.brandname}}</div>
            <div class="wrapright">
              <i class="iconfont">&#xe66a;</i>
            </div>
          </div>
          <div class="titwrapn">
            <star class="starclass" :score="item.score" :starstyle="starstyle"></star>
            <div class="score">{{item.score}}</div>
            <div class="sale">月售{{item.sales}}</div>
            <div class="meter">{{item.minute}}分钟|{{item.km}}km</div>
          </div>
          <div class="titwrapn">
            <div class="qs">
              起送¥{{item.qs}}   |  配送¥{{item.ps}}
            </div>
            <div class="zs" v-if="item.iszs">美团专送</div>
          </div>
          <div class="titwrapi">
           <i class="iconfont">&#xe628;</i><span>{{item.type}}</span><span>{{item.desc}}</span>
          </div>
          <tags :tags='item.tags'/>
        </div>
      </li>
      <li>
        <div class="lodingtxt" v-if="isloading">加载中</div>
      </li>
      <li>
        <div class="lodingtxt" v-if="!hasMore">到底啦</div>
      </li>
    </ul>       
  </div>
</template>

<script>
import star from '@/components/star/star'
import tags from './tags'
import { getlist } from '@/api/getlist'

export default {
  name: 'near',
  components:{
    star,
    tags
  },
  data () {
    return {
      starstyle:{
        wrapstyle:'',
        starstyle:'',
        width:'width1',
        starsize:24
      },
      turn:null,
      page:1,
      datalist:[],
      hasMore:true,
      isloading:false
    }
  },
  mounted(){
   this.makelist()
   this.$nextTick(() => {
      document.querySelector(".wrap").addEventListener('scroll',()=>{
         if(this.turn){
           clearTimeout(this.turn)
         }
         this.turn=setTimeout(this.Bounding,100)
      })
    })
  },
  methods: {
    makelist(){
      if(this.isloading||!this.hasMore){
        return false
      }
      let _this = this 
      this.isloading=true
      getlist({
        'page': this.page
      })
        .then(function (response) {
          let data = response.data
          _this.isloading=false
          _this.hasMore = data.hasMore
          _this.datalist=[... _this.datalist,...data.datalist]
           _this.page=_this.page+1
        })
        .catch(function (error) {
          _this.isloading= false
          _this.hasMore = true
        })
    },
    Bounding(){
     try
    {
      let getBoundingClientRectbottom = Math.abs(this.$refs.ulwrap.getBoundingClientRect().bottom)
      let height=window.screen.height
      let btmheight=document.querySelector(".tabbottom").scrollHeight
      if((getBoundingClientRectbottom+btmheight)<=height){
        this.makelist()
      }
    }
    catch(err)
    {
    }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.near
  width: 100%
  min-height: 75px
  box-sizing: border-box
  margin: 0 auto
  color: #555
  .istit
    width: 100%
    height: 75px
    font-size: 40px
    color: #000
    font-weight: bold
    line-height: 75px
    display:flex
    box-sizing: border-box
    align-items: bottom 
    padding: 0px 25px
  .sort
    width: 100%
    height: 75px
    margin: 0 auto
    padding: 0px 25px
    box-sizing: border-box
    display: flex
    justify-content: space-between
    .left
      width: 390px
      height: 75px
      display: flex
      .leftnav
        padding-right: 40px
        line-height: 75px
        font-size: 24px
        .down
          padding-left:5px
      .active
          color: #313131
    .right
      width: 150px
      height: 75px
      line-height: 75px
      font-size: 24px
      text-align: right   
  .neartabs
    width: 100%
    height: 65px
    margin: 0 auto
    display: flex
    padding: 0px 25px
    box-sizing: border-box
    justify-content: space-between
    .tab
      height: 65px
      width: 160px
      background-color: #f8f8f8
      line-height: 65px
      text-align: center
      font-size: 15px
      border-radius: 3px
  ul
    list-style: none
    margin: 0px !important
    padding: 0px
    li
      width: 100%
      display:flex
      box-sizing: border-box
      align-items: bottom 
      padding: 0px 25px
      justify-content: space-between
      margin-top: 20px
      .lodingtxt
        width: 100%
        height: 30px
        text-align: center
        line-height: 30px
      .lileft
        width: 160px
        height: 118px
        border: 1px solid #f3f3f3
        border-radius: 3px
        overflow: hidden
        position: relative
        img
          display: block
          width: 100%
          height: 100%
        span
          display: block
          position: absolute
          width: 50px
          height: 30px
          background-color: #fccf5d
          font-size: 14px
          color: #936302
          text-align: center
          line-height: 30px
          top: 0px
          right: 0px  
      .liright
        width: 520px
        min-height: 100px
        .lrtopw
          width: 520px
          height: 36px
          display: flex
          justify-content: space-between
          .wrapleft
            width: 440px
            height: 36px
            color: #2b2b2b
            font-size: 30px
            overflow: hidden
            text-overflow: ellipsis
            white-space: nowrap
            font-weight: bold 
          .wrapright
            width: 45px
            height: 36px
            font-size:35px
            color: #c3c3c3
            font-weight: bold
            text-align: right  
        .titwrapn
          width: 520px
          height: 50px 
          display: flex 
          align-items: center
          justify-content: space-between
          font-size: 12px
          color: #333
          line-height: 50px
          .score
            width: 60px
            text-align: left 
            height: 50px
            text-indent: 10px
            font-size: 12px
            color: #333
            line-height: 50px
          .sale
            width: 160px
            text-align: left 
            height: 50px
            text-indent: 10px
            font-size: 12px
            color: #333
            line-height: 50px
          .meter
            width: 170px
            text-align: right 
            height: 50px
            font-size: 12px
            color: #333
            line-height: 50px
          .qs
            width: 300px
            text-align: left 
            height: 50px
            font-size: 12px
            color: #333
            line-height: 50px
          .zs
            width: 100px
            text-align: center 
            height: 30px
            font-size: 12px
            color: #333
            line-height: 30px
            background-color: #fccf5d
            color: #936302          
        .titwrapi
          width: 520px
          height: 50px 
          display: flex        
          font-size: 12px
          color: #333
          line-height: 50px
          span
            text-indent: 10px



</style>
