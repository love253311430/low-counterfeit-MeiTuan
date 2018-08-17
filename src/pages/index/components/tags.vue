<template>
  <div class="tags">
    <div class="tagstop" v-for="(item, index) in LengArr" :key="index" v-if="index==0||show">
      <div class="items" >
        <div class="block"  v-for="(child, index) in item" :key="index" :class="style[child.type]">
          {{child.name}}
        </div>
      </div>
      <div class="below">
        <i class="iconfont" v-if="!show&&LengArr.length>1&&index==0" @click="setshow">&#xe614;</i>
        <i class="iconfont" v-if="show&&LengArr.length>1&&index==0" @click="sethide">&#xe692;</i>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'tags',
  props: {
    tags: {
    }
  },
  data () {
    return {
      show: false,
      style: {
        1: 'red',
        2: 'blue'
      }
    }
  },
  computed: {
    LengArr: function () {
      let tags = this.tags
      let length = Math.floor( tags.length/4) +1
      let arry = []
      for(let i = 0; i<length; i++) {
       if((i+1) == length){
        arry.push(tags.slice(i*4))     
       }else{
         arry.push(tags.slice(i*4,i+4))
       }
     }
     return arry
    }
  },  
  mounted () {
    
  },
  methods: {
    setshow() {
      this.show = true
    },
    sethide() {
      this.show = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.tags
  width: 520px
  font-size: 12px
  margin: 0 auto
  .tagstop
    width: 520px
    display: flex 
    align-items: center
    height:50px
    font-size: 12px
    margin: 0 auto
    justify-content: space-between
    .items
      width:490px 
      height:50px
      display: flex
      align-items: center
      .block
        padding: 0 3px
        text-align: center
        line-height: 30px
        font-size: 12px
        margin-right: 5px 
      .red
        color: #fa3024
        border: 1px solid #fa3024
      .blue
        clor: #3f8142
        border: 1px solid #3f8142
    .items .block:last-child
      margin-right: 0px!important    
    .below
      width:30px
      height: 50px  
      font-size: 20px
      color: #333
      text-align:right
      line-height: 50px
</style>
