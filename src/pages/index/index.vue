<template>
  <div class="wrap">
    <header-top/>
    <adphoto/>
    <adswiper/>
    <discount/>
    <isforyou/>
    <bigbrand/>
    <getbyself/>
    <near/>
  </div>
</template>

<script>
import headerTop from './components/header'
import adphoto from './components/adphoto'
import adswiper from './components/adswiper'
import discount from './components/discount'
import isforyou from './components/isforyou'
import bigbrand from './components/bigbrand'
import getbyself from './components/getbyself'
import near from './components/near'

export default {
  name: 'index',
  components: {
    headerTop,
    adphoto,
    adswiper,
    discount,
    isforyou,
    bigbrand,
    getbyself,
    near
  },
  data () {
    return {
    }
  },
  created () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.wrap
  box-sizing: border-box
  position: absolute
  left: 0
  right: 0
  top: 0
  bottom: 105px
  overflow: auto
</style>
