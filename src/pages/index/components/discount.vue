<template>
  <div class="discount">
    <div class="distit">
      优惠专区
    </div>
    <div class="distop">
      <img :src="imgsrc[0]" alt="" class="dsitem"/>
      <img :src="imgsrc[1]" alt="" class="dsitem"/>
    </div>
    <div class="disbtm">
      <img :src="imgsrc[2]" alt="" class="dsitemb"/>
      <img :src="imgsrc[3]" alt="" class="dsitemb"/>
      <img :src="imgsrc[4]" alt="" class="dsitemb"/>
      <img :src="imgsrc[5]" alt="" class="dsitemb"/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'discount',
  data () {
    return {
      imgsrc: [
        'https://s3plus-img.meituan.net/v1/mss_c4e301e8206f4e56bbb5f4fb85d0d48f/donation-bucket/MDpkb25hdGlvbi1idWNrZXQ65b6u5L-h5Zu-54mHXzIwMTgwNzI1MTgyODE2LmpwZzoyMDE4MDcyNTE4MzQzODpZVmFxbGNrZQ==@1200w_65q',
        'https://s3plus-img.meituan.net/v1/mss_c4e301e8206f4e56bbb5f4fb85d0d48f/donation-bucket/MDpkb25hdGlvbi1idWNrZXQ65b6u5L-h5Zu-54mHXzIwMTgwNzI1MTgxNzU0LmpwZzoyMDE4MDcyNTE4MzMwODpWQUd6YjE2Wg==@1200w_65q',
        'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg',
        'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg',
        'http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg',
        'http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg'
      ]
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.discount
  width: 100%
  height: 570px
  margin: 0 auto
  box-sizing: border-box
  padding: 0 25px
  padding-top: 25px
  .distit
    width: 100%
    height: 75px
    font-size: 40px
    color: #000
    font-weight: bold
    line-height: 75px
  .distop
    width: 100%
    height: 230px
    display: flex
    justify-content: space-between
    .dsitem
      width: 49%
      height: 220px
      display: block
  .disbtm
    height: 225px
    width: 100%
    display: flex
    justify-content: space-between
    .dsitemb
      width: 24%
      height: 225px
      display: block    
</style>
