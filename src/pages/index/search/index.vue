<template>
  <div class="search">
      <div class="searchtop">
          <div class="goback" @click="goback">
              <i class="iconfont">&#xe60e;</i>
          </div>
          <div class="searchwrap">
              <i class="iconfont icon">&#xe617;</i>
              <input class="search" placeholder="蛋糕" v-model="searchtxt" />
          </div>         
          <div class="gosearch" @click="search">搜索</div>
      </div>
      <div class="history">
          <div class="head">
              <div class="title">历史搜索</div> 
              <div class="icon" @click="remove"><i class="iconfont " >&#xe610;</i></div>
          </div>
          <div class="content">
              <div class="box" v-for="(item, index) in list" :key="index">{{item}}</div>
          </div>  
      </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'

export default {
  name: 'search',
  components: {
  },
  data () {
    return {
        prvrouter:'',
        searchtxt:'',
        list:[]
    }
  },
  created () {
      this.updatelist()   
  },
   methods: {
   goback(){
     this.$router.push(this.prvrouter||'/')
     //正常调回的写法参考官方。window.history.length > 1 ? this.$router.go(-1): this.$router.push('/')
   },
   search(){
       if(this.searchtxt!=''){
            this.setCookies(this.searchtxt)
            this.searchtxt=''
       }  
   },
   setCookies(str){
       let prvsearch= Cookies.get('prvsearch')
       if(prvsearch){
        Cookies.set('prvsearch', [...eval(prvsearch),str])
       }else{
          Cookies.set('prvsearch', [str]) 
       }
       this.updatelist()      
   },
   updatelist(){
       let prvsearch= Cookies.get('prvsearch')
        if(prvsearch){
        this.list=eval(prvsearch)
       }else{
         this.list=[]
       }
   },
   remove(){
        Cookies.set('prvsearch', [])
        this.updatelist()  
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
.search
    width: 100%
    margin: 0 auto
    .searchtop
        width: 100%
        height: 90px
        margin: 0 auto
        background-color: #f9f9f9
        display: flex
        align-items: center
        .goback
            width: 108px
            height: 90px
            text-align: center
            line-height: 90px
            font-size: 19px
            color: #6a6a6a
        .gosearch
            width: 100px
            height: 90px
            text-align: center
            line-height: 90px
            font-size: 19px
            color: #ff9900
        .searchwrap
            flex: 1
            height: 60px
            position: relative
            .icon
                position: absolute
                width: 55px
                height: 60px
                font-size:25px
                line-height: 60px
                text-align: center
                left: 0px
                top: 0px
            .search
                width:100%
                height: 60px
                display: block
                border-radius: 10px
                background-color: #e7e7e7
                border:none
                outline:none
                text-indent: 55px 
    .history
        width: 100%
        margin: 0 auto
        .head
            width: 100%
            height: 70px
            margin: 0 auto
            box-sizing: border-box
            padding: 30px
            display: flex
            justify-content:space-between
            .title
                width: 300px
                height: 70px
                text-align: left 
                font-size: 30px
                color: #8e8e8e
                line-height: 70px
            .icon
                width: 100px
                height: 70px
                text-align: right 
                font-size: 30px
                color: #8e8e8e
                line-height: 70px
        .content
            width: 100%
            box-sizing: border-box
            padding: 30px
            .box
                max-width: 100%
                height: 65px
                box-sizing: border-box 
                padding: 0 20px
                line-height: 65px
                background-color: #f4f4f4
                color: #333
                overflow: hidden
                text-overflow: ellipsis
                white-space: nowrap
                margin-right: 30px
                margin-bottom: 20px
                border-radius: 10px
                float: left 

</style>
