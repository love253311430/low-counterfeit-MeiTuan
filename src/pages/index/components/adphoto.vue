<template>
  <div class="adphoto">
    <img :src="imgsrc" class="adphototrue" />
  </div>
</template>

<script>
export default {
  name: 'adphoto',
  data () {
    return {
      imgsrc: 'http://wx2.sinaimg.cn/crop.0.0.920.300/eb69bb9ely1fm9iwv4mxwj20pk08cwmi.jpg'
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.adphoto
  width: 100%
  height: 0px
  box-sizing: border-box
  padding-top:34%
  position: relative
  .adphototrue
   width: 90%
   height: 90%
   display: block
   position: absolute
   left: 0
   right: 0
   top: 0
   bottom: 0
   margin: auto
</style>
