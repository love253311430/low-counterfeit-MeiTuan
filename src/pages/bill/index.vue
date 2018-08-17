<template>
  <div class="wrap">
       bill
  </div>
</template>

<script>
export default {
  name: 'bill',
  data () {
    return {
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (vm.$store.getters.userId === '') {
        vm.$router.push({ path: 'login' })
      }
    })
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
  background: red

</style>
