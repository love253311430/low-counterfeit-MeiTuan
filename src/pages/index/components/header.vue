<template>
  <div class="headrwrap">
    <div :class="{ active: !isshow }" ref="foodsWrapper">
        <div class="headertop" ref="headertop">
          <div class="location">
              <i class="iconfont">&#xe601;</i>
              <span>
                  {{locationname}}
              </span>
              <i class="iconfont">&#xe602;</i>
          </div>
          <weather :isselect="code" :txt="txt" :templete="templete"/>
          <i class="iconfont message">&#xe672;</i>
      </div>
      <inputWrap :placeh="placeh" />
    </div>
    <div class="inputwrapn" v-if="!isshow" @click="gosearch" >
        <div class="inputcontn">
             <i class="iconfont" >&#xe617;</i> {{placeh}}
        </div>
    </div>
  </div>
</template>

<script>
import weather from './weather'
import inputWrap from './inputwrap'
import {getweather} from '@/api/getweather'

export default {
  name: 'headertop',
  components: {
    weather,
    inputWrap
  },
  data () {
    return {
      locationname: '获取城市中...',
      localcity: '',
      code: 999,
      txt: '',
      templete: '',
      placeh: '小杨生煎',
      isshow: true
    }
  },
  created () {
    let options = {
      enableHighAccuracy: true,
      maximumAge: 1000
    }
    navigator.geolocation.getCurrentPosition(this.onSuccess, this.onError, options)
  },
  mounted () {
    this.$nextTick(() => {
      document.querySelector(".wrap").addEventListener('scroll',()=>{
        this.Bounding()
      })
    })
  },
  methods: {
    Bounding: function () {
       let height = this.$refs.headertop.clientHeight
       let getBoundingClientRecttop = Math.abs(this.$refs.foodsWrapper.getBoundingClientRect().top)
       if(getBoundingClientRecttop>=height){
         this.isshow = false
       }else{
         this.isshow = true
       }
    },
    onSuccess: function (position) {
      let that = this
      var longitude = position.coords.longitude
      // 纬度
      var latitude = position.coords.latitude
      // 根据经纬度获取地理位置，不太准确，获取城市区域还是可以的
      var point = new BMap.Point(longitude, latitude)
      var gc = new BMap.Geocoder()
      gc.getLocation(point, function (rs) {
        var addComp = rs.addressComponents
        that.locationname = addComp.province + ', ' + addComp.city + ', ' + addComp.district + ', ' + addComp.street + ', ' + addComp.streetNumber
        that.localcity = addComp.city
        that.earnweather()
      })
    },
    onError: function () {
      this.locationname = '获取城市失败，点击重新获取'
    },
    earnweather: function () {
      let that = this
      getweather({
        'location': this.localcity,
        'key': '4a357543b4414777b39eb132ccb8701d',
        'username': 'HE1807251408461585',
        't': Math.floor((new Date()).getTime() / 1000)
      })
        .then(function (response) {
          let data = response.data.HeWeather6
          that.code = data[0].now.cond_code
          that.txt = data[0].now.cond_txt
          that.templete = data[0].now.tmp + '°C'
        })
        .catch(function (error) {
        })
    },
    gosearch(){
      this.$router.push({ path: 'searcher' })
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.headrwrap
  z-index: 5
  .active
    visibility: hidden
  .inputwrapn
    width: 100%
    height: 90px
    position: fixed
    z-index: 10
    top: 0px
    background-color: #fff
    margin: 0 auto
    padding: 0 20px
    box-sizing: border-box
    display: flex
    align-items: center
    .inputcontn
      width: 100%
      height: 60px
      border-radius: 9px
      background-color: #e1e1e1
      box-sizing: border-box
      padding: 0 10px
      line-height: 60px
      font-size: 20px
      color: #6c6c6c
      .iconfont
        font-size: 20px
        line-height:60px
  .headertop
    width: 100%
    height: 75px
    margin: 0 auto
    background-color: #ffc33a
    box-sizing: border-box
    padding: 0 20px
    display: flex
    justify-content:space-between
    .location
      width: 450px
      height: 75px
      font-size: 16px
      color: #333
      line-height: 75px
    .message
      width: 65px
      height: 75px
      line-height: 75px
      font-size: 40px
      text-align: center
</style>
