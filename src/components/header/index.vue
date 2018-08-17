<template>
  <div class="wrap">
     <div class="tophead">
       <div class="return" @click="goback">
         <i class="iconfont">&#xe60e;</i>
       </div>
       <div class="text">{{text}}</div>
     </div>
  </div>
</template>

<script>


export default {
  name: 'tophead',
  props: ['text'],
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
    goback(){
      this.$router.push(this.prvrouter||'/')
    }  
  },
  beforeRouteEnter (to, from, next) {   
    next(vm => {
    vm.prvrouter=from.fullPath
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.wrap
  width: 100%
  margin: auto
  .tophead
    width: 100%
    height: 100px
    margin: 0 auto
    background-color: #ffd161
    line-height: 100px
    display: flex
    .return
      width: 135px
      height: 100px
      text-align: center
      color: #666
      .iconfont
        font-size: 35px
    .text
      width: 450px
      height: 100px
      line-height: 100px
      font-size: 30px
      color: #666


</style>
