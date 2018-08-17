<template>
  <div class="inputwrap">
    <div class="inputcont" @click="gosearch">
      <i class="iconfont">&#xe617;</i> {{placeh}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'inputwrap',
  props: ['placeh'],
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
    gosearch(){
      this.$router.push({ path: 'searcher' })
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.inputwrap
  width: 100%
  height: 90px
  background-color: #ffc33a
  margin: 0 auto
  padding: 0 20px
  box-sizing: border-box
  .inputcont
    width: 100%
    height: 70px
    border-radius: 9px
    background-color: #fff
    box-sizing: border-box
    padding: 0 10px
    line-height: 70px
    font-size: 24px
    color: #888
    .iconfont
     font-size: 24px
     line-height:70px
</style>
