<template>
  <div>
    <router-view/>
    <div class="tabbottom">
      <router-link  :to="{path: 'index'}" tag="div" class="tabitem">
        <div class="iconcont">
          <i class="iconfont activecont">&#xe600;</i>
        </div>
        <span>首页</span>
      </router-link>
     <router-link  :to="{path: 'bill'}" tag="div" class="tabitem">
        <div class="iconcont">
          <i class="iconfont">&#xe704;</i>
        </div>
        <span>订单</span>
     </router-link>
     <router-link  :to="{path: 'my'}" tag="div" class="tabitem">
        <div class="iconcont">
          <i class="iconfont">&#xe641;</i>
        </div>
        <span>我的</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .tabbottom
    position: absolute
    bottom: 0
    width: 100%
    height: 105px
    display: flex
    justify-content: space-between
    box-sizing: border-box
    padding: 0 100px
    border-top: 1px solid #999
    overflow: hidden
    .tabitem
      height: 104px
      width: 70px
      color: #999
      text-align: center
      padding: 0 30px
      .iconcont
       width: 100%
       height: 65px
       line-height: 65px
       .iconfont
          font-size: 35px
          display: inline-block
      span
        font-size: 24px
    .router-link-active
      span
       color: #131313
      .iconcont
       .iconfont
         color: #ffc53f
</style>
