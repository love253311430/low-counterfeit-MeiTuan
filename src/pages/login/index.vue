<template>
  <div class="wrap">
     <tophead text="登录"/>
  </div>
</template>

<script>
import tophead from '@/components/header/index'

export default {
  name: 'index',
  components: {
    tophead
  },
  data () {
    return {
      prevlogin:'/'
    }
  },
  created () {
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
  .formwrap
    width: 100% 
</style>
